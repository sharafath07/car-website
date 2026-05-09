import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../assets/Logo.jpeg';
import '../index.css';


function Navbar() {
    return (
        <div className='sticky top-0 z-50'>
            <nav className="navbar">
                <div className="container">
                    <Link to="/" className="logo">
                        <img src={Logo} alt="Auto Delux Logo" />
                        <div className="logo-text">
                            <h1>AUTO DELUX</h1>
                            <span>Premium Used Cars</span>
                        </div>
                    </Link>
                    <div className="hamburger"><span></span><span></span><span></span></div>
                    <div className="nav-links">
                        <NavLink to="/">
                            Home
                        </NavLink>
                        <NavLink to="/cars">
                            Cars
                        </NavLink>
                        {/* <NavLink to="/sell-car">
                            Sell Your Car
                        </NavLink> */}
                        <NavLink to="/about">
                            About
                        </NavLink>
                        <NavLink to="/contact">
                            Contact
                        </NavLink>
                        <a href="https://wa.me/919526226011" className="btn-whatsapp-nav"><i className="fab fa-whatsapp"></i> WhatsApp</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar