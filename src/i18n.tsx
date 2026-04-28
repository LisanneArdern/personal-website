import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  defaultLanguage,
  isLanguage,
  translations,
  type Language,
} from './translations'
import { LanguageContext } from './language-context'

const STORAGE_KEY = 'lisanne-language'

function getInitialLanguage(): Language {
  const storedLanguage = window.localStorage.getItem(STORAGE_KEY)
  return storedLanguage && isLanguage(storedLanguage)
    ? storedLanguage
    : defaultLanguage
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
