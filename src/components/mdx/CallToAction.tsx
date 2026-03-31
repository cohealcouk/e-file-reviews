import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
  text: string;
  link: string;
  subtitle?: string;
}

export function CallToAction({ text, link, subtitle }: CallToActionProps) {
  return (
    <div className="bg-gradient-to-r from-orange-50/70 via-white to-teal-50/70 border-t border-slate-200 py-12 rounded-2xl my-8">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">{text}</h2>
        {subtitle && (
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">{subtitle}</p>
        )}
        
        <Link
          href={link}
          className="btn-medical inline-flex items-center gap-2 group"
        >
          View Product Offer
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
