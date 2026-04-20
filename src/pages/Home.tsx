import { useState } from 'react'
import { elsewhere } from '../data'
import { isExternal } from '../lib/links'
import PageHead from '../components/PageHead'
import ResponsivePicture from '../components/ResponsivePicture'
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

type MetaItem = {
  label: string
  value: string
  accent?: boolean
}

const META: MetaItem[] = [
  { label: 'Role', value: 'Frontend Developer' },
  { label: 'Based', value: 'Taipei, Taiwan' },
  { label: 'Status', value: 'Open to work', accent: true },
]

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

  return (
    <>
      <section className="portrait-hero" aria-labelledby="intro-heading">
        <h1 id="intro-heading" className="portrait-hero__name">
          Hello, I&rsquo;m Lisanne
        </h1>

        <div className="portrait-hero__stage">
          <dl className="portrait-hero__meta meta-list">
            {META.map(item => (
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
              alt="Portrait of Lisanne Ardern."
              fetchPriority="high"
            />
          </figure>

          <p className="portrait-hero__tagline">
            Passionate about building interfaces that feel as good as they look.
          </p>
        </div>
      </section>

      <PageHead eyebrow="About" titleId="about-heading" level="h2">
        I used to design experiences for travellers. Now I design them for{' '}
        <span className="block block--purple">users</span>.
      </PageHead>

      <section className="about" aria-label="About me">
        <div className="about__body">
          <p>
            My background is in international tourism management, where I spent
            years building end-to-end products that had to work for people from
            every corner of the world. That probably has something to do with
            growing up between two cultures: my mum is German, my dad English,
            so navigating different perspectives comes naturally.
          </p>
          <p>
            When COVID brought the industry to a halt, I didn&rsquo;t slow down
            with it. I used the time to go deep on something I&rsquo;d always
            been drawn to: digital products. Four years later I&rsquo;m a
            frontend developer who still thinks like a product designer,
            building interfaces that are as considered as they are functional.
          </p>
          <p>
            I&rsquo;ve lived in Mexico for three years, which means I&rsquo;ve
            eaten very well and picked up enough Spanish to be an active part in
            the best Mexican family parties. Now I call Taipei home &mdash;
            I&rsquo;m noticing a pattern with my life choices and good food. I
            speak English, German, and Spanish fluently, and I&rsquo;m working
            on my Mandarin one dumpling order at a time.
          </p>
          <p>
            Outside of work I&rsquo;m usually dancing, discovering a new
            neighbourhood, or hunting down the best meal in whatever city
            I&rsquo;m in.
          </p>
          <p>
            I&rsquo;m currently open to new opportunities in Taipei. If
            you&rsquo;re building something that deserves to be beautiful,{' '}
            <a className="inline-link" href="mailto:ardern.lisanne@gmail.com">
              let&rsquo;s talk
            </a>
            .
          </p>
        </div>
      </section>

      <section className="snapshots" aria-labelledby="snapshots-heading">
        <div className="snapshots__head">
          <h2 className="label" id="snapshots-heading">
            Lately
          </h2>
          <button
            type="button"
            className="photo-marquee-toggle"
            aria-pressed={marqueePaused}
            aria-controls="photo-marquee"
            onClick={() => setMarqueePaused(p => !p)}
          >
            {marqueePaused ? 'Play' : 'Pause'}
            <span className="visually-hidden"> photo carousel</span>
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
            Elsewhere
          </h2>
        </div>
        <ul className="elsewhere__list" role="list">
          {elsewhere.map(item => {
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
