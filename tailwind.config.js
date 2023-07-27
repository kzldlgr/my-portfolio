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
        'text': '#fafafa',
        'background': '#050505',
        'primary': '#dfc19a',
        'secondary': '#271b0c',
        'accent': '#dbb88a',
      },
      backgroundImage: {
        roadmap: "url('./assets/image/rocket.gif')",
        portfolio: "url('./assets/image/bg1.jpg')"
      },
    },
  },
  plugins: [],
}

