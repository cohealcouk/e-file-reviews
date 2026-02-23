import React from 'react';
import Link from 'next/link';
import { Microscope, Shield, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              E-file Reviews
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Expert technical reviews of professional clinical equipment for UK healthcare professionals. 
              Focus on torque safety, vibration control, and white finger prevention.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <Mail className="w-4 h-4" />
              <span>contact@efilereviews.co.uk</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-slate-300 hover:text-white transition-colors">
                  All Reviews
                </Link>
              </li>
              <li>
                <Link href="/testing-lab" className="text-slate-300 hover:text-white transition-colors">
                  Testing Lab
                </Link>
              </li>
            </ul>
          </div>
          
          {/* About Our Testing Lab */}
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Microscope className="w-5 h-5" />
              About Our Testing Lab
            </h4>
            <div className="text-slate-300 text-sm leading-relaxed space-y-3">
              <p>
                <strong className="text-white">Independent Testing Facility:</strong> Our state-of-the-art laboratory 
                conducts comprehensive testing of clinical equipment for vibration analysis, torque accuracy, 
                and electrical safety compliance.
              </p>
              <p>
                <strong className="text-white">Technical Standards:</strong> All equipment is tested against 
                NHS clinical standards and UK healthcare regulations for white finger prevention and 
                occupational safety.
              </p>
              <p>
                <strong className="text-white">Certification Process:</strong> Each product undergoes 
                200+ hours of continuous operation testing, torque consistency verification, and 
                vibration frequency analysis before certification.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-xs text-slate-400">
                  © 2024 E-file Reviews. All rights reserved. | 
                  <Link href="/certification" className="hover:text-white transition-colors">
                    Certification Standards
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <div>
              <p>As an Amazon Associate and Coheal affiliate, we earn from qualifying purchases.</p>
              <p className="mt-1">All reviews conducted independently. No compensation influences our ratings.</p>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclosure" className="hover:text-white transition-colors">
                Affiliate Disclosure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
