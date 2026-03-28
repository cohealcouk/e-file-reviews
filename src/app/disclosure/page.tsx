import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure - E-file Reviews',
  description: 'Affiliate disclosure for E-file Reviews.',
};

export default function DisclosurePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Affiliate Disclosure</h1>

        <div className="prose max-w-none text-slate-700 space-y-6">
          <p className="text-sm text-slate-500">Last updated: January 2025</p>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Our Affiliate Relationships</h2>
            <p>
              E-file Reviews participates in the Amazon Associates Programme, an affiliate advertising
              programme designed to provide a means for sites to earn advertising fees by advertising and
              linking to Amazon.co.uk, as well as the Coheal UK affiliate programme.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">How It Works</h2>
            <p>
              When you click an affiliate link on this site and make a qualifying purchase, we may receive
              a small commission at no additional cost to you. These commissions help us maintain the site
              and continue producing independent technical reviews.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Editorial Independence</h2>
            <p>
              Our affiliate relationships do not influence our ratings or recommendations. All reviews
              are conducted independently based on technical testing, and no compensation is received
              in exchange for positive reviews.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Contact</h2>
            <p>
              For questions about our affiliate relationships, contact us at{' '}
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
