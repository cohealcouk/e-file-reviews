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
          <strong>Counterfeit Alert:</strong> Saeyang products sold on marketplace platforms (Amazon, eBay, etc.) are frequently non-certified, unauthorized replicas that may compromise clinical safety and performance.
        </p>
        
        <div className="flex items-start gap-3 mb-3">
          <Shield className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <div>
            <strong className="text-amber-800">Certified Genuine Products:</strong> Only purchase from authorized distributors like Coheal UK to ensure authentic equipment with proper safety certifications and warranty coverage.
          </div>
        </div>
        
        <p className="text-sm">
          <strong>Risk Factors:</strong> Non-certified devices may have inaccurate torque ratings, inadequate vibration control, and lack proper electrical safety certifications required for clinical environments.
        </p>
      </div>
    </div>
  );
}
