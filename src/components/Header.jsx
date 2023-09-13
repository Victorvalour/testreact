import React from "react"
import logo from "../images/logo.png"

export default function Header() {
    return (
  <header>
        <nav className="navbar">
          <img src={logo} alt="react logo" className="logo"/>
          <ul className='ul'>
            <li>Home</li>
            <li>Services</li>
            <li>Pricing</li>
          </ul>
        </nav>
      </header>
    )
  }
