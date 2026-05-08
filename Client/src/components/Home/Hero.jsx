import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div>
            <section className="hero" style={{ background: 'linear-gradient(135deg,#0f2540,#1a3a5c)' }}>
                <div className="container">
                    <div className="hero-content" data-aos="fade-right">
                        <span className="badge"><i className="fas fa-star"></i> Kerala's Trusted Used Car Dealer</span>
                        <h2>FIND YOUR<br />PERFECT CAR</h2>
                        <p>Best Quality Used Cars at Affordable Prices</p>
                        <div className="hero-btns">
                            <Link to="/cars" className="btn btn-browse"><i className="fas fa-search"></i> BROWSE CARS</Link>
                            <a href="tel:9526226011" className="btn btn-outline-white"><i className="fas fa-phone"></i> Call Now</a>
                        </div>
                    </div>
                </div>
                <button className="hero-nav-btn hero-prev"><i className="fas fa-chevron-left"></i></button>
                <button className="hero-nav-btn hero-next"><i className="fas fa-chevron-right"></i></button>
            </section>
        </div>
    )
}

export default Hero
