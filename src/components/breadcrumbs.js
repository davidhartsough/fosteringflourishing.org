import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const BreadCrumb = ({ link, name }) => (
  <span>
    {" / "}
    <Link to={link}>{capitalizeFirstLetter(name)}</Link>
  </span>
)

const BreadCrumbs = ({ path }) => {
  const slugs = path.split("/").filter(s => s.length)
  return (
    <nav>
      <Link to="/">Flourishing</Link>
      {slugs.map((slug, index) => (
        <BreadCrumb
          key={slug}
          name={slug}
          link={
            index ? `/${slugs.slice(0, index + 1).join("/")}/` : `/${slug}/`
          }
        />
      ))}
    </nav>
  )
}

BreadCrumbs.propTypes = {
  path: PropTypes.string.isRequired,
}

export default BreadCrumbs
