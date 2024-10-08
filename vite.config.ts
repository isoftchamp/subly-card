/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    environment: 'jsdom', // Use jsdom for testing React components
    setupFiles: './test/setupTests.ts', // Path to your setup file
    globals: true, // If you want to use globals like `describe`, `it`, etc.
  },
});
