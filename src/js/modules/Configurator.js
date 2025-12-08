import gsap from 'gsap';

export class Configurator {
    constructor() {
        this.generateBtn = document.getElementById('generate-btn');
        this.outputDiv = document.querySelector('.projection-output');
        this.lang = document.documentElement.lang === 'ru' ? 'ru' : 'en';

        if (this.generateBtn && this.outputDiv) {
            this.init();
        }
    }

    init() {
        const content = {
            en: {
                approaches: {
                    "burn": "In a high-burn scenario, creativity is secondary. The priority is forensic analytics. I would freeze experimental budgets and refocus capital strictly on high-intent vectors until LTV/CAC ratios stabilize.",
                    "chaos": "Chaos implies a lack of protocols. My role here shifts from 'growth' to 'governance'. I would document the user journey, assign clear ownership for data hygiene, and implement a single source of truth (CRM) before scaling.",
                    "stagnation": "Stagnation means the current channels are exhausted. Optimization won't help here; innovation will. I would initiate rapid-hypothesis testing cycles to find a new market fit or a new audience segment."
                },
                blueprints: {
                    "system": {
                        timeline: [
                            { t: "PHASE 1", p: "THE AUDIT", d: "Mapping the current mess. Identifying where data breaks and where leads leak." },
                            { t: "PHASE 2", p: "INTEGRATION", d: "Connecting disparate tools (AdTech + CRM) into a unified ecosystem." },
                            { t: "PHASE 3", p: "AUTONOMY", d: "Creating playbooks so the system runs without constant manual intervention." },
                            { t: "RESULT", p: "SCALABILITY", d: "Infrastructure capable of handling x10 volume without breaking." }
                        ],
                        outcome: {
                            titleHeader: "// TARGET STATE T+12 MONTHS",
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
                            titleHeader: "// TARGET STATE T+12 MONTHS",
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
                            titleHeader: "// TARGET STATE T+12 MONTHS",
                            title: "Market Dominance",
                            desc: "Your brand becomes the category default. Competitors are forced to react to your moves. Growth is driven by brand equity, lowering long-term CAC.",
                            m1: "x2-x5", l1: "Market Share Growth", m2: "Top-of-Mind", l2: "Brand Awareness"
                        }
                    }
                },
                cycle: {
                    label: "AGILE OPTIMIZATION LOOP",
                    steps: ["DATA", "INSIGHT", "ITERATE", "SCALE"],
                    desc: "We don't stop at deployment. The system captures live data (01), identifies bottlenecks (02), tests solutions (03), and deploys the winner globally (04). Then it repeats."
                },
                alert: "Please select all parameters to generate logic."
            },
            ru: {
                approaches: {
                    "burn": "В сценарии сжигания денег (Cash Burn) креатив вторичен. Приоритет — жесткая аналитика. Я заморожу экспериментальные бюджеты и перенаправлю капитал строго в векторы с высоким интентом, пока соотношение LTV/CAC не стабилизируется.",
                    "chaos": "Хаос означает отсутствие протоколов. Моя роль здесь меняется с «роста» на «архитектуру». Я задокументирую путь пользователя, назначу ответственных за гигиену данных и внедрю единый источник правды (CRM) перед масштабированием.",
                    "stagnation": "Стагнация означает, что каналы исчерпаны. Оптимизация не поможет — нужна инновация. Я запущу циклы быстрых гипотез, чтобы найти новый Product-Market Fit или неохваченный сегмент."
                },
                blueprints: {
                    "system": {
                        timeline: [
                            { t: "ФАЗА 1", p: "АУДИТ", d: "Картирование хаоса. Выявление разрывов в данных и мест утечки лидов." },
                            { t: "ФАЗА 2", p: "ИНТЕГРАЦИЯ", d: "Связывание разрозненных инструментов (AdTech + CRM) в единую экосистему." },
                            { t: "ФАЗА 3", p: "АВТОНОМИЯ", d: "Создание плейбуков, чтобы система работала без постоянного ручного вмешательства." },
                            { t: "ИТОГ", p: "МАСШТАБИРУЕМОСТЬ", d: "Инфраструктура, способная выдержать рост объема в 10 раз без сбоев." }
                        ],
                        outcome: {
                            titleHeader: "// ЦЕЛЕВОЕ СОСТОЯНИЕ T+12 МЕС",
                            title: "Операционная Автономия",
                            desc: "Вы переходите из позиции «Фаундер-исполнитель» в позицию «Фаундер-управленец». Маркетинг становится прозрачной панелью, а не черным ящиком.",
                            m1: "100% Точность", l1: "Доверие Атрибуции", m2: "0 часов/нед", l2: "Ручной ввод данных"
                        }
                    },
                    "economics": {
                        timeline: [
                            { t: "ФАЗА 1", p: "КУПИРОВАНИЕ", d: "Отключение убыточных кампаний. Выручка может упасть, но прибыль вырастет." },
                            { t: "ФАЗА 2", p: "ЭФФЕКТИВНОСТЬ", d: "Оптимизация воронки. Починка чекаута, увеличение удержания через email-маркетинг." },
                            { t: "ФАЗА 3", p: "МАСШТАБ", d: "Медленное увеличение бюджета только на каналах с позитивной юнит-экономикой." },
                            { t: "ИТОГ", p: "ПРИБЫЛЬНОСТЬ", d: "Маркетинг трансформируется из центра затрат в центр прибыли." }
                        ],
                        outcome: {
                            titleHeader: "// ЦЕЛЕВОЕ СОСТОЯНИЕ T+12 МЕС",
                            title: "Предсказуемая Юнит-Экономика",
                            desc: "Вы перестаете сжигать деньги. Каждый потраченный доллар имеет понятный горизонт возврата. Бизнес становится привлекательным для инвестиций.",
                            m1: "Позитивная", l1: "Маржинальность (CM)", m2: "3:1", l2: "Целевой LTV/CAC"
                        }
                    },
                    "scale": {
                        timeline: [
                            { t: "ФАЗА 1", p: "ГИПОТЕЗЫ", d: "Тестирование 5-10 новых углов/креативов еженедельно. Скорость важнее идеальности." },
                            { t: "ФАЗА 2", p: "ТРЕКШН", d: "Ставка на победителя. Игнорирование эффективности ради захвата доли рынка." },
                            { t: "ФАЗА 3", p: "ДОМИНИРОВАНИЕ", d: "Экспансия в смежные каналы, чтобы окружить пользователя брендом." },
                            { t: "ИТОГ", p: "ЛИДЕРСТВО", d: "Статус Top-of-Mind и лидерство в категории." }
                        ],
                        outcome: {
                            titleHeader: "// ЦЕЛЕВОЕ СОСТОЯНИЕ T+12 МЕС",
                            title: "Рыночное Доминирование",
                            desc: "Ваш бренд — выбор по умолчанию. Конкуренты реагируют на ваши ходы. Рост движется силой бренда, снижая долгосрочный CAC.",
                            m1: "x2-x5", l1: "Рост Доли Рынка", m2: "Top-of-Mind", l2: "Узнаваемость Бренда"
                        }
                    }
                },
                cycle: {
                    label: "AGILE-ЦИКЛ ОПТИМИЗАЦИИ",
                    steps: ["ДАННЫЕ", "ИНСАЙТ", "ИТЕРАЦИЯ", "МАСШТАБ"],
                    desc: "Мы не останавливаемся на запуске. Система собирает живые данные (01), находит узкие места (02), тестирует решения (03) и масштабирует победителя (04). Затем цикл повторяется."
                },
                alert: "Пожалуйста, выберите все параметры для генерации логики."
            }
        };

        this.generateBtn.addEventListener('click', (e) => {
            e.preventDefault();

            const type = document.getElementById('type').value;
            const frustration = document.getElementById('frustration').value;
            const action = document.getElementById('action').value;
            const currentData = content[this.lang];

            if (!type || !frustration || !action) {
                alert(currentData.alert);
                return;
            }

            const diagText = currentData.approaches[frustration];
            const blueprintData = currentData.blueprints[action];

            const diagEl = document.getElementById('result-diagnosis');
            if (diagEl) diagEl.innerText = diagText;

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

            const outcomeContainer = document.getElementById('result-outcome');
            if (outcomeContainer) {
                const out = blueprintData.outcome;
                outcomeContainer.innerHTML = `
                    <div class="outcome-block">
                        <div class="outcome-header">
                            <span>${out.titleHeader}</span>
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

            const cycleContainer = document.getElementById('result-cycle');
            if (cycleContainer) {
                const cyc = currentData.cycle;
                cycleContainer.innerHTML = `
                    <div class="cycle-container">
                        <div class="cycle-label">${cyc.label}</div>
                        <div class="cycle-grid">
                            <div class="cycle-step s1"><div class="step-num">01</div><div class="step-name">${cyc.steps[0]}</div></div>
                            <div class="cycle-step s2"><div class="step-num">02</div><div class="step-name">${cyc.steps[1]}</div></div>
                            <div class="cycle-step s4"><div class="step-num">04</div><div class="step-name">${cyc.steps[3]}</div></div>
                            <div class="cycle-step s3"><div class="step-num">03</div><div class="step-name">${cyc.steps[2]}</div></div>
                        </div>
                        <div class="cycle-desc">${cyc.desc}</div>
                    </div>
                `;
            }

            this.outputDiv.style.display = 'block';

            if (window.lenis) {
                window.lenis.scrollTo(this.outputDiv, { offset: -50 });
            } else {
                this.outputDiv.scrollIntoView({ behavior: "smooth" });
            }

            const bar = document.querySelector('.processing-line');
            const contentDiv = document.querySelector('.terminal-content');

            if (contentDiv) contentDiv.style.opacity = '0';
            if (bar) bar.style.width = '0%';

            if (bar) {
                gsap.to(bar, {
                    width: '100%', duration: 1.0, ease: "power2.inOut", onComplete: () => {
                        if (contentDiv) gsap.to(contentDiv, { opacity: 1, duration: 0.5 });
                    }
                });
            }
        });
    }
}