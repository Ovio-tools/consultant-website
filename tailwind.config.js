const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2E4A',
          dark: '#111827',
        },
        accent: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
        },
        'bg-light': '#F8F9FB',
        'text-primary': '#1A1A1A',
        'text-secondary': '#6B7280',
        'border-default': '#E5E7EB',
        'footer-bg': '#111827',
        'footer-text': '#D1D5DB',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      maxWidth: {
        site: '1200px',
        modal: '560px',
        newsletter: '640px',
      },
      borderRadius: {
        card: '12px',
        btn: '8px',
      },
      height: {
        btn: '48px',
      },
      boxShadow: {
        card: '0 2px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.12)',
        modal: '0 20px 60px rgba(0,0,0,0.2)',
        nav: '0 2px 12px rgba(0,0,0,0.08)',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },
  plugins: [],
}
