import React, { useContext } from 'react'
import { CarContext } from '../../Context/CarContext';

function Stats() {
    const { cars } = useContext(CarContext);

    return (
        <div>
            <section className="stats-bar">
                <div className="container">
                    <div className="stat-item" data-aos="zoom-in" data-aos-delay="0">
                        <h3 className="counter" data-target="250">250+</h3>
                        <p>Happy Customers</p>
                    </div>
                    <div className="stat-item" data-aos="zoom-in" data-aos-delay="100">
                        <h3 className="counter" data-target="150">{cars.length}</h3>
                        <p>Cars Available Now</p>
                    </div>
                    <div className="stat-item" data-aos="zoom-in" data-aos-delay="200">
                        <h3 className="counter" data-target="10">10+</h3>
                        <p>Years Experience</p>
                    </div>
                    <div className="stat-item" data-aos="zoom-in" data-aos-delay="300">
                        <h3 className="counter" data-target="500">500+</h3>
                        <p>Cars Sold</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Stats
