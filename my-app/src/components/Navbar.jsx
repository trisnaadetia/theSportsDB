import React, { useState } from 'react'
import Logo from '../assets/logo-web.png'
import { Link } from 'react-router-dom'

function Navbar() {
  const [title] = useState('The SportsDB')
  return(
    <>
      <nav className="navbar navbar-dark fixed-top" style={{ backgroundColor: '#000' }}>
        <div className="ml-3 text-light">
          <img src={Logo} alt="logo" width="50" height="40" className="d-inline-block mr-2"/>
          <h5 className="d-inline-block">{title}</h5>
          <Link className="text-light ml-3" to="/">
            <h6 className="d-inline-block"
              style={{fontFamily: 'sans-serif'}}
            >
              Home
            </h6>
          </Link>
          <Link className="text-light ml-3" to="/favourite">
            <h6 className="d-inline-block"
              style={{fontFamily: 'sans-serif'}}
            >
              Favourite
            </h6>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar