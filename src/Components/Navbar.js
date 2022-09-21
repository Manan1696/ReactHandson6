import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

 function Navbar() {
  return (
    <div className='navbar'>
     <Link to="/home" className='link'>
     <h2>Home </h2>
     </Link>

     <Link to="/student" className='link'>
     <h2>Student</h2> 
     </Link>

     <Link to="/contact" className='link'>
     <h2>Contact</h2>      
     </Link>
    </div>
    
  )
}
export default Navbar;