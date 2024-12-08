/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/page/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Example for custom colors
        foreground: "var(--foreground)", // Example for custom colors
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: { // Define your custom theme here
          "primary": "#FF3811", // Custom primary color
          "secondary": "#f6d860", // Custom secondary color
          "accent": "#37cdbe", // Custom accent color
          "neutral": "#3d4451", // Custom neutral color
          "base-100": "#ffffff", // Custom background color
        },
      },
    ],
    theme: "mytheme", // Tell DaisyUI to use your custom theme
  },
};
