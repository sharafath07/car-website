import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CarContext } from '../../Context/CarContext';
import { useParams } from 'react-router-dom';


function Hero() {
    const { carId } = useParams();
    const { cars } = useContext(CarContext);
    const [CarData, setCarData] = useState(false)

    async function fetchCarData() {
        cars.map((item) => {
            if (item._id === carId) {
                setCarData(item)
                return null
            }
        })
    }

    useEffect(() => {
        fetchCarData()
    }, [carId])

    return (
        <div>
            <div className="page-header">
                <div className="container">
                    <h2 id="pageTitle">{CarData ? CarData.name : 'Car Details'}</h2>
                    <div className="breadcrumb">
                        <Link to="/">Home</Link><span>›</span>
                        <Link to="/cars">Cars</Link><span>›</span>
                        <span className="current" id="breadcrumbName">{CarData ? CarData.name : 'Car Details'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
