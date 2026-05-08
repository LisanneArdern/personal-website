import type { Translation } from '../translation-types'

export const en: Translation = {
  app: {
    skipLink: 'Skip to main content',
    primaryNavLabel: 'Primary',
    nav: {
      about: 'about',
      work: 'work',
      experience: 'experience',
    },
    languageLabel: 'Change language',
    languageOptions: {
      en: 'English',
      de: 'Deutsch',
    },
    footerLastUpdated: 'Last updated',
    footerBackToTop: 'Back to top ↑',
  },
  home: {
    heading: "Hello, I'm Lisanne",
    portraitAlt: 'Portrait of Lisanne Ardern.',
    meta: [
      { label: 'Role', value: 'Frontend Developer' },
      { label: 'Based', value: 'Taipei, Taiwan' },
      { label: 'Status', value: 'Open to work', accent: true },
    ],
    tagline:
      'Passionate about building interfaces that feel as good as they look.',
    about: {
      eyebrow: 'About',
      title: {
        before:
          'I used to design experiences for travellers. Now I design them for',
        accent: 'users',
        after: '.',
      },
      ariaLabel: 'About me',
      paragraphs: [
        'My background is in international tourism management, where I spent years building end-to-end products that had to work for people from every corner of the world. That probably has something to do with growing up between two cultures: my mum is German, my dad English, so navigating different perspectives comes naturally.',
        "Part of that journey took me to Mexico for three years, where I worked in tourism product development, designing experiences for an incredibly diverse range of guests: from backpackers to luxury travellers, across cultures and languages. The Spanish and the food were a bonus I didn't see coming.",
        "When COVID brought the industry to a halt, I didn't slow down with it. I used the time to go deep on something I'd always been drawn to: digital products. Four years later I'm a frontend developer who still thinks like a product designer, building interfaces that are as considered as they are functional and always with the person using them in mind.",
        'Now I call Taipei home. Mexico, then Taiwan. Good food seems to be a recurring theme in my decision making.',
        "Outside of work I'm usually dancing, discovering a new neighbourhood, or hunting down the best meal in whatever city I'm in. I've always been drawn to things that push me - whether that's moving to a new country, learning a new skill, or taking on a problem that doesn't have an obvious solution yet.",
      ],
      cta: {
        before:
          "I'm currently open to new opportunities in Taipei. If you're building something where the users actually matter,",
        link: "let's talk",
        after: '.',
      },
    },
    snapshots: {
      heading: 'Lately',
      play: 'Play',
      pause: 'Pause',
      carouselLabel: ' photo carousel',
    },
    elsewhere: {
      heading: 'Elsewhere',
      items: [
        {
          label: 'Email',
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
    eyebrow: 'Work',
    title: {
      before: "Things I've",
      accent: 'built',
      after: '.',
    },
    lede: 'Professional work, personal projects, and things I started just because I wanted to see if I could. Some are finished. Some are getting there.',
    projectsHeading: 'Projects',
    projectLabel: 'Project',
    workInProgress: 'Work in progress',
    projects: [
      {
        title: 'SoSafe Analytics',
        role: 'Frontend',
        blurb:
          "Built the frontend for SoSafe's new analytics dashboard from the ground up. React, TypeScript, and ECharts for e-learning, phishing, and ISO metrics.",
        stack: ['React', 'TypeScript', 'ECharts'],
        scope:
          'Part of a platform used by 6,000+ organisations across Europe. Developed over 14 months.',
        href: 'https://support.sosafe.de/ProductDoc/analytics',
        featured: true,
      },
      {
        title: 'SoSafe Partner Hub',
        role: 'Frontend & backend',
        blurb:
          'Led frontend of a new platform for MSP partners to onboard and manage client awareness training. Two micro frontends, plus backend work on the partner API.',
        stack: ['React', 'TypeScript', 'Micro Frontends', 'AWS SQS'],
        scope:
          'Built from concept to launch over 12 months. Used by 200+ MSP partners.',
        href: 'https://support.sosafe.de/PDOC/sosafe-partner-platform',
        featured: true,
      },
      {
        title: 'Editorial Storybook',
        role: 'Design & build',
        blurb:
          'A bold, editorial React component library built with TypeScript and Storybook. Designed from scratch with a strong typographic identity and a consistent token system.',
        stack: ['Storybook', 'React', 'TypeScript'],
        href: 'https://69e1d4397970f5ff67cabe66-otaxrsqaiz.chromatic.com/',
      },
      {
        title: 'Designer Portfolio',
        role: 'Design & build',
        blurb:
          'A portfolio site for the industrial designer Jose Avila. Focused on the presentation of his work and process.',
        stack: ['React', 'TypeScript', 'Mantine'],
        href: 'https://github.com/LisanneArdern/pepe-website',
        wip: true,
      },
      {
        title: 'Harvestly',
        role: 'Design & build',
        blurb:
          "A gardening companion with plant search, growing tips, and a place to keep track of what you've grown. Originally built using the OpenFarm API, now being rebuilt with a custom API after OpenFarm was archived.",
        stack: ['React', 'Storybook', 'Jest', 'Custom API'],
        href: 'https://capstone-project-ashen.vercel.app/',
      },
      {
        title: 'Crops API',
        role: 'Backend',
        blurb:
          'A custom Express API for Harvestly crop data, with SQLite storage, CORS support, error handling, and typo-tolerant search.',
        stack: ['Node.js', 'Express', 'SQLite', 'Render'],
        href: 'https://github.com/LisanneArdern/crops-api',
      },
      {
        title: 'lisanneardern.com',
        role: 'Design & build',
        blurb:
          "The site you're reading. An editorial personal portfolio, slowly being refined.",
        stack: ['React', 'Vite', 'React Router', 'CSS'],
        href: '/',
      },
    ],
  },
  experience: {
    eyebrow: 'Experience',
    title: {
      before: 'My working',
      accent: 'history',
      after: '.',
    },
    lede: "Four years of frontend development. One career pivot. Here's how it happened.",
    workHeading: 'Work',
    educationHeading: 'Education',
    skillsHeading: 'Skills & languages',
    companyLinkLabel: 'open company website in a new tab',
    work: [
      {
        company: 'SoSafe SE',
        location: 'Cologne, Germany',
        url: 'https://sosafe-awareness.com/',
        roles: [
          {
            role: 'Fullstack Engineer',
            period: '01/2025 — 10/2025',
            bullets: [
              'Led the frontend development of a new partner platform consisting of two micro frontends (React, TypeScript), building the UI from the ground up.',
              'Supported the development of the backend micro service for the partner platform, covering customer management, licensing, vendor-client relationships, subscription management, and cross-service integration using TypeScript and AWS SQS.',
            ],
          },
          {
            role: 'Frontend Engineer',
            period: '10/2023 — 12/2024',
            bullets: [
              'Developed data analytics dashboards using the ECharts library.',
              'Modernised the legacy self-service platform by refactoring from JavaScript class-based React components with Redux to TypeScript, function-based components, and optimised state management using React hooks (useState, useContext) while reducing Redux usage to essential cases.',
              'Implemented unit and end-to-end tests using Jest and Cypress.',
              'Ensured accessibility compliance using Lighthouse and Axe DevTools.',
              'Designed and facilitated workshops such as design ideation sessions in collaboration with the Product Designer.',
            ],
          },
          {
            role: 'Junior Frontend Engineer',
            period: '10/2021 — 09/2023',
            bullets: [
              'Enhanced reliability by converting key parts of the JavaScript codebase to TypeScript.',
              'Delivered a new address manager tool as the sole frontend engineer, driving UI implementation in collaboration with Product Design and Backend developers.',
              'Helped establish a scalable, company-wide design system through component creation and documentation.',
            ],
          },
        ],
      },
      {
        company: 'neuefische GmbH',
        location: 'Hamburg, Germany',
        url: 'https://www.neuefische.de/en',
        roles: [
          {
            role: 'Trainee Web Development',
            period: '04/2021 — 07/2021',
            bullets: [
              'Responsive websites with HTML, CSS, JavaScript and React.',
              'Backend and databases: node.js, MongoDB, Express, Mongoose.',
              'Git workflow, pair programming, clean code.',
            ],
          },
        ],
      },
      {
        company: 'Ten Lifestyle Group',
        location: 'Mexico City, Mexico',
        url: 'https://tenlifestylegroup.com/',
        roles: [
          {
            role: 'Lifestyle Manager',
            period: '11/2019 — 01/2021',
            bullets: [
              'Concierge-style service for high-net-worth clients across travel, dining, and events. Learned to communicate clearly under pressure and deliver without exception.',
            ],
          },
        ],
      },
      {
        company: 'Bamba Travel',
        location: 'Mexico City, Mexico',
        url: 'https://bambatravel.com/',
        roles: [
          {
            role: 'Product Developer',
            period: '06/2019 — 11/2019',
            bullets: [
              'Designed and priced multi-country travel packages across Latin America, coordinating with local operators and suppliers.',
            ],
          },
          {
            role: 'Travel Agent',
            period: '06/2018 — 06/2019',
            bullets: [
              'Built custom itineraries across the region for European long-haul travellers, managing logistics, budgets, and the kind of pacing that makes or breaks a six-week trip.',
            ],
          },
        ],
      },
    ],
    education: [
      {
        period: '10/2014 — 09/2017',
        role: 'B.A. International Tourism Management',
        org: 'Westcoast University of Applied Sciences',
        location: 'Heide, Germany',
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
        items: [
          'Node.js',
          'Express',
          'REST APIs',
          'SQLite',
          'MongoDB',
          'AWS SQS',
        ],
      },
      {
        group: 'Tools & workflow',
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
        group: 'Languages',
        items: [
          'English (native)',
          'German (native)',
          'Spanish (fluent)',
          'Mandarin (beginner)',
        ],
      },
    ],
  },
}
