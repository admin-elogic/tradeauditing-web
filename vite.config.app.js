import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config for the App Portal (app.tradeauditing.com)
export default defineConfig({
    plugins: [react()],
    root: './',
    build: {
        outDir: 'dist-app',
        emptyOutDir: true,
    },
    define: {
        'import.meta.env.VITE_APP_MODE': JSON.stringify('app'),
    },
})
