/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      sm: ['0.9rem','1.4rem'],
      base: '1rem',
      md: ['1.125rem'],
      xl: ['1.25rem', '2.2rem'],
      xl2: '1.4rem',
      xl3: '1.8rem',
      xl4: ['2.4rem', '3rem'],
      xl5: '3rem',
      xl6: '3.2rem',
      xl7: ['5.2rem', '6rem'],
    },
    colors: {
      'light-cyan': '#AAE1E2',
      'cyan': 'hsl(180, 66%, 49%)',
      'violet-very-dark': '#383051',
      'violet-dark': 'hsl(257, 27%, 26%)',
      'violet-light': 'hsl(257, 7%, 63%)',
      'red': 'hsl(0, 87%, 67%)',
      'light-grey': '#F0F1F6',
      'grey': '#9C9DA6',
      'blue-very-dark': '#222127',
      'white': 'rgb(255 255 255)',
    },
    screens: {
      'lg': '980px',
    },
    extend: {
      backgroundImage: {
        'hero-img': "url('./images/illustration-working.svg')",
        'shorten-img-mobile': "url('./images/bg-shorten-mobile.svg')",
        'shorten-img-desktop': "url('./images/bg-shorten-desktop.svg')",
        'boost-img-mobile': "url('./images/bg-boost-mobile.svg')",
        'boost-img-desktop': "url('./images/bg-boost-desktop.svg')",

      }
    },
  },
  plugins: [],
}
