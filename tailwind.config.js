

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'traslado_Y': 'traslado_Y 1s ease-in forwards',
        'traslado_Y_Y': 'traslado_Y_Y 1s ease-in forwards',
        'traslado_X': 'traslado_X 1s ease-in forwards',
        'traslado_X_X': 'traslado_X_X 1s ease-in forwards',
      },
      keyframes: {
        'traslado_Y': {
          '0%': { transform: 'translateY(-100%)' }, // Mueve el div fuera de la pantalla hacia la izquierda
          '100%': { transform: 'translateY(0)' }, // Mueve el div hacia el centro de la pantalla
        },
        'traslado_Y_Y': {
          '0%': { transform: 'translateY(100%)' }, // Mueve el div fuera de la pantalla hacia la izquierda
          '100%': { transform: 'translateY(0)' }, // Mueve el div hacia el centro de la pantalla
        },
        'traslado_X': {
          '0%': { transform: 'translateX(-100%)' }, // Mueve el div fuera de la pantalla hacia la izquierda
          '100%': { transform: 'translateX(0)' }, // Mueve el div hacia el centro de la pantalla
        },
        'traslado_X_X': {
          '0%': { transform: 'translateX(100%)' }, // Mueve el div fuera de la pantalla hacia la izquierda
          '100%': { transform: 'translateX(0)' }, // Mueve el div hacia el centro de la pantalla
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": { //esto apunta a que en navegadores webkit como Chrome y Safari la barra de scroll no sea visible
          display: "none",
        },
        
      };
  
      addUtilities(newUtilities);
    },
    ],
}

