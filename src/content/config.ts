import { defineCollection, z } from 'astro:content';

// Colección para el núcleo real: Publicaciones [cite: 34]
const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    description: z.string(), // Resumen corto (lo que iba en las diapos) [cite: 38]
    area: z.enum(['sistemas', 'ia', 'personas']), // Tus 3 bloques [cite: 20]
    tags: z.array(z.string()).optional(),
  }),
});

// Colección para Proyectos [cite: 26]
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    problem: z.string(), // Qué problema real aborda [cite: 29]
    decisions: z.array(z.string()), // Qué decisiones tomé [cite: 30]
    repoUrl: z.string().url(),
  }),
});

export const collections = { writing, projects };