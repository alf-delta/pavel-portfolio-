import '../style.css'; // Auto-inject styles via Vite

import { Nav } from './js/modules/Nav';
import { Reveal } from './js/modules/Reveal';
import { Configurator } from './js/modules/Configurator';
import { IdentityDecoder } from './js/modules/IdentityDecoder';
import { CaseStudyNav } from './js/modules/CaseStudyNav';
import { CaseFilter } from './js/modules/CaseFilter';

document.addEventListener('DOMContentLoaded', () => {
    new Nav();
    new Reveal();

    // Page modules: each one is a no-op when its markup is absent
    new Configurator();
    new IdentityDecoder();
    new CaseStudyNav();
    new CaseFilter();
});
