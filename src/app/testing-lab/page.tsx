import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Testing Lab - E-file Reviews',
  description: 'How we test professional beauty, podiatry and dental/prosthetic e-file equipment.',
};

export default function TestingLabPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white/85 p-6 md:p-8 shadow-clinical">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Testing Lab</h1>

          <div className="prose max-w-none text-slate-700 space-y-6">
            <p className="text-sm text-slate-500">Last updated: April 2026</p>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Independent Facility</h2>
              <p>
                We run controlled tests in an independent lab setup designed around real-world salon,
                podiatry, and dental/prosthetic bench workflows.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">What We Measure</h2>
              <p>
                Each unit is assessed for torque consistency, vibration behavior, thermal stability,
                acoustic comfort, dust extraction efficiency and long-session reliability.
              </p>
              <p>
                We compare products within their real category so recommendations stay practical for everyday
                professional work, not just bench specs.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Safety and Ergonomics</h2>
              <p>
                Our scoring includes operator comfort, hand fatigue risk, dust exposure management and
                electrical safety basics relevant to professional service environments.
              </p>
              <p>
                For our full scoring model and thresholds, see our{' '}
                <Link href="/certification" className="text-medical-600 hover:underline">
                  Certification Standards
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
