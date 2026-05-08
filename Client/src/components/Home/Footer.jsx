import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-about">
                            <div className="footer-logo">
                                <div className="footer-logo-icon"><i className="fas fa-car"></i></div>
                                <div className="footer-logo-text">
                                    <h2>AUTO DELUX</h2><span>Premium Used Cars</span>
                                </div>
                            </div>
                            <p>Auto Delux is a trusted used car dealer in Malappuram,Alathoorpadi Kerala. We deal in quality used cars
                                with best price and transparent deals.</p>
                            <div className="footer-social">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
                                <a href="https://wa.me/919526226011" target="_blank"><i className="fab fa-whatsapp"></i></a>
                            </div>
                        </div>
                        <div className="footer-col">
                            <h4>QUICK LINKS</h4>
                            <ul>
                                <li><Link to="/"><i className="fas fa-chevron-right"></i> Home</Link></li>
                                <li><Link to="/cars"><i className="fas fa-chevron-right"></i> Cars</Link></li>
                                {/* <li><Link to="/sell-car"><i className="fas fa-chevron-right"></i> Sell Your Car</Link></li> */}
                                <li><Link to="/about"><i className="fas fa-chevron-right"></i> About Us</Link></li>
                                <li><Link to="/contact"><i className="fas fa-chevron-right"></i> Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>OUR SERVICES</h4>
                            <ul>
                                <li><a href="cars.html"><i className="fas fa-chevron-right"></i> Used Car Sales</a></li>
                                <li><a href="#"><i className="fas fa-chevron-right"></i> Car Finance</a></li>
                                <li><a href="#"><i className="fas fa-chevron-right"></i> Car Exchange</a></li>
                                <li><a href="#"><i className="fas fa-chevron-right"></i> Insurance</a></li>
                                <li><a href="#"><i className="fas fa-chevron-right"></i> RC Transfer</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>CONTACT INFO</h4>
                            <div className="footer-contact-item"><i className="fas fa-map-marker-alt"></i><span>Malappuram,Alathoorpadi, Kerala,
                                India</span></div>
                            <div className="footer-contact-item"><i className="fas fa-phone"></i><span>9526226011</span></div>
                            <div className="footer-contact-item"><i className="fas fa-envelope"></i><span>autodeluxcars@gmail.com</span></div>
                            <div className="footer-contact-item"><i className="fas fa-clock"></i><span>Mon–Sat: 9:00 AM – 7:00 PM</span></div>
                            <h4 style={{ marginTop: '20px', marginBottom: '10px' }}>NEWSLETTER</h4>
                            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '10px' }}>Subscribe to get latest updates</p>
                            <div className="newsletter-form">
                                <input type="email" placeholder="Your Email" />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">© 2024 Auto Delux. All Rights Reserved.</div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
