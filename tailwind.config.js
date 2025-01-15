/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "jsx": "react-jsx",  // This ensures JSX works properly with React 17 and newer
    "lib": ["dom", "es2015"],
    "types": ["react", "react-dom"]  // Ensure these are listed here
  },
  "include": [
    "src/**/*"
  ]
}

