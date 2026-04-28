import { useEffect } from 'react'
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom'
import { BUILD_DATE } from './data'
import ScrollProgress from './components/ScrollProgress'
import { useLanguage } from './useLanguage'
import { languages, type Language } from './translations'

const dateLocales: Record<Language, string> = {
  en: 'en-GB',
  de: 'de-DE',
}

function formatDate(d: Date, language: Language) {
  return d.toLocaleDateString(dateLocales[language], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function App() {
  const { pathname } = useLocation()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <a className="skip-link" href="#main-content">
        {t.app.skipLink}
      </a>

      <ScrollProgress />

      <div id="top" className="page">
        <header className="topbar">
          <Link className="topbar__brand" to="/">
            lisanneardern.com
          </Link>
          <div className="topbar__actions">
            <nav className="topbar__nav" aria-label={t.app.primaryNavLabel}>
              <NavLink to="/" end>
                {t.app.nav.about}
              </NavLink>
              <NavLink to="/work">{t.app.nav.work}</NavLink>
              <NavLink to="/experience">{t.app.nav.experience}</NavLink>
            </nav>
            <div className="language-switcher" aria-label={t.app.languageLabel}>
              {(Object.keys(languages) as Language[]).map(option => (
                <button
                  key={option}
                  type="button"
                  className="language-switcher__button"
                  aria-pressed={language === option}
                  onClick={() => setLanguage(option)}
                >
                  {option.toUpperCase()}
                  <span className="visually-hidden">
                    {' '}
                    {t.app.languageOptions[option]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </header>

        <main
          id="main-content"
          tabIndex={-1}
          key={pathname}
          className="page-transition"
        >
          <Outlet />
        </main>
      </div>

      <div className="bleed-wrap">
        <footer className="footer">
          <div className="footer__inner">
            <span>© {new Date().getFullYear()} Lisanne Ardern</span>
            <div className="footer__meta">
              <span>
                {t.app.footerLastUpdated} {formatDate(BUILD_DATE, language)}
              </span>
              <a href="#top">{t.app.footerBackToTop}</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
