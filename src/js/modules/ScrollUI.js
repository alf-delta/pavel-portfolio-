export class ScrollUI {
    constructor() {
        this.nav = document.querySelector('.top-center');
        this.footer = document.querySelector('.bottom-center');
        this.lastScrollTop = 0;
        this.scrollThreshold = 10;
        this.isMobile = window.innerWidth <= 768;

        this.init();
    }

    init() {
        if (!this.nav || !this.footer) return;

        window.addEventListener('resize', () => {
            this.isMobile = window.innerWidth <= 768;
            if (!this.isMobile) {
                this.resetUI();
            }
        });

        window.addEventListener('scroll', () => {
            if (!this.isMobile) return;
            this.handleScroll();
        }, { passive: true });
    }

    handleScroll() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop < 0) return; // Ignore negative scroll (bounce)

        // If scrolled down more than threshold
        if (Math.abs(scrollTop - this.lastScrollTop) > this.scrollThreshold) {
            if (scrollTop > this.lastScrollTop && scrollTop > 50) {
                // Scrolling DOWN
                this.hideUI();
            } else {
                // Scrolling UP
                this.showUI();
            }
        }

        this.lastScrollTop = scrollTop;
    }

    hideUI() {
        this.nav.classList.add('ui-hidden');
        this.footer.classList.add('ui-hidden');
    }

    showUI() {
        this.nav.classList.remove('ui-hidden');
        this.footer.classList.remove('ui-hidden');
    }

    resetUI() {
        this.nav.classList.remove('ui-hidden');
        this.footer.classList.remove('ui-hidden');
    }
}
