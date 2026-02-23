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
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-slate-50 py-20">
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
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200"
                >
                  Browse All Reviews
                </Link>
                <Link
                  href="#top-picks"
                  className="bg-white hover:bg-slate-50 text-teal-700 font-bold py-4 px-8 rounded-lg border-2 border-teal-600 transition-colors duration-200"
                >
                  View Top Picks
                </Link>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-slate-900">Expert Reviews</h3>
                <p className="text-sm text-slate-600 mt-1">Professional testing by certified technicians</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-slate-900">UK Focused</h3>
                <p className="text-sm text-slate-600 mt-1">Products available in UK market</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-slate-900">Performance Data</h3>
                <p className="text-sm text-slate-600 mt-1">Real torque and RPM measurements</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-slate-900">Unbiased</h3>
                <p className="text-sm text-slate-600 mt-1">Independent and honest assessments</p>
              </div>
            </div>
          </div>
        </section>

        {/* Top Picks Section */}
        {topPicks.length > 0 && (
          <section id="top-picks" className="py-16 bg-slate-50">
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
          <section className="py-16">
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
                    className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
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
