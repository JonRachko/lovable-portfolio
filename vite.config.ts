import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
// Optional: only if you actually have this dependency installed
import { componentTagger } from 'lovable-tagger'

export default defineConfig({
  plugins: [
    react(),
    // include only if it's in package.json; otherwise remove this line
    componentTagger && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/',
  build: { outDir: 'docs' },
})
