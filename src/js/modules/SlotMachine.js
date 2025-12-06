import gsap from 'gsap';

export class SlotMachine {
    constructor() {
        this.trackLeft = document.getElementById('slot-left');
        this.trackRight = document.getElementById('slot-right');
        this.timer = null;
        this.currentIndex = 0;
        this.isActive = false;

        this.slotPairs = [
            { l: "Product", r: "Operations" },
            { l: "Growth", r: "Infrastructure" },
            { l: "Ecosystem", r: "Design" },
            { l: "Process", r: "Engineering" },
            { l: "Route", r: "Management" },
            { l: "Signal", r: "Structure" },
            { l: "Strategic", r: "Execution" },
            { l: "Experience", r: "Frameworks" },
            { l: "System", r: "Architecture" }
        ];

        if (this.trackLeft && this.trackRight) {
            this.init();
        }
    }

    init() {
        // Initial start
        this.startLoop();

        // Robust Visibility Handler
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.stopLoop();
            } else {
                // FORCE RESET on wake to clear "meat"
                this.resetContainer(this.trackLeft);
                this.resetContainer(this.trackRight);
                this.startLoop();
            }
        });
    }

    resetContainer(container) {
        // Kill all GSAP animations in this container
        gsap.killTweensOf(container.children);
        // Wipe content
        container.innerHTML = '';
    }

    startLoop() {
        if (this.isActive) return;
        this.isActive = true;
        this.tick();
    }

    stopLoop() {
        this.isActive = false;
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

    tick() {
        if (!this.isActive) return;

        // Schedule next tick BEFORE animation to keep cadence, 
        // but use setTimeout to avoid overlap drift
        this.timer = setTimeout(() => {
            if (!this.isActive || document.hidden) return;

            this.currentIndex = (this.currentIndex + 1) % this.slotPairs.length;
            const nextPair = this.slotPairs[this.currentIndex];

            this.animateWord(this.trackLeft, nextPair.l);
            this.animateWord(this.trackRight, nextPair.r);

            // Recursive call
            this.tick();
        }, 4000);
    }

    animateWord(container, newText) {
        // Prune: If there are more than 2 words, something is wrong. Kill extra.
        const children = Array.from(container.children);
        if (children.length > 1) {
            // Keep only the last one (current visible), remove others instantly
            for (let i = 0; i < children.length - 1; i++) {
                gsap.killTweensOf(children[i]);
                children[i].remove();
            }
        }

        const oldWord = container.lastElementChild;

        const newWord = document.createElement('div');
        newWord.classList.add('slot-word');
        newWord.innerText = newText;
        // Style must match CSS absolute positioning
        newWord.style.position = 'absolute';
        newWord.style.top = '0';
        newWord.style.left = '0';
        newWord.style.width = '100%';
        newWord.style.height = '100%';
        newWord.style.display = 'flex';
        newWord.style.alignItems = 'center';
        newWord.style.justifyContent = 'center';

        gsap.set(newWord, { yPercent: 100 });
        container.appendChild(newWord);

        const tl = gsap.timeline();

        if (oldWord) {
            tl.to(oldWord, {
                yPercent: -100,
                duration: 0.8,
                ease: "power2.inOut",
                onComplete: () => {
                    oldWord.remove();
                }
            }, 0);
        }

        tl.to(newWord, { yPercent: 0, duration: 0.8, ease: "power2.inOut" }, 0);
    }
}
