import { defineConfig } from 'vite';

export default defineConfig({
    root: './',
    base: './', // Relative base for static deployment compatibility
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: true,
        rollupOptions: {
            input: {
                main: 'index.html',
                experience: 'experience.html',
                configurator: 'configurator.html',
                caseBewell: 'case-bewell.html'
            }
        }
    },
    server: {
        port: 3000,
        open: true
    }
});
