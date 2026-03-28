import { Metadata } from 'next';
import { getAllArticles, getAllTags } from '@/lib/mdx';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArticleCard } from '@/components/common/ArticleCard';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'All Reviews - E-file Reviews',
  description: 'Browse all expert technical reviews of professional e-files and clinical equipment for UK healthcare professionals.',
  alternates: { canonical: 'https://efilereviews.co.uk/reviews' },
  openGraph: {
    title: 'All Reviews - E-file Reviews',
    description: 'Browse all expert technical reviews of professional e-files and clinical equipment for UK healthcare professionals.',
    url: 'https://efilereviews.co.uk/reviews',
    type: 'website',
  },
};

export default function ReviewsPage() {
  const articles = getAllArticles();
  const tags = getAllTags();

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="section-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h1 className="text-4xl font-bold text-slate-900 mb-3">All Reviews</h1>
              <p className="text-lg text-slate-600">
                {articles.length} expert technical review{articles.length !== 1 ? 's' : ''} of clinical equipment
              </p>
            </div>

            {/* Tag filter bar */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-10">
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/reviews/tag/${encodeURIComponent(tag)}`}
                    className="bg-slate-100 hover:bg-medical-100 hover:text-medical-700 text-slate-700 text-sm px-3 py-1 rounded-full border border-slate-200 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}

            {articles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            ) : (
              <p className="text-slate-500 text-center py-16">No reviews found.</p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
