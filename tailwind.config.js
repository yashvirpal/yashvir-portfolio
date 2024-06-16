/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        'gray': '#1d1d1d',
        'silver': '#a6a6a6',
        'fb-color':'#1773ea',
        "twitter-color": "#1c9cea",
        "insta-color": "#e12a72",
        "linkedin-color": "#144679",
        "whatsapp-color": "#075e54",
        "skypee-color": "#00aff0",
        "socialbg":"#1b74e4",
        "charcoal":"#333",
        "pdtllocationcolor":"#fd7590",
        "pdtlphonecolor":"#e93b81",
        "pdtlemailcolor":"#6ab5b9",
        "pdtlcalendercolor":"#c17ceb",
        "pdtlcolor":"#9a9a9a",
        "blue":"#1b74e4",
        
      },
      maxHeight: {
        '83': '83vh',
      },
      fontSize: {
       
        '1xl': '22px',
      },
      boxShadow:{
        "pdtl":"0px 4px 6px rgba(0, 0, 0, 0.08)",
        '3xl': '0px 6px 6px 0px rgba(238, 238, 238, 0.2)',
      },
      lineHeight: {
        '12': '44px',
      }
    },
  },
  plugins: [],
}

