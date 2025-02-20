import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
 plugins: [react()],
 base: './',
 server: {
   host: '0.0.0.0', // Allows external access
   port: 3000,      // Forces port 3000
   strictPort: true // Ensures it doesn't change ports
 },
 css: {
   devSourcemap: false,
 },
});
