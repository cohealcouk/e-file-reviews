import React from 'react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">E-file Reviews</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Expert reviews and comparisons of professional nail drills and micromotors for UK technicians.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-slate-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/reviews" className="text-slate-300 hover:text-white transition-colors">All Reviews</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Affiliate Disclaimer</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              As an Amazon Associate and Coheal affiliate, we earn from qualifying purchases.
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2024 E-file Reviews. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
