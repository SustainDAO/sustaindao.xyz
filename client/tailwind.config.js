module.exports = {
  mode: 'jit',
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.html',
    './articles/**/*.html',
    './article/**/*.html',
    './*.html',
    "./src/**/*.{html,js}"
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'primary': '#ABE581',
      'secondary': '#8CDAE5',
      'gray': '#F2F2F5',
      'black-smoke': '#2B2B2B',
      'black-main':'#1f1f1f',
      'gray-light': '#464646',
      'gray-jo':'#D9D9D9',
      'gray-bold':'#6E767D',
      'transparent':'transparent'
    },
    minWidth: {
      '0': '0',
      'full': '100%',
      '34': '8.5rem',
      '36': '9rem',
      '39': '9.75rem',
      '42': '10.5rem',
      '46': '11.5rem',
      '49': '12.25rem',
      '51': '13.75rem',
      '56': '14rem',
      '64': '16rem',
      '75': '18.75rem',
      '84': '21rem',
      '98': '24.5rem',
      'fit': 'fit-content',
    },
    minHeight: {
      '0': '0',
      '4/5': '80%',
      'full': '100%',
      'screen': '100vh',
      '14': '3.5rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '26': '6.5rem',
      '27': '7rem',
      '48': '12rem',
      '54': '14rem',
      '76': '19rem',
      '70': '18rem',
      '100': '25rem',
      '140': '35rem',
      '178': '45rem',
    },
    maxWidth: {
      'xsm':'13rem',
      'xs': '20rem',
      'xsl':'22.5rem',
      'xmd':'25rem',
      'sm': '30rem',
      'lsm': '35rem',
      'lmd':'37.5rem',
      'md': '40rem',
      'lg': '50rem',
      'xlg': '59rem',
      'xl': '60rem',
      '2xl': '70rem',
      '3xl': '80rem',
      '4xl': '90rem',
      '5xl': '100rem',
      '6xl':'120rem',
      '7xl':'140rem',
      'full': '100%',
    },
    maxHeight: {
      '0': '0px',
      'full': '100%',
      'screen': '100vh',
      '14': '3.5rem',
      '48': '12rem',
      '64':'34rem'
    },
    screens: {
      'xsm': '480px',
      'xmd':'550px',
      'sm': '640px',
      'tablet': '720px',
      'md':'840px',
      'laptop': '1024px',
      'desktop': '1270px',
      'screen':'1420px',
      'screen-lg': '1536px',
      'screen-xl':'1780px'
    },
    fontSize: {
      'xs': '.75rem', // 12px
      'sm': '.875rem', // 14px
      'base': '1rem', // 16px
      'lg': '1.125rem', // 18px
      'xl': '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '4.5xl': '2.5rem', // 40px
      '5xl': '3rem', // 48px,
      '6xl': '4rem',
      '6.5xl': '4.5rem',
      '7xl': '5rem'
    },
    borderRadius: {
      'none': '0',
      'sm': '.125rem',
      'xsm': '0.1875rem',
      default: '.25rem',
      'md': '0.375rem',
      'lg': '.5rem',
      'xl': '0.75rem',
      'xlg': '1rem',
      '2xl': '1.25rem',
      '3xl': '1.5rem',
      'full': '9999px'
    },
    lineHeight: {
      '3': '.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '11': '3rem',
      '12': '3.5rem',
      '13': '4rem',
      '14': '4.5rem',
      '15': '5rem',
    },
    fontFamily: {
      'display': ['"Helvetica Now Display"', 'sans-serif'],
      'display-bold': ['"Helvetica Now Display Bold"', 'sans-serif'],
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ]
}