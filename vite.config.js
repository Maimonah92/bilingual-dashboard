import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/bilingual-dashboard/', // 👈 Tells Vite where your app is hosted
  plugins: [react()],
});
