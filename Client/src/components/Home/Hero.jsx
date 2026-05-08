import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/image1.jpeg';
import img2 from '../../assets/image2.jpeg';
import img3 from '../../assets/image3.jpeg';


function Hero() {
    const images = [img1, img2, img3];
    const [current, setCurrent] = useState(0);

    // NEXT SLIDE
    function next() {
        setCurrent((prev) =>
            (prev + 1) % images.length
        );
    }

    // PREVIOUS SLIDE
    function prev() {
        setCurrent((prev) =>
            (prev - 1 + images.length) %
            images.length
        );
    }
    // AUTO SLIDE
    useEffect(() => {
        const interval =
            setInterval(next, 5000);
        return () =>
            clearInterval(interval);
    }, []);


    return (
        <div>
            <section className="hero" style={{ backgroundImage: `url(${images[current]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
                <button onClick={prev} className="hero-nav-btn hero-prev"><i className="fas fa-chevron-left"></i></button>
                <button onClick={next} className="hero-nav-btn hero-next"><i className="fas fa-chevron-right"></i></button>
            </section>
        </div>
    )
}

export default Hero
