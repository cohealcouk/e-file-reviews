import React from 'react';

interface StarRatingProps {
  rating: number; // 0–5, supports half stars
  max?: number;
  size?: 'sm' | 'md';
}

export function StarRating({ rating, max = 5, size = 'md' }: StarRatingProps) {
  const sizePx = size === 'sm' ? 14 : 18;

  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`Rating: ${rating} out of ${max} stars`}
    >
      {Array.from({ length: max }, (_, i) => {
        const fill = Math.min(Math.max(rating - i, 0), 1); // 0, 0.5, or 1
        const id = `star-grad-${i}-${rating}`;

        return (
          <svg
            key={i}
            width={sizePx}
            height={sizePx}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {fill > 0 && fill < 1 && (
              <defs>
                <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
                  <stop offset={`${fill * 100}%`} stopColor="#f59e0b" />
                  <stop offset={`${fill * 100}%`} stopColor="#d1d5db" />
                </linearGradient>
              </defs>
            )}
            <path
              d="M10 1.5l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 13.77l-4.78 2.51.91-5.32L2.27 7.12l5.34-.78L10 1.5z"
              fill={
                fill === 1
                  ? '#f59e0b'
                  : fill === 0
                  ? '#d1d5db'
                  : `url(#${id})`
              }
            />
          </svg>
        );
      })}
      <span className="ml-1 text-sm text-slate-600 font-medium">{rating}/5</span>
    </div>
  );
}
