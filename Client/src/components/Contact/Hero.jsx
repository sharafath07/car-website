import React from 'react'
import '../../styles/Contact.css'
import { Link } from 'react-router-dom'


function Hero() {
    return (
        <div>
            <section className="hero">
                <div className="hero-bg"></div>
                <div className="hero-overlay"></div>
                <div className="hero-dots" id="heroDots"></div>
                <div className="container">
                    <div className="hero-content" data-aos="fade-up" data-aos-duration="700">
                        <div className="hero-eyebrow">Get In Touch</div>
                        <h1 className="hero-title">Contact Yem Key</h1>
                        <p className="hero-sub">We are here to help you find your perfect car</p>
                        <div className="breadcrumb">
                            <Link to="/"><i className="fa-solid fa-house" style={{ fontSize: '11px' }}></i> Home</Link>
                            <span className="sep">›</span>
                            <span className="current">Contact</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
