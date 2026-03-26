import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
      projects: resolve(__dirname, 'projects/index.html'),
      about: resolve(__dirname, 'about/index.html'),
      contact: resolve(__dirname, 'contact/index.html'),
      main: resolve(__dirname, 'index.html')
      }
    }
  }
})
