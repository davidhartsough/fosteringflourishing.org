import React from "react"
import { Link } from "gatsby"
import logo from "./logo.svg"
import "./global.css"

export default ({ children }) => (
  <main>
    <div className="banner">
      Please help improve this project by <br className="banner-break" />
      <a href="#/">giving feedback</a> and <a href="#/">suggesting edits</a>.
    </div>
    <header>
      <div className="top-bar">
        <Link to="/" className="logo-link">
          <img className="logo" src={logo} alt="Fostering Flourishing logo" />
        </Link>
        <Link to="/" className="title">
          Fostering Flourishing
        </Link>
      </div>
    </header>
    {children}
  </main>
)
