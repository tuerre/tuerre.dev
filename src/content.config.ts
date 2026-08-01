import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogs = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./content/blogs" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    publishedAt: z.string(),
    description: z.string(),
    readingTime: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blogs };
