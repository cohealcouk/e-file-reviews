import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Testing Lab - E-file Reviews',
  description: 'Independent testing methodology for clinical e-files and equipment.',
};

export default function TestingLabPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Testing Lab</h1>

        <div className="prose max-w-none text-slate-700 space-y-6">
          <p className="text-sm text-slate-500">Last updated: April 2026</p>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Independent Facility</h2>
            <p>
              Our reviews are based on controlled testing in an independent lab environment focused on
              real-world use by UK healthcare professionals and high-volume clinical teams.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">What We Measure</h2>
            <p>
              We assess torque consistency, thermal stability, vibration profile, acoustic output, and
              electrical safety indicators over repeated operating cycles. Findings are compared across
              product classes to keep recommendations practical and transparent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Safety First</h2>
            <p>
              We prioritize operator safety and patient-facing reliability, including white-finger risk
              factors linked to prolonged vibration exposure.
            </p>
            <p>
              For full criteria and review thresholds, see our{' '}
              <Link href="/certification" className="text-medical-600 hover:underline">
                Certification Standards
              </Link>
              .
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
