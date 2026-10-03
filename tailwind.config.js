/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F3EFE8',
        alt: '#ECE7DF',
        ink: '#1C1B19',
        muted: '#6F6A62',
        hairline: '#D9D3C9',
        bronze: '#A8865B',
        dark: '#141311',
        'dark-text': '#E8E4DE',
      },
      fontFamily: {
        serif: ['Bodoni Moda', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.2em',
        wordmark: '0.15em',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
