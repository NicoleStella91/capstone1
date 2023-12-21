import logo from '../../public/assets/Logo.svg'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Nav() {
    const [barOpen, setBarOpen] = useState(false)
    function openBar() {
        setBarOpen(!barOpen)
    }
    return (
        <nav className={`navbar ${barOpen ? "open" : ""}`}>
            <Link to="/"><img src={logo} alt="Little Lemon Logo" /></Link>
            <FontAwesomeIcon icon={faBars} className='bar' onClick={openBar}/>
            <ul className={`navbar--links ${barOpen ? "visible": ""}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="">Menu</a></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><a href="">Order Online</a></li>
                <li><a href="">Login</a></li>
                <FontAwesomeIcon icon={faCartShopping} />
            </ul>
        </nav>
    )
}

export default Nav