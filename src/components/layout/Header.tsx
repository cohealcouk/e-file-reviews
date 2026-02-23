import React from 'react';
import Link from 'next/link';
import { FileText, Home, Shield } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-medical-500 to-medical-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-slate-900 group-hover:text-medical-600 transition-colors">E-file Reviews</span>
              <div className="flex items-center gap-1 bg-medical-100 text-medical-700 px-2 py-1 rounded-full text-xs font-semibold">
                <Shield className="w-3 h-3" />
                Verified Partner
              </div>
            </div>
          </Link>
          
          <nav className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-slate-600 hover:text-medical-600 font-medium transition-all duration-200 hover:scale-105"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link
              href="/reviews"
              className="flex items-center gap-2 text-slate-600 hover:text-medical-600 font-medium transition-all duration-200 hover:scale-105"
            >
              <FileText className="w-4 h-4" />
              <span>All Reviews</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
