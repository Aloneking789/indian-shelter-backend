import { prisma } from "../config/prisma.js";

async function main() {
  const members = await prisma.teamMember.findMany();
  for (const m of members) {
    if (m.photoUrl.includes("unsplash.com") && m.photoUrl.includes("fit=crop")) {
      // Replace fit=crop with fit=max&w=800 for full uncropped photo
      const newUrl = m.photoUrl.replace("fit=crop", "fit=max&w=800");
      await prisma.teamMember.update({
        where: { id: m.id },
        data: { photoUrl: newUrl }
      });
      console.log(`Updated ${m.name}: ${newUrl}`);
    }
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
