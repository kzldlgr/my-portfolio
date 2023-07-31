/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Montserrat',
      secondary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        'text': '#26190d',
        'background': '#fbf7f4',
        'primary': '#316290',
        'secondary': '#f2e5d9',
        'accent': '#4182be',
      },
      backgroundImage: {
        roadmap: "url('./assets/image/rocket.gif')",
        portfolio: "url('./assets/image/bg1.jpg')",
        about: "url('./assets/image/about.jpg')"
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwind-scrollbar-hide')
  ],
}

