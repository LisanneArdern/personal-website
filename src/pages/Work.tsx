import { projects } from '../data'
import { isExternal } from '../lib/links'
import PageHead from '../components/PageHead'

const TILE_TONES = ['slate', 'lilac'] as const

export default function Work() {
  return (
    <>
      <PageHead
        eyebrow="Work"
        titleId="work-heading"
        lede="A mix of client work, personal projects, and things I built just because I wanted to see if I could. Some are finished. Some are getting there."
      >
        Things I&rsquo;ve <span className="block block--purple">built</span>.
      </PageHead>

      <section className="section" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="visually-hidden">
          Projects
        </h2>
        <ul className="tiles bleed" role="list">
          {projects.map((project, i) => {
            const tone = TILE_TONES[i % TILE_TONES.length]
            const external = isExternal(project.href)
            return (
              <li key={project.title}>
                <a
                  className={`tile tile--${tone}`}
                  href={project.href}
                  aria-label={`${project.title} \u2014 ${project.role}`}
                  rel={external ? 'noopener noreferrer' : undefined}
                  target={external ? '_blank' : undefined}
                >
                  {project.wip && (
                    <span className="tile__wip">Work in progress</span>
                  )}
                  <span className="tile__label">
                    Project &mdash; {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="tile__title">{project.title}</h3>
                  <p className="tile__blurb">{project.blurb}</p>
                  <span className="tile__foot">
                    <span className="tile__stack">
                      {project.stack.join(' \u00B7 ')}
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
