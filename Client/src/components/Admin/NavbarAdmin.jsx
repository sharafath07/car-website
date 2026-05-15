import React, { useContext, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/Logo.jpeg';
import '../../index.css';
import { CarContext } from '../../Context/CarContext.jsx';


function NavbarAdmin() {
    const navigate = useNavigate();
    const { setToken, token } = useContext(CarContext);
    const [isOpen, setIsOpen] = useState(false);

    function handleLogout() {
        setToken('');
        localStorage.removeItem('token');
        setIsOpen(false);
        navigate('/admin/login');
    }


    return (
        <div className='sticky top-0 z-50 w-[100vw]'>
            <nav className="navbar">
                <div className="container">
                    <Link to="/" className="logo">
                        <img src={Logo} alt="Yem Key Logo" />
                        {/* <div className="logo-text">
                            <h1>YEM KEY</h1>
                            <span>Premium Used Cars</span>
                        </div> */}
                    </Link>
                    <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                        <NavLink to="/admin/dashboard" onClick={() => setIsOpen(false)}>
                            Dashboard
                        </NavLink>
                        <NavLink to="/admin/addcar" onClick={() => setIsOpen(false)}>
                            Add Car
                        </NavLink>
                        <button className="btn-logout" onClick={handleLogout}>
                            Logout
                        </button>
                        <a href="https://wa.me/919526226011" onClick={() => setIsOpen(false)} className="btn-whatsapp-nav"><i className="fab fa-whatsapp"></i> WhatsApp</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavbarAdmin