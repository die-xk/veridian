import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'
import fs from 'fs'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      ext: '.gz'
    }),
    {
      name: 'copy-files',
      writeBundle() {
        // Ensure the public directory exists in the build output
        if (!fs.existsSync('dist')) {
          fs.mkdirSync('dist')
        }

        // Copy robots.txt and sitemap.xml
        fs.copyFileSync(
          path.resolve(__dirname, 'public/robots.txt'),
          path.resolve(__dirname, 'dist/robots.txt')
        )
        fs.copyFileSync(
          path.resolve(__dirname, 'public/sitemap.xml'),
          path.resolve(__dirname, 'dist/sitemap.xml')
        )
      }
    }
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['react-icons']
        }
      }
    }
  }
})
