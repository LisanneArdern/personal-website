import type { Translation } from '../translation-types'

export const de: Translation = {
  app: {
    skipLink: 'Zum Hauptinhalt springen',
    primaryNavLabel: 'Hauptnavigation',
    nav: {
      about: 'über mich',
      work: 'arbeit',
      experience: 'erfahrung',
    },
    languageLabel: 'Sprache ändern',
    languageOptions: {
      en: 'English',
      de: 'Deutsch',
    },
    footerLastUpdated: 'Zuletzt aktualisiert',
    footerBackToTop: 'Zurück nach oben ↑',
  },
  home: {
    heading: 'Hallo, ich bin Lisanne',
    portraitAlt: 'Porträt von Lisanne Ardern.',
    meta: [
      { label: 'Rolle', value: 'Frontend-Entwicklerin' },
      { label: 'Standort', value: 'Taipeh, Taiwan' },
      { label: 'Status', value: 'Offen für neue Chancen', accent: true },
    ],
    tagline:
      'Ich entwickle leidenschaftlich gern Interfaces, die sich genauso gut anfühlen, wie sie aussehen.',
    about: {
      eyebrow: 'Über mich',
      title: {
        before: 'Früher habe ich Erlebnisse für Reisende gestaltet. Heute gestalte ich sie für',
        accent: 'Nutzer:innen',
        after: '.',
      },
      ariaLabel: 'Über mich',
      paragraphs: [
        'Mein Hintergrund liegt im internationalen Tourismusmanagement, wo ich jahrelang End-to-End-Produkte entwickelt habe, die für Menschen aus aller Welt funktionieren mussten. Das hat wahrscheinlich auch damit zu tun, dass ich zwischen zwei Kulturen aufgewachsen bin: meine Mutter ist Deutsche, mein Vater Engländer. Unterschiedliche Perspektiven zu verstehen, fühlt sich für mich deshalb ganz natürlich an.',
        'Als COVID die Branche zum Stillstand brachte, habe ich nicht einfach mit angehalten. Ich habe die Zeit genutzt, um tief in ein Thema einzutauchen, das mich schon immer angezogen hat: digitale Produkte. Vier Jahre später bin ich Frontend-Entwicklerin und denke immer noch wie eine Produktdesignerin: Ich baue Interfaces, die durchdacht und funktional sind.',
        'Ich habe drei Jahre in Mexiko gelebt, sehr gut gegessen und genug Spanisch gelernt, um bei den besten mexikanischen Familienfeiern aktiv dabei zu sein. Jetzt nenne ich Taipeh mein Zuhause - bei meinen Lebensentscheidungen und gutem Essen erkenne ich langsam ein Muster. Ich spreche fließend Englisch, Deutsch und Spanisch und arbeite an meinem Mandarin, eine Bubble-Tea-Bestellung nach der anderen.',
        'Außerhalb der Arbeit tanze ich meistens, entdecke ein neues Viertel oder suche in der Stadt, in der ich gerade bin, nach dem besten Essen.',
      ],
      cta: {
        before:
          'Ich bin aktuell offen für neue Möglichkeiten in Taipeh. Wenn du an etwas arbeitest, das schön werden soll,',
        link: 'lass uns sprechen',
        after: '.',
      },
    },
    snapshots: {
      heading: 'In letzter Zeit',
      play: 'Abspielen',
      pause: 'Pausieren',
      carouselLabel: ' Fotokarussell',
    },
    elsewhere: {
      heading: 'Anderswo',
      items: [
        {
          label: 'E-Mail',
          value: 'ardern.lisanne@gmail.com',
          href: 'mailto:ardern.lisanne@gmail.com',
        },
        {
          label: 'GitHub',
          value: '@LisanneArdern',
          href: 'https://github.com/LisanneArdern',
        },
        {
          label: 'LinkedIn',
          value: 'lisanne-ardern',
          href: 'https://www.linkedin.com/in/lisanne-ardern-4ab781155/',
        },
      ],
    },
  },
  work: {
    eyebrow: 'Arbeit',
    title: {
      before: 'Dinge, die ich',
      accent: 'gebaut',
      after: ' habe.',
    },
    lede: 'Berufliche Projekte, persönliche Arbeiten und Dinge, die ich begonnen habe, weil ich wissen wollte, ob ich sie umsetzen kann. Manche sind fertig. Manche sind auf dem Weg dorthin.',
    projectsHeading: 'Projekte',
    projectLabel: 'Projekt',
    workInProgress: 'In Arbeit',
    projects: [
      {
        title: 'SoSafe Analytics',
        role: 'Frontend',
        blurb:
          'Ich habe das Frontend für das neue Analytics-Dashboard von SoSafe von Grund auf gebaut. React, TypeScript und ECharts für E-Learning-, Phishing- und ISO-Metriken.',
        stack: ['React', 'TypeScript', 'ECharts'],
        href: 'https://support.sosafe.de/ProductDoc/analytics',
      },
      {
        title: 'SoSafe Partner Hub',
        role: 'Frontend & Backend',
        blurb:
          'Ich habe das Frontend einer neuen Plattform für MSP-Partner geleitet, mit der sie Awareness-Trainings für Kund:innen einrichten und verwalten können. Zwei Micro Frontends plus Backend-Arbeit an der Partner API.',
        stack: ['React', 'TypeScript', 'Micro Frontends', 'AWS SQS'],
        href: 'https://support.sosafe.de/PDOC/sosafe-partner-platform',
      },
      {
        title: 'Editorial Storybook',
        role: 'Design & Umsetzung',
        blurb:
          'Eine markante React-Komponentenbibliothek im Editorial-Stil, gebaut mit TypeScript und Storybook. Von Grund auf gestaltet, mit starker typografischer Identität und einem konsistenten Token-System.',
        stack: ['Storybook', 'React', 'TypeScript'],
        href: 'https://69e1d4397970f5ff67cabe66-otaxrsqaiz.chromatic.com/',
      },
      {
        title: 'Designer Portfolio',
        role: 'Design & Umsetzung',
        blurb:
          'Eine Portfolio-Website für den Industriedesigner Jose Avila. Der Fokus liegt auf der Präsentation seiner Arbeiten und seines Prozesses.',
        stack: ['React', 'TypeScript', 'Mantine'],
        href: 'https://github.com/LisanneArdern/pepe-website',
        wip: true,
      },
      {
        title: 'Harvestly',
        role: 'Design & Umsetzung',
        blurb:
          'Ein Gartenbegleiter mit Pflanzensuche, Wachstumstipps und einem Ort, um festzuhalten, was man angebaut hat. Ursprünglich mit der OpenFarm API gebaut, jetzt mit einer eigenen API neu aufgebaut, nachdem OpenFarm archiviert wurde.',
        stack: ['React', 'Storybook', 'Jest', 'Eigene API'],
        href: 'https://capstone-project-ashen.vercel.app/',
      },
      {
        title: 'Crops API',
        role: 'Backend',
        blurb:
          'Eine eigene Express API für Harvestly-Pflanzendaten, mit SQLite, CORS-Unterstützung, Error Handling und fehlertoleranter Suche.',
        stack: ['Node.js', 'Express', 'SQLite', 'Render'],
        href: 'https://github.com/LisanneArdern/crops-api',
      },
      {
        title: 'lisanneardern.com',
        role: 'Design & Umsetzung',
        blurb:
          'Die Website, die du gerade liest. Ein persönliches Portfolio im Editorial-Stil, das langsam weiter verfeinert wird.',
        stack: ['React', 'Vite', 'React Router', 'CSS'],
        href: '/',
      },
    ],
  },
  experience: {
    eyebrow: 'Erfahrung',
    title: {
      before: 'Wo ich',
      accent: 'war',
      after: '.',
    },
    lede: 'Vier Jahre Frontend-Entwicklung. Ein beruflicher Neustart. So ist es passiert.',
    workHeading: 'Berufserfahrung',
    educationHeading: 'Ausbildung',
    skillsHeading: 'Skills & Sprachen',
    companyLinkLabel: 'Unternehmenswebsite in neuem Tab öffnen',
    work: [
      {
        company: 'SoSafe SE',
        location: 'Köln, Deutschland',
        url: 'https://sosafe-awareness.com/',
        roles: [
          {
            role: 'Fullstack Engineer',
            period: '01/2025 — 10/2025',
            bullets: [
              'Ich leitete die Frontend-Entwicklung einer neuen Partnerplattform mit zwei Micro Frontends (React, TypeScript) und baute das UI von Grund auf.',
              'Ich unterstützte die Entwicklung des Backend-Microservices für die Partnerplattform, inklusive Kundenverwaltung, Lizenzierung, Vendor-Client-Beziehungen, Subscription Management und serviceübergreifender Integration mit TypeScript und AWS SQS.',
            ],
          },
          {
            role: 'Frontend Engineer',
            period: '10/2023 — 12/2024',
            bullets: [
              'Ich entwickelte Datenanalyse-Dashboards mit der ECharts-Bibliothek.',
              'Ich modernisierte die alte Self-Service-Plattform durch Refactoring von JavaScript-basierten React-Klassenkomponenten mit Redux zu TypeScript, funktionsbasierten Komponenten und optimiertem State Management mit React Hooks (useState, useContext), während Redux auf die notwendigen Fälle reduziert wurde.',
              'Ich implementierte Unit- und End-to-End-Tests mit Jest und Cypress.',
              'Ich stellte Accessibility-Compliance mit Lighthouse und Axe DevTools sicher.',
              'Ich konzipierte und moderierte Workshops wie Design-Ideation-Sessions in Zusammenarbeit mit dem Product Designer.',
            ],
          },
          {
            role: 'Junior Frontend Engineer',
            period: '10/2021 — 09/2023',
            bullets: [
              'Ich erhöhte die Zuverlässigkeit, indem ich zentrale Teile der JavaScript-Codebase nach TypeScript überführte.',
              'Ich lieferte als alleinige Frontend-Entwicklerin ein neues Address-Manager-Tool und trieb die UI-Umsetzung gemeinsam mit Product Design und Backend-Entwicklung voran.',
              'Ich half beim Aufbau eines skalierbaren, unternehmensweiten Design Systems durch Komponentenentwicklung und Dokumentation.',
            ],
          },
        ],
      },
      {
        company: 'neuefische GmbH',
        location: 'Hamburg, Deutschland',
        url: 'https://www.neuefische.de/en',
        roles: [
          {
            role: 'Trainee Web Development',
            period: '04/2021 — 07/2021',
            bullets: [
              'Responsive Websites mit HTML, CSS, JavaScript und React.',
              'Backend und Datenbanken: node.js, MongoDB, Express, Mongoose.',
              'Git-Workflow, Pair Programming, Clean Code.',
            ],
          },
        ],
      },
      {
        company: 'Ten Lifestyle Group',
        location: 'Mexiko-Stadt, Mexiko',
        url: 'https://tenlifestylegroup.com/',
        roles: [
          {
            role: 'Lifestyle Manager',
            period: '11/2019 — 01/2021',
            bullets: [
              'Concierge-Arbeit für anspruchsvolle Kund:innen in den Bereichen Reisen, Gastronomie und Events - eine unerwartete Schule darin, klar zu schreiben, aufmerksam zuzuhören und Dinge fertigzustellen.',
            ],
          },
        ],
      },
      {
        company: 'Bamba Travel',
        location: 'Mexiko-Stadt, Mexiko',
        url: 'https://bambatravel.com/',
        roles: [
          {
            role: 'Product Developer',
            period: '06/2019 — 11/2019',
            bullets: [
              'Ich entwarf und kalkulierte länderübergreifende Reisepakete in Lateinamerika und koordinierte lokale Veranstalter und Partner.',
            ],
          },
          {
            role: 'Travel Agent',
            period: '06/2018 — 06/2019',
            bullets: [
              'Ich erstellte individuelle Reiserouten in der Region, vor allem für europäische Reisende - Logistik, Budgets und Timing für Langstreckenreisen.',
            ],
          },
        ],
      },
    ],
    education: [
      {
        period: '10/2014 — 09/2017',
        role: 'B.A. International Tourism Management',
        org: 'Fachhochschule Westküste',
        location: 'Heide, Deutschland',
      },
    ],
    skills: [
      {
        group: 'Frontend',
        items: [
          'React',
          'TypeScript',
          'JavaScript (ES2023+)',
          'CSS / Sass',
          'HTML',
          'Accessibility (WCAG)',
        ],
      },
      {
        group: 'Backend & APIs',
        items: ['Node.js', 'Express', 'REST APIs', 'SQLite', 'MongoDB', 'AWS SQS'],
      },
      {
        group: 'Tools & Workflow',
        items: [
          'Vite',
          'Next.js',
          'Git',
          'Figma',
          'Jest',
          'Vitest',
          'Storybook',
          'Cypress',
          'Render',
          'Vercel',
        ],
      },
      {
        group: 'Sprachen',
        items: [
          'Englisch (Muttersprache)',
          'Deutsch (Muttersprache)',
          'Spanisch (fließend)',
          'Mandarin (Anfängerin)',
        ],
      },
    ],
  },
}
