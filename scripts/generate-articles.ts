import { ConvexHttpClient } from "convex/browser";
import { api } from "../convex/_generated/api";
import * as fs from "fs";
import * as path from "path";

// Import all cluster articles
import { cluster1Articles } from "./articles/cluster1-fundamentals";
import { cluster2Articles } from "./articles/cluster2-property-purchase";
import { cluster3Articles } from "./articles/cluster3-borrowing-ltv";
import { cluster4Articles } from "./articles/cluster4-loanback";
import { cluster5Articles } from "./articles/cluster5-tax-hmrc";
import { cluster6Articles } from "./articles/cluster6-property-types";
import { cluster7Articles } from "./articles/cluster7-connected-parties";
import { cluster8Articles } from "./articles/cluster8-finance-rates";
import { cluster9Articles } from "./articles/cluster9-case-studies";
import { cluster10Articles } from "./articles/cluster10-strategy";

export type ArticleDefinition = {
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  authorTitle: string;
  heroImage: string;
  heroImageAlt: string;
  publishedAt: number;
  updatedAt: number;
  readingTime: number;
  isPublished: boolean;
  relatedSlugs: string[];
  primaryKeyword: string;
  secondaryKeywords: string[];
  imagePrompt: string;
};

const ALL_ARTICLES: ArticleDefinition[] = [
  ...cluster1Articles,
  ...cluster2Articles,
  ...cluster3Articles,
  ...cluster4Articles,
  ...cluster5Articles,
  ...cluster6Articles,
  ...cluster7Articles,
  ...cluster8Articles,
  ...cluster9Articles,
  ...cluster10Articles,
];

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL;
const IMAGES_DIR = path.resolve(__dirname, "../public/images/guides");

async function generateImage(
  slug: string,
  prompt: string
): Promise<boolean> {
  const filePath = path.join(IMAGES_DIR, `${slug}.jpg`);
  if (fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
    console.log(`  Image already exists: ${slug}.png`);
    return true;
  }

  if (!GEMINI_API_KEY) {
    console.log(`  Skipping image generation (no GEMINI_API_KEY): ${slug}`);
    return false;
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent`,
      {
        method: "POST",
        headers: {
          "x-goog-api-key": GEMINI_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            responseModalities: ["TEXT", "IMAGE"],
            imageConfig: {
              aspectRatio: "16:9",
              imageSize: "1K",
            },
          },
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error(`  Gemini API error for ${slug}: ${response.status} ${errText.slice(0, 200)}`);
      return false;
    }

    const data = await response.json();
    const parts = data.candidates?.[0]?.content?.parts ?? [];

    for (const part of parts) {
      if (part.inlineData?.data) {
        const buffer = Buffer.from(part.inlineData.data, "base64");
        fs.writeFileSync(filePath, buffer);
        console.log(`  Generated image: ${slug}.png`);
        return true;
      }
    }

    console.error(`  No image data in response for ${slug}`);
    return false;
  } catch (err) {
    console.error(`  Image generation failed for ${slug}:`, err);
    return false;
  }
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log(`\nSSAS Property Finance Article Generator`);
  console.log(`=======================================`);
  console.log(`Total articles: ${ALL_ARTICLES.length}\n`);

  // Ensure images directory exists
  if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
  }

  // Generate images in batches of 10
  console.log("Phase 1: Generating hero images...\n");
  const BATCH_SIZE = 10;
  for (let i = 0; i < ALL_ARTICLES.length; i += BATCH_SIZE) {
    const batch = ALL_ARTICLES.slice(i, i + BATCH_SIZE);
    console.log(
      `Batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(ALL_ARTICLES.length / BATCH_SIZE)}`
    );

    for (const article of batch) {
      await generateImage(article.slug, article.imagePrompt);
      await sleep(2000); // Rate limiting
    }
  }

  // Seed to Convex
  console.log("\nPhase 2: Seeding articles to Convex...\n");

  if (!CONVEX_URL) {
    console.error("NEXT_PUBLIC_CONVEX_URL is not set. Skipping Convex seeding.");
    console.log("Articles defined:", ALL_ARTICLES.length);
    return;
  }

  const client = new ConvexHttpClient(CONVEX_URL);

  for (let i = 0; i < ALL_ARTICLES.length; i++) {
    const article = ALL_ARTICLES[i];
    const { imagePrompt, ...articleData } = article;

    try {
      await client.mutation(api.articles.seed, articleData);
      console.log(`  [${i + 1}/${ALL_ARTICLES.length}] Seeded: ${article.slug}`);
    } catch (err) {
      console.error(`  Failed to seed ${article.slug}:`, err);
    }
  }

  console.log(`\nDone! ${ALL_ARTICLES.length} articles processed.`);
}

main().catch(console.error);
