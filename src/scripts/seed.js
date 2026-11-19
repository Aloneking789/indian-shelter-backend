import { prisma } from "../config/prisma.js";
import { hashPassword } from "../utils/password.js";

async function main() {
  console.log("🌱 Starting India Shelter Database Seed...");

  // 1. Seed Users
  const adminPassword = await hashPassword("Admin@123");
  const employeePassword = await hashPassword("Employee@123");
  const inactivePassword = await hashPassword("Inactive@123");

  const admin = await prisma.user.upsert({
    where: { employeeId: "IS-ADM-001" },
    update: {},
    create: {
      employeeId: "IS-ADM-001",
      name: "Abhay Sharma (System Admin)",
      email: "admin@indiashelter.in",
      passwordHash: adminPassword,
      role: "ADMIN",
      isActive: true
    }
  });
  console.log("✅ Admin User seeded:", admin.employeeId, admin.email);

  const employee = await prisma.user.upsert({
    where: { employeeId: "IS-EMP-001" },
    update: {},
    create: {
      employeeId: "IS-EMP-001",
      name: "Pooja Verma (Operations Lead)",
      email: "employee@indiashelter.in",
      passwordHash: employeePassword,
      role: "EMPLOYEE",
      isActive: true
    }
  });
  console.log("✅ Employee User seeded:", employee.employeeId, employee.email);

  const inactiveEmployee = await prisma.user.upsert({
    where: { employeeId: "IS-EMP-002" },
    update: {},
    create: {
      employeeId: "IS-EMP-002",
      name: "Rohan Patel (Former Staff)",
      email: "inactive@indiashelter.in",
      passwordHash: inactivePassword,
      role: "EMPLOYEE",
      isActive: false
    }
  });
  console.log("✅ Inactive Employee seeded:", inactiveEmployee.employeeId, "(isActive: false)");

  // 2. Seed Sample SMS Templates if table is empty
  const templateCount = await prisma.template.count();
  if (templateCount === 0) {
    console.log("Seeding initial authentic SMS templates...");

    const sampleTemplates = [
      {
        dltTemplateId: "1107161582910245101",
        name: "Home Loan In-Principle Sanction",
        dueDate: "Adhoc",
        content: "Dear {#var#}, Congratulations! Your India Shelter Home Loan application ref {#var#} of Rs. {#var#} is in-principle approved. Our relationship officer will visit for final documentation. Call 18005728888 for help - ISFC",
        ownerName: "Credit Underwriting Desk",
        remarks: "Sent automatically upon credit sanction committee signoff",
        attachmentLink1: "https://indiashelter.in/docs/sanction-checklist.pdf",
        isActive: true,
        createdById: admin.id,
        updatedById: admin.id
      },
      {
        dltTemplateId: "1107161582910245102",
        name: "Monthly EMI Due Alert",
        dueDate: "Monthly",
        content: "Dear Customer, your India Shelter Loan EMI of Rs. {#var#} for loan account {#var#} is due on {#var#}. Ensure sufficient balance to avoid bounce charges. Pay online at https://indiashelter.in/pay - ISFC",
        ownerName: "Collections & Recovery Team",
        remarks: "Triggered 3 days prior to NACH presentation date",
        attachmentLink1: "https://indiashelter.in/pay-portal",
        isActive: true,
        createdById: employee.id,
        updatedById: employee.id
      },
      {
        dltTemplateId: "1107161582910245103",
        name: "Weekly Field Verification Schedule",
        dueDate: "Weekly",
        content: "Dear {#var#}, our India Shelter field officer {#var#} has scheduled your property valuation visit on {#var#}. Please keep your electricity bill and property documents handy. - ISFC",
        ownerName: "Operations & Legal Desk",
        remarks: "Weekly dispatch for pending site inspections",
        isActive: true,
        createdById: employee.id,
        updatedById: employee.id
      },
      {
        dltTemplateId: "1107161582910245104",
        name: "Daily Disbursal Notification",
        dueDate: "Daily",
        content: "Dear {#var#}, loan amount of Rs. {#var#} for account {#var#} has been credited to your bank account / builder {#var#} on {#var#}. Thank you for choosing India Shelter. - ISFC",
        ownerName: "Disbursement Cell",
        remarks: "Real-time NEFT/RTGS notification",
        attachmentLink1: "https://indiashelter.in/disbursement-receipt",
        attachmentLink2: "https://indiashelter.in/welcome-letter.pdf",
        isActive: true,
        createdById: admin.id,
        updatedById: admin.id
      },
      {
        dltTemplateId: "1107161582910245105",
        name: "Quarterly Interest Certificate Statement",
        dueDate: "Once a quarter",
        content: "Dear Customer, your India Shelter provisional IT certificate for FY {#var#} is ready for download. Claim tax rebate under Sec 24 & 80C. Visit customer portal: {#var#} - ISFC",
        ownerName: "Customer Service & Accounts",
        remarks: "Quarterly IT tax statement notification",
        attachmentLink1: "https://indiashelter.in/tax-certificate",
        isActive: true,
        createdById: employee.id,
        updatedById: employee.id
      },
      {
        dltTemplateId: "1107161582910245106",
        name: "PMAY Subsidy Credit Confirmation (Hindi)",
        dueDate: "Adhoc",
        content: "प्रिय ग्राहक, आपके इंडिया शेल्टर होम लोन खाता {#var#} में PMAY 2.0 ब्याज सब्सिडी राशि रु. {#var#} जमा कर दी गई है। नई ईएमआई राशि रु. {#var#} होगी। धन्यवाद - इंडिया शेल्टर",
        ownerName: "Affordable Housing Mission Desk",
        remarks: "Hindi localized SMS for PMAY subsidy credit",
        isActive: true,
        createdById: employee.id,
        updatedById: employee.id
      }
    ];

    for (const t of sampleTemplates) {
      await prisma.template.create({ data: t });
    }
    console.log(`✅ Seeded ${sampleTemplates.length} sample templates.`);
  } else {
    console.log(`ℹ️ Database already contains ${templateCount} templates.`);
  }

  console.log("🎉 Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
