import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"https://lauradauzat.github.io/mrs-capuche/", 
  publicDir:"https://lauradauzat.github.io/mrs-capuche/public/",
})
