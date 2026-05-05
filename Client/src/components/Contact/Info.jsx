import React from 'react'
import '../../styles/Contact.css'


function Info() {
    return (
        <div>
            <section className="info-section">
                <div className="container">
                    <div className="info-grid">
                        <div className="info-card" data-aos="fade-up" data-aos-delay="0">
                            <div className="info-icon"><i className="fa-solid fa-location-dot"></i></div>
                            <div className="info-card-body">
                                <h4>Our Location</h4>
                                <p>Malappuram,Alathoorpadi Kerala, India<br />683579</p>
                            </div>
                        </div>
                        <div className="info-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="info-icon"><i className="fa-solid fa-phone"></i></div>
                            <div className="info-card-body">
                                <h4>Phone Number</h4>
                                <p>9526226011</p>
                                <a href="tel:+919526226011">Click to Call</a>
                            </div>
                        </div>
                        <div className="info-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="info-icon"><i className="fa-regular fa-envelope"></i></div>
                            <div className="info-card-body">
                                <h4>Email Address</h4>
                                <p>autodeluxcars@gmail.com</p>
                                <a href="mailto:autodeluxcars@gmail.com">Send Email</a>
                            </div>
                        </div>
                        <div className="info-card" data-aos="fade-up" data-aos-delay="300">
                            <div className="info-icon"><i className="fa-regular fa-clock"></i></div>
                            <div className="info-card-body">
                                <h4>Working Hours</h4>
                                <p>Mon – Sat: 9:00 AM – 7:00 PM</p>
                                <span className="sunday">Sunday: Closed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Info
