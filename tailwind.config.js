/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        main:'#5A6B7C',
        secondary:'#ECB6C3',
        blanc:'#FFFFFF',
        hove:'#ECB6C31A',
        whitee:"#ffffff",
        darkMain:"#43505F",
      },
      colors:{
        secondary:'#ECB6C3',
        blanc:'#FFFFFF',
        main:'#5A6B7C',
      }
    },
  },
  plugins: [],
}

