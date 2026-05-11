import React from 'react'

function WhyChooseUs() {
    return (
        <div>
            <section className="why-section">
                <div className="container">
                    <div className="why-content">
                        <div className="why-text" data-aos="fade-right">
                            <h2>WHY CHOOSE AUTO DELUXE?</h2>
                            <p>At Auto Deluxe, we believe in trust, transparency and customer satisfaction. We provide the best quality
                                used cars with best price and a seamless car-buying experience in Kerala.</p>
                            <ul className="why-list">
                                <li><i className="fas fa-check-circle"></i> 100% Certified Cars</li>
                                <li><i className="fas fa-check-circle"></i> Transparent Deal</li>
                                <li><i className="fas fa-check-circle"></i> No Hidden Charges</li>
                                <li><i className="fas fa-check-circle"></i> Quick & Easy Process</li>
                                <li><i className="fas fa-check-circle"></i> Trusted by Thousands</li>
                                <li><i className="fas fa-check-circle"></i> Easy Finance Options</li>
                            </ul>
                            <a href="about.html" className="btn btn-primary">READ MORE <i className="fas fa-arrow-right"></i></a>
                        </div>
                        <div className="why-image" data-aos="fade-left">
                            <img src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=700&q=80" alt="Why Auto Deluxe" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default WhyChooseUs
