module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#212121',
      'blue': '#0039cb',
      'grey-dark':'#616161',
      'grey-normal':'#9e9e9e',
      'grey-light':'#e0e0e0',
      'purple':'#9333ea',
    },
    extend: {
      fontFamily: {
        'sans': ['Apercu', 'Inter', 'Arial'],
        'serif': ['"Esteban Regular"', 'Georgia']
      }
    },
    minWidth: {
      '40': '10rem',
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    ]
}
