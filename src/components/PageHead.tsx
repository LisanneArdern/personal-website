import type { ReactNode } from 'react'

type PageHeadProps = {
  eyebrow: string
  titleId: string
  level?: 'h1' | 'h2'
  children: ReactNode
  /** Optional supporting paragraph below the title. */
  lede?: ReactNode
}

export default function PageHead({
  eyebrow,
  titleId,
  level = 'h1',
  children,
  lede,
}: PageHeadProps) {
  const Heading = level
  return (
    <section className="page-head" aria-labelledby={titleId}>
      <p className="page-head__label">{eyebrow}</p>
      <Heading id={titleId} className="page-head__title">
        {children}
      </Heading>
      {lede && <p className="page-head__lede">{lede}</p>}
    </section>
  )
}
