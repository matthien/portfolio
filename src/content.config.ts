import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tag: z.string(),
      /** Optional path to an image in src/assets, relative to the markdown file. */
      cover: image().optional(),
      /** Alt text for the hero image on the case study page. */
      coverAlt: z.string().optional(),
      /** Sort order in the grid, lowest first. */
      order: z.number().int(),
      role: z.string(),
      timeline: z.string(),
      team: z.string(),
    }),
});

export const collections = { work };
