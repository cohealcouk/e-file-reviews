import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy - E-file Reviews',
  description: 'Privacy policy for E-file Reviews.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Privacy Policy</h1>

        <div className="prose max-w-none text-slate-700 space-y-6">
          <p className="text-sm text-slate-500">Last updated: January 2025</p>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Information We Collect</h2>
            <p>
              E-file Reviews is a static informational website. We do not collect personal data directly.
              Third-party services embedded on this site (such as affiliate links to Amazon and Coheal UK)
              may collect data in accordance with their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Cookies</h2>
            <p>
              This site may use cookies through third-party analytics or affiliate tracking. By using this
              site you consent to the use of such cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Affiliate Links</h2>
            <p>
              This site contains affiliate links to Amazon and Coheal UK. When you click these links and
              make a purchase, we may earn a commission at no extra cost to you. We are not responsible for
              the data practices of these third-party sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Contact</h2>
            <p>
              For privacy-related enquiries, contact us at{' '}
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
