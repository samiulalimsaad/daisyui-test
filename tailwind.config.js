const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        ripple: () => ({
            colors,
            
        }),
    },
    plugins: [require("daisyui"), require("tailwindcss-ripple")()],
};
