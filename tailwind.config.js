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
      'text': '#0b180f',
      'background': '#f8fcf9',
      'primary': '#3dc463',
      'secondary': '#96e6ac',
      'accent': '#57e17f',
      },
      backgroundImage: {
        roadmap: "url('./assets/image/rocket.gif')",
        portfolio: "url('./assets/image/bg1.jpg')",
        about: "url('./assets/image/about.jpg')",
        bghome: "url('./assets/image/HomeBackground.jfif')"
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwind-scrollbar-hide')
  ],
}

