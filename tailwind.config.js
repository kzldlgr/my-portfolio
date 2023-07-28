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
        'background': '#1a1a1a',
        'primary': '#dfc19a',
        'secondary': '#dbb88a',
        'accent': '#a37333',
      },
      backgroundImage: {
        roadmap: "url('./assets/image/rocket.gif')",
        portfolio: "url('./assets/image/bg1.jpg')",
        about: "url('./assets/image/about.jpg')"
      },
    },
  },
  plugins: [],
}

