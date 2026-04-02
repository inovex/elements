import { defineVitestConfig } from '@stencil/vitest/config';

export default defineVitestConfig({
  stencilConfig: './stencil.config.ts',
  test: {
    projects: [
      {
        test: {
          name: 'spec',
          include: ['src/**/*.vitest-spec.tsx'], // Only run tests that end with .stencil-spec.tsx for now
          environment: 'stencil',
          setupFiles: ['./vitest-setup.ts'],
        },
      },
    ],
  },
});
