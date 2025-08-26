import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   base: '/',
  build: {
    // Optimisations de build
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          maps: ['@googlemaps/js-api-loader'],
          ui: ['lucide-react'],
        },
      },
    },
    // Compression des assets
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Configuration PWA et cache
  server: {
  host: '0.0.0.0',
  port: 5173,
  hmr: {
    clientPort: 443
  }
},
});
