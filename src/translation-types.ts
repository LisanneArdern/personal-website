export type Language = 'en' | 'de'

export type MetaItem = {
  label: string
  value: string
  accent?: boolean
}

export type Project = {
  title: string
  role: string
  blurb: string
  stack: string[]
  href: string
  wip?: boolean
}

export type ElsewhereItem = {
  label: string
  value: string
  href: string
}

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

export type Education = {
  period: string
  role: string
  org: string
  location: string
}

export type SkillGroup = {
  group: string
  items: string[]
}

type AccentTitle = {
  before: string
  accent: string
  after?: string
}

export type Translation = {
  app: {
    skipLink: string
    primaryNavLabel: string
    nav: {
      about: string
      work: string
      experience: string
    }
    languageLabel: string
    languageOptions: Record<Language, string>
    footerLastUpdated: string
    footerBackToTop: string
  }
  home: {
    heading: string
    portraitAlt: string
    meta: MetaItem[]
    tagline: string
    about: {
      eyebrow: string
      title: AccentTitle
      ariaLabel: string
      paragraphs: string[]
      cta: {
        before: string
        link: string
        after: string
      }
    }
    snapshots: {
      heading: string
      play: string
      pause: string
      carouselLabel: string
    }
    elsewhere: {
      heading: string
      items: ElsewhereItem[]
    }
  }
  work: {
    eyebrow: string
    title: AccentTitle
    lede: string
    projectsHeading: string
    projectLabel: string
    workInProgress: string
    projects: Project[]
  }
  experience: {
    eyebrow: string
    title: AccentTitle
    lede: string
    workHeading: string
    educationHeading: string
    skillsHeading: string
    companyLinkLabel: string
    work: Company[]
    education: Education[]
    skills: SkillGroup[]
  }
}
