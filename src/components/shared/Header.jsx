import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <h1><Link to='/'>Hotels-App</Link></h1>
        <nav>
            <ul>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/reservations'>Reservations</Link></li>
            </ul>
        </nav>
      
    </header>
  )
}

export default Header
