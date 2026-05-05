import React, { useEffect, useState, useContext, use } from 'react'
import { CarContext } from '../../Context/CarContext'
import CarCard from '../CarCard';

function Content() {
    const { cars } = useContext(CarContext);
    // const [car, setCar] = useState(null);
    const [showFilters, setShowFilters] = useState(true);
    const [filteredCars, setFilteredCars] = useState([]);
    const [fuel, setFuel] = useState([])
    const [transmission, setTransmission] = useState([])
    const [year, setYear] = useState({ min: '', max: '' })
    const [kmDriven, setKmDriven] = useState({ min: '', max: '' })
    const [price, setPrice] = useState({ min: '', max: '' })
    // const [category, setCategory] = useState([])
    const [brand, setBrand] = useState("")
    // const [subCategory, setSubCategory] = useState([])
    const [sortType, setSortType] = useState("Latest")


    function toggleFuel(e) {
        if (fuel.includes(e.target.value)) {
            setFuel(prev => prev.filter(item => item !== e.target.value))
        } else {
            setFuel(prev => [...prev, e.target.value])
        }
    }

    function toggleTransmission(e) {
        if (transmission.includes(e.target.value)) {
            setTransmission(prev => prev.filter(item => item !== e.target.value))
        } else {
            setTransmission(prev => [...prev, e.target.value])
        }
    }

    function applyFilter() {
        let carsCopy = cars.slice();

        if (fuel.length > 0) {
            carsCopy = carsCopy.filter(car => fuel.includes(car.fuelType))
        }

        if (transmission.length > 0) {
            carsCopy = carsCopy.filter(car => transmission.includes(car.transmission))
        }
        setFilteredCars(carsCopy)
    }

    function sortCar() {
        let carsCopy = filteredCars.slice();

        switch (sortType) {
            case "latest":
                carsCopy.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                break;
            case "price-asc":
                carsCopy.sort((a, b) => a.price - b.price);
                break;
            case "price-desc":
                carsCopy.sort((a, b) => b.price - a.price);
                break;
            case "km-asc":
                carsCopy.sort((a, b) => a.kilometersDriven - b.kilometersDriven);
                break;
            case "km-desc":
                carsCopy.sort((a, b) => b.kilometersDriven - a.kilometersDriven);
                break;
            case "year-desc":
                carsCopy.sort((a, b) => b.year - a.year);
                break;
            case "year-asc":
                carsCopy.sort((a, b) => a.year - b.year);
                break;
        }
        setFilteredCars(carsCopy)
    }


    useEffect(() => {
        applyFilter();
    }, [fuel, transmission, year, kmDriven, price, brand])

    useEffect(() => {
        sortCar();
    }, [sortType])

    return (
        <div>
            <section className="cars-page">
                <div className="container">
                    <div className="cars-layout">
                        <aside className="filters-sidebar">
                            <div className="filter-header">
                                <h3><i className="fas fa-filter"></i> FILTERS</h3>
                                <button className="filter-clear" id="clearFilters">Clear All</button>
                            </div>

                            <div className="filter-group">
                                <h4>Search</h4>
                                <input type="text" id="fSearch" placeholder="Car name / model..." className="form-control"
                                    style={{ marginBottom: 0 }} />
                            </div>

                            <div className="filter-group">
                                <h4>Brand</h4>
                                <select id="fBrand" className="brand-select">
                                    <option value="">All Brands</option>
                                </select>
                            </div>

                            <div className="filter-group">
                                <h4>Fuel Type</h4>
                                <label className="filter-check"><input type="checkbox" className="fFuel" onClick={toggleFuel} value="Petrol" /> Petrol</label>
                                <label className="filter-check"><input type="checkbox" className="fFuel" onClick={toggleFuel} value="Diesel" /> Diesel</label>
                                <label className="filter-check"><input type="checkbox" className="fFuel" onClick={toggleFuel} value="CNG" /> CNG</label>
                                <label className="filter-check"><input type="checkbox" className="fFuel" onClick={toggleFuel} value="Electric" /> Electric</label>
                            </div>

                            <div className="filter-group">
                                <h4>Transmission</h4>
                                <label className="filter-check"><input type="checkbox" className="fTrans" onClick={toggleTransmission} value="Manual" /> Manual</label>
                                <label className="filter-check"><input type="checkbox" className="fTrans" onClick={toggleTransmission} value="Automatic" /> Automatic</label>
                            </div>

                            <div className="filter-group filter-range">
                                <h4>Year</h4>
                                <div className="range-inputs">
                                    <input type="number" id="fYearMin" placeholder="From Year" min="2000" max="2024" />
                                    <input type="number" id="fYearMax" placeholder="To Year" min="2000" max="2024" />
                                </div>
                            </div>

                            <div className="filter-group filter-range">
                                <h4>KM Driven</h4>
                                <div className="range-inputs">
                                    <input type="number" id="fKmMin" placeholder="Min KM" />
                                    <input type="number" id="fKmMax" placeholder="Max KM" />
                                </div>
                            </div>

                            <div className="filter-group filter-range">
                                <h4>Price Range</h4>
                                <div className="range-inputs">
                                    <input type="number" id="fPriceMin" placeholder="Min ₹" />
                                    <input type="number" id="fPriceMax" placeholder="Max ₹" />
                                </div>
                            </div>

                            <button className="btn-apply-filter" id="applyFilters"><i className="fas fa-search"></i> APPLY FILTER</button>
                        </aside>

                        <main className="cars-main">
                            <div className="top-bar-filter">
                                <div className="results-count">Showing <strong id="resultCount">{filteredCars.length}</strong> cars</div>
                                <div className="sort-bar">
                                    <label>Sort by:</label>
                                    <select id="sortSelect" onChange={(e) => setSortType(e.target.value)}>
                                        <option value="latest">Latest</option>
                                        <option value="price-asc">Price: Low to High</option>
                                        <option value="price-desc">Price: High to Low</option>
                                        <option value="km-asc">KM: Low to High</option>
                                        <option value="km-desc">KM: High to Low</option>
                                        <option value="year-desc">Year: Newest</option>
                                        <option value="year-asc">Year: Oldest</option>
                                    </select>
                                </div>
                            </div>

                            <div className="cars-grid" id="carsGrid"></div>
                            <div className="no-results" id="noResults" style={{ display: "none" }}>
                                <i className="fas fa-car-crash"></i>
                                <h3>No Cars Found</h3>
                                <p>Try adjusting your filters</p>
                            </div>
                            <div className="pagination" id="pagination">
                                {
                                    filteredCars.map((car, index) => (
                                        <CarCard key={car.id} image={car.images[0]} name={car.name} price={car.price} km={car.kilometersDriven} fuel={car.fuelType} id={car.id} year={car.year} transmission={car.transmission} />
                                    ))
                                }
                            </div>
                        </main>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Content
