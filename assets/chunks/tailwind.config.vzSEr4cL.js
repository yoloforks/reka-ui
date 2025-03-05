const n=`const { blackA } = require('@radix-ui/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.vue'],
  theme: {
    extend: {
      colors: {
        ...blackA,
      },
    },
  },
  plugins: [],
}
`;export{n as default};
