// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string(),
        }),
        tags: z.array(z.string()),
    }),
});

const projectsCollection = defineCollection({
    type: "data",
    schema: z.object({
        name: z.string(),
        repo: z.object({
            url: z.string(),
            platform: z.string(),
        }),
        description: z.string(),
        url: z.string().nullable(),
        languages: z.array(z.string()),
        contributors: z.array(z.string()),
        otherTechUsed: z.array(z.string()).nullable(),
        image: z.object({
            url: z.string(),
            alt: z.string(),
        }),
    }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
    posts: postsCollection,
    projects: projectsCollection,
};
