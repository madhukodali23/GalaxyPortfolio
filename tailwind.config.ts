
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'ui-sans-serif', 'sans-serif'],
      },
			colors: {
				neonblue: "#00fff0",
				neonpurple: "#6c00ff",
				neonpink: "#ff00e0",
				neongreen: "#00ff85",
        cosmic: "#19182e",
        galaxypurple: "#28234d",
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-12px) scale(1.05)" }
        },
        orbit: {
          "to": { transform: "rotate(360deg)" }
        },
        glow: {
          "0%,100%": { filter: "drop-shadow(0 0 16px #00fff0)" },
          "50%": { filter: "drop-shadow(0 0 36px #6c00ff)" }
        },
			},
			animation: {
        float: "float 3s ease-in-out infinite",
        planetorbit: "orbit 12s linear infinite",
        glow: "glow 2s ease-in-out infinite",
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
