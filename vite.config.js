import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Sav/',
  plugins: [react()],
  build: {
    emptyOutDir: true,
  },
});
