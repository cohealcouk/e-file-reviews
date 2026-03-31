'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Home, FileText, FlaskConical, BadgeCheck, Menu, X } from 'lucide-react';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { href: '/reviews', label: 'Reviews', icon: <FileText className="w-4 h-4" /> },
    { href: '/testing-lab', label: 'Testing Lab', icon: <FlaskConical className="w-4 h-4" /> },
    { href: '/certification', label: 'Standards', icon: <BadgeCheck className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-medical-500 to-orange-500 flex items-center justify-center shadow-technical group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-slate-900">E-file Reviews</span>
              <span className="hidden sm:inline-flex rounded-full bg-teal-50 border border-teal-100 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-teal-700">
                Beauty Pro Focus
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-slate-600 hover:text-medical-600 font-semibold transition-colors"
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-sm"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-700 hover:text-medical-600 hover:bg-teal-50 font-semibold transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
