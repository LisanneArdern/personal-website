import { useEffect } from 'react'
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom'
import { BUILD_DATE } from './data'
import ScrollProgress from './components/ScrollProgress'

function formatDate(d: Date) {
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <ScrollProgress />

      <div id="top" className="page">
        <header className="topbar">
          <Link className="topbar__brand" to="/">
            lisanneardern.com
          </Link>
          <nav className="topbar__nav" aria-label="Primary">
            <NavLink to="/" end>
              about
            </NavLink>
            <NavLink to="/work">work</NavLink>
            <NavLink to="/experience">experience</NavLink>
          </nav>
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
              <span>Last updated {formatDate(BUILD_DATE)}</span>
              <a href="#top">Back to top ↑</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
