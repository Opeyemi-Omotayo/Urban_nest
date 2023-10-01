/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        font: ["Quicksand", "sans-serif"],
      },
      backgroundImage:{
        "img1": "url('https://as2.ftcdn.net/v2/jpg/04/37/54/23/1000_F_437542364_rUKRUDlOQ2ZmVrsijNFUfrhxZO7jyOFg.jpg')",
        "img2": "url('https://as2.ftcdn.net/v2/jpg/04/62/81/43/1000_F_462814326_Rg1qXonBpF4T6DAQ8T03LBXIGK497yc9.jpg')"
      }
    },
  },
  plugins: [],
}
