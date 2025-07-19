module.exports = {
  content: ['./views/**/*.ejs'],
  theme: {
    extend: {
      colors: {
        'gray': '#1d1d1d',
        'silver': '#a6a6a6',
        'fb-color': '#1773ea',
        "twitter-color": "#1c9cea",
        "insta-color": "#e12a72",
        "linkedin-color": "#144679",
        "whatsapp-color": "#075e54",
        "skype-color": "#00aff0",
        "socialbg": "#1b74e4",
        "charcoal": "#333",
        "pdtllocationcolor": "#fd7590",
        "pdtlphonecolor": "#e93b81",
        "pdtlemailcolor": "#6ab5b9",
        "pdtlcalendercolor": "#c17ceb",
        "pdtlcolor": "#9a9a9a",
        "blue": "#1b74e4",

      },
      maxHeight: {
        '83': '83vh',
      },
      fontSize: {

        '1xl': '22px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        robotoSlab: ['Roboto Slab', 'serif'],
      },
      boxShadow: {
        "pdtl": "0px 4px 6px rgba(0, 0, 0, 0.08)",
        '3xl': '0px 6px 6px 0px rgba(238, 238, 238, 0.2)',
      },
      backgroundImage: {
        'body-background-image': "url('/assets/img/page-bg-dark-1.jpg')",
      },
      height: {
        'manavta-logo': '90px',
      },
      lineHeight: {
        '12': '44px',
      }
    },
  },
  plugins: [],
}
