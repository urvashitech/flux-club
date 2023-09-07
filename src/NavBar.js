import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className='header'>
      <div className='left'>Club Flux</div>
      <div className='right'>
        <ul>
           <li><Link to='/'>Home</Link></li>
           <li><Link to='/about'> About</Link></li>
           <li><Link to='/team'>Team</Link></li>
           <li><Link to='/join'>Join Us</Link></li>
        </ul>       
      </div>
      </nav>
    </div>
  )
}

export default Navbar;
