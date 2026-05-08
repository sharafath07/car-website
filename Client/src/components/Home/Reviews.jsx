import React from 'react'

function Reviews() {
    return (
        <div>
            <section className="reviews-section">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>CUSTOMER REVIEWS</h2>
                        <p>What our happy customers say</p>
                    </div>
                    <div className="reviews-grid">
                        <div className="review-card" data-aos="fade-up" data-aos-delay="0">
                            <div className="review-stars"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                className="fas fa-star"></i><i className="fas fa-star"></i></div>
                            <p className="review-text">"Collection of stars and recycled custom cars and best price, highly recommended by my
                                purchase."</p>
                            <div className="review-author">
                                <div className="review-avatar">A</div>
                                <div className="review-info">
                                    <h5>Aneesh Kumar</h5>
                                    <p>Hyundai Verna Owner</p>
                                </div>
                            </div>
                        </div>
                        <div className="review-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="review-stars"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                className="fas fa-star"></i><i className="fas fa-star"></i></div>
                            <p className="review-text">"Very transparent deal and best price. Customer service and documentation was
                                excellent. Highly recommended."</p>
                            <div className="review-author">
                                <div className="review-avatar">S</div>
                                <div className="review-info">
                                    <h5>Sreelakshmi</h5>
                                    <p>Maruti Swift Owner</p>
                                </div>
                            </div>
                        </div>
                        <div className="review-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="review-stars"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></div>
                            <p className="review-text">"One of the best used car showroom in Malappuram,Alathoorpadi. Good experience buying
                                my Honda City. Trustworthy dealer."</p>
                            <div className="review-author">
                                <div className="review-avatar">J</div>
                                <div className="review-info">
                                    <h5>Jayesh</h5>
                                    <p>Honda City Owner</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Reviews
