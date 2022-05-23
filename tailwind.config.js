module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#F0F3FF",
        "card-bg": "#171830",
        "main-bg": "#0C0D1C",
        "faved": "#322659",
        "bg-color": "#0C0D1C",
      },
      maxWidth: {
        "xxs":"16rem"
      }
    },
  },
  plugins: [],
}