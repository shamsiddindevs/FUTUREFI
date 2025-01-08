import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  define: {
    __APP_ENV__: import.meta.env.VITE_VERCEL_ENV,
  },
  plugins: [react()],
    
})
