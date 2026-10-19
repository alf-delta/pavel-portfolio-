export class Reveal {
    constructor() {
        this.items = document.querySelectorAll('.reveal');
        if (!this.items.length) return;

        if (!('IntersectionObserver' in window)) {
            this.items.forEach((el) => el.classList.add('in'));
            return;
        }

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in');
                        io.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
        );
        this.items.forEach((el) => io.observe(el));
    }
}
