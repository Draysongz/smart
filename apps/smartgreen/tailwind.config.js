/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-h-700': {'raw': '(max-height: 900px)'}
      },
      gradientColorStops: {
        'custom-green': '#0C472C',
        'custom-light-green': '#20A006',
        'custom-black' : '#0A160D'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #0C472C 0%, #20A006 28%, #0A160D 100%)',
        'custom-radial': 'radial-gradient(circle,  #132E25 , #132E25, #000)',
      },
      textColor: {
        'custom-gold': '#FCA61B',
        'custom-green': '#7EB43C',
      },
      backgroundColor: {
        'custom-goldyellow': '#FCA61B',
        'custom-greentxt': '#7EB43C',
        'dark-green': '#132E25',
        'custom-greenbg': '#132E25',
        'light-green': '#006E00',
        'list-green': '#007900'
      },
      borderWidth: {
        'custom-top': '6px', // Example custom size
        'custom-sm': '2px', // Example custom size
        'custom-large-top': '20px', // Another example
      },
      borderColor: {
        'custom-yellow': '#FCA61B', 
      },
      height: {
        'custom-small': '10vh', 
        'custom': '70vh',
      },
      width: {
        'custom-sm': '125px',
        'custom-tiny': '110px',
      },
      // margin: {
      //   'custom-margin': '70px',
      // },
    },
  },
  plugins: [],
}