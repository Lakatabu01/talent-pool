import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {

      backgroundColor: {
        'light-blue': '#A1A1FF77',
         'dark-blue': '#2F2F8C', 
      },

      colors: {
        'light-blue': '#A1A1FF77',
        'dark-blue': '#202054',
        'light-black':'#484747'
      },
     
         boxShadow: {
        'around': '0px 2px 60px -3px rgba(14, 14, 14, 0.10), 0px 2px 10px 2px rgba(14, 14, 14, 0.12)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        
        "montserrat": "var(--font-montserrat)"
      },
      animation: {
        'slide-in-up': 'slideUp 0.5s ease-in',
        'drop': 'expand 0.5s ease-in-out',
    },
    keyframes: {

      slideUp: {
        '0%': { transform: 'translateY(-10px)', opacity: "0" },
        "90%": {transform: 'translateY(-5px)', opacity: "0.8"},
        '100%': { transform: 'translateY(0)', opacity: "1" },
      },    

      expand: {
        '0%': { height: '0', opacity: "0", width: "100vw" },
        "90%": {height: '70vh', opacity: "0.4", width: "100vw"},
        '100%': { height: '90vh', opacity: "1", width: "100vw" },
      },
  },

  plugins: [],
    },
  },
}
export default config
