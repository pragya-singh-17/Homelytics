/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand tokens — reference CSS variables
        coral: {
          DEFAULT: 'rgb(var(--color-coral) / <alpha-value>)',
          hover:   'rgb(var(--color-coral-hover) / <alpha-value>)',
        },
        navy: {
          DEFAULT: 'rgb(var(--color-navy) / <alpha-value>)',
          light:   'rgb(var(--color-navy-light) / <alpha-value>)',
        },
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        // Semantic
        'fg-primary':   'rgb(var(--fg-primary) / <alpha-value>)',
        'fg-secondary': 'rgb(var(--fg-secondary) / <alpha-value>)',
        'fg-tertiary':  'rgb(var(--fg-tertiary) / <alpha-value>)',
        'bg-primary':   'rgb(var(--bg-primary) / <alpha-value>)',
        'bg-secondary': 'rgb(var(--bg-secondary) / <alpha-value>)',
        'card':         'rgb(var(--color-card) / <alpha-value>)',
        'card-border':  'rgb(var(--color-card-border) / <alpha-value>)',
      },
      fontFamily: {
        sans:    ['Inter', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Inter', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        'xs':   'var(--shadow-xs)',
        'sm':   'var(--shadow-sm)',
        'base': 'var(--shadow-base)',
        'md':   'var(--shadow-md)',
        'lg':   'var(--shadow-lg)',
        'xl':   'var(--shadow-xl)',
        '2xl':  'var(--shadow-2xl)',
      },
      borderRadius: {
        'none': 'var(--radius-none)',
        'sm':   'var(--radius-sm)',
        'md':   'var(--radius-md)',
        'lg':   'var(--radius-lg)',
        'xl':   'var(--radius-xl)',
        '2xl':  'var(--radius-2xl)',
        '3xl':  'var(--radius-3xl)',
        'full': 'var(--radius-full)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
