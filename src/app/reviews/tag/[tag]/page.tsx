import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticlesByTag, getAllTags } from '@/lib/mdx';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArticleCard } from '@/components/common/ArticleCard';
import Link from 'next/link';

interface PageProps {
  params: { tag: string };
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({ tag: encodeURIComponent(tag) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const tag = decodeURIComponent(params.tag);
  return {
    title: `${tag} Reviews - E-file Reviews`,
    description: `Expert reviews tagged with "${tag}" for UK healthcare professionals.`,
  };
}

export default function TagPage({ params }: PageProps) {
  const tag = decodeURIComponent(params.tag);
  const articles = getArticlesByTag(tag);

  if (articles.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="section-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Link href="/reviews" className="text-medical-600 hover:underline text-sm">
                ← All Reviews
              </Link>
            </div>

            <div className="mb-10">
              <h1 className="text-4xl font-bold text-slate-900 mb-3">
                Reviews tagged: <span className="text-medical-600">{tag}</span>
              </h1>
              <p className="text-lg text-slate-600">
                {articles.length} review{articles.length !== 1 ? 's' : ''} found
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
