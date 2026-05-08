import PageHead from '../components/PageHead'
import { useLanguage } from '../useLanguage'

export default function Experience() {
  const { t } = useLanguage()

  return (
    <>
      <PageHead
        eyebrow={t.experience.eyebrow}
        titleId="exp-heading"
        lede={t.experience.lede}
      >
        {t.experience.title.before}
        {t.experience.title.before ? ' ' : ''}
        <span className="block block--purple">
          {t.experience.title.accent}
        </span>
        {t.experience.title.after}
      </PageHead>

      <section className="cv" aria-labelledby="cv-work">
        <div className="cv__head">
          <h2 className="label" id="cv-work">
            {t.experience.workHeading}
          </h2>
        </div>

        <div className="cv__groups">
          {t.experience.work.map(company => (
            <article key={company.company} className="cv__group">
              <header className="cv__group-head">
                {company.url ? (
                  <a
                    className="cv__company-link"
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${company.company} — ${t.experience.companyLinkLabel}`}
                  >
                    <h3 className="cv__company">
                      <span className="cv__company-name">
                        {company.company}
                      </span>
                      <span
                        className="cv__company-arrow"
                        aria-hidden="true"
                      >
                        &#8599;
                      </span>
                    </h3>
                    <p className="cv__company-loc">{company.location}</p>
                  </a>
                ) : (
                  <>
                    <h3 className="cv__company">{company.company}</h3>
                    <p className="cv__company-loc">{company.location}</p>
                  </>
                )}
              </header>

              <ol className="cv__roles" role="list">
                {company.roles.map(role => (
                  <li
                    key={`${company.company}-${role.role}-${role.period}`}
                    className="cv__item"
                  >
                    <span className="cv__period">{role.period}</span>
                    <div className="cv__body">
                      <h4 className="cv__role">{role.role}</h4>
                      <ul className="cv__bullets" role="list">
                        {role.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <section className="cv" aria-labelledby="cv-edu">
        <div className="cv__head">
          <h2 className="label" id="cv-edu">
            {t.experience.educationHeading}
          </h2>
        </div>
        <ol className="cv__list" role="list">
          {t.experience.education.map(item => (
            <li key={`${item.period}-${item.role}`} className="cv__item">
              <span className="cv__period">{item.period}</span>
              <div className="cv__body">
                <h3 className="cv__role">{item.role}</h3>
                <p className="cv__org">
                  {item.org}
                  <span className="cv__sep" aria-hidden="true">
                    {' '}
                    &middot;{' '}
                  </span>
                  <span className="cv__location">{item.location}</span>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="cv" aria-labelledby="cv-skills">
        <div className="cv__head">
          <h2 className="label" id="cv-skills">
            {t.experience.skillsHeading}
          </h2>
        </div>
        <dl className="skills">
          {t.experience.skills.map(group => (
            <div key={group.group} className="skills__row">
              <dt>{group.group}</dt>
              <dd>
                <ul className="skills__list" role="list">
                  {group.items.map(item => (
                    <li key={item} className="skills__item">
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  )
}
