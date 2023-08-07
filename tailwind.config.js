/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            width:{
                '3/20': '15%',
            }
        },
    },
    plugins: [require("daisyui")],
}