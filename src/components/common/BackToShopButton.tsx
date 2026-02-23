import React from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export function BackToShopButton() {
  return (
    <Link
      href="https://coheal.co.uk"
      className="fixed bottom-4 right-4 z-40 md:hidden btn-medical shadow-clinical-lg px-4 py-3 rounded-full flex items-center gap-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ShoppingCart className="w-4 h-4" />
      <span className="text-sm font-medium">Back to Shop</span>
    </Link>
  );
}
