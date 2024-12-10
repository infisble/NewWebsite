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
        primary: {
          50: '#edfbf0',
          100: '#d9f7e1',
          200: '#C7EFCF',  // Our main button color
          300: '#b5e7bd',
          400: '#a3dfab',
          500: '#91d799',
          600: '#7fcf87',
          700: '#6dc775',
          800: '#5bbf63',
          900: '#49b751',
        },
        dark: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'rgb(209 213 219)',
            a: {
              color: '#C7EFCF',
              '&:hover': {
                color: '#b5e7bd',
              },
            },
            h1: {
              color: 'white',
            },
            h2: {
              color: 'white',
            },
            h3: {
              color: 'white',
            },
            h4: {
              color: 'white',
            },
            strong: {
              color: 'white',
            },
            code: {
              color: 'white',
            },
            blockquote: {
              color: 'rgb(209 213 219)',
              borderLeftColor: '#C7EFCF',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}