export class Nav {
    constructor() {
        this.header = document.querySelector('.site-header');
        this.btn = document.querySelector('.menu-btn');
        this.nav = document.getElementById('site-nav');

        if (this.header && this.btn && this.nav) {
            this.init();
        }
    }

    init() {
        this.btn.addEventListener('click', () => this.toggle());

        // Close after choosing a link or pressing Escape
        this.nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => this.set(false)));
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.set(false);
        });
        window.matchMedia('(min-width: 921px)').addEventListener('change', () => this.set(false));
    }

    toggle() {
        this.set(!document.body.classList.contains('menu-open'));
    }

    set(open) {
        document.body.classList.toggle('menu-open', open);
        this.btn.setAttribute('aria-expanded', String(open));
    }
}
