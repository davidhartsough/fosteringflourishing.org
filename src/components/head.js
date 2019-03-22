import React from "react"
import Helmet from "react-helmet"

export default ({ site, page, path }) => (
  <Helmet>
    <html lang="en" prefix="og: http://ogp.me/ns#" />
    <title>{path === "/" ? site.title : `${page.title} - ${site.title}`}</title>
    <meta name="description" content={page.description} />
    <meta name="keywords" content={`${site.baseKeywords}${page.keywords}`} />
    <meta name="author" content={site.author} />
    <link rel="canonical" href={`${site.url}${path}`} />
    <meta property="og:title" content={page.title} />
    <meta property="og:type" content={site.ogType} />
    <meta property="og:url" content={`${site.url}${path}`} />
    <meta property="og:image" content={site.image} />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:alt" content={site.title} />
    <meta property="og:locale" content="en_US" />
    <meta property="og:description" content={page.description} />
    <meta property="og:site_name" content={site.title} />
    <meta name="twitter:card" content="summary" />
    <script type="application/ld+json">
      {`
      {
        "@context": "https://schema.org/",
        "@type": "${site.schemaType}",
        "name": "${site.title}",
        "url": "${site.url}${path}",
        "headline": "${page.title}",
        "description": "${page.description}",
        "keywords": "${site.baseKeywords}${page.keywords}",
        "image": "${site.image}",
        "author": {
          "@type": "Person",
          "name": "${site.author}"
        }
      }
    `}
    </script>
    <link rel="author" href="/humans.txt" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="application-name" content={site.title} />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-title" content={site.title} />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="msapplication-TileImage" content={site.msTileImage} />
    <meta name="msapplication-TileColor" content={site.color} />
    <link rel="mask-icon" href={site.maskIcon} color={site.color} />
  </Helmet>
)
