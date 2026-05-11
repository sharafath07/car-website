import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../assets/Logo.jpeg';
import '../index.css';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='sticky top-0 z-50 w-[100vw]'>
            <nav className="navbar">
                <div className="container">
                    <Link to="/" className="logo">
                        <img src={Logo} alt="Auto Delux Logo" />
                        <div className="logo-text">
                            <h1>AUTO DELUX</h1>
                            <span>Premium Used Cars</span>
                        </div>
                    </Link>
                    <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                        <NavLink to="/" onClick={() => setIsOpen(false)}>
                            Home
                        </NavLink>
                        <NavLink to="/cars" onClick={() => setIsOpen(false)}>
                            Cars
                        </NavLink>
                        {/* <NavLink to="/sell-car">
                            Sell Your Car
                        </NavLink> */}
                        <NavLink to="/about" onClick={() => setIsOpen(false)}>
                            About
                        </NavLink>
                        <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                            Contact
                        </NavLink>
                        <a href="https://wa.me/919526226011" onClick={() => setIsOpen(false)} className="btn-whatsapp-nav"><i className="fab fa-whatsapp"></i> WhatsApp</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar