import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'lib/main.ts'),
      name: 'NoSleep',
      fileName: 'no-sleep',
    },
  },
  plugins: [dts({ rollupTypes: true })],
});
