import React, { useContext, useState, useEffect } from 'react'
import CarCard from '../CarCard'
import { CarContext } from '../../Context/CarContext'
import { Link } from 'react-router-dom'

function LatestCars() {
    const { cars } = useContext(CarContext)
    const [latestCars, setLatestCars] = useState([])

    useEffect(() => {
        const latest = cars.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 8)
        setLatestCars(latest)
    }, [cars])

    return (
        <div>
            <section className="latest-section">
                <div className="container bg-light">
                    <div className="section-title" data-aos="fade-up">
                        <h2>LATEST CARS</h2>
                        <p>Newly added cars in our stock</p>
                    </div>
                    <div className="cars-grid" id="latestCarsGrid">
                        {
                            latestCars.map((car, index) => (
                                <CarCard key={index} image={car.images[0]} name={car.name} price={car.price} km={car.kilometersDriven} fuel={car.fuelType} id={car._id} year={car.year} transmission={car.transmission} />
                            ))
                        }
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '40px' }} data-aos="fade-up">
                        <Link to="/cars" className="btn btn-primary" style={{ padding: '14px 40px', fontSize: '15px' }}>View All Cars <i className="fas fa-arrow-right"></i></Link>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default LatestCars
