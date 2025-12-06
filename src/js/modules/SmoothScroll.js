import Lenis from '@studio-freight/lenis';

export class SmoothScroll {
    constructor() {
        this.lenis = null;
        this.init();
    }

    init() {
        // Initialize Lenis
        this.lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
        });

        const rAF = (time) => {
            this.lenis.raf(time);
            requestAnimationFrame(rAF);
        }
        requestAnimationFrame(rAF);

        // Expose to window as per original (optional, but good for debug)
        window.lenis = this.lenis;

        // Anchor Navigation
        this.setupAnchors();
    }

    setupAnchors() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const targetId = anchor.getAttribute('href');
                if (targetId === '#' || targetId === '') return;

                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection && this.lenis) {
                    this.lenis.scrollTo(targetSection, { duration: 1.5, offset: -50 });
                }
            });
        });
    }
}
