import React, { useContext } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/Logo.jpeg';
import '../../index.css';
import { CarContext } from '../../Context/CarContext.jsx';


function NavbarAdmin() {
    const navigate = useNavigate();
    const { setToken, token } = useContext(CarContext);

    function handleLogout() {
        setToken('');
        localStorage.removeItem('token');
    }


    return (
        <div>
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
                        <NavLink to="/admin/dashboard">
                            Dashboard
                        </NavLink>
                        <NavLink to="/admin/addcar">
                            Add Car
                        </NavLink>
                        <button className="btn-logout" onClick={handleLogout}>
                            Logout
                        </button>
                        <a href="https://wa.me/919526226011" className="btn-whatsapp-nav"><i className="fab fa-whatsapp"></i> WhatsApp</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavbarAdmin