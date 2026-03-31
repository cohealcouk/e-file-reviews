import React from 'react';
import { AlertTriangle, Shield } from 'lucide-react';

export function AuthenticityWarning() {
  return (
    <div className="authenticity-warning">
      <div className="authenticity-warning-title">
        <AlertTriangle className="w-5 h-5" />
        Warning: Authenticity Verification Required
      </div>
      
      <div className="authenticity-warning-content">
        <p className="mb-3">
          <strong>Counterfeit Alert:</strong> Saeyang products sold on open marketplaces (Amazon, eBay, etc.) are often unauthorized replicas that can compromise durability, precision, and electrical safety.
        </p>
        
        <div className="flex items-start gap-3 mb-3">
          <Shield className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <div>
            <strong className="text-amber-800">Verified Genuine Products:</strong> Buy from authorized distributors like Coheal UK to secure warranty coverage and original manufacturer quality.
          </div>
        </div>
        
        <p className="text-sm">
          <strong>Risk Factors:</strong> Non-genuine devices can show unstable torque, higher vibration, and poor electrical safety controls under longer sessions.
        </p>
      </div>
    </div>
  );
}
