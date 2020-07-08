module.exports = {
  plugins: [
    require('tailwindcss')(process.env.TAILWIND_CONFIG),
    require('autoprefixer'),
  ],
}
