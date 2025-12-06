import gsap from 'gsap';

export class Preloader {
    constructor() {
        this.el = document.querySelector('.preloader');
        this.hero = document.querySelector('.hero');
        this.ui = document.querySelector('.ui-layer');
        this.barFill = document.querySelector('.bar-fill');
        this.loaderCounters = document.querySelectorAll('.loader-counter');

        this.init();
    }

    init() {
        // Failsafe
        setTimeout(() => {
            if (this.el && this.el.style.display !== 'none') {
                gsap.to(this.el, { y: '-100%', duration: 1, ease: "power4.inOut" });
            }
        }, 4000);

        // Animation Timeline
        const tl = gsap.timeline();
        let progress = { value: 0 };

        gsap.to(progress, {
            value: 100,
            duration: 1.5,
            ease: "power2.inOut",
            onUpdate: () => {
                if (this.barFill) this.barFill.style.width = Math.round(progress.value) + '%';
                if (this.loaderCounters.length) {
                    this.loaderCounters.forEach(el => el.innerText = Math.round(progress.value));
                }
            },
            onComplete: () => {
                tl.to(this.el, { y: '-100%', duration: 1, ease: "power4.inOut" })
                    .from(this.hero, { y: 30, opacity: 0, duration: 1, ease: "power2.out" }, "-=0.5")
                    .from(this.ui, { opacity: 0, duration: 1 }, "-=0.8");
            }
        });
    }
}
