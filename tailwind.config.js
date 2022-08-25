module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    container: {
      center: true,
      padding: "12px"
    },
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      '2xl': '1320px'
    },
    fontSize: {
      sm: ['14px', '21px'],
      base: ['16px', '24px'],
      lg: ['18px', '27px'],
      xl: ['20px', '30px'],
      '2xl': ['24px', '36px'],
      '3xl': ['30px', '45px'],
      '4xl': ['36px', '54px'],
      '5xl': ['48px', '72px'],
      '6xl': ['60px', '90px'],
      '7xl': ['72px', '108px'],
      '8xl': ['96px', '144px'],
      '9xl': ['128px', '192px'],
    },
    extend: {
      colors: {
        'primary': {
          "light": '#909090',
          "regular": '#C1C1C1',
          DEFAULT: '#2D2D2D',
          "medium": '#202020',
          "dark": '#1C1C1C'
        },
        'secondary-green': {
          DEFAULT: '#62DB54'
        },
        'secondary-blue': {
          DEFAULT: '#09ACF5'
        }
      },
      fontSize: {
        'xs': ['12px', '18px'],
        '2xxl': ['28px', '42px'],
        '3xxl': ['32px', '48px'],
        '4xxl': ['42px', '63px'],
        '6xxl': ['64px', '96px']
      },
      listStyleType: {
        square: 'square'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}