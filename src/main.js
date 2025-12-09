import '../style.css'; // Auto-inject styles via Vite

import { Preloader } from './js/modules/Preloader';
import { SmoothScroll } from './js/modules/SmoothScroll';
import { Background } from './js/modules/Background';
import { SlotMachine } from './js/modules/SlotMachine';
import { Configurator } from './js/modules/Configurator';
import { IdentityDecoder } from './js/modules/IdentityDecoder';
import { CaseStudyNav } from './js/modules/CaseStudyNav';
import { CaseFilter } from './js/modules/CaseFilter';
import { SeoToggle } from './js/modules/SeoToggle';
import { LanguageSwitch } from './js/modules/LanguageSwitch';
import { ScrollUI } from './js/modules/ScrollUI';
// Mobile Viewport Fix (Removed in favor of CSS svh)
// const setVh = () => { ... }

document.addEventListener("DOMContentLoaded", () => {
    // 1. System Core
    new Preloader();
    new SmoothScroll();
    new Background();
    new ScrollUI();

    // 2. Feature Modules
    new SlotMachine();
    new Configurator();
    new IdentityDecoder();
    new CaseStudyNav();
    new CaseFilter();
    new SeoToggle();
    new LanguageSwitch();
});
