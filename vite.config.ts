import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.pdf'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})