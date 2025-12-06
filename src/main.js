import '../style.css'; // Auto-inject styles via Vite

import { Preloader } from './js/modules/Preloader';
import { SmoothScroll } from './js/modules/SmoothScroll';
import { Background } from './js/modules/Background';
import { SlotMachine } from './js/modules/SlotMachine';
import { Configurator } from './js/modules/Configurator';
import { IdentityDecoder } from './js/modules/IdentityDecoder';
import { CaseStudyNav } from './js/modules/CaseStudyNav';
import { CaseFilter } from './js/modules/CaseFilter';

// Mobile Viewport Fix
const setVh = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};
setVh();
window.addEventListener('resize', setVh);

document.addEventListener("DOMContentLoaded", () => {
    // 1. System Core
    new Preloader();
    new SmoothScroll();
    new Background();

    // 2. Feature Modules
    new SlotMachine();
    new Configurator();
    new IdentityDecoder();
    new CaseStudyNav();
    new CaseFilter();
});
