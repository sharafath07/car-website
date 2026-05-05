import React, { useContext, useState, useEffect } from 'react'
import { CarContext } from '../../Context/CarContext'
import CarCard from '../CarCard'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function FeaturedCars() {

    const { cars } = useContext(CarContext)
    const [featuredCars, setFeaturedCars] = useState([])

    useEffect(() => {
        const featured = cars.sort((a, b) => b.features.length - a.features.length).slice(0, 5)
        setFeaturedCars(featured)
    }, [])

    return (
        <div>
            <section className="featured-section">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>— FEATURED CARS —</h2>
                        <p>Hand-picked best deals for you</p>
                    </div>
                    <div className="swiper featured-swiper" data-aos="fade-up">
                        <div className="swiper-wrapper" id="featuredCarsSlider">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                slidesPerView={1}
                                spaceBetween={20}
                                loop={cars.length > 3}
                                pagination={{ clickable: true }}
                                navigation
                                autoplay={{ delay: 3500, disableOnInteraction: false }}
                                breakpoints={{
                                    600: { slidesPerView: 2 },
                                    900: { slidesPerView: 3 },
                                    1200: { slidesPerView: 4 },
                                }}
                            >
                                {
                                    featuredCars.map(car => (
                                        <SwiperSlide key={car.id}>
                                            <CarCard key={car.id} image={car.images[0]} name={car.name} price={car.price} km={car.kilometersDriven} fuel={car.fuelType} id={car.id} year={car.year} transmission={car.transmission} />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
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
