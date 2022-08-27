/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                'primary-red': '#F13C45',
                'primary-dark-blue': '#0B2342'
            }

        },
    },
    plugins: [],
}
