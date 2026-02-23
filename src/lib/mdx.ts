import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ArticleFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  reviewer: string;
  brand?: string;
  price?: string;
  rating?: number;
  torque?: string;
  rpm?: string;
  vibration?: string;
  safetyFeatures?: string[];
  tags: string[];
  featured?: boolean;
  topPick?: boolean;
}

export interface Article {
  slug: string;
  frontmatter: ArticleFrontmatter;
  content: string;
}

const contentDirectory = path.join(process.cwd(), 'content', 'articles');

export function getAllArticles(): Article[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const allArticlesData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        frontmatter: data as ArticleFrontmatter,
        content,
      };
    });

  return allArticlesData.sort((a, b) => {
    const aDate = new Date(a.frontmatter.date).getTime();
    const bDate = new Date(b.frontmatter.date).getTime();
    return bDate - aDate;
  });
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data as ArticleFrontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error);
    return null;
  }
}

export function getFeaturedArticles(): Article[] {
  const allArticles = getAllArticles();
  return allArticles.filter(article => article.frontmatter.featured);
}

export function getTopPickArticles(): Article[] {
  const allArticles = getAllArticles();
  return allArticles.filter(article => article.frontmatter.topPick);
}

export function getArticlesByTag(tag: string): Article[] {
  const allArticles = getAllArticles();
  return allArticles.filter(article => 
    article.frontmatter.tags.includes(tag)
  );
}

export function getAllTags(): string[] {
  const allArticles = getAllArticles();
  const tags = new Set<string>();
  
  allArticles.forEach(article => {
    article.frontmatter.tags.forEach(tag => tags.add(tag));
  });
  
  return Array.from(tags).sort();
}
