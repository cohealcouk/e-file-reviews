import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Certification Standards - E-file Reviews',
  description: 'How E-file Reviews evaluates performance and safety for professional beauty, podiatry and dental/prosthetic tools.',
};

export default function CertificationPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white/85 p-6 md:p-8 shadow-clinical">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Certification Standards</h1>

          <div className="prose max-w-none text-slate-700 space-y-6">
            <p className="text-sm text-slate-500">Last updated: April 2026</p>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Evaluation Framework</h2>
              <p>
                Products are graded against repeatable criteria covering torque control, vibration quality,
                thermal behavior, and day-to-day handling comfort.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Primary Benchmarks</h2>
              <p>
                Machines must demonstrate stable torque across usable RPM ranges, predictable heat profile in
                longer sessions, and vibration levels that support precision work.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Review Integrity</h2>
              <p>
                Ratings are determined by measured performance and documented handling experience. Affiliate
                partnerships do not influence certification status or scoring.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
