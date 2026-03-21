import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("articles")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
  },
});

export const listPublished = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("articles")
      .withIndex("by_published", (q) => q.eq("isPublished", true))
      .order("desc")
      .collect();
  },
});

export const listByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("articles")
      .withIndex("by_category", (q) => q.eq("category", args.category))
      .order("desc")
      .collect();
  },
});

export const getAllSlugs = query({
  args: {},
  handler: async (ctx) => {
    const articles = await ctx.db
      .query("articles")
      .withIndex("by_published", (q) => q.eq("isPublished", true))
      .collect();
    return articles.map((a) => ({ slug: a.slug, publishedAt: a.publishedAt }));
  },
});

export const seed = mutation({
  args: {
    title: v.string(),
    slug: v.string(),
    metaTitle: v.string(),
    metaDescription: v.string(),
    excerpt: v.string(),
    content: v.string(),
    category: v.string(),
    tags: v.array(v.string()),
    author: v.string(),
    authorTitle: v.string(),
    heroImage: v.string(),
    heroImageAlt: v.string(),
    publishedAt: v.number(),
    updatedAt: v.number(),
    readingTime: v.number(),
    isPublished: v.boolean(),
    relatedSlugs: v.array(v.string()),
    primaryKeyword: v.string(),
    secondaryKeywords: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("articles")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
    if (existing) {
      await ctx.db.replace(existing._id, args);
      return existing._id;
    }
    return await ctx.db.insert("articles", args);
  },
});
