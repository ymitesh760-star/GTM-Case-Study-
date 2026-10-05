/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0F1E36',     // Primary dark blue
          primary: '#162D50',  // Deep navy
          secondary: '#254472',// Medium navy
          accent: '#1E7B42',   // Healthy millet green
          accentLight: '#E8F5E9',
          grain: '#D97706',    // Warm millet gold
          grainLight: '#FEF3C7',
          grainDark: '#92400E',
          cream: '#FAF6F0',    // Warm cream background
          warmBg: '#FDFBF7',   // Page background
          surface: '#FFFFFF',
          card: '#FFFFFF',
          border: '#EAE4D9',
          muted: '#64748B',
          darkText: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(15, 30, 54, 0.06), 0 2px 6px -1px rgba(15, 30, 54, 0.04)',
        'soft-lg': '0 10px 30px -4px rgba(15, 30, 54, 0.08), 0 4px 12px -2px rgba(15, 30, 54, 0.04)',
        'soft-xl': '0 20px 40px -6px rgba(15, 30, 54, 0.12), 0 8px 16px -4px rgba(15, 30, 54, 0.06)',
        'glow': '0 0 25px rgba(22, 45, 80, 0.15)',
        'glow-green': '0 0 25px rgba(30, 123, 66, 0.2)',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
