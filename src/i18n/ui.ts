export const languages = {
  it: 'Italiano',
  en: 'English',
} as const;

export const defaultLang = 'it' as const;
export type Lang = keyof typeof languages;

export const ui = {
  it: {
    'nav.about': 'Chi siamo',
    'nav.solution': 'Soluzione',
    'nav.feeWaiver': 'Fee Waiver',
    'nav.disciplines': 'Discipline',
    'nav.cases': 'Case study',
    'nav.process': 'Processo',
    'nav.energySurvey': 'Energy Survey',
    'nav.contact': 'Contatti',
    'nav.cta': 'Briefing gratuito',

    'hero.eyebrow': 'Design · Fornitura · Fee Waiver',
    'hero.titleA': 'Progettiamo.',
    'hero.titleB': 'Forniamo.',
    'hero.titleC': 'Azzeriamo i costi.',
    'hero.subtitle':
      'Il primo partner integrato che trasforma il costo di progettazione in valore — grazie al Fee Waiver.',
    'hero.cta.primary': 'Prenota un briefing',
    'hero.cta.secondary': 'Scopri il Fee Waiver',
    'hero.cta.video': 'Guarda il video',
    'hero.video.close': 'Chiudi video',
    'hero.scroll': 'Scorri',

    'about.eyebrow': 'Il nome, il significato',
    'about.title': 'La connessione che trasforma il segnale in azione.',
    'about.body':
      'In neuroscienze, la sinapsi è il punto di giunzione tra due neuroni — il luogo dove il segnale diventa azione. Synapsis FW è esattamente questo: il punto di connessione sinergica tra design e fornitura di impianti tecnologici.',
    'about.fwTitle': 'Il suffisso FW',
    'about.fwBody':
      'Tre significati, una sola direzione. **Fee Waiver**, il nostro modello proprietario che azzera le fee di design quando scegli Synapsis FW anche per la fornitura. **Full Works**, la copertura totale del processo, dalla progettazione all\'opera finita. **Forward**, lo sguardo che guarda avanti — Look Forward — verso l\'innovazione costante.',
    'about.neuronA': 'Le esigenze del Cliente',
    'about.synapse': 'La nostra connessione',
    'about.neuronB': 'La soluzione integrata',

    'problem.eyebrow': 'Il problema',
    'problem.title': 'Gestire gli impianti tecnologici è complesso, costoso e frammentato.',
    'problem.lede':
      'Il 68% dei progetti edilizi supera il budget per gestione frammentata degli impianti. In media servono 4–6 progettisti diversi e il coordinamento pesa per il 30% sul cronoprogramma.',
    'problem.items.0.title': 'Coordinamento frazionato',
    'problem.items.0.body':
      'Team eterogenei (HVAC, elettrico, sicurezza, smart building) generano incomprensioni che causano in media 3–4 mesi di ritardo sulla consegna.',
    'problem.items.1.title': 'Costi iniziali incerti',
    'problem.items.1.body':
      'Fino a 6 parcelle di progettazione versate prima di aprire il cantiere, senza alcuna garanzia sui costi finali di fornitura.',
    'problem.items.2.title': 'Molteplicità di interfacce',
    'problem.items.2.body':
      'La frammentazione tra fornitori e progettisti aumenta il tasso di errore nelle specifiche tecniche del 25%.',
    'problem.items.3.title': 'Disallineamento progetto-realtà',
    'problem.items.3.body':
      'Le varianti tecniche dovute al disallineamento incidono in media per il 15% sul valore complessivo dell\'appalto.',

    'solution.eyebrow': 'La soluzione',
    'solution.title': 'Un unico interlocutore per design e fornitura — con il Fee Waiver.',
    'solution.body':
      'Synapsis FW copre l\'intero processo, dalla progettazione alla fornitura, per tutte le discipline impiantistiche essenziali. Le parcelle di progettazione vengono azzerate se scegliete Synapsis FW anche per la fornitura.',
    'solution.benefits.0.title': 'Risparmio economico',
    'solution.benefits.0.body': 'Costi di design azzerati e ottimizzazione dei preventivi di fornitura.',
    'solution.benefits.1.title': 'Semplicità operativa',
    'solution.benefits.1.body': 'Un unico punto di contatto per tutte le esigenze impiantistiche.',
    'solution.benefits.2.title': 'Velocità progettuale',
    'solution.benefits.2.body': 'Tempi di risposta accelerati grazie all\'integrazione completa.',
    'solution.benefits.3.title': 'Qualità garantita',
    'solution.benefits.3.body': 'Massima coerenza tra progettazione e realizzazione.',

    'fee.eyebrow': 'Il meccanismo Fee Waiver',
    'fee.title': 'Come funziona il Fee Waiver: il design non è più un costo.',
    'fee.lede':
      'Il Fee Waiver trasforma il costo di progettazione in un investimento a valore aggiunto. Garantiamo trasparenza e perfetto allineamento tra fase ideativa e realizzazione, eliminando incertezze e costi nascosti dei progetti edilizi tradizionali.',
    'fee.intro':
      'Il meccanismo si attiva in modo diverso a seconda di come viene gestita la fornitura. Tre scenari, tre livelli di vantaggio economico — sempre a tuo favore.',
    'fee.scenarios.0.tag': 'Scenario 1',
    'fee.scenarios.0.title': 'Supply affidato a Synapsis FW',
    'fee.scenarios.0.body':
      'Le forniture vengono effettuate direttamente da Synapsis FW: parcelle di progettazione completamente azzerate + bonus % sulla progettazione, definito progetto per progetto.',
    'fee.scenarios.0.tag2': 'Massimo vantaggio',
    'fee.scenarios.1.tag': 'Scenario 2',
    'fee.scenarios.1.title': 'Supply affidato a terzi con brand prescritti da SFW',
    'fee.scenarios.1.body':
      'Forniture affidate a soggetti terzi ma con prodotti/brand conformi a quelli prescritti da Synapsis FW: Fee Waiver riconosciuto, parcelle di progettazione azzerate.',
    'fee.scenarios.1.tag2': 'Libertà di scelta',
    'fee.scenarios.2.tag': 'Scenario 3',
    'fee.scenarios.2.title': 'Supply affidato a terzi con brand non conformi',
    'fee.scenarios.2.body':
      'Parcelle fatturate a tariffe di mercato. Anche in questo caso Synapsis FW riconosce un cashback in progettazione futura, da definirsi progetto per progetto.',
    'fee.scenarios.2.tag2': 'Cashback futuro',

    'disciplines.eyebrow': 'Le nostre discipline',
    'disciplines.title': 'Sette discipline, un unico partner.',
    'disciplines.items.0.title': 'Impianti elettrici',
    'disciplines.items.0.body':
      'Sistemi elettrici civili e industriali all\'avanguardia, con efficienza energetica e piena conformità normativa.',
    'disciplines.items.1.title': 'HVAC',
    'disciplines.items.1.body':
      'Riscaldamento, ventilazione e climatizzazione integrati per comfort ambientale superiore e qualità dell\'aria ottimale.',
    'disciplines.items.2.title': 'Illuminazione',
    'disciplines.items.2.body':
      'Sistemi tecnici e architettonici, apparecchi LED ad alta efficienza e integrazione con controlli intelligenti.',
    'disciplines.items.3.title': 'Sicurezza',
    'disciplines.items.3.body':
      'Antincendio, antintrusione, videosorveglianza avanzata e controllo accessi con la tecnologia più affidabile.',
    'disciplines.items.4.title': 'Smart Building',
    'disciplines.items.4.body':
      'Domotica, BMS e dispositivi IoT per una gestione ottimizzata di energia, comfort e funzionalità.',
    'disciplines.items.5.title': 'Energia & generazione',
    'disciplines.items.5.body':
      'Efficienza energetica, fotovoltaico e sistemi di generazione e accumulo per ridurre consumi e costi con piena sostenibilità.',
    'disciplines.items.6.title': 'Infrastrutture & ICT',
    'disciplines.items.6.body':
      'Cablaggio strutturato, reti dati e infrastrutture ICT per una connettività affidabile e pronta al futuro.',

    'cases.eyebrow': 'Case study',
    'cases.title': 'Risultati misurabili, in cantiere.',
    'cases.items.0.tag': 'Case Study #1',
    'cases.items.0.title': 'Residenza privata di lusso — Milano, Porta Nuova',
    'cases.items.0.body':
      'Progettazione e fornitura integrata degli impianti per un\'abitazione di 450 mq. Completato in tempo, sotto budget e con zero varianti.',
    'cases.items.0.quote':
      '«Con Synapsis FW abbiamo avuto un unico referente per tutto. Nessuna sorpresa, nessun ritardo.»',
    'cases.items.0.author': 'Marco T., Developer Privato',
    'cases.items.1.tag': 'Case Study #2',
    'cases.items.1.title': 'Complesso direzionale — Bologna, Zona Fiera',
    'cases.items.1.body':
      'Progettazione e fornitura completa degli impianti per un edificio direzionale di 3.200 mq su 6 piani. Consegnato 2 settimane in anticipo.',
    'cases.items.1.quote':
      '«Un interlocutore, un contratto, un risultato. Synapsis FW ha cambiato il paradigma.»',
    'cases.items.1.author': 'Ing. Giulia R., Project Manager',

    'advantages.eyebrow': 'I vantaggi per te',
    'advantages.title': 'Perché scegliere Synapsis FW.',
    'advantages.items.0.title': 'Zero costi di design con il Fee Waiver',
    'advantages.items.0.body':
      'Risparmio medio per progetto: €18.000–€45.000 in costi di consulenza tecnica completamente recuperati.',
    'advantages.items.1.title': 'Un solo interlocutore per tutte le discipline',
    'advantages.items.1.body':
      'Da 6 fornitori a un unico partner. -70% di email, riunioni e incomprensioni.',
    'advantages.items.2.title': 'Coerenza totale progetto-fornitura',
    'advantages.items.2.body':
      'Integrazione verticale: 0 varianti in corso d\'opera negli ultimi 12 progetti completati.',
    'advantages.items.3.title': 'Tempi ridotti grazie all\'integrazione',
    'advantages.items.3.body':
      '-35% sui tempi di progettazione rispetto all\'approccio tradizionale.',
    'advantages.items.4.title': 'Rete di produttori selezionati (PIN)',
    'advantages.items.4.body':
      'Oltre 40 brand leader di settore, condizioni esclusive e rapporto qualità-prezzo imbattibile.',

    'process.eyebrow': 'Il nostro processo',
    'process.title': 'Quattro passi verso il tuo progetto ideale.',
    'process.steps.0.title': 'Incontro conoscitivo e analisi delle esigenze',
    'process.steps.0.body':
      'Briefing gratuito e senza impegno. Ascolto delle idee, analisi del contesto e definizione degli obiettivi.',
    'process.steps.1.title': 'Proposta di progettazione integrata',
    'process.steps.1.body':
      'Il team multidisciplinare sviluppa una proposta che armonizza tutte le discipline impiantistiche.',
    'process.steps.2.title': 'Preventivo e attivazione del Fee Waiver',
    'process.steps.2.body':
      'Preventivo trasparente per fornitura e installazione. Scegliendo Synapsis FW, le parcelle vengono azzerate.',
    'process.steps.3.title': 'Esecuzione, coordinamento e consegna',
    'process.steps.3.body':
      'Approvvigionamento, installazione e messa in opera, con monitoraggio costante di tempi e budget.',

    'contact.eyebrow': 'Briefing gratuito — nessun impegno',
    'contact.title': 'Ogni giorno senza Synapsis FW è un costo in più. Parliamone.',
    'contact.body':
      'Non lasciare che le spese di progettazione rallentino la tua visione. Scegli un partner che trasforma i costi in investimenti concreti.',
    'contact.form.name': 'Nome e cognome',
    'contact.form.email': 'Email',
    'contact.form.company': 'Azienda',
    'contact.form.role': 'Ruolo',
    'contact.form.message': 'Raccontaci il tuo progetto',
    'contact.form.privacy': 'Acconsento al trattamento dei dati ai sensi della Privacy Policy.',
    'contact.form.submit': 'Invia richiesta',
    'contact.form.sending': 'Invio in corso…',
    'contact.form.success': 'Grazie. Ti ricontatteremo entro 24h.',
    'contact.form.error': 'Errore. Riprova o scrivi a info@synapsisfw.it.',

    'footer.tagline': 'Design. Fornitura. Connessione.',
    'footer.rights': 'Tutti i diritti riservati.',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Policy',
    'footer.terms': 'Termini',

    'cookie.title': 'Rispettiamo la tua privacy',
    'cookie.body':
      'Utilizziamo cookie tecnici e, previo consenso, cookie di analisi e marketing per migliorare la tua esperienza. Puoi accettare, rifiutare o personalizzare le tue scelte.',
    'cookie.accept': 'Accetta tutti',
    'cookie.reject': 'Rifiuta',
    'cookie.customize': 'Personalizza',
  },
  en: {
    'nav.about': 'About',
    'nav.solution': 'Solution',
    'nav.feeWaiver': 'Fee Waiver',
    'nav.disciplines': 'Disciplines',
    'nav.cases': 'Case studies',
    'nav.process': 'Process',
    'nav.energySurvey': 'Energy Survey',
    'nav.contact': 'Contact',
    'nav.cta': 'Free briefing',

    'hero.eyebrow': 'Design · Supply · Fee Waiver',
    'hero.titleA': 'We design.',
    'hero.titleB': 'We supply.',
    'hero.titleC': 'We zero out the cost.',
    'hero.subtitle':
      'The first integrated partner that turns design cost into value — through the Fee Waiver.',
    'hero.cta.primary': 'Book a briefing',
    'hero.cta.secondary': 'Discover the Fee Waiver',
    'hero.cta.video': 'Watch the video',
    'hero.video.close': 'Close video',
    'hero.scroll': 'Scroll',

    'about.eyebrow': 'The name, the meaning',
    'about.title': 'The connection that turns signal into action.',
    'about.body':
      'In neuroscience, the synapse is the junction between two neurons — the place where signal becomes action. Synapsis FW is exactly that: the synergistic connection between design and supply of technological systems.',
    'about.fwTitle': 'The FW suffix',
    'about.fwBody':
      'Three meanings, one direction. **Fee Waiver**, our proprietary model that zeroes design fees when you choose Synapsis FW for supply too. **Full Works**, end-to-end coverage from design to commissioning. **Forward**, the gaze that looks ahead — Look Forward — towards constant innovation.',
    'about.neuronA': 'The Client\'s needs',
    'about.synapse': 'Our connection',
    'about.neuronB': 'The integrated solution',

    'problem.eyebrow': 'The problem',
    'problem.title': 'Managing technical systems is complex, costly and fragmented.',
    'problem.lede':
      '68% of construction projects exceed budget due to fragmented systems management. On average it takes 4–6 different specialists, and coordination accounts for 30% of the schedule.',
    'problem.items.0.title': 'Fragmented coordination',
    'problem.items.0.body':
      'Heterogeneous teams (HVAC, electrical, security, smart building) cause misunderstandings and 3–4 months of average delivery delay.',
    'problem.items.1.title': 'Uncertain upfront costs',
    'problem.items.1.body':
      'Up to 6 design fees paid before the site even opens, with no guarantees on the final supply costs.',
    'problem.items.2.title': 'Multiple interfaces',
    'problem.items.2.body':
      'Fragmentation between suppliers and designers raises the technical specs error rate by 25%.',
    'problem.items.3.title': 'Project-reality misalignment',
    'problem.items.3.body':
      'Technical variants caused by misalignment account for 15% of the total contract value on average.',

    'solution.eyebrow': 'The solution',
    'solution.title': 'A single partner for design and supply — with the Fee Waiver.',
    'solution.body':
      'Synapsis FW covers the entire process, from design to supply, across all essential building disciplines. Design fees are waived when you choose Synapsis FW for supply.',
    'solution.benefits.0.title': 'Cost savings',
    'solution.benefits.0.body': 'Zero design fees and optimised supply quotations.',
    'solution.benefits.1.title': 'Operational simplicity',
    'solution.benefits.1.body': 'A single point of contact for all building system needs.',
    'solution.benefits.2.title': 'Faster design',
    'solution.benefits.2.body': 'Accelerated response time through full integration.',
    'solution.benefits.3.title': 'Guaranteed quality',
    'solution.benefits.3.body': 'Maximum coherence between design and execution.',

    'fee.eyebrow': 'The Fee Waiver mechanism',
    'fee.title': 'How the Fee Waiver works: design is no longer a cost.',
    'fee.lede':
      'The Fee Waiver turns design cost into a value-added investment. We guarantee transparency and perfect alignment between conception and execution, eliminating the uncertainties and hidden costs of traditional construction projects.',
    'fee.intro':
      'The mechanism activates differently depending on how supply is handled. Three scenarios, three levels of economic advantage — always in your favour.',
    'fee.scenarios.0.tag': 'Scenario 1',
    'fee.scenarios.0.title': 'Supply through Synapsis FW',
    'fee.scenarios.0.body':
      'Supply delivered directly by Synapsis FW: design fees fully waived + a bonus % on design, defined project by project.',
    'fee.scenarios.0.tag2': 'Maximum advantage',
    'fee.scenarios.1.tag': 'Scenario 2',
    'fee.scenarios.1.title': 'Third-party supply with SFW-prescribed brands',
    'fee.scenarios.1.body':
      'Supply through third parties using products/brands prescribed by Synapsis FW: Fee Waiver still applies, design fees are waived.',
    'fee.scenarios.1.tag2': 'Freedom of choice',
    'fee.scenarios.2.tag': 'Scenario 3',
    'fee.scenarios.2.title': 'Third-party supply with non-compliant brands',
    'fee.scenarios.2.body':
      'Fees billed at market rates. Even here Synapsis FW grants cashback on future design work, defined project by project.',
    'fee.scenarios.2.tag2': 'Future cashback',

    'disciplines.eyebrow': 'Our disciplines',
    'disciplines.title': 'Seven disciplines, one partner.',
    'disciplines.items.0.title': 'Electrical systems',
    'disciplines.items.0.body':
      'Cutting-edge civil and industrial electrical systems with energy efficiency and full regulatory compliance.',
    'disciplines.items.1.title': 'HVAC',
    'disciplines.items.1.body':
      'Integrated heating, ventilation and air conditioning for superior comfort and optimal indoor air quality.',
    'disciplines.items.2.title': 'Lighting',
    'disciplines.items.2.body':
      'Technical and architectural systems, high-efficiency LED fixtures and integration with smart controls.',
    'disciplines.items.3.title': 'Security',
    'disciplines.items.3.body':
      'Fire detection, intrusion, advanced video surveillance and access control with the most reliable technology.',
    'disciplines.items.4.title': 'Smart Building',
    'disciplines.items.4.body':
      'Home automation, BMS and IoT devices for optimised energy, comfort and functionality management.',
    'disciplines.items.5.title': 'Energy & generation',
    'disciplines.items.5.body':
      'Energy efficiency, photovoltaics and generation/storage systems to cut consumption and costs with full sustainability.',
    'disciplines.items.6.title': 'Infrastructure & ICT',
    'disciplines.items.6.body':
      'Structured cabling, data networks and ICT infrastructure for reliable, future-ready connectivity.',

    'cases.eyebrow': 'Case studies',
    'cases.title': 'Measurable results, on site.',
    'cases.items.0.tag': 'Case Study #1',
    'cases.items.0.title': 'Luxury private residence — Milan, Porta Nuova',
    'cases.items.0.body':
      'Integrated design and supply for a 450 sqm residence. Delivered on time, under budget, with zero variants.',
    'cases.items.0.quote':
      '"With Synapsis FW we had a single point of contact for everything. No surprises, no delays."',
    'cases.items.0.author': 'Marco T., Private Developer',
    'cases.items.1.tag': 'Case Study #2',
    'cases.items.1.title': 'Office complex — Bologna, Fiera district',
    'cases.items.1.body':
      'Full design and supply for a 3,200 sqm directional building over 6 floors. Delivered 2 weeks ahead of schedule.',
    'cases.items.1.quote':
      '"One contact, one contract, one outcome. Synapsis FW changed the paradigm."',
    'cases.items.1.author': 'Eng. Giulia R., Project Manager',

    'advantages.eyebrow': 'Advantages for you',
    'advantages.title': 'Why choose Synapsis FW.',
    'advantages.items.0.title': 'Zero design costs with the Fee Waiver',
    'advantages.items.0.body':
      'Average savings per project: €18,000–€45,000 in fully recovered consulting costs.',
    'advantages.items.1.title': 'A single contact for every discipline',
    'advantages.items.1.body':
      'From 6 suppliers to one partner. -70% emails, meetings and misunderstandings.',
    'advantages.items.2.title': 'Total design-supply coherence',
    'advantages.items.2.body':
      'Vertical integration: 0 variants on site across our last 12 completed projects.',
    'advantages.items.3.title': 'Reduced timelines through integration',
    'advantages.items.3.body':
      '-35% on design time compared to traditional approaches.',
    'advantages.items.4.title': 'Selected manufacturers network (PIN)',
    'advantages.items.4.body':
      'Over 40 industry-leading brands, exclusive conditions and unbeatable value.',

    'process.eyebrow': 'Our process',
    'process.title': 'Four steps to your ideal project.',
    'process.steps.0.title': 'Discovery and needs analysis',
    'process.steps.0.body':
      'Free, no-commitment briefing. Listening to your ideas, analysing context and defining goals.',
    'process.steps.1.title': 'Integrated design proposal',
    'process.steps.1.body':
      'Our multidisciplinary team develops a proposal that harmonises every building discipline.',
    'process.steps.2.title': 'Quote and Fee Waiver activation',
    'process.steps.2.body':
      'Transparent quote for supply and installation. Choosing Synapsis FW, design fees are waived.',
    'process.steps.3.title': 'Execution, coordination, delivery',
    'process.steps.3.body':
      'Procurement, installation and commissioning, with continuous monitoring of time and budget.',

    'contact.eyebrow': 'Free briefing — no commitment',
    'contact.title': 'Every day without Synapsis FW is an extra cost. Let\'s talk.',
    'contact.body':
      'Don\'t let design costs slow your vision down. Choose a partner who turns costs into concrete investments.',
    'contact.form.name': 'Full name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company',
    'contact.form.role': 'Role',
    'contact.form.message': 'Tell us about your project',
    'contact.form.privacy': 'I consent to data processing under the Privacy Policy.',
    'contact.form.submit': 'Send request',
    'contact.form.sending': 'Sending…',
    'contact.form.success': 'Thank you. We\'ll get back to you within 24h.',
    'contact.form.error': 'Error. Try again or write to info@synapsisfw.it.',

    'footer.tagline': 'Design. Supply. Connection.',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Policy',
    'footer.terms': 'Terms',

    'cookie.title': 'We respect your privacy',
    'cookie.body':
      'We use technical cookies and, with consent, analytics and marketing cookies to improve your experience. Accept, reject or customise your choices.',
    'cookie.accept': 'Accept all',
    'cookie.reject': 'Reject',
    'cookie.customize': 'Customise',
  },
} as const;

export type UIKey = keyof (typeof ui)['it'];
