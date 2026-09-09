import type { Config } from 'tailwindcss';

/**
 * Brand tokens are defined here ONCE and nowhere else.
 * Navy #01143C and gold #D6960E are sampled directly from the
 * All Time Solutions business card.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020A1C',
          900: '#01143C', // brand navy — from the card
          800: '#062250',
          700: '#0E3070',
          600: '#1B4490',
          500: '#2C5AAE',
        },
        gold: {
          DEFAULT: '#D6960E', // brand gold — from the card
          light: '#F0BC44',
          deep: '#A87206',
        },
        bone: {
          DEFAULT: '#EFF2F7',
          dark: '#E2E7EF',
        },
        ink: {
          DEFAULT: '#0B172F',
          muted: '#44506B',
          faint: '#77839B',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Helvetica Neue', 'Arial', 'sans-serif'],
        body: ['var(--font-body)', 'Helvetica Neue', 'Arial', 'sans-serif'],
        brand: ['var(--font-brand)', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Fluid display scale. These are real fontSize utilities, so they
        // never get mistaken for colour utilities by class-merging helpers.
        'd1': ['clamp(42px, 8.4vw, 124px)', { lineHeight: '0.9', letterSpacing: '-0.042em' }],
        'd2': ['clamp(31px, 5.2vw, 68px)', { lineHeight: '0.96', letterSpacing: '-0.032em' }],
        'd3': ['clamp(29px, 4.6vw, 56px)', { lineHeight: '0.98', letterSpacing: '-0.03em' }],
        'd4': ['clamp(23px, 3.2vw, 40px)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        'lede': ['clamp(16px, 1.6vw, 19px)', { lineHeight: '1.66' }],
        'label': ['12px', { lineHeight: '1.2', letterSpacing: '0.24em' }],
      },
      maxWidth: {
        wrap: '1280px',
        prose: '65ch',
      },
      boxShadow: {
        lift: '0 30px 80px -30px rgba(2,10,28,.55)',
        gold: '0 14px 34px -14px rgba(214,150,14,.8)',
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(.2,.75,.25,1)',
      },
      keyframes: {
        cue: { '0%': { top: '-16px' }, '60%,100%': { top: '52px' } },
        drift: {
          from: { transform: 'scale(1.04) translate3d(0,0,0)' },
          to: { transform: 'scale(1.13) translate3d(-1.4%,-1%,0)' },
        },
        mote: {
          '0%,100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(14px,-22px)' },
        },
        spark: {
          '0%,100%': { opacity: '.25', transform: 'scale(.7)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        winOn: {
          '0%,12%': { opacity: '.16' },
          '22%,62%': { opacity: '1' },
          '80%,100%': { opacity: '.16' },
        },
      },
      animation: {
        cue: 'cue 2.4s cubic-bezier(.6,0,.3,1) infinite',
        drift: 'drift 26s ease-in-out infinite alternate',
        mote: 'mote 9s ease-in-out infinite',
        spark: 'spark 2.4s ease-in-out infinite',
        winOn: 'winOn 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
