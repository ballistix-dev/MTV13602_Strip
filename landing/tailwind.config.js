module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'image-100': "url('./../images/background_strip.png')"
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'primary': {
        100: "#EEF8FF",
        400: "#8DBAD1",
        500: "#329FC7",
        800: "#316999",
        900: "#1C3D79"
      }
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['serif'],
    },
  },
  variants: {},
  plugins: [],
};
