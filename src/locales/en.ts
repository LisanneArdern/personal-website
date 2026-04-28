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
        before: 'I used to design experiences for travellers. Now I design them for',
        accent: 'users',
        after: '.',
      },
      ariaLabel: 'About me',
      paragraphs: [
        'My background is in international tourism management, where I spent years building end-to-end products that had to work for people from every corner of the world. That probably has something to do with growing up between two cultures: my mum is German, my dad English, so navigating different perspectives comes naturally.',
        "When COVID brought the industry to a halt, I didn't slow down with it. I used the time to go deep on something I'd always been drawn to: digital products. Four years later I'm a frontend developer who still thinks like a product designer, building interfaces that are as considered as they are functional.",
        "I've lived in Mexico for three years, which means I've eaten very well and picked up enough Spanish to be an active part in the best Mexican family parties. Now I call Taipei home - I'm noticing a pattern with my life choices and good food. I speak English, German, and Spanish fluently, and I'm working on my Mandarin one bubble tea order at a time.",
        "Outside of work I'm usually dancing, discovering a new neighbourhood, or hunting down the best meal in whatever city I'm in.",
      ],
      cta: {
        before:
          "I'm currently open to new opportunities in Taipei. If you're building something that deserves to be beautiful,",
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
        href: 'https://support.sosafe.de/ProductDoc/analytics',
      },
      {
        title: 'SoSafe Partner Hub',
        role: 'Frontend & backend',
        blurb:
          'Led frontend of a new platform for MSP partners to onboard and manage client awareness training. Two micro frontends, plus backend work on the partner API.',
        stack: ['React', 'TypeScript', 'Micro Frontends', 'AWS SQS'],
        href: 'https://support.sosafe.de/PDOC/sosafe-partner-platform',
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
          "A gardening companion built around the Openfarm API. Plant search, growing tips, and a place to keep track of what you've grown.",
        stack: ['React', 'Storybook', 'Jest', 'Openfarm API'],
        href: 'https://capstone-project-ashen.vercel.app/',
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
      before: "Where I've",
      accent: 'been',
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
              'Concierge-style work for high-touch clients across travel, dining, and events — an unexpected education in writing clearly, listening carefully, and finishing things.',
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
              'Built custom itineraries across the region, mostly for European travellers — logistics, budgets, and pacing for long-haul trips.',
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
        group: 'Tools & workflow',
        items: ['Vite', 'Next.js', 'Git', 'Figma', 'Vitest', 'Storybook'],
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
