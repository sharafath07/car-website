import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-about" data-aos="fade-up" data-aos-delay="0">
                            <a href="#" className="logo" style={{ display: 'inline-flex' }}>
                                <div className="logo-icon">
                                    <svg viewBox="0 0 36 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 18 L5 10 L10 8 L26 8 L31 10 L34 18 Z" fill="white" opacity="0.9" />
                                        <circle cx="9" cy="19" r="3" fill="white" />
                                        <circle cx="27" cy="19" r="3" fill="white" />
                                    </svg>
                                </div>
                                <div className="logo-text">
                                    <span className="brand">AUTO <span>DELUX</span></span>
                                    <span className="tagline">Premium Used Cars</span>
                                </div>
                            </a>
                            <p>Auto Delux is a trusted used car dealer in Malappuram,Alathoorpadi Kerala. We deal in quality used cars
                                with best price and transparent deals.</p>
                            <div className="footer-social">
                                <a href="https://www.facebook.com" target="_blank" className="fb"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.instagram.com" target="_blank" className="ig"><i className="fab fa-instagram"></i></a>
                                <a href="https://wa.me/919526226011" target="_blank" className="wa"><i className="fab fa-whatsapp"></i></a>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="100">
                            <h4>Quick Links</h4>
                            <ul className="footer-links">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Cars</a></li>
                                <li><a href="#">Sell Your Car</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
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
                                <button className="btn-subscribe" onclick="subscribeNewsletter()">Subscribe</button>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <span>© 2024 Auto Delux. All Rights Reserved.</span>
                        <span>Designed with <i className="fa-solid fa-heart heart"></i> for Premium Car Buyers</span>
                    </div>
                </div>
            </footer>
            <a href="https://wa.me/919526226011" className="wa-float" target="_blank" title="Chat on WhatsApp">
                <i className="fab fa-whatsapp"></i>
            </a>
        </div>
    )
}

export default Footer
