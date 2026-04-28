import { de } from './locales/de'
import { en } from './locales/en'
import type { Language, Translation } from './translation-types'

export type { Language, Translation } from './translation-types'

export const defaultLanguage: Language = 'en'

export const languages: Record<Language, string> = {
  en: 'English',
  de: 'Deutsch',
}

export function isLanguage(value: string): value is Language {
  return value === 'en' || value === 'de'
}

export const translations: Record<Language, Translation> = {
  en,
  de,
}
