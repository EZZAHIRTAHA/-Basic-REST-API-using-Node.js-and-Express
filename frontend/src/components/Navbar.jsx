import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const padding = {
        paddingLeft: "10px",
        paddingRight: "20px"
    }
  return (
    <header className='header'>
        <div className="logo">
            <Link style={padding}  to='/'>GoalSetter</Link>
        </div>
        <ul>
            <li>
                <Link style={padding} to="/login"><FaSignInAlt/> Login </Link>
            </li>
            <li>
                <Link style={padding} to="/register"><FaUser/> Register </Link>
            </li>
        </ul>
    </header>
  )
}

export default Navbar
