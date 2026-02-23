import React from 'react';

interface ComparisonTableProps {
  headers: string[];
  rows: string[][];
}

export function ComparisonTable({ headers, rows }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto my-8">
      <table className="w-full border-collapse bg-white border border-slate-200 rounded-lg overflow-hidden shadow-clinical">
        <thead>
          <tr className="bg-slate-50">
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-4 text-left text-sm font-semibold text-slate-900 border-b border-slate-200"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? 'bg-gray-25' : 'bg-white'}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 text-sm text-slate-700 border-b border-slate-100"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
