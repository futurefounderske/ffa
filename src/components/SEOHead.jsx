import { Helmet } from 'react-helmet-async'

export default function SEOHead({ title, description, path = '' }) {
  const fullTitle = title
    ? `${title} | Future Founders Academy`
    : 'Future Founders Academy – Young Adults Bootcamp Kenya 2026'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://www.futurefoundersbootcamp.ke${path}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`https://www.futurefoundersbootcamp.ke${path}`} />
    </Helmet>
  )
}
