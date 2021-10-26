import React from "react"
import { Link } from "gatsby"
import logo from "./logo.svg"
import "./global.css"

export default ({ children }) => (
  <main>
    <div className="banner">
      Please note that this website is from 2018 <br className="banner-break" />
      and will be rewritten in the coming month.
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
