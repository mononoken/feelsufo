import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
  }),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().nullable().optional(),
    github: z.string().nullable().optional(),
    createdAt: z.date(),
    lastUpdated: z.date(),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};
