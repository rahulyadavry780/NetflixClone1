/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  darkmode: 'class',
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
  
],
  theme: {
    extend: {
      screens:{
        "other":{
          'min':'340px', 'max' : '1200px'
        },
        color :{
          darkbg:'#0e7490',
          blue :{
            800:'#1e40af',
          }
       },
      },
     
    },
  },
  plugins: [],
}

