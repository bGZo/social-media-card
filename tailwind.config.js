/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/*.vue",
    "./node_modules/flowbite/**/*.js"
  ],
  corePlugins:{
    preflight: false
  },
  theme: {
    fontFamily: {
      'serif': ['PingFang','Microsoft Yahei'],
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

