module.exports = {
  content: ["./**/*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightBlue: 'hsl(235, 28.30%, 53.50%)',
        brightRedLight: 'hsl(253, 52.00%, 70.60%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(263, 84.30%, 20.00%)',
        veryDarkBlue: 'hsl(0, 0.00%, 0.00%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(13, 0%, 98%)'
      }
    },
  },
  plugins: [],
}
