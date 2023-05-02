import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset} from '../features/auth/authSlice'
const Navbar = () => {
    const padding = {
        paddingLeft: "10px",
        paddingRight: "20px"
    }
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

  return (
    <header className='header'>
        <div className="logo">
            <Link style={padding}  to='/'>GoalSetter</Link>
        </div>
        {user ? <ul>
            <li>
                <button onClick={handleLogout} className='btn' style={padding} ><FaSignOutAlt/> Logout </button>
            </li>
        </ul> : <ul><li>
                <Link style={padding} to="/login"><FaSignInAlt/> Login </Link>
            </li>
            <li>
                <Link style={padding} to="/register"><FaUser/> Register </Link>
            </li></ul>}
    </header>
  )
}

export default Navbar
