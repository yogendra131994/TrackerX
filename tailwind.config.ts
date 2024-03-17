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
      red: '#e75757',
      green: '#79ea86',
      // ...
    },
    fontSize: {
      '10': '10px',
      '12': '12px',
      '14': '14px',
      '16': '16px',
      '18': '18px',
      '20': '20px',
      '22': '22px',
      '24': '24px',
      '28': '28px',
      '32': '32px',
      '36': '36px',
      '40': '40px',
    },
  },
  plugins: [],
};
export default config;
