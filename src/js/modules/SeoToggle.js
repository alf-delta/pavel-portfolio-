export class SeoToggle {
    constructor() {
        this.block = document.querySelector('.seo-enhanced-block');

        if (this.block) {
            this.init();
        }
    }

    init() {
        // Create Toggle Button dynamically if not in HTML, or expect it in HTML.
        // Let's create it dynamically to keep HTML clean if preferred, 
        // OR select it if we add it to HTML. 
        // The plan said "Update index.html", so finding it is safer.

        // Actually, creating it here ensures it only appears if JS runs, 
        // but for SEO/CLS, static HTML is better.
        // I will assume it is added to HTML as per plan.
        this.btn = document.getElementById('seo-toggle-btn');

        if (this.btn) {
            this.btn.addEventListener('click', () => {
                this.block.classList.toggle('expanded');

                // Update button text
                if (this.block.classList.contains('expanded')) {
                    this.btn.textContent = '[ СВЕРНУТЬ ТЕКСТ ]';
                } else {
                    this.btn.textContent = '[ ЧИТАТЬ ВЕСЬ ТЕКСТ ]';
                }
            });
        }
    }
}
