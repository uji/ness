module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        default: ['Inter'],
      },
      colors: {
        primary: {
          50: '#f9f5e6',
          100: '#faf0c0',
          200: '#f6e780',
          300: '#f1d43c',
          400: '#ffc738',
          500: '#e19706',
          600: '#cd7304',
          700: '#ab5708',
          800: '#8b430e',
          900: '#713710',
        },
        secondary: {
          50: '#f1f9fb',
          100: '#dcf7f9',
          200: '#b2edf4',
          300: '#7ddeef',
          400: '#39c2e8',
          500: '#169fdf',
          600: '#117ecc',
          700: '#1563a7',
          800: '#164c7c',
          900: '#133e60',
        },
        black: '#202020',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
