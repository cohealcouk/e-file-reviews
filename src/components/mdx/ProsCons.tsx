import React from 'react';
import { Check, X } from 'lucide-react';

interface ProsConsProps {
  pros: string[];
  cons: string[];
}

export function ProsCons({ pros, cons }: ProsConsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 my-8">
      {/* Pros */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <Check className="w-5 h-5 text-green-600" />
          <h3 className="text-lg font-bold text-green-800">Advantages</h3>
        </div>
        <ul className="space-y-3">
          {pros.map((pro, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-green-700">{pro}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Cons */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <X className="w-5 h-5 text-red-600" />
          <h3 className="text-lg font-bold text-red-800">Considerations</h3>
        </div>
        <ul className="space-y-3">
          {cons.map((con, index) => (
            <li key={index} className="flex items-start gap-2">
              <X className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
              <span className="text-red-700">{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
