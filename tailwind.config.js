module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    
  
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      textShadow: {
        custom: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};