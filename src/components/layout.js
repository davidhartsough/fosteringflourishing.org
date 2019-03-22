import React from "react"
import { Link } from "gatsby"
import "./global.css"

export default ({ children }) => (
  <main>
    <header>
      <div className="top-bar">
        <Link to="/" className="logo">
          <img src="/icons/icon-144x144.png" alt="Fostering Flourishing logo" />
        </Link>
        <Link to="/" className="ff">
          Fostering Flourishing
        </Link>
      </div>
    </header>
    {children}
  </main>
)
