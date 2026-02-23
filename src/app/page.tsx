import { getAllArticles, getTopPickArticles } from '@/lib/mdx';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArticleCard } from '@/components/common/ArticleCard';
import { Gauge, Shield, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const allArticles = getAllArticles();
  const topPicks = getTopPickArticles();
  const latestArticles = allArticles.slice(0, 6);

  return (
    <div className="min-h-screen grid-pattern-bg">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Expert Clinical Equipment Reviews
                <span className="block text-medical-500">for UK Healthcare Professionals</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Technical reviews focusing on torque safety, vibration control, and white finger prevention. 
                Helping UK healthcare professionals make informed purchasing decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/reviews"
                  className="btn-medical"
                >
                  Browse All Reviews
                </Link>
                <Link
                  href="#top-picks"
                  className="btn-secondary"
                >
                  View Certified Equipment
                </Link>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-medical-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Gauge className="w-8 h-8 text-medical-500" />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">Technical Testing</h3>
                <p className="text-sm text-slate-600">Precision torque and vibration analysis</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-medical-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="w-8 h-8 text-medical-500" />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">Safety Certified</h3>
                <p className="text-sm text-slate-600">White finger prevention protocols</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-medical-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award className="w-8 h-8 text-medical-500" />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">Expert Reviews</h3>
                <p className="text-sm text-slate-600">NHS clinical standards compliance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-medical-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-medical-500" />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">Market Analysis</h3>
                <p className="text-sm text-slate-600">UK healthcare equipment trends</p>
              </div>
            </div>
          </div>
        </section>

        {/* Top Picks Section */}
        {topPicks.length > 0 && (
          <section id="top-picks" className="section-light py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Certified Equipment</h2>
                <p className="text-lg text-slate-600">Our highest-rated clinical equipment with safety certification</p>
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
          <section className="section-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Latest Technical Reviews</h2>
                <p className="text-lg text-slate-600">Recent clinical equipment analysis and testing</p>
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
                    className="btn-medical"
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
