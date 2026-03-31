import { getAllArticles, getTopPickArticles } from '@/lib/mdx';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArticleCard } from '@/components/common/ArticleCard';
import { Sparkles, ShieldCheck, Hand, Wrench, Scissors } from 'lucide-react';
import Link from 'next/link';

const focusAreas = [
  {
    title: 'Beauty Salon Workflow',
    description: 'Pedicure and manicure setups for all-day appointments without hand fatigue.',
    icon: Hand,
  },
  {
    title: 'Podiatry Performance',
    description: 'Torque stability, heat control, and dust management for high-load podiatry use.',
    icon: Scissors,
  },
  {
    title: 'Dental Lab Micromotors',
    description: 'Precision, vibration behavior, and speed consistency for prosthetic work.',
    icon: Wrench,
  },
];

export default function HomePage() {
  const allArticles = getAllArticles();
  const topPicks = getTopPickArticles();
  const latestArticles = allArticles.slice(0, 6);

  return (
    <div className="min-h-screen grid-pattern-bg">
      <Header />

      <main>
        <section className="pt-12 pb-10 md:pt-20 md:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/85 backdrop-blur-sm shadow-clinical-lg px-6 py-10 md:px-12 md:py-14">
              <div className="absolute -top-20 -right-16 h-64 w-64 rounded-full bg-orange-300/30 blur-3xl" />
              <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-teal-300/30 blur-3xl" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
                  <Sparkles className="w-3.5 h-3.5" />
                  Real-World Pro Reviews
                </div>

                <h1 className="mt-5 text-4xl md:text-6xl font-extrabold text-slate-900 max-w-4xl">
                  E-file reviews built for beauty pros, podiatry teams, and dental labs
                </h1>
                <p className="mt-6 text-lg md:text-xl text-slate-700 max-w-3xl leading-relaxed">
                  We test manicure, pedicure, podiatry and prosthetic micromotor equipment for comfort,
                  reliability and long-session performance, then publish clear recommendations you can trust.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="/reviews" className="btn-medical">
                    Browse All Reviews
                  </Link>
                  <Link href="#top-picks" className="btn-secondary">
                    See Editor Top Picks
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {['Manicure', 'Pedicure', 'Podiatry', 'Dental Prosthetic Micromotors', 'Dust Extraction'].map((label) => (
                    <span
                      key={label}
                      className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-sm font-medium text-slate-700"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {focusAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <article key={area.title} className="card p-6">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-teal-700" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-2">{area.title}</h2>
                    <p className="text-slate-600">{area.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {topPicks.length > 0 && (
          <section id="top-picks" className="section-light py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Most Recommended
                </div>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">Editor Top Picks</h2>
                <p className="mt-3 text-lg text-slate-600">
                  Standout machines for salon workstations, podiatry rooms, and precision bench work.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {topPicks.slice(0, 3).map((article) => (
                  <ArticleCard key={article.slug} article={article} featured />
                ))}
              </div>
            </div>
          </section>
        )}

        {latestArticles.length > 0 && (
          <section className="section-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Latest Reviews</h2>
                  <p className="mt-3 text-lg text-slate-600">
                    Fresh hands-on tests and comparisons from the e-file world.
                  </p>
                </div>
                <Link href="/reviews" className="btn-secondary w-full md:w-auto">
                  Open Review Library
                </Link>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestArticles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
