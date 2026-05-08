import React, { useState, createContext, useEffect, use } from 'react'
import axios from 'axios'
// import cars from '../data/cars.js';

export const CarContext = createContext()

function CarContextProvider(props) {
    const currency = '₹';
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [token, setToken] = useState('');
    const [cars, setCars] = useState([])

    async function getCarsData() {
        try {
            const response = await axios.get(`${backendUrl}/api/car/list`);
            if (response.data.success) {
                setCars(response.data.cars);
            } else {
                console.error('Failed to fetch cars data:', response.data.message);
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error('Error fetching cars data:', error);
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getCarsData();
    }, [])

    const value = {
        cars,
        setCars,
        currency,
        backendUrl,
        token,
        setToken
    }



    return (
        <CarContext.Provider value={value}>
            {props.children}
        </CarContext.Provider>
    )
}

export default CarContextProvider 