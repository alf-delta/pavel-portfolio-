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
                cases: 'cases.html',
                caseBewell: 'case-bewell.html',
                caseBorges: 'case-borges.html',
                caseFmcgMda: 'case-fmcg-mda.html',
                caseFragrance: 'case-fragrance.html',
                caseNycwc: 'case-nycwc.html',
                caseProcter: 'case-procter.html',
                caseVivienne: 'case-vivienne.html',
                // RU Versions
                ruMain: 'ru/index.html',
                ruExperience: 'ru/experience.html',
                ruConfigurator: 'ru/configurator.html',
                ruCases: 'ru/cases.html',
                ruCaseBewell: 'ru/case-bewell.html',
                ruCaseBorges: 'ru/case-borges.html',
                ruCaseFmcgMda: 'ru/case-fmcg-mda.html',
                ruCaseFragrance: 'ru/case-fragrance.html',
                ruCaseNycwc: 'ru/case-nycwc.html',
                ruCaseProcter: 'ru/case-procter.html',
                ruCaseVivienne: 'ru/case-vivienne.html'
            }
        }
    },
    server: {
        port: 3000,
        open: true
    }
});
