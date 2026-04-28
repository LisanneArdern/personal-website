import { useState } from 'react'
import { isExternal } from '../lib/links'
import PageHead from '../components/PageHead'
import ResponsivePicture from '../components/ResponsivePicture'
import { useLanguage } from '../useLanguage'
import portraitPicture from '../../images/lisanne-landing.png?w=1200&format=avif;webp;png&as=picture'

const snapshotModules = import.meta.glob<PictureModule>(
  '../../images/lisanne-*.{jpg,jpeg}',
  {
    eager: true,
    import: 'default',
    query: { w: 900, format: 'avif;webp;jpg', as: 'picture' },
  }
)

const findPicture = (slug: string): PictureModule => {
  const entry = Object.entries(snapshotModules).find(([path]) =>
    path.includes(`lisanne-${slug}.`)
  )
  if (!entry) throw new Error(`Missing snapshot image for slug: ${slug}`)
  return entry[1]
}

type Snapshot = {
  picture: PictureModule
  place: string
}

const SNAPSHOT_ORDER: ReadonlyArray<readonly [string, string]> = [
  ['jiufen', 'Jiufen'],
  ['palma', 'Palma'],
  ['night-market', 'Night market'],
  ['dhermi', 'Dhermi'],
  ['taichung', 'Taichung'],
  ['malaga', 'Malaga'],
  ['wulai', 'Wulai'],
  ['hike', 'Hike'],
  ['restaurant', 'Restaurant'],
  ['shanghai', 'Shanghai'],
  ['office', 'Office'],
]

const snapshots: Snapshot[] = SNAPSHOT_ORDER.map(([slug, place]) => ({
  picture: findPicture(slug),
  place,
}))

export default function Home() {
  const [marqueePaused, setMarqueePaused] = useState(false)
  const { t } = useLanguage()

  return (
    <>
      <section className="portrait-hero" aria-labelledby="intro-heading">
        <h1 id="intro-heading" className="portrait-hero__name">
          {t.home.heading}
        </h1>

        <div className="portrait-hero__stage">
          <dl className="portrait-hero__meta meta-list">
            {t.home.meta.map(item => (
              <div
                key={item.label}
                className={`meta-list__row${
                  item.accent ? ' meta-list__row--purple' : ''
                }`}
              >
                <dt className="meta-list__key">{item.label}</dt>
                <span className="meta-list__sep" aria-hidden="true">
                  &mdash;
                </span>
                <dd className="meta-list__value">{item.value}</dd>
              </div>
            ))}
          </dl>

          <figure className="portrait-hero__photo">
            <ResponsivePicture
              picture={portraitPicture}
              alt={t.home.portraitAlt}
              fetchPriority="high"
            />
          </figure>

          <p className="portrait-hero__tagline">
            {t.home.tagline}
          </p>
        </div>
      </section>

      <PageHead
        eyebrow={t.home.about.eyebrow}
        titleId="about-heading"
        level="h2"
      >
        {t.home.about.title.before}{' '}
        <span className="block block--purple">
          {t.home.about.title.accent}
        </span>
        {t.home.about.title.after}
      </PageHead>

      <section className="about" aria-label={t.home.about.ariaLabel}>
        <div className="about__body">
          {t.home.about.paragraphs.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            {t.home.about.cta.before}{' '}
            <a className="inline-link" href="mailto:ardern.lisanne@gmail.com">
              {t.home.about.cta.link}
            </a>
            {t.home.about.cta.after}
          </p>
        </div>
      </section>

      <section className="snapshots" aria-labelledby="snapshots-heading">
        <div className="snapshots__head">
          <h2 className="label" id="snapshots-heading">
            {t.home.snapshots.heading}
          </h2>
          <button
            type="button"
            className="photo-marquee-toggle"
            aria-pressed={marqueePaused}
            aria-controls="photo-marquee"
            onClick={() => setMarqueePaused(p => !p)}
          >
            {marqueePaused ? t.home.snapshots.play : t.home.snapshots.pause}
            <span className="visually-hidden">
              {t.home.snapshots.carouselLabel}
            </span>
          </button>
        </div>

        <div
          id="photo-marquee"
          className="photo-marquee"
          aria-hidden="true"
          data-paused={marqueePaused}
        >
          <ul className="photo-marquee__track">
            {[...snapshots, ...snapshots, ...snapshots].map((shot, i) => (
              <li key={`${shot.place}-${i}`} className="photo-marquee__item">
                <ResponsivePicture
                  picture={shot.picture}
                  alt=""
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="elsewhere"
        className="elsewhere"
        aria-labelledby="elsewhere-heading"
      >
        <div className="elsewhere__head">
          <h2 className="label" id="elsewhere-heading">
            {t.home.elsewhere.heading}
          </h2>
        </div>
        <ul className="elsewhere__list" role="list">
          {t.home.elsewhere.items.map(item => {
            const external = isExternal(item.href)
            return (
              <li key={item.label} className="elsewhere__row">
                <span className="elsewhere__label">{item.label}</span>
                <a
                  className="elsewhere__link"
                  href={item.href}
                  rel={external ? 'noopener noreferrer' : undefined}
                  target={external ? '_blank' : undefined}
                >
                  {item.value}
                </a>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
