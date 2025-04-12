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
        // Base colors directly from the site
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

        // System colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
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
