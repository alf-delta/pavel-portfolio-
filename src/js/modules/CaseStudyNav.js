export class CaseStudyNav {
    constructor() {
        this.dots = document.querySelectorAll('.nav-dot');
        this.sections = document.querySelectorAll('header, .chapter, .summary-section');

        if (this.dots.length > 0 && this.sections.length > 0) {
            this.init();
        }
    }

    init() {
        // Click to scroll
        this.dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const targetId = dot.getAttribute('data-target');
                const targetEl = document.getElementById(targetId);
                if (targetEl) {
                    if (window.lenis) {
                        window.lenis.scrollTo(targetEl, { offset: -100 });
                    } else {
                        targetEl.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });

        // Intersection Observer for highlighting
        const observerOptions = { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    this.dots.forEach(dot => {
                        dot.classList.toggle('active', dot.getAttribute('data-target') === id);
                    });
                }
            });
        }, observerOptions);

        this.sections.forEach(sec => observer.observe(sec));
    }
}
