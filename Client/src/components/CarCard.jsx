import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarContext } from '../Context/CarContext'

function CarCard({ id, name, image, fuel, year, transmission, km, price }) {
    const { currency } = useContext(CarContext)

    return (
        <div className="car-card w-full" id={id}>
            <div className="car-card-img">
                <img src={image} alt={name} loading="lazy" onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80";
                }} />
                <span className="car-card-badge">{fuel}</span>
            </div>

            <div className="car-card-body">
                <h3>{name}</h3>
                <div className="car-specs">
                    <span className="car-spec"><i className="fas fa-calendar-alt"></i> {year}</span>
                    <span className="car-spec"><i className="fas fa-gas-pump"></i> {fuel}</span>
                    <span className="car-spec"><i className="fas fa-cog"></i> {transmission}</span>
                    <span className="car-spec"><i className="fas fa-tachometer-alt"></i> {km}</span>
                </div>
            </div>

            <div className="car-card-footer">
                <div className="car-price">{currency}{price}</div>

                <Link to={`/cars/${id}`} className="btn-view">
                    View Details
                </Link>

            </div>
        </div>
    )
}

export default CarCard
