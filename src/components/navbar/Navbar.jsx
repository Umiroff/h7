import React from 'react'
import { Link } from 'react-router-dom'
import '../navbar/Navbar.css'

function Navbar() {
  return (
    <>
    <div className='nav'>
        <h2><Link to={'/'} className='nav_logo'>Users</Link></h2>
        <Link className='nav_link' to={'/register'}>Register</Link>
    </div>
    </>
  )
}

export default Navbar