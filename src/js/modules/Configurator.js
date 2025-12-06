import gsap from 'gsap';

export class Configurator {
    constructor() {
        this.generateBtn = document.getElementById('generate-btn');
        this.outputDiv = document.querySelector('.projection-output');

        if (this.generateBtn && this.outputDiv) {
            this.init();
        }
    }

    init() {
        const approaches = {
            "burn": "In a high-burn scenario, creativity is secondary. The priority is forensic analytics. I would freeze experimental budgets and refocus capital strictly on high-intent vectors until LTV/CAC ratios stabilize.",
            "chaos": "Chaos implies a lack of protocols. My role here shifts from 'growth' to 'governance'. I would document the user journey, assign clear ownership for data hygiene, and implement a single source of truth (CRM) before scaling.",
            "stagnation": "Stagnation means the current channels are exhausted. Optimization won't help here; innovation will. I would initiate rapid-hypothesis testing cycles to find a new market fit or a new audience segment."
        };

        const blueprints = {
            "system": {
                timeline: [
                    { t: "PHASE 1", p: "THE AUDIT", d: "Mapping the current mess. Identifying where data breaks and where leads leak." },
                    { t: "PHASE 2", p: "INTEGRATION", d: "Connecting disparate tools (AdTech + CRM) into a unified ecosystem." },
                    { t: "PHASE 3", p: "AUTONOMY", d: "Creating playbooks so the system runs without constant manual intervention." },
                    { t: "RESULT", p: "SCALABILITY", d: "Infrastructure capable of handling x10 volume without breaking." }
                ],
                outcome: {
                    title: "Operational Autonomy",
                    desc: "You move from 'Founder-doer' to 'Founder-manager'. Marketing becomes a transparent dashboard, not a black box of anxiety.",
                    m1: "100% Data Accuracy", l1: "Attribution Confidence", m2: "0hrs/week", l2: "Manual Data Entry"
                }
            },
            "economics": {
                timeline: [
                    { t: "PHASE 1", p: "TRIAGE", d: "Cutting the 'bleeding' campaigns immediately. Revenue might drop, but profit increases." },
                    { t: "PHASE 2", p: "EFFICIENCY", d: "Optimizing the funnel conversion. Fixing checkout, increasing email retention." },
                    { t: "PHASE 3", p: "SCALING", d: "Slowly increasing spend only on unit-positive channels." },
                    { t: "RESULT", p: "PROFITABILITY", d: "Marketing transforms from a cost center to a profit center." }
                ],
                outcome: {
                    title: "Predictable Unit Economy",
                    desc: "You stop burning cash hoping for growth. Every dollar spent has a clear, measurable return timeline. The business becomes investable.",
                    m1: "Positive", l1: "Contribution Margin", m2: "3:1 Ratio", l2: "Target LTV/CAC"
                }
            },
            "scale": {
                timeline: [
                    { t: "PHASE 1", p: "HYPOTHESIS", d: "Testing 5-10 new angles/creatives weekly. Speed over perfection." },
                    { t: "PHASE 2", p: "TRACTION", d: "Doubling down on the winner. Ignoring efficiency for the sake of market share." },
                    { t: "PHASE 3", p: "DOMINANCE", d: "Expanding to adjacent channels to surround the user." },
                    { t: "RESULT", p: "LEADERSHIP", d: "Top-of-mind brand awareness and category leadership." }
                ],
                outcome: {
                    title: "Market Dominance",
                    desc: "Your brand becomes the category default. Competitors are forced to react to your moves. Growth is driven by brand equity, lowering long-term CAC.",
                    m1: "x2-x5", l1: "Market Share Growth", m2: "Top-of-Mind", l2: "Brand Awareness"
                }
            }
        };

        this.generateBtn.addEventListener('click', (e) => {
            e.preventDefault();

            const type = document.getElementById('type').value;
            const frustration = document.getElementById('frustration').value;
            const action = document.getElementById('action').value;

            if (!type || !frustration || !action) {
                alert("Please select all parameters to generate logic.");
                return;
            }

            const diagText = approaches[frustration];
            const blueprintData = blueprints[action];

            // 1. Inject Diagnosis
            const diagEl = document.getElementById('result-diagnosis');
            if (diagEl) diagEl.innerText = diagText;

            // 2. Inject Timeline
            const timelineContainer = document.getElementById('result-timeline');
            if (timelineContainer) {
                timelineContainer.innerHTML = '';
                blueprintData.timeline.forEach(item => {
                    const node = document.createElement('div');
                    node.classList.add('time-node');
                    node.innerHTML = `
                        <div class="time-label">${item.t}</div>
                        <div class="time-phase">[ ${item.p} ]</div>
                        <div class="time-desc">${item.d}</div>
                    `;
                    timelineContainer.appendChild(node);
                });
            }

            // 3. Inject Outcome (Target State)
            const outcomeContainer = document.getElementById('result-outcome');
            if (outcomeContainer) {
                const out = blueprintData.outcome;
                outcomeContainer.innerHTML = `
                    <div class="outcome-block">
                        <div class="outcome-header">
                            <span>// TARGET STATE T+12 MONTHS</span>
                            <span>PROJECTION</span>
                        </div>
                        <div class="outcome-title">${out.title}</div>
                        <div class="outcome-desc">${out.desc}</div>
                        <div class="outcome-metrics">
                            <div class="metric-item"><div class="metric-val">${out.m1}</div><div class="metric-lbl">${out.l1}</div></div>
                            <div class="metric-item"><div class="metric-val">${out.m2}</div><div class="metric-lbl">${out.l2}</div></div>
                        </div>
                    </div>
                `;
            }

            // 4. Inject Cycle
            const cycleContainer = document.getElementById('result-cycle');
            if (cycleContainer) {
                cycleContainer.innerHTML = `
                    <div class="cycle-container">
                        <div class="cycle-label">AGILE OPTIMIZATION LOOP</div>
                        <div class="cycle-grid">
                            <div class="cycle-step s1"><div class="step-num">01</div><div class="step-name">DATA</div></div>
                            <div class="cycle-step s2"><div class="step-num">02</div><div class="step-name">INSIGHT</div></div>
                            <div class="cycle-step s4"><div class="step-num">04</div><div class="step-name">SCALE</div></div>
                            <div class="cycle-step s3"><div class="step-num">03</div><div class="step-name">ITERATE</div></div>
                        </div>
                        <div class="cycle-desc">We don't stop at deployment. The system captures live data (01), identifies bottlenecks (02), tests solutions (03), and deploys the winner globally. (04). Then it repeats.</div>
                    </div>
                `;
            }

            // 5. Reveal & Animate
            this.outputDiv.style.display = 'block';

            if (window.lenis) {
                window.lenis.scrollTo(this.outputDiv, { offset: -50 });
            } else {
                this.outputDiv.scrollIntoView({ behavior: "smooth" });
            }

            const bar = document.querySelector('.processing-line');
            const content = document.querySelector('.terminal-content');

            if (content) content.style.opacity = '0';
            if (bar) bar.style.width = '0%';

            if (bar) {
                gsap.to(bar, {
                    width: '100%', duration: 1.0, ease: "power2.inOut", onComplete: () => {
                        if (content) gsap.to(content, { opacity: 1, duration: 0.5 });
                    }
                });
            }
        });
    }
}
