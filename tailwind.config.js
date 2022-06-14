const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'action-blue': '#2874AF',
        'action-dark-blue': '#105890',
        'action-light-blue': '#52B4FF',
        'brand-blue': '#2C405A',
        'dark-blue': '#182A44',
        'pale-blue': '#F1F6FA',
        'pale-dark-blue': '#CADEEE',
        purple: '#712F79',
      },
      fontFamily: {
        sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
