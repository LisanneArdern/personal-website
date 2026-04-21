export const BUILD_DATE: Date = new Date(__BUILD_DATE__)

export type Project = {
  title: string
  role: string
  blurb: string
  stack: string[]
  href: string
  wip?: boolean
}

export const projects: Project[] = [
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
      'A gardening companion built around the Openfarm API. Plant search, growing tips, and a place to keep track of what you\u2019ve grown.',
    stack: ['React', 'Storybook', 'Jest', 'Openfarm API'],
    href: 'https://capstone-project-ashen.vercel.app/',
  },
  {
    title: 'lisanneardern.com',
    role: 'Design & build',
    blurb:
      'The site you\u2019re reading. An editorial personal portfolio, slowly being refined.',
    stack: ['React', 'Vite', 'React Router', 'CSS'],
    href: '/',
  },
]

export type ElsewhereItem = {
  label: string
  value: string
  href: string
}

export const elsewhere: ElsewhereItem[] = [
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
]

export type Role = {
  role: string
  period: string
  bullets: string[]
}

export type Company = {
  company: string
  location: string
  url?: string
  roles: Role[]
}

export const experience: Company[] = [
  {
    company: 'SoSafe SE',
    location: 'Cologne, Germany',
    url: 'https://sosafe-awareness.com/',
    roles: [
      {
        role: 'Fullstack Engineer',
        period: '01/2025 \u2014 10/2025',
        bullets: [
          'Led the frontend development of a new partner platform consisting of two micro frontends (React, TypeScript), building the UI from the ground up.',
          'Supported the development of the backend micro service for the partner platform, covering customer management, licensing, vendor-client relationships, subscription management, and cross-service integration using TypeScript and AWS SQS.',
        ],
      },
      {
        role: 'Frontend Engineer',
        period: '10/2023 \u2014 12/2024',
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
        period: '10/2021 \u2014 09/2023',
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
        period: '04/2021 \u2014 07/2021',
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
        period: '11/2019 \u2014 01/2021',
        bullets: [
          'Concierge-style work for high-touch clients across travel, dining, and events \u2014 an unexpected education in writing clearly, listening carefully, and finishing things.',
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
        period: '06/2019 \u2014 11/2019',
        bullets: [
          'Designed and priced multi-country travel packages across Latin America, coordinating with local operators and suppliers.',
        ],
      },
      {
        role: 'Travel Agent',
        period: '06/2018 \u2014 06/2019',
        bullets: [
          'Built custom itineraries across the region, mostly for European travellers \u2014 logistics, budgets, and pacing for long-haul trips.',
        ],
      },
    ],
  },
]

export type Education = {
  period: string
  role: string
  org: string
  location: string
}

export const education: Education[] = [
  {
    period: '10/2014 \u2014 09/2017',
    role: 'B.A. International Tourism Management',
    org: 'Westcoast University of Applied Sciences',
    location: 'Heide, Germany',
  },
]

export type SkillGroup = {
  group: string
  items: string[]
}

export const skills: SkillGroup[] = [
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
]
