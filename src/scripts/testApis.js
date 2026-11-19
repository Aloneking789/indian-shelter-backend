import * as XLSX from "xlsx";
import app from "../app.js";
import { prisma } from "../config/prisma.js";

let server;
let baseUrl;

async function request(endpoint, options = {}) {
  const url = `${baseUrl}${endpoint}`;
  const headers = options.headers || {};
  let body = options.body;

  if (body && typeof body === "object" && !(body instanceof FormData) && !headers["Content-Type"]) {
    headers["Content-Type"] = "application/json";
    body = JSON.stringify(body);
  }

  const response = await fetch(url, {
    method: options.method || "GET",
    headers,
    body
  });

  const contentType = response.headers.get("content-type") || "";
  let data;
  if (contentType.includes("application/json")) {
    data = await response.json();
  } else {
    data = await response.text();
  }

  return { status: response.status, data };
}

async function runTests() {
  console.log("🧪 Starting Automated Backend API Test Suite...\n");
  
  // Start ephemeral server
  await new Promise((resolve) => {
    server = app.listen(0, () => {
      const port = server.address().port;
      baseUrl = `http://localhost:${port}`;
      console.log(`📡 In-process test server started at ${baseUrl}`);
      resolve();
    });
  });

  let testsPassed = 0;
  let testsFailed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✅ PASS: ${message}`);
      testsPassed++;
    } else {
      console.error(`  ❌ FAIL: ${message}`);
      testsFailed++;
      throw new Error(`Assertion failed: ${message}`);
    }
  }

  try {
    // ----------------------------------------------------
    // TEST 1: Health Check
    // ----------------------------------------------------
    console.log("\n--- TEST GROUP 1: Health Check ---");
    const health = await request("/api/health");
    assert(health.status === 200 && health.data.status === "ok", "GET /api/health returns 200 OK");

    // ----------------------------------------------------
    // TEST GROUP 2: Authentication & Authorization (Phase 3)
    // ----------------------------------------------------
    console.log("\n--- TEST GROUP 2: Authentication & Authorization ---");
    
    // 2.1 Inactive employee login rejection
    const inactiveLogin = await request("/api/auth/login", {
      method: "POST",
      body: { employeeId: "IS-EMP-002", password: "Inactive@123" }
    });
    assert(inactiveLogin.status === 403, "Login with deactivated employee returns 403 Forbidden");

    // 2.2 Wrong password login rejection
    const wrongPass = await request("/api/auth/login", {
      method: "POST",
      body: { employeeId: "IS-EMP-001", password: "WrongPassword999" }
    });
    assert(wrongPass.status === 401, "Login with invalid password returns 401 Unauthorized");

    // 2.3 Successful Employee Login
    const empLogin = await request("/api/auth/login", {
      method: "POST",
      body: { employeeId: "IS-EMP-001", password: "Employee@123" }
    });
    assert(empLogin.status === 200 && empLogin.data.success && empLogin.data.token, "Employee login returns 200 with JWT");
    assert(!empLogin.data.user.passwordHash, "Employee login never exposes passwordHash");
    const employeeToken = empLogin.data.token;

    // 2.4 Successful Admin Login
    const admLogin = await request("/api/auth/login", {
      method: "POST",
      body: { employeeId: "IS-ADM-001", password: "Admin@123" }
    });
    assert(admLogin.status === 200 && admLogin.data.user.role === "ADMIN", "Admin login returns 200 with ADMIN role");
    const adminToken = admLogin.data.token;

    // 2.5 GET /api/auth/me without token
    const meNoToken = await request("/api/auth/me");
    assert(meNoToken.status === 401, "GET /api/auth/me without token returns 401 Unauthorized");

    // 2.6 GET /api/auth/me with employee token
    const meWithToken = await request("/api/auth/me", {
      headers: { Authorization: `Bearer ${employeeToken}` }
    });
    assert(meWithToken.status === 200 && meWithToken.data.user.employeeId === "IS-EMP-001", "GET /api/auth/me returns current user info");

    // 2.7 Change Password flow
    const changePassFail = await request("/api/auth/change-password", {
      method: "POST",
      headers: { Authorization: `Bearer ${employeeToken}` },
      body: { currentPassword: "IncorrectCurrentPassword", newPassword: "NewEmployeePass@123" }
    });
    assert(changePassFail.status === 400, "Change password with wrong current password returns 400");

    const changePassSuccess = await request("/api/auth/change-password", {
      method: "POST",
      headers: { Authorization: `Bearer ${employeeToken}` },
      body: { currentPassword: "Employee@123", newPassword: "NewEmployeePass@123" }
    });
    assert(changePassSuccess.status === 200 && changePassSuccess.data.success, "Change password succeeds with correct current password");

    // Reset password back to standard for repeatable tests
    await request("/api/auth/change-password", {
      method: "POST",
      headers: { Authorization: `Bearer ${employeeToken}` },
      body: { currentPassword: "NewEmployeePass@123", newPassword: "Employee@123" }
    });

    // ----------------------------------------------------
    // TEST GROUP 3: Template CRUD (Phase 4)
    // ----------------------------------------------------
    console.log("\n--- TEST GROUP 3: Template CRUD APIs ---");

    const testDltId = `TEST_${Date.now()}`;
    
    // 3.1 Missing required fields
    const createMissing = await request("/api/templates", {
      method: "POST",
      headers: { Authorization: `Bearer ${employeeToken}` },
      body: { name: "Incomplete Template" }
    });
    assert(createMissing.status === 400, "POST /api/templates with missing fields returns 400 Bad Request");

    // 3.2 Create valid template
    const createSuccess = await request("/api/templates", {
      method: "POST",
      headers: { Authorization: `Bearer ${employeeToken}` },
      body: {
        dltTemplateId: testDltId,
        name: "Test Welcome Notification",
        dueDate: "Adhoc",
        content: "Dear {#var#}, welcome to India Shelter Home Loans family. Reference ID: {#var#}.",
        ownerName: "Customer Relations",
        remarks: "Automated test template",
        attachmentLink1: "https://indiashelter.in/welcome.pdf",
        isActive: true
      }
    });
    assert(createSuccess.status === 201 && createSuccess.data.success, "POST /api/templates creates new template");
    const createdTemplateId = createSuccess.data.data.id;
    assert(createSuccess.data.data.createdById, "Template records createdById");

    // 3.3 Duplicate DLT Template ID rejection
    const createDuplicate = await request("/api/templates", {
      method: "POST",
      headers: { Authorization: `Bearer ${employeeToken}` },
      body: {
        dltTemplateId: testDltId,
        name: "Duplicate Template",
        dueDate: "Monthly",
        content: "Duplicate content",
        ownerName: "Audit Desk"
      }
    });
    assert(createDuplicate.status === 409, "POST /api/templates rejects duplicate DLT Template ID with 409 Conflict");

    // 3.4 GET /api/templates/:id
    const getById = await request(`/api/templates/${createdTemplateId}`, {
      headers: { Authorization: `Bearer ${employeeToken}` }
    });
    assert(getById.status === 200 && getById.data.data.dltTemplateId === testDltId, "GET /api/templates/:id returns template details");

    // 3.5 PATCH /api/templates/:id
    const patchTemplate = await request(`/api/templates/${createdTemplateId}`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${employeeToken}` },
      body: {
        name: "Updated Test Notification Name",
        remarks: "Updated remark notes"
      }
    });
    assert(patchTemplate.status === 200 && patchTemplate.data.data.name === "Updated Test Notification Name", "PATCH /api/templates/:id updates template");

    // 3.6 DELETE /api/templates/:id by EMPLOYEE (Forbidden)
    const deleteByEmp = await request(`/api/templates/${createdTemplateId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${employeeToken}` }
    });
    assert(deleteByEmp.status === 403, "DELETE /api/templates/:id by EMPLOYEE returns 403 Forbidden");

    // 3.7 DELETE /api/templates/:id by ADMIN (Soft Delete)
    const deleteByAdmin = await request(`/api/templates/${createdTemplateId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${adminToken}` }
    });
    assert(deleteByAdmin.status === 200 && deleteByAdmin.data.data.isActive === false, "DELETE /api/templates/:id by ADMIN soft-deletes (isActive: false)");

    // ----------------------------------------------------
    // TEST GROUP 4: Advanced Search, Filter & Pagination (Phase 5)
    // ----------------------------------------------------
    console.log("\n--- TEST GROUP 4: Search, Filtering, Sorting & Pagination ---");

    // 4.1 Global search across content/name/dlt
    const searchRes = await request("/api/templates?search=Shelter", {
      headers: { Authorization: `Bearer ${employeeToken}` }
    });
    assert(searchRes.status === 200 && searchRes.data.data.length > 0, "Global search returns matching templates");

    // 4.2 Frequency (dueDate) filter
    const freqRes = await request("/api/templates?dueDate=Monthly", {
      headers: { Authorization: `Bearer ${employeeToken}` }
    });
    assert(freqRes.status === 200 && freqRes.data.data.every(t => t.dueDate.toLowerCase().includes("monthly")), "Filtering by dueDate (frequency) works correctly");

    // 4.3 hasAttachment filter
    const attachTrueRes = await request("/api/templates?hasAttachment=true", {
      headers: { Authorization: `Bearer ${employeeToken}` }
    });
    assert(attachTrueRes.status === 200 && attachTrueRes.data.data.every(t => t.attachmentLink1 || t.attachmentLink2), "Filtering by hasAttachment=true returns templates with attachment");

    const attachFalseRes = await request("/api/templates?hasAttachment=false", {
      headers: { Authorization: `Bearer ${employeeToken}` }
    });
    assert(attachFalseRes.status === 200 && attachFalseRes.data.data.every(t => !t.attachmentLink1 && !t.attachmentLink2), "Filtering by hasAttachment=false returns templates without attachment");

    // 4.4 Pagination
    const pageRes = await request("/api/templates?page=1&limit=2", {
      headers: { Authorization: `Bearer ${employeeToken}` }
    });
    assert(pageRes.status === 200 && pageRes.data.pagination.limit === 2 && pageRes.data.pagination.totalPages >= 1, "Pagination returns totalRecords, totalPages, limit");

    // 4.5 Distinct owners endpoint
    const ownersRes = await request("/api/templates/owners", {
      headers: { Authorization: `Bearer ${employeeToken}` }
    });
    assert(ownersRes.status === 200 && Array.isArray(ownersRes.data.data) && ownersRes.data.data.length > 0, "GET /api/templates/owners returns distinct owner array");

    // 4.6 Distinct frequencies endpoint
    const freqsRes = await request("/api/templates/frequencies", {
      headers: { Authorization: `Bearer ${employeeToken}` }
    });
    assert(freqsRes.status === 200 && Array.isArray(freqsRes.data.data) && freqsRes.data.data.length > 0, "GET /api/templates/frequencies returns distinct frequency array");

    // ----------------------------------------------------
    // TEST GROUP 5: Bulk Excel/CSV Import (Phase 6)
    // ----------------------------------------------------
    console.log("\n--- TEST GROUP 5: Bulk Import Preview & Confirm ---");

    // Generate in-memory Excel workbook buffer
    const uniqueBatchDlt1 = `IMP_${Date.now()}_1`;
    const uniqueBatchDlt2 = `IMP_${Date.now()}_2`;

    const excelData = [
      {
        "DLT Template ID": uniqueBatchDlt1,
        "Name": "Imported Bulk Notice 1",
        "Due Date": "Weekly",
        "Content": "प्रिय ग्राहक {#var#}, आपकी किस्त प्राप्त हो गई है। धन्यवाद - इंडिया शेल्टर",
        "Owner Name": "Operations Team",
        "Remarks": "Bulk import test valid row",
        "Attachment Link 1": "https://indiashelter.in/doc1.pdf"
      },
      {
        "DLT Template ID": "1107161582910245101", // Already exists in seeded templates!
        "Name": "Duplicate Seeded Template",
        "Due Date": "Adhoc",
        "Content": "Duplicate template content",
        "Owner Name": "Operations Team",
        "Remarks": "Should be detected as duplicate and skipped"
      },
      {
        "DLT Template ID": "", // Invalid missing required field
        "Name": "Invalid Missing DLT Row",
        "Due Date": "Daily",
        "Content": "Invalid content",
        "Owner Name": "Test Team"
      }
    ];

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(excelData);
    XLSX.utils.book_append_sheet(wb, ws, "Templates");
    const excelBuffer = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });

    // 5.1 Test POST /api/import/preview using FormData
    const formData = new FormData();
    const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    formData.append("file", blob, "sms_templates_test.xlsx");

    const previewRes = await fetch(`${baseUrl}/api/import/preview`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${employeeToken}`
      },
      body: formData
    });

    const previewJson = await previewRes.json();
    assert(previewRes.status === 200 && previewJson.success, "POST /api/import/preview returns 200 OK");
    assert(previewJson.data.totalRows === 3, "Preview accurately parsed 3 rows");
    assert(previewJson.data.duplicateCount >= 1, "Preview detected duplicate DLT Template ID");
    assert(previewJson.data.invalidCount >= 1, "Preview detected invalid row");

    // 5.2 Test POST /api/import/confirm with file upload
    const confirmForm = new FormData();
    const confirmBlob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    confirmForm.append("file", confirmBlob, "sms_templates_test.xlsx");

    const confirmRes = await fetch(`${baseUrl}/api/import/confirm`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${employeeToken}`
      },
      body: confirmForm
    });

    const confirmJson = await confirmRes.json();
    assert(confirmRes.status === 200 && confirmJson.success, "POST /api/import/confirm imports valid rows and skips duplicates");
    assert(confirmJson.data.successfulCount === 1, "Exactly 1 valid template imported");
    assert(confirmJson.data.skippedCount === 1, "Exactly 1 duplicate template skipped");
    assert(confirmJson.data.failedCount === 1, "Exactly 1 invalid template marked failed");
    const batchId = confirmJson.data.id;

    // 5.3 Test GET /api/import/history
    const historyRes = await request("/api/import/history", {
      headers: { Authorization: `Bearer ${employeeToken}` }
    });
    assert(historyRes.status === 200 && historyRes.data.data.length > 0, "GET /api/import/history returns paginated batches");

    // 5.4 Test GET /api/import/:id
    const batchDetailRes = await request(`/api/import/${batchId}`, {
      headers: { Authorization: `Bearer ${employeeToken}` }
    });
    assert(batchDetailRes.status === 200 && batchDetailRes.data.data.id === batchId, "GET /api/import/:id returns batch details with errorReport");

    // ----------------------------------------------------
    // TEST GROUP 6: Dashboard Statistics (Phase 7)
    // ----------------------------------------------------
    console.log("\n--- TEST GROUP 6: Dashboard Statistics ---");

    const dashRes = await request("/api/dashboard/overview", {
      headers: { Authorization: `Bearer ${employeeToken}` }
    });
    assert(dashRes.status === 200 && dashRes.data.success, "GET /api/dashboard/overview returns 200 OK");
    
    const stats = dashRes.data.data;
    assert(typeof stats.totalTemplates === "number" && stats.totalTemplates > 0, "totalTemplates is a positive number");
    assert(stats.activeTemplates + stats.inactiveTemplates === stats.totalTemplates, "active + inactive === totalTemplates");
    assert(typeof stats.adhocTemplates === "number", "adhocTemplates is calculated");
    assert(typeof stats.dailyTemplates === "number", "dailyTemplates is calculated");
    assert(typeof stats.weeklyTemplates === "number", "weeklyTemplates is calculated");
    assert(typeof stats.monthlyTemplates === "number", "monthlyTemplates is calculated");
    assert(typeof stats.quarterlyTemplates === "number", "quarterlyTemplates is calculated");
    assert(stats.templatesWithAttachments + stats.templatesWithoutAttachments === stats.totalTemplates, "withAttachments + withoutAttachments === totalTemplates");
    assert(typeof stats.totalUniqueOwners === "number" && stats.totalUniqueOwners > 0, "totalUniqueOwners is calculated");

    console.log("\n📊 Live Dashboard Statistics Output:");
    console.log(JSON.stringify(stats, null, 2));

    console.log(`\n========================================`);
    console.log(`🏆 TEST SUITE RESULT: ALL ${testsPassed} TESTS PASSED! (0 failures)`);
    console.log(`========================================\n`);
  } catch (error) {
    console.error("Test Suite execution error:", error);
    process.exit(1);
  } finally {
    if (server) {
      server.close();
    }
    await prisma.$disconnect();
  }
}

runTests();
