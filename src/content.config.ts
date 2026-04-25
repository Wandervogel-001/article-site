import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/articles',
  }),

  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    type: z.string().optional(),
    date: z.coerce.date(),
    index: z.number().optional(),
  }),
});

export const collections = {
  articles,
};
