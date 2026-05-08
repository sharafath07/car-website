import React, { useContext, useEffect, useState } from 'react';
import { CarContext } from '../../Context/CarContext';
import CarCard from '../CarCard';

import { Swiper, SwiperSlide } from "swiper/react";

import {
    Navigation,
    Pagination,
    Autoplay
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function FeaturedCars() {

    const { cars } = useContext(CarContext);

    const [featuredCars, setFeaturedCars] = useState([]);




    // =========================
    // FEATURED CARS
    // =========================
    useEffect(() => {

        if (!cars || cars.length === 0) return;

        const featured = [...cars]

            .sort(
                (a, b) =>
                    (b.features?.length || 0) -
                    (a.features?.length || 0)
            )

            .slice(0, 8);

        setFeaturedCars(featured);

    }, [cars]);




    return (

        <section className="featured-section">

            <div className="container">

                {/* TITLE */}
                <div
                    className="section-title"
                    data-aos="fade-up"
                >

                    <h2>
                        — FEATURED CARS —
                    </h2>

                    <p>
                        Hand-picked best deals for you
                    </p>

                </div>



                {/* SWIPER */}
                <div
                    className="swiper featured-swiper"
                    data-aos="fade-up"
                >

                    <Swiper

                        modules={[
                            Navigation,
                            Pagination,
                            Autoplay
                        ]}

                        spaceBetween={20}

                        slidesPerView={1}

                        navigation

                        pagination={{
                            clickable: true
                        }}

                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}

                        loop={featuredCars.length > 3}

                        breakpoints={{
                            640: {
                                slidesPerView: 2
                            },

                            1024: {
                                slidesPerView: 3
                            },

                            1280: {
                                slidesPerView: 4
                            }
                        }}

                        className="w-full"
                    >

                        {
                            featuredCars.map((car) => (

                                <SwiperSlide
                                    key={car._id}
                                >

                                    <CarCard

                                        id={car._id}

                                        image={
                                            car.images?.[0] ||
                                            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80"
                                        }

                                        name={car.name}

                                        price={car.price}

                                        km={car.kilometersDriven}

                                        fuel={car.fuelType}

                                        year={car.year}

                                        transmission={car.transmission}

                                    />

                                </SwiperSlide>

                            ))
                        }

                    </Swiper>

                </div>

            </div>

        </section>
    );
}

export default FeaturedCars;