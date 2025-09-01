import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const team = defineCollection({
	loader: glob({ base: './src/content/team', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			numerical_position: z.number().optional(), // for ordering team members
			name: z.string(),
			academic_title: z
				.object({
					prefix: z.string().optional(),
					suffix: z.string().optional(),
				})
				.optional(),
			description: z.string(),
			position: z.string().optional(),
			group: z.string(),
			publications: z.array(z.string()).optional(),
			image: image(),
		}),
});

const blog = defineCollection({
	// Load Markdown files in the src/content/blog directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			image: z.object({
				src: image(),
				alt: z.string(),
			}),
			// Transform string to Date object
			date: z.date({ coerce: true }),
		}),
});

const publications = defineCollection({
	loader: glob({ base: './src/content/publications', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// commonly useful fields for publications
			authors: z.array(z.string()).optional(),
			venue: z.string().optional(), // journal / conference
			doi: z.string().optional(),
			url: z.string().url().optional(),
			pdf: z.string().optional(),
			image: z
				.object({
					src: image(),
					alt: z.string(),
				})
				.optional(),
			date: z.date({ coerce: true }), // publication date
		}),
});

const events = defineCollection({
	loader: glob({ base: './src/content/events', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// core event fields
			start: z.date({ coerce: true }),
			end: z.date({ coerce: true }).optional(),
			location: z.string().optional(),
			url: z.string().url().optional(), // event website/registration
			image: z
				.object({
					src: image(),
					alt: z.string(),
				})
				.optional(),
		}),
});

export const collections = { blog, publications, events, team };
