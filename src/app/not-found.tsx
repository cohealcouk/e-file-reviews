import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FileSearch } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Page Not Found - E-file Reviews',
  description: 'The page you were looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <FileSearch className="w-10 h-10 text-slate-400" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Page Not Found</h1>
        <p className="text-lg text-slate-600 mb-10">
          The page you were looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-medical">
            Go to Home
          </Link>
          <Link href="/reviews" className="btn-secondary">
            Browse All Reviews
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
