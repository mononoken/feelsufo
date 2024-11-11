import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      website: z.string().nullable().optional(),
      github: z.string().nullable().optional(),
      createdAt: z.date(),
      lastUpdated: z.date(),
      icon: image().nullable().optional(),
      iconAlt: z.string().nullable().optional(),
    }),
});

export const collections = {
  projects: projectsCollection,
};
