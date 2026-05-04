import React from 'react'

function FeaturedCars() {
    return (
        <div>
            <section className="featured-section">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>— FEATURED CARS —</h2>
                        <p>Hand-picked best deals for you</p>
                    </div>
                    <div className="swiper featured-swiper" data-aos="fade-up">
                        <div className="swiper-wrapper" id="featuredCarsSlider"></div>
                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default FeaturedCars
