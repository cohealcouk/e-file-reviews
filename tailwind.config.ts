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
        // Clinical Professional Palette
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
        // Medical Blue (NHS Style)
        medical: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#005EB8", // NHS Blue
          600: "#004799",
          700: "#003870",
          800: "#002a4d",
          900: "#001c33",
        },
        // Technical Grays
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
        // Warning Amber for AuthenticityWarning
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
        sans: ["Inter", "Geist", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(to right, rgba(0, 94, 184, 0.03) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(0, 94, 184, 0.03) 1px, transparent 1px)`,
        'grid-pattern-dark': `linear-gradient(to right, rgba(0, 94, 184, 0.08) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0, 94, 184, 0.08) 1px, transparent 1px)`,
      },
      boxShadow: {
        'clinical': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'clinical-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'technical': '0 1px 3px 0 rgba(0, 94, 184, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
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
