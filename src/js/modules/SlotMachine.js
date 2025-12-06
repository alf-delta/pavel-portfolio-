import gsap from 'gsap';

export class SlotMachine {
    constructor() {
        this.trackLeft = document.getElementById('slot-left');
        this.trackRight = document.getElementById('slot-right');

        if (this.trackLeft && this.trackRight) {
            this.init();
        }
    }

    init() {
        const slotPairs = [
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

        let currentIndex = 0;

        setInterval(() => {
            currentIndex = (currentIndex + 1) % slotPairs.length;
            const nextPair = slotPairs[currentIndex];
            this.animateWord(this.trackLeft, nextPair.l);
            this.animateWord(this.trackRight, nextPair.r);
        }, 4000);
    }

    animateWord(container, newText) {
        const oldWord = container.querySelector('.slot-word');
        const newWord = document.createElement('div');
        newWord.classList.add('slot-word');
        newWord.innerText = newText;
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
            tl.to(oldWord, { yPercent: -100, duration: 0.8, ease: "power2.inOut", onComplete: () => oldWord.remove() }, 0);
        }
        tl.to(newWord, { yPercent: 0, duration: 0.8, ease: "power2.inOut" }, 0);
    }
}
