import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import Head from "./head"
import BreadCrumbs from "./breadcrumbs"

export default ({ data: { site, md }, location: { pathname: path } }) => (
  <Layout>
    <Head site={site.meta} page={md.fm} path={path} />
    {path !== "/" && <BreadCrumbs path={path} />}
    <section>
      <h1>{md.fm.title}</h1>
      {path !== "/" && path !== "/needs/" && (
        <div dangerouslySetInnerHTML={{ __html: md.toc }} />
      )}
      <div dangerouslySetInnerHTML={{ __html: md.html }} />
      <footer>
        Please help improve this page by{" "}
        <a
          target="_blank"
          rel="nofollow noopener noreferrer"
          href={`https://docs.google.com/forms/d/e/1FAIpQLSf4EYRjuoIUobgMH6M2ktRRkf6rXvjvCiZFdJkTKSv_fLLHJA/viewform?usp=pp_url&entry.1605531621=${md.fm.title.replace(
            / /g,
            "+",
          )}`}
        >
          suggesting edits
        </a>
        .
      </footer>
    </section>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    site {
      meta: siteMetadata {
        title
        baseKeywords
        author
        url
        image
        imageAlt
        schemaType
        ogType
        color
      }
    }
    md: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      toc: tableOfContents
      fm: frontmatter {
        title
        description
        keywords
      }
    }
  }
`
