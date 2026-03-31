import type { Metadata } from 'next';
import '@/app/globals.css';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'E-file Reviews',
  url: 'https://efilereviews.co.uk',
  logo: 'https://efilereviews.co.uk/og-image.svg',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@efilereviews.co.uk',
    contactType: 'customer support',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'E-file Reviews',
  url: 'https://efilereviews.co.uk',
  description: 'Independent reviews of professional e-files and micromotors for beauty, podiatry, and dental prosthetic workflows.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://efilereviews.co.uk/reviews/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export const metadata: Metadata = {
  metadataBase: new URL('https://efilereviews.co.uk'),
  title: {
    default: 'E-file Reviews — Beauty, Podiatry and Dental Micromotor Reviews',
    template: '%s | E-file Reviews',
  },
  description: 'Independent technical reviews of professional e-files and micromotors for manicure, pedicure, podiatry, and dental prosthetic work.',
  keywords: ['e-file', 'micromotor', 'manicure e-file', 'pedicure drill', 'podiatry equipment', 'dental prosthetic micromotor', 'nail drill review', 'dust extractor'],
  authors: [{ name: 'E-file Reviews Editorial Team', url: 'https://efilereviews.co.uk' }],
  creator: 'E-file Reviews',
  publisher: 'E-file Reviews',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://efilereviews.co.uk',
  },
  openGraph: {
    title: 'E-file Reviews — Beauty, Podiatry and Dental Micromotor Reviews',
    description: 'Independent technical reviews of professional e-files and micromotors for manicure, pedicure, podiatry, and dental prosthetic work.',
    type: 'website',
    url: 'https://efilereviews.co.uk',
    siteName: 'E-file Reviews',
    locale: 'en_GB',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'E-file Reviews — Professional beauty, podiatry and dental micromotor reviews',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-file Reviews — Beauty, Podiatry and Dental Micromotor Reviews',
    description: 'Independent technical reviews of professional e-files and micromotors for manicure, pedicure, podiatry, and dental prosthetic work.',
    images: ['/og-image.svg'],
  },
  other: {
    'application/ld+json': JSON.stringify([organizationSchema, websiteSchema]),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased">
        <div className="min-h-screen grid-pattern-bg">
          {children}
        </div>
      </body>
    </html>
  );
}
