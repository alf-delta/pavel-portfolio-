import gsap from 'gsap';

export class IdentityDecoder {
    constructor() {
        this.capItems = document.querySelectorAll('.cap-item');
        this.decoderContent = document.getElementById('decoder-content');

        if (this.capItems.length > 0 && this.decoderContent) {
            this.init();
        }
    }

    init() {
        const descriptions = {
            "launch": "I can launch a product from the ground up. I determine how to package it properly. I explain its value clearly so people see why they need it. I create communication from scratch. I know how to identify the first groups that respond quickly to a new category. I test ideas and select the language that the audience uses to describe their problem. I manage the whole process, from initial signs of demand to the first paying users.",
            "crisis": "I don't panic when graphs go down. I freeze non-essential spend, audit the funnel for leaks, and pivot the message to match the current reality. I turn volatility into a stress-test for the system, ensuring the business survives the storm and emerges leaner.",
            "digital": "I take legacy processes where 'Excel files are emailed manually' and turn them into automated pipelines. I force traditional businesses to think in data points and API integrations, moving them from intuition-based decisions to data-driven operations.",
            "team": "I don't hire 'hands', I hire owners. I know how to assemble a distributed team of niche experts (PR, PPC, Dev) that outperforms a bloated in-house department. I set the rhythm, KPIs, and culture so they execute without constant oversight.",
            "unit": "Growth without profit is just vanity. I obsess over LTV/CAC ratios. I analyze cohorts to understand real profitability, cutting channels that bring volume but burn cash, and redirecting resources to where the math actually works.",
            "gtm": "I bridge the gap between 'Product Ready' and 'Market Aware'. I define the ideal customer profile, choose the attack vector, and orchestrate the first wave of traction across channels before burning major budget on scaling.",
            "tech": "I stop teams from working in silos. I integrate CRM, Analytics, and Ad Platforms into one source of truth. If it's not tracked, it didn't happen. I build the dashboard that tells the real truth about business performance.",
            "cross": "I speak 'Developer', 'Sales', and 'Executive'. I align these departments so Product stops building features nobody sells, and Sales stops selling features nobody built. I act as the translation layer that synchronizes the business."
        };

        this.capItems.forEach(item => {
            item.addEventListener('click', () => {
                this.capItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');

                const key = item.getAttribute('data-cap');
                const text = descriptions[key];

                gsap.to(this.decoderContent, {
                    opacity: 0,
                    duration: 0.2,
                    onComplete: () => {
                        this.decoderContent.innerText = text;
                        gsap.to(this.decoderContent, { opacity: 1, duration: 0.3 });
                    }
                });
            });
        });
    }
}
