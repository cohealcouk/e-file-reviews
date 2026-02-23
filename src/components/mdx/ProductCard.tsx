import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Gauge, Zap, Shield, ExternalLink } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  torque: string;
  rpm: string;
  affiliateLink: string;
  description: string;
  certified?: boolean;
}

export function ProductCard({
  title,
  price,
  image,
  torque,
  rpm,
  affiliateLink,
  description,
  certified = true
}: ProductCardProps) {
  return (
    <div className="card-clinical relative overflow-hidden">
      {/* Certified Genuine Badge */}
      {certified && (
        <div className="certified-badge">
          Certified Genuine
        </div>
      )}
      
      <div className="grid md:grid-cols-2 gap-6 p-6">
        {/* Product Image */}
        <div className="relative">
          <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        
        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
            
            {/* Technical Specs */}
            <div className="space-y-3 mb-4">
              <div className="spec-row">
                <Gauge className="spec-icon" />
                <span className="spec-label">Torque:</span>
                <span className="spec-value">{torque}</span>
              </div>
              
              <div className="spec-row">
                <Zap className="spec-icon" />
                <span className="spec-label">Speed:</span>
                <span className="spec-value">{rpm}</span>
              </div>
              
              <div className="spec-row">
                <Shield className="spec-icon" />
                <span className="spec-label">Safety:</span>
                <span className="spec-value">White Finger Certified</span>
              </div>
            </div>
            
            {/* Technical Spec Label */}
            <div className="technical-spec-label">
              Technical Specifications
            </div>
            
            {/* Description */}
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {description}
            </p>
          </div>
          
          {/* Price and CTA */}
          <div className="space-y-3">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-900">{price}</span>
              <span className="text-slate-500">GBP</span>
            </div>
            
            <Link
              href={affiliateLink}
              className="btn-medical w-full justify-center items-center gap-2 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4" />
              Check Availability at Coheal UK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
