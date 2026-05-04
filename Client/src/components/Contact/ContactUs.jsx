import React from 'react'

function ContactUs() {
    return (
        <div>
            <section className="contact-section">
                <div className="container">
                    <div className="contact-grid" data-aos="fade-up" data-aos-duration="800">
                        <div className="contact-left">
                            <div className="contact-label">Contact Us</div>
                            <h2 className="contact-heading">We'd Love To Hear<br />From You</h2>
                            <div className="contact-divider"></div>
                            <p className="contact-desc">Have questions about our cars or services? Fill out the form or reach out to us
                                through any of the channels below. Our team will get back to you as soon as possible!</p>

                            <div className="contact-info-item">
                                <div className="ci-icon"><i className="fa-solid fa-phone"></i></div>
                                <div className="ci-body">
                                    <h5>Phone</h5>
                                    <a href="tel:+919526226011">9526226011</a>
                                    <p>Click to call us anytime</p>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <div className="ci-icon"><i className="fa-regular fa-envelope"></i></div>
                                <div className="ci-body">
                                    <h5>Email</h5>
                                    <a href="mailto:autodeluxcars@gmail.com">autodeluxcars@gmail.com</a>
                                    <p>We reply within 24 hours</p>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <div className="ci-icon"><i className="fa-solid fa-location-dot"></i></div>
                                <div className="ci-body">
                                    <h5>Location</h5>
                                    <p>Malappuram,Alatoorpadi Kerala, India – 683579</p>
                                    <a href="https://maps.app.goo.gl/k9tspXPotMJiQDTv6" target="_blank">Visit our showroom</a>
                                </div>
                            </div>

                            <div className="follow-label">Follow Us</div>
                            <div className="social-icons">
                                <a href="https://www.facebook.com" target="_blank" className="fb"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.instagram.com" target="_blank" className="ig"><i className="fab fa-instagram"></i></a>
                                <a href="https://wa.me/919526226011" target="_blank" className="wa"><i className="fab fa-whatsapp"></i></a>
                            </div>
                        </div>

                        <div className="contact-right">
                            <h3 className="form-title">Send Us A Message</h3>
                            <div id="contactForm">
                                <div className="form-row">
                                    <div className="form-group">
                                        <input type="text" id="fullName" placeholder="Full Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" id="phoneNumber" placeholder="Phone Number" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="email" id="emailAddress" placeholder="Email Address" />
                                </div>
                                <div className="form-group">
                                    <input type="text" id="subject" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea id="message" placeholder="Your Message"></textarea>
                                </div>
                                <button className="btn-submit" onclick="submitForm()">
                                    <i className="fa-solid fa-paper-plane"></i> Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ContactUs
