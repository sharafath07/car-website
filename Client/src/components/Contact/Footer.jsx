import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-about" data-aos="fade-up" data-aos-delay="0">
                            <div className="footer-logo">
                                <div className="footer-logo-icon"><i className="fas fa-car"></i></div>
                                <div className="footer-logo-text">
                                    <h2>YEM KEY</h2><span>Premium Used Cars</span>
                                </div>
                            </div>
                            <p>Yem Key is a trusted used car dealer in Malappuram,Alathoorpadi Kerala. We deal in quality used cars
                                with best price and transparent deals.</p>
                            <div className="footer-social">
                                <a href="https://www.facebook.com/share/1GJnvKYsRY/?mibextid=wwXIfr" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.instagram.com/auto_deluxe_usedcars?igsh=YW5ybHA4OWx1eHh4" target="_blank"><i className="fab fa-instagram"></i></a>
                                <a href="https://wa.me/919526226011" target="_blank"><i className="fab fa-whatsapp"></i></a>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="100">
                            <h4>Quick Links</h4>
                            <ul className="footer-links">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/cars">Cars</Link></li>
                                {/* <li><Link to="/sell-your-car">Sell Your Car</Link></li> */}
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200">
                            <h4>Our Services</h4>
                            <ul className="footer-links">
                                <li><a href="#">Used Car Sales</a></li>
                                <li><a href="#">Car Finance</a></li>
                                <li><a href="#">Car Exchange</a></li>
                                <li><a href="#">Insurance</a></li>
                                <li><a href="#">RC Transfer</a></li>
                            </ul>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300">
                            <h4>Contact Info</h4>
                            <div className="footer-contact-item">
                                <i className="fa-solid fa-location-dot"></i>
                                <span>Malappuram,Alathoorpadi, Kerala, India</span>
                            </div>
                            <div className="footer-contact-item">
                                <i className="fa-solid fa-phone"></i>
                                <a href="tel:+919526226011">9526226011</a>
                            </div>
                            <div className="footer-contact-item">
                                <i className="fa-regular fa-envelope"></i>
                                <a href="mailto:autodeluxcars@gmail.com">autodeluxcars@gmail.com</a>
                            </div>
                            <div className="footer-contact-item">
                                <i className="fa-regular fa-clock"></i>
                                <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="400">
                            <h4>Newsletter</h4>
                            <p className="footer-desc">Subscribe to get latest updates and offers</p>
                            <div className="newsletter-input-wrap">
                                <input type="email" id="newsletterEmail" placeholder="Your Email Address" />
                                <button className="btn-subscribe">Subscribe</button>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <span>© 2024 Yem Key. All Rights Reserved.</span>
                        <span>Designed with <i className="fa-solid fa-heart heart"></i> for Premium Car Buyers</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
