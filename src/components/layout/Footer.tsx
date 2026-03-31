import React from 'react';
import Link from 'next/link';
import { Sparkles, Mail, Beaker, BadgeCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-10 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-orange-300" />
              E-file Reviews
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Independent reviews for professional beauty studios, podiatry practices, and dental prosthetic
              labs. We focus on performance you can feel in daily work.
            </p>
            <a
              href="mailto:contact@efilereviews.co.uk"
              className="inline-flex items-center gap-2 text-slate-300 text-sm hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>contact@efilereviews.co.uk</span>
            </a>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/reviews" className="text-slate-300 hover:text-white transition-colors">All Reviews</Link>
              </li>
              <li>
                <Link href="/testing-lab" className="text-slate-300 hover:text-white transition-colors">Testing Lab</Link>
              </li>
              <li>
                <Link href="/certification" className="text-slate-300 hover:text-white transition-colors">Certification Standards</Link>
              </li>
              <li>
                <Link href="/disclosure" className="text-slate-300 hover:text-white transition-colors">Affiliate Disclosure</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">How We Review</h4>
            <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-4">
              <p className="text-sm text-slate-200 flex items-start gap-2">
                <Beaker className="w-4 h-4 mt-0.5 text-teal-300" />
                Load, vibration, dust control and thermal behavior are tested in repeatable sessions.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-4">
              <p className="text-sm text-slate-200 flex items-start gap-2">
                <BadgeCheck className="w-4 h-4 mt-0.5 text-emerald-300" />
                Editorial scores are independent from affiliate partnerships.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-slate-400">
            <p>As an Amazon Associate and Coheal affiliate, we may earn from qualifying purchases.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/disclosure" className="hover:text-white transition-colors">Disclosure</Link>
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-500">© 2026 E-file Reviews. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
