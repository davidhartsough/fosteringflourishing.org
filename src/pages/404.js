import React from "react"
import Layout from "../components/layout"

export default ({ location }) => (
  <Layout>
    <section>
      <h1>Page not found</h1>
      <p>
        The page you have tried to navigate to (
        <span className="notfound">{location.pathname}</span>) does not exist.
      </p>
    </section>
  </Layout>
)
