import React, { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {BsBorderWidth} from 'react-icons/bs'
import { Button } from 'react-bootstrap'

import './NavbarStyles.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
  return (
    <div className='navbar'>
        <div className='logo'>
<h2>Travels</h2>
        </div> 
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About us</li>
            <li>Resources</li>
            <li>Contact</li>
            <li><Button variant="primary">Primary</Button>{' '}</li>
        </ul>
<div className='nav-icons'>
    <BiSearch className="icon"></BiSearch>
    <BsPerson className="icon"></BsPerson>
</div>
<div className='hamburger' onClick={handleNav}>
    <BsBorderWidth className="icon"></BsBorderWidth>
</div>
<div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
<ul className='mobile-nav'>
            <li>Home</li>
            <li>About us</li>
            <li>Resources</li>
            <li>Contact</li>
        </ul>
</div>
    </div>
  )
}

export default Navbar