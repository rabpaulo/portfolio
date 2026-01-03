export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores customizadas para dark mode mais intenso
        'dark-bg': '#0a0a0a', // Quase preto
        'dark-surface': '#1a1a1a', // Superfície escura
        'dark-text': '#f5f5f5', // Texto muito claro
        'dark-text-secondary': '#d1d1d1', // Texto secundário claro
        'dark-border': '#2a2a2a', // Bordas escuras
      }
    },
  },
  plugins: [],
}
