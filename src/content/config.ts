import { defineCollection, z } from "astro:content";


export const postSchema = z
    .object({
        id: z.number(),
        title: z.string(),
        author: z.string(),
        date: z.date(),
        tags: z.array(z.string()).default(["others"]),
        draft: z.boolean().default(false),
    })
    .strict();

const posts = defineCollection({
    schema: postSchema,
});

export const collections = { posts };