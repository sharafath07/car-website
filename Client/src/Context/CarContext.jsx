import React, { useState, createContext, useEffect } from 'react'
import cars from '../data/cars.js';

const CarContext = createContext()

function CarContextProvider(props) {
    const currency = '₹';


    useEffect(() => {
        // Fetch cars from API or local storage
    }, [])

    const value = {
        cars,
        currency
    }

    return (
        <CarContext.Provider value={value}>
            {props.children}
        </CarContext.Provider>
    )
}

export default CarContextProvider 