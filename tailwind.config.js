/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        wild: {
          bg: '#0B0F0E',
          emerald: '#0F3D2E',
          granite: '#C9B89A',
          sky: '#4A9BE8',
          amber: '#D97706',
          text: '#F8F1E3',
          'text-muted': '#A8A29E',
        },
      },
      animation: {
        'granite-hover': 'graniteHover 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
      },
      keyframes: {
        graniteHover: {
          '0%': { transform: 'translateY(0) rotateX(0deg)' },
          '100%': { transform: 'translateY(-8px) rotateX(4deg)' },
        },
      },
    },
  },
  plugins: [],
}