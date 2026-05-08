import { isExternal } from '../lib/links'
import PageHead from '../components/PageHead'
import { useLanguage } from '../useLanguage'

export default function Work() {
  const { t } = useLanguage()

  return (
    <>
      <PageHead
        eyebrow={t.work.eyebrow}
        titleId="work-heading"
        lede={t.work.lede}
      >
        {t.work.title.before}{' '}
        <span className="block block--purple">{t.work.title.accent}</span>
        {t.work.title.after}
      </PageHead>

      <section className="section" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="visually-hidden">
          {t.work.projectsHeading}
        </h2>
        <ul className="tiles bleed" role="list">
          {t.work.projects.map((project, i) => {
            const external = isExternal(project.href)
            return (
              <li
                key={project.title}
                className={project.featured ? 'tile-item--featured' : undefined}
              >
                <a
                  className={`tile${project.featured ? ' tile--featured' : ''}`}
                  href={project.href}
                  aria-label={`${project.title} \u2014 ${project.role}`}
                  rel={external ? 'noopener noreferrer' : undefined}
                  target={external ? '_blank' : undefined}
                >
                  {project.wip && <span className="tile__wip">{t.work.workInProgress}</span>}
                  <span className="tile__label">
                    {t.work.projectLabel} &mdash; {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="tile__title">{project.title}</h3>
                  <p className="tile__blurb">{project.blurb}</p>
                  <span className="tile__foot">
                    <span className="tile__meta">
                      <span className="tile__stack">
                        {project.stack.join(' \u00B7 ')}
                      </span>
                      {project.scope && (
                        <span className="tile__scope">{project.scope}</span>
                      )}
                    </span>
                    <span className="tile__arrow" aria-hidden="true">
                      {external ? '\u2197' : '\u2192'}
                    </span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
