import React from 'react';
import Link from 'next/link';
import { FileText, Home } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">E-file Reviews</span>
          </Link>
          
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors"
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
            <Link
              href="/reviews"
              className="flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors"
            >
              <FileText className="w-4 h-4" />
              All Reviews
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
