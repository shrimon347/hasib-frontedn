theme: {
  extend: {
    keyframes: {
      orbit: {
        '0%': { transform: 'rotate(0deg) translate(var(--radius)) rotate(0deg)' },
        '100%': { transform: 'rotate(360deg) translate(var(--radius)) rotate(-360deg)' },
      },
    },
    animation: {
      orbit: 'orbit var(--duration)s linear infinite',
    },
  },
},
