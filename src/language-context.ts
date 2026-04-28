import { createContext } from 'react'
import type { Language, Translation } from './translations'

export type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: Translation
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
