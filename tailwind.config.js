// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",  // Scan all JS/TS files in src/
    "./app/**/*.{js,ts,jsx,tsx}",  // Scan Next.js app directory
    "./components/**/*.{js,ts,jsx,tsx}",  // Scan components folder
    "./pages/**/*.{js,ts,jsx,tsx}",  // Scan pages directory (if using pages router)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
