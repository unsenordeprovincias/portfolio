// src/services/ContentService.ts
import { getCollection, getEntry } from 'astro:content';

/**
 * Get all professional writing entries sorted by date (newest first).
 * Serves as the backbone for authority and depth.
 */
export async function getAllWriting() {
  const entries = await getCollection('writing');
  return entries.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}

/**
 * Get all project entries.
 * Focuses on engineering reading, not marketing.
 */
export async function getAllProjects() {
  return await getCollection('projects');
}

/**
 * Get a specific post by its slug.
 */
export async function getPostBySlug(slug: string) {
  return await getEntry('writing', slug);
}