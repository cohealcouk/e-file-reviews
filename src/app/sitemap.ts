import { MetadataRoute } from 'next';
import { getAllArticles, getAllTags } from '@/lib/mdx';

const BASE_URL = 'https://efilereviews.co.uk';

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();
  const tags = getAllTags();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/reviews`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE_URL}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE_URL}/disclosure`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/reviews/${article.slug}`,
    lastModified: new Date(article.frontmatter.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const tagRoutes: MetadataRoute.Sitemap = tags.map((tag) => ({
    url: `${BASE_URL}/reviews/tag/${encodeURIComponent(tag)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...articleRoutes, ...tagRoutes];
}
