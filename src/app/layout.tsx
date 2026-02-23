import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-file Reviews - Clinical Equipment Reviews',
  description: 'Expert technical reviews of professional e-files and clinical equipment for UK healthcare professionals. Focus on torque safety, vibration control, and white finger prevention.',
  keywords: ['e-file', 'clinical equipment', 'torque safety', 'vibration control', 'white finger prevention', 'medical equipment reviews'],
  authors: [{ name: 'Clinical Equipment Experts' }],
  openGraph: {
    title: 'E-file Reviews - Clinical Equipment Reviews',
    description: 'Expert technical reviews of professional e-files and clinical equipment for UK healthcare professionals.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-25 text-slate-900 antialiased">
        <div className="min-h-screen grid-pattern-bg">
          {children}
        </div>
      </body>
    </html>
  );
}
