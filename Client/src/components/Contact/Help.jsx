import React from 'react'

function Help() {
    return (
        <div>
            <section className="help-banner">
                <div className="container">
                    <div className="help-inner" data-aos="fade-up">
                        <div className="help-left">
                            <div className="help-icon-wrap">
                                <i className="fa-solid fa-headset"></i>
                            </div>
                            <div className="help-text">
                                <h3>Need Immediate Help?</h3>
                                <p>Our team is available to assist you!</p>
                            </div>
                        </div>
                        <div className="help-btns">
                            <a href="tel:+919526226011" className="btn-call">
                                <i className="fa-solid fa-phone"></i> Call Now
                            </a>
                            <a href="https://wa.me/919526226011" target="_blank" className="btn-chat">
                                <i className="fab fa-whatsapp"></i> Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Help
