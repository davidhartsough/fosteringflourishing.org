import React from "react"
import { Link } from "gatsby"
import logo from "./logo.svg"
import "./global.css"

export default ({ children }) => (
  <main>
    <div className="banner">
      Please help improve this project by <br className="banner-break" />
      <a
        target="_blank"
        rel="nofollow noopener noreferrer"
        href="https://docs.google.com/forms/d/e/1FAIpQLSc8Tk9yx-WvhZKBFLYFst1QOIe1DASWZY3PGjiWp0Cu2GDclQ/viewform?usp=sf_link"
      >
        giving feedback
      </a>{" "}
      and <Link to="/contributing/">contributing</Link>.
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
