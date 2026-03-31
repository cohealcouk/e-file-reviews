import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Certification Standards - E-file Reviews',
  description: 'How E-file Reviews evaluates and certifies clinical equipment performance and safety.',
};

export default function CertificationPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Certification Standards</h1>

        <div className="prose max-w-none text-slate-700 space-y-6">
          <p className="text-sm text-slate-500">Last updated: April 2026</p>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Evaluation Framework</h2>
            <p>
              Products are graded against repeatable test criteria covering torque accuracy, vibration
              stability, reliability under load, and operator safety.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Primary Benchmarks</h2>
            <p>
              Devices must demonstrate stable torque output across expected RPM ranges, safe thermal behavior
              during extended operation, and acceptable vibration characteristics for prolonged use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Review Integrity</h2>
            <p>
              Ratings are determined by test outcomes and documented handling experience. Affiliate
              relationships do not affect certification status or scoring.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
