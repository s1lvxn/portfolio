/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#10b02d',
        secondary: '#09b870',
        dark: {
          bg: '#02000a',
          card: '#1e1e1e',
          text: '#f3f4f6',
        },
        light: {
          bg: '#f9fafb',
          card: '#ffffff',
          text: '#1f2937',
        },
      },
      keyframes: {
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.8s ease-out',
      },
    },
  },
  plugins: [],
}
