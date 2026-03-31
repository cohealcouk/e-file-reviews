/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        // Main brand palette
        medical: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#0f766e",
          600: "#115e59",
          700: "#134e4a",
          800: "#042f2e",
          900: "#022c22",
        },
        gray: {
          25: "#fcfcfc",
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        amber: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
      },
      fontFamily: {
        sans: ["Manrope", "Sora", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(to right, rgba(15, 118, 110, 0.05) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(15, 118, 110, 0.05) 1px, transparent 1px)`,
        'grid-pattern-dark': `linear-gradient(to right, rgba(15, 118, 110, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(15, 118, 110, 0.1) 1px, transparent 1px)`,
      },
      boxShadow: {
        'clinical': '0 20px 24px -28px rgba(15, 23, 42, 0.52)',
        'clinical-lg': '0 24px 30px -30px rgba(15, 23, 42, 0.7)',
        'technical': '0 14px 18px -20px rgba(17, 94, 89, 0.48)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
