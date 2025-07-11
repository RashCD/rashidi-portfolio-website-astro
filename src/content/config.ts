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
	type: "content",
	schema: z.object({
		id: z.number(),
		title: z.string(),
		organization: z.string(),
		startDate: z.string(),
		endDate: z.string(),
	}),
});

const project = defineCollection({
	type: "data",
	schema: z.object({
		id: z.number(),
		name: z.string(),
		description: z.string(),
		images: z.array(z.string()),
		visit: z.object({
			ios: z.string().optional(),
			android: z.string().optional(),
			web: z.string().optional(),
			github: z.string().optional(),
		}),
		tags: z.array(z.string()),
	}),
});

const education = defineCollection({
	type: "data",
	schema: z.object({
		degree: z.string(),
		school: z.string(),
		fieldOfStudy: z.string(),
		description: z.string(),
		startDate: z.string(),
		endDate: z.string(),
		graduationYear: z.number(),
	}),
});

export const collections = { blog, work, project, education };
