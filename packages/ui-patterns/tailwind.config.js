/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        'inovex-white': 'var(--inovex-elements-white)',
        'inovex-black': 'var(--inovex-elements-black)',
        'inovex-transparent': 'var(--inovex-elements-transparent)',
        'inovex-n-1': 'var(--inovex-elements-n-1)',
        'inovex-n-2': 'var(--inovex-elements-n-2)',
        'inovex-n-3': 'var(--inovex-elements-n-3)',
        'inovex-n-4': 'var(--inovex-elements-n-4)',
        'inovex-n-5': 'var(--inovex-elements-n-5)',
        'inovex-n-6': 'var(--inovex-elements-n-6)',
        'inovex-n-7': 'var(--inovex-elements-n-7)',
        'inovex-n-8': 'var(--inovex-elements-n-8)',
        'inovex-n-9': 'var(--inovex-elements-n-9)',
        'inovex-n-10': 'var(--inovex-elements-n-10)',
        'inovex-n-11': 'var(--inovex-elements-n-11)',
        'inovex-n-12': 'var(--inovex-elements-n-12)',
        'inovex-primary': 'var(--inovex-elements-primary)',
        'inovex-primary-focus': 'var(--inovex-elements-primary-focus)',
        'inovex-p-1': 'var(--inovex-elements-p-1)',
        'inovex-p-2': 'var(--inovex-elements-p-2)',
        'inovex-p-3': 'var(--inovex-elements-p-3)',
        'inovex-p-4': 'var(--inovex-elements-p-4)',
        'inovex-p-5': 'var(--inovex-elements-p-5)',
        'inovex-p-6': 'var(--inovex-elements-p-6)',
        'inovex-p-7': 'var(--inovex-elements-p-7)',
        'inovex-p-8': 'var(--inovex-elements-p-8)',
        'inovex-p-9': 'var(--inovex-elements-p-9)',
        'inovex-p-10': 'var(--inovex-elements-p-10)',
        'inovex-p-11': 'var(--inovex-elements-p-11)',
        'inovex-p-12': 'var(--inovex-elements-p-12)',
        'inovex-informational': 'var(--inovex-elements-informational)',
        'inovex-informational-light':
          'var(--inovex-elements-informational-light)',
        'inovex-success': 'var(--inovex-elements-success)',
        'inovex-success-light': 'var(--inovex-elements-success-light)',
        'inovex-error': 'var(--inovex-elements-error)',
        'inovex-error-light': 'var(--inovex-elements-error-light)',
        'inovex-warning': 'var(--inovex-elements-warning)',
        'inovex-warning-light': 'var(--inovex-elements-warning-light)',
      },
    },
  },
  plugins: [],
};
