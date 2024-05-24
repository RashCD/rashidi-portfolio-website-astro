import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	type: "content",
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const work = defineCollection({
	type: "data",
	schema: z.object({
		id: z.number(),
		title: z.string(),
		organization: z.string(),
		startDate: z.string(),
		endDate: z.string(),
		description: z.string(),
	}),
});

export const collections = { blog, work };
