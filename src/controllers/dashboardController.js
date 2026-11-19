import { prisma } from "../config/prisma.js";

/**
 * GET /api/dashboard/overview
 * Dynamically calculated statistics from PostgreSQL using Prisma
 */
export async function getDashboardOverview(req, res, next) {
  try {
    const [
      totalTemplates,
      activeTemplates,
      inactiveTemplates,
      adhocTemplates,
      dailyTemplates,
      weeklyTemplates,
      monthlyTemplates,
      quarterlyTemplates,
      templatesWithAttachments,
      templatesWithoutAttachments,
      distinctOwners
    ] = await Promise.all([
      // 1. Total templates
      prisma.template.count(),

      // 2. Active templates
      prisma.template.count({
        where: { isActive: true }
      }),

      // 3. Inactive templates
      prisma.template.count({
        where: { isActive: false }
      }),

      // 4. Adhoc templates
      prisma.template.count({
        where: { dueDate: { contains: "adhoc", mode: "insensitive" } }
      }),

      // 5. Daily templates
      prisma.template.count({
        where: { dueDate: { contains: "daily", mode: "insensitive" } }
      }),

      // 6. Weekly templates
      prisma.template.count({
        where: { dueDate: { contains: "weekly", mode: "insensitive" } }
      }),

      // 7. Monthly templates
      prisma.template.count({
        where: { dueDate: { contains: "monthly", mode: "insensitive" } }
      }),

      // 8. Quarterly templates
      prisma.template.count({
        where: { dueDate: { contains: "quarter", mode: "insensitive" } }
      }),

      // 9. Templates with attachments (either link1 or link2 has a non-empty value)
      prisma.template.count({
        where: {
          OR: [
            { AND: [{ attachmentLink1: { not: null } }, { attachmentLink1: { not: "" } }] },
            { AND: [{ attachmentLink2: { not: null } }, { attachmentLink2: { not: "" } }] }
          ]
        }
      }),

      // 10. Templates without attachments (both link1 and link2 are null or empty)
      prisma.template.count({
        where: {
          AND: [
            { OR: [{ attachmentLink1: null }, { attachmentLink1: "" }] },
            { OR: [{ attachmentLink2: null }, { attachmentLink2: "" }] }
          ]
        }
      }),

      // 11. Total unique owners
      prisma.template.findMany({
        select: { ownerName: true },
        distinct: ["ownerName"]
      })
    ]);

    const totalUniqueOwners = distinctOwners.filter(r => r.ownerName && r.ownerName.trim()).length;

    return res.status(200).json({
      success: true,
      data: {
        totalTemplates,
        activeTemplates,
        inactiveTemplates,
        adhocTemplates,
        dailyTemplates,
        weeklyTemplates,
        monthlyTemplates,
        quarterlyTemplates,
        templatesWithAttachments,
        templatesWithoutAttachments,
        totalUniqueOwners
      }
    });
  } catch (error) {
    next(error);
  }
}
