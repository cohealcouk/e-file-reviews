import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service - E-file Reviews',
  description: 'Terms of service for E-file Reviews.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Terms of Service</h1>

        <div className="prose max-w-none text-slate-700 space-y-6">
          <p className="text-sm text-slate-500">Last updated: January 2025</p>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Acceptance of Terms</h2>
            <p>
              By accessing E-file Reviews, you agree to be bound by these Terms of Service.
              If you do not agree with any part of these terms, please do not use this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Content Disclaimer</h2>
            <p>
              All reviews and technical information are provided for informational purposes only. Ratings and
              recommendations reflect our independent testing and opinion. We make no guarantees regarding
              the accuracy, completeness, or suitability of the information for any particular purpose.
            </p>
            <p>
              Always consult the manufacturer and a qualified professional before purchasing or using clinical equipment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Intellectual Property</h2>
            <p>
              All content on this site, including text, images, and code, is the property of E-file Reviews
              unless otherwise stated. You may not reproduce content without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Limitation of Liability</h2>
            <p>
              E-file Reviews shall not be liable for any direct, indirect, incidental, or consequential
              damages arising from the use of this site or the products reviewed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Contact</h2>
            <p>
              For questions about these terms, contact us at{' '}
              <a href="mailto:contact@efilereviews.co.uk" className="text-medical-600 hover:underline">
                contact@efilereviews.co.uk
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
