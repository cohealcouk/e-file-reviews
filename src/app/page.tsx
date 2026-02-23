import { getAllArticles, getTopPickArticles } from '@/lib/mdx';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArticleCard } from '@/components/common/ArticleCard';
import { Star, Award, TrendingUp, Shield } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const allArticles = getAllArticles();
  const topPicks = getTopPickArticles();
  const latestArticles = allArticles.slice(0, 6);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-light py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Expert E-file & Micromotor Reviews
                <span className="block text-teal-600">for UK Professionals</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Unbiased, in-depth reviews of professional nail drills and micromotors. 
                Helping UK nail technicians make informed purchasing decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/reviews"
                  className="btn-primary"
                >
                  Browse All Reviews
                </Link>
                <Link
                  href="#top-picks"
                  className="btn-secondary"
                >
                  View Top Picks
                </Link>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Star className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">Expert Reviews</h3>
                <p className="text-sm text-slate-600">Professional testing by certified technicians</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">UK Focused</h3>
                <p className="text-sm text-slate-600">Products available in UK market</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">Performance Data</h3>
                <p className="text-sm text-slate-600">Real torque and RPM measurements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">Unbiased</h3>
                <p className="text-sm text-slate-600">Independent and honest assessments</p>
              </div>
            </div>
          </div>
        </section>

        {/* Top Picks Section */}
        {topPicks.length > 0 && (
          <section id="top-picks" className="section-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Top Picks</h2>
                <p className="text-lg text-slate-600">Our highest-rated professional e-files and micromotors</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {topPicks.slice(0, 3).map((article) => (
                  <ArticleCard key={article.slug} article={article} featured />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Latest Articles Section */}
        {latestArticles.length > 0 && (
          <section className="section-light py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Latest Reviews</h2>
                <p className="text-lg text-slate-600">Recent professional e-file and micromotor reviews</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestArticles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
              {allArticles.length > 6 && (
                <div className="text-center mt-12">
                  <Link
                    href="/reviews"
                    className="btn-primary"
                  >
                    View All Reviews
                  </Link>
                </div>
              )}
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
