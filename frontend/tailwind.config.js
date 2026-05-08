/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          DEFAULT: '#D4AF37',
          light: '#F5D67B',
          dark: '#A07820',
          glow: '#FFD700',
        },
        obsidian: {
          50:  '#f8f8f8',
          100: '#e8e8e8',
          200: '#c8c8c8',
          300: '#a8a8a8',
          400: '#888888',
          500: '#686868',
          600: '#484848',
          700: '#282828',
          800: '#181818',
          900: '#0a0a0a',
          DEFAULT: '#0D0D0D',
        },
        charcoal: {
          DEFAULT: '#1A1A2E',
          light:   '#16213E',
          mid:     '#0F3460',
        },
        amber: {
          glow: '#FF8C00',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gold-gradient':     'linear-gradient(135deg, #D4AF37 0%, #F5D67B 50%, #A07820 100%)',
        'dark-gradient':     'linear-gradient(180deg, #0D0D0D 0%, #1A1A2E 50%, #0D0D0D 100%)',
        'hero-gradient':     'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.15) 0%, transparent 70%)',
        'card-gradient':     'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
        'glow-radial':       'radial-gradient(circle at center, rgba(212,175,55,0.3) 0%, transparent 70%)',
      },
      boxShadow: {
        'gold':       '0 0 20px rgba(212,175,55,0.4), 0 0 60px rgba(212,175,55,0.1)',
        'gold-lg':    '0 0 40px rgba(212,175,55,0.5), 0 0 120px rgba(212,175,55,0.15)',
        'gold-sm':    '0 0 10px rgba(212,175,55,0.3)',
        'glass':      '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
        'card':       '0 20px 60px rgba(0,0,0,0.5)',
        'inner-gold': 'inset 0 0 20px rgba(212,175,55,0.1)',
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'float-slow':   'float 9s ease-in-out infinite',
        'pulse-gold':   'pulseGold 2s ease-in-out infinite',
        'shimmer':      'shimmer 2.5s linear infinite',
        'spin-slow':    'spin 20s linear infinite',
        'glow-pulse':   'glowPulse 3s ease-in-out infinite',
        'slide-up':     'slideUp 0.6s ease-out',
        'fade-in':      'fadeIn 0.8s ease-out',
        'ticker':       'ticker 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-20px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212,175,55,0.4)' },
          '50%':       { boxShadow: '0 0 50px rgba(212,175,55,0.8), 0 0 100px rgba(212,175,55,0.3)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%':       { opacity: '1' },
        },
        slideUp: {
          '0%':   { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',    opacity: '1' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
}
