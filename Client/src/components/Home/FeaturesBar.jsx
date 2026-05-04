import React from 'react'

function FeaturesBar() {
    return (
        <div>
            <section className="features-bar">
                <div className="container">
                    <div className="feature-item" data-aos="fade-up" data-aos-delay="0">
                        <div className="feature-icon"><i className="fas fa-award"></i></div>
                        <div className="feature-text">
                            <h4>BEST QUALITY</h4>
                            <p>We provide best quality cars</p>
                        </div>
                    </div>
                    <div className="feature-item" data-aos="fade-up" data-aos-delay="100">
                        <div className="feature-icon"><i className="fas fa-tags"></i></div>
                        <div className="feature-text">
                            <h4>LOWEST PRICE</h4>
                            <p>Get the best price in the market</p>
                        </div>
                    </div>
                    <div className="feature-item" data-aos="fade-up" data-aos-delay="200">
                        <div className="feature-icon"><i className="fas fa-hand-holding-usd"></i></div>
                        <div className="feature-text">
                            <h4>EASY FINANCE</h4>
                            <p>Easy loan facility available</p>
                        </div>
                    </div>
                    <div className="feature-item" data-aos="fade-up" data-aos-delay="300">
                        <div className="feature-icon"><i className="fas fa-headset"></i></div>
                        <div className="feature-text">
                            <h4>AFTER SALES SERVICE</h4>
                            <p>We are with you even after purchase</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeaturesBar
