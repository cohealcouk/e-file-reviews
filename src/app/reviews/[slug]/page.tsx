import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getAllArticles } from '@/lib/mdx';
import { generateProductSchema, generateReviewSchema, generateBreadcrumbSchema } from '@/lib/structured-data';
import { TableOfContents } from '@/components/mdx/TableOfContents';
import { BackToShopButton } from '@/components/common/BackToShopButton';

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  
  if (!article) {
    return {
      title: 'Review Not Found',
      description: 'The requested review could not be found.',
    };
  }

  const { frontmatter } = article;
  
  // Generate structured data
  const productSchema = generateProductSchema(frontmatter);
  const reviewSchema = generateReviewSchema(frontmatter, article.content);
  const breadcrumbSchema = generateBreadcrumbSchema(params.slug, frontmatter.title);

  return {
    title: `${frontmatter.title} - Expert Technical Review`,
    description: frontmatter.description,
    keywords: frontmatter.tags.join(', '),
    authors: [{ name: frontmatter.reviewer || 'Clinical Equipment Expert' }],
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: 'article',
    },
    other: {
      'application/ld+json': JSON.stringify([productSchema, reviewSchema, breadcrumbSchema]),
    },
  };
}

export async function generateStaticParams() {
  try {
    const articles = getAllArticles();
    console.log('Articles found:', articles.length);
    return articles.map((article) => ({
      slug: article.slug,
    }));
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
    return [];
  }
}

export default async function ReviewPage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug);
  
  if (!article) {
    notFound();
  }

  const { frontmatter, content } = article;
  const headings = extractHeadings(content);

  return (
    <div className="grid md:grid-cols-4 gap-8">
      {/* Table of Contents - Desktop */}
      <div className="hidden lg:block">
        <TableOfContents headings={headings} />
      </div>

      {/* Main Content */}
      <div className="md:col-span-3">
        <article className="prose max-w-none">
          {/* Article Header */}
          <header className="mb-8 pb-6 border-b border-slate-200">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">
              {frontmatter.title}
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span>Reviewer:</span>
                <span className="font-semibold text-slate-800">{frontmatter.reviewer}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Published:</span>
                <time>{new Date(frontmatter.date).toLocaleDateString('en-GB', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</time>
              </div>
              {frontmatter.rating && (
                <div className="flex items-center gap-2">
                  <span>Rating:</span>
                  <span className="font-semibold text-slate-800">{frontmatter.rating}/5</span>
                </div>
              )}
            </div>
          </header>

          {/* MDX Content */}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>

        {/* Back to Shop Button - Mobile */}
        <BackToShopButton />
      </div>
    </div>
  );
}

// Extract headings from MDX content
function extractHeadings(content: string) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length === 2 ? 2 : 3;
    const title = match[2].trim();
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    headings.push({
      id,
      title,
      level
    });
  }

  return headings;
}
