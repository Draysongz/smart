/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-h-700': {'raw': '(max-height: 900px)'},
        'max-h-600': {'raw': '(max-height: 750px)'}
      },
      gradientColorStops: {
        'custom-green': '#0C472C',
        'custom-light-green': '#20A006',
        'custom-black' : '#0A160D'
      },
      boxShadow: {
        'custom-Syellow' : '5px 10px 15px 20px  rgba(255, 204, 35, 0.4)'
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
        'custom-goldyellow': '#FCA61B',        'custom-yellow': '#FFCC23',
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
        'custom-yellow': '#FFCC23', 
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