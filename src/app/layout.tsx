import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-file Reviews',
  description: 'Expert reviews of professional e-files and micromotors for UK nail technicians',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
