import React from "react";
import { Link } from 'react-router-dom'

import './Navbar.css'


const Navbar = () => {
  return (
    <>
      <div className="navBar">
          <ul className="navItems">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='status'>Status</Link></li>
            <li><Link to='process'>Process</Link></li>
            <li><Link to='config'>Config</Link></li>
            <li><Link to='calculator'>Calculator</Link></li>
          </ul>
      </div>
    </>
  )
}

export default Navbar

