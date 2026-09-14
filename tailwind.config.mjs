/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        navy:   '#0d3b66',
        'navy-light': '#1e5288',
        accent: '#f59e0b',
        'accent-dark': '#e67e22',
        dark:   '#1a1a1a',
        body:   '#666666',
        'gray-soft': '#f5f5f5',
        border: '#e5e5e5'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,0.08)'
      }
    }
  }
};