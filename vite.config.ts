import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import generouted from '@generouted/react-router/plugin'
import * as path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), generouted()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
