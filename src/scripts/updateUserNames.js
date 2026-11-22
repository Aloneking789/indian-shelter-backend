import { prisma } from "../config/prisma.js";

async function main() {
  const admin = await prisma.user.updateMany({
    where: { employeeId: "IS-ADM-001" },
    data: { name: "Ayush Vishwakarma (System Admin)" }
  });
  console.log("Updated admin user:", admin);

  const employee = await prisma.user.updateMany({
    where: { employeeId: "IS-EMP-001" },
    data: { name: "Team (Operations Lead)" }
  });
  console.log("Updated employee user:", employee);
}

main()
  .catch((err) => {
    console.error("Error updating user names:", err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
