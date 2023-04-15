/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                koalaGreen: '#2FD8B2',
                koalaLightGrey: '#2C2C2C',
                koalaDarkGrey: '#181A1A',
            },
        },
    },
    plugins: [],
};
