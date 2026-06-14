/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A2E',
        accent: '#E8B86D',
        background: '#F8F7F4',
        surface: '#FFFFFF',
        textPrimary: '#1A1A1E',
        textSecondary: '#6B6B7B',
        success: '#2D6A4F',
        warning: '#E8B86D',
        error: '#C4392B',
      },
      fontFamily: {
        playfair: ['Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}
