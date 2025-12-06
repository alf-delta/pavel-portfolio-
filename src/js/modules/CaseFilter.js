export class CaseFilter {
    constructor() {
        this.filters = document.querySelectorAll('.filter-btn');
        this.cards = document.querySelectorAll('.case-card');
        this.resetBtn = document.getElementById('reset-filters');
        this.noResults = document.querySelector('.no-results');

        // Only run if filters exist on page
        if (this.filters.length > 0) {
            this.init();
        }
    }

    init() {
        this.filters.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                this.filterGrid();
            });
        });

        if (this.resetBtn) {
            this.resetBtn.addEventListener('click', () => {
                this.filters.forEach(btn => btn.classList.remove('active'));
                this.filterGrid();
            });
        }
    }

    filterGrid() {
        // Collect active filters
        const activeFilters = Array.from(this.filters)
            .filter(btn => btn.classList.contains('active'))
            .map(btn => btn.dataset.filter);

        let visibleCount = 0;

        this.cards.forEach(card => {
            const cardTags = card.dataset.tags || '';

            // Mode: OR Logic (Show if matches ANY selected filter)
            // If no filters are active, show everything
            if (activeFilters.length === 0) {
                card.classList.remove('hidden');
                visibleCount++;
                return;
            }

            // Check for match
            const hasMatch = activeFilters.some(tag => cardTags.includes(tag));

            if (hasMatch) {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        });

        // Handle empty state
        if (this.noResults) {
            this.noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        }
    }
}
