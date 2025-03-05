const n=`const { mauve, grass } = require('@radix-ui/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.vue'],
  theme: {
    extend: {
      colors: {
        ...mauve,
        ...grass,
      },
    },
  },
  plugins: [],
}
`;export{n as default};
