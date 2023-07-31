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
        'text': '#00151e',
        'background': '#f0faff',
        'primary': '#d04301',
        'secondary': '#a4e7ff',
        'accent': '#d54401',
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

