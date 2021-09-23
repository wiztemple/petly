// eslint-disable-next-line no-undef
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        grayfade: '#AFB6C1',
        gray1: '#F8FAFD',
        gray2: '#8588A3',
        gray3: '#58667E',
        gray6: '#344062',
        gray7: '#666879',
        graywhite: '#F0F6FF',
        appblue: '#0D75FF',
        appred: '#CB2E42',
        kiwi: '#0e182a',
        menugray: '#5F6472',
        footergray: '#F3F5FB',
        footergray2: '#616681',
        loadergray: '#E9EEF5',
        petnamegray: '#F0F6FF'
      },
      fontSize: {
        '6px': ['0.375rem', { lineHeight: '1rem' }],
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      height: () => ({
        '97px': '97px',
        '108px': '108px',
        '247px': '247px',
        '308px': '308px',
        '400px': '400px',
        '535px': '535px',
        '616px': '616px',
        '680px': '680px',
        '770px': '770px',
        '85percent': '85%'
      }),
      width: () => ({
        '118px': '118px',
        '158px': '158px',
        '227px': '227px',
        '270px': '270px',
        '350px': '350px',
        '553px': '553px',
        '780px': '780px',
        full: '100%',
        screen: '100vw',
        min: 'min-content',
        max: 'max-content',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
