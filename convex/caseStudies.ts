import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("caseStudies")
      .withIndex("by_published", (q) => q.eq("isPublished", true))
      .order("desc")
      .collect();
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("caseStudies")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
  },
});

export const seed = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("caseStudies").first();
    if (existing) return;

    const studies = [
      {
        title: "Industrial Unit Acquisition via SIPP",
        slug: "industrial-unit-sipp-acquisition",
        propertyType: "Industrial",
        loanSize: 450000,
        ltv: 50,
        location: "Birmingham",
        outcome: "Completed in 6 weeks with 50% LTV",
        summary:
          "A business owner used their SIPP to purchase a 5,000 sq ft industrial unit, securing a tenant on a 10-year FRI lease.",
        content:
          "Our client, a manufacturing business owner, identified a prime industrial unit near their existing operations. With a SIPP fund valued at approximately £900,000, they were well-positioned to leverage their pension for commercial property acquisition.",
        isPublished: true,
        createdAt: Date.now(),
      },
      {
        title: "Office Building Purchase for IFA Practice",
        slug: "office-building-ifa-practice",
        propertyType: "Office",
        loanSize: 325000,
        ltv: 48,
        location: "Manchester",
        outcome: "Below-market rate secured at 5.49%",
        summary:
          "An IFA purchased their practice's office building through their SIPP, paying rent from the business back into their pension.",
        content:
          "This case involved a well-established IFA practice seeking to optimise their pension whilst securing long-term premises. The SIPP purchased the office building, with the practice paying a market-rate rent directly into the pension fund.",
        isPublished: true,
        createdAt: Date.now() - 86400000,
      },
      {
        title: "SSAS-Funded Retail Premises Refinance",
        slug: "ssas-retail-premises-refinance",
        propertyType: "Retail",
        loanSize: 280000,
        ltv: 45,
        location: "Leeds",
        outcome: "Refinanced from bridging to term loan",
        summary:
          "A company SSAS refinanced retail premises from a bridging loan to a competitive 15-year term loan at 5.75%.",
        content:
          "The SSAS trustees had originally acquired a high-street retail unit using bridging finance. We arranged a smooth transition to a long-term commercial mortgage at significantly reduced monthly costs.",
        isPublished: true,
        createdAt: Date.now() - 172800000,
      },
    ];

    for (const study of studies) {
      await ctx.db.insert("caseStudies", study);
    }
  },
});
