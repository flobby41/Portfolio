import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base colors - Approche simplifiée
        'light-blue': 'var(--light-blue)',
        'dark-blue': 'var(--dark-blue)',
        'off-white': 'var(--off-white)',
        'purple': 'var(--purple)',
        'light-purple': 'var(--light-purple)',
        'extra-light-purple': 'var(--extra-light-purple)',
        'light-gray': 'var(--light-gray)',
        'mint-green': 'var(--mint-green)',
        'text-gray': 'var(--text-gray)',

        // Work page colors
        'work-bg': 'var(--work-bg)',
        'work-purple': 'var(--work-purple)',
        'work-light-purple': 'var(--work-light-purple)',
        'work-pink': 'var(--work-pink)',
        'work-medium-purple': 'var(--work-medium-purple)',
        'work-light-blue': 'var(--work-light-blue)',
        'work-peach': 'var(--work-peach)',
        'work-text-gray': 'var(--work-text-gray)',

        // About page colors
        'about-bg': 'var(--about-bg)',
        'about-dark-blue': 'var(--about-dark-blue)',
        'about-green': 'var(--about-green)',
        'about-light-green': 'var(--about-light-green)',
        'about-gray-green': 'var(--about-gray-green)',
        'about-text-gray': 'var(--about-text-gray)',
        'about-blue-gray': 'var(--about-blue-gray)',
        'about-light-blue': 'var(--about-light-blue)',
        'about-very-light-blue': 'var(--about-very-light-blue)',

        // System colors - Utilisez une seule approche
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
          foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
        },
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
