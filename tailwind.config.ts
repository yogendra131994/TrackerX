import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    colors: {
      blue: '#1DA1F2',
      black: '#14171A',
      darkgray: '#292f33',
      mediumgray: '#66757f',
      lightgray: '#ccd6dd',
      verylightgray: '#e1e8ed',
      white: '#fff',
      // ...
    },
    fontSize: {
      sm: '12px', // Ideal measure: ~60 characters per line
      md: '14px', // Ideal measure: ~51 characters per line
      lg: '16px', // Ideal measure: ~45 characters per line
      xl: '18px', // Ideal measure: ~40 characters per line
      xxl: '20px', // Ideal measure: ~36 characters per line
      xxxl: '24px', // Ideal measure: ~30 characters per line
    },
  },
  plugins: [],
};
export default config;
