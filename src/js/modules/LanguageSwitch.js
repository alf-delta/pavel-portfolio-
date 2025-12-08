export class LanguageSwitch {
    constructor() {
        this.currentLang = window.location.pathname.includes('/ru/') ? 'ru' : 'en';
        this.init();
    }

    init() {
        // Create container
        const container = document.createElement('div');
        container.className = 'lang-switch';

        // Logic: If RU, show Link to EN. If EN, show Link to RU.
        // We want a toggle look: "EN / RU" with active class.

        const isRu = this.currentLang === 'ru';

        const enSpan = document.createElement('span');
        enSpan.textContent = 'EN';
        enSpan.className = isRu ? 'lang-opt' : 'lang-opt active';
        enSpan.onclick = () => this.switchLang('en');

        const sep = document.createElement('span');
        sep.textContent = '/';
        sep.className = 'lang-sep';

        const ruSpan = document.createElement('span');
        ruSpan.textContent = 'RU';
        ruSpan.className = isRu ? 'lang-opt active' : 'lang-opt';
        ruSpan.onclick = () => this.switchLang('ru');

        container.appendChild(enSpan);
        container.appendChild(sep);
        container.appendChild(ruSpan);

        // Append to UI Layer
        const uiLayer = document.querySelector('.ui-layer');
        if (uiLayer) {
            uiLayer.appendChild(container);
        } else {
            console.warn('UI Layer not found for LangSwitch');
        }
    }

    switchLang(targetLang) {
        if (targetLang === this.currentLang) return;

        const currentPath = window.location.pathname;
        let newPath;

        if (targetLang === 'ru') {
            // EN -> RU
            // If root /, go to /ru/
            // If /cases.html, go to /ru/cases.html
            // If /index.html, go to /ru/index.html
            if (currentPath === '/' || currentPath === '') {
                newPath = '/ru/';
            } else if (!currentPath.includes('/ru/')) {
                newPath = '/ru' + currentPath;
            }
        } else {
            // RU -> EN
            // Remove /ru/ from path
            newPath = currentPath.replace('/ru', '');
            if (newPath === '') newPath = '/';
        }

        if (newPath) {
            window.location.href = newPath;
        }
    }
}
