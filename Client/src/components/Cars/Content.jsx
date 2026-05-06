import React, { useEffect, useState, useContext, use } from 'react'
import { CarContext } from '../../Context/CarContext'
import CarCard from '../CarCard';

function Content() {
    const { cars } = useContext(CarContext);
    // const [car, setCar] = useState(null);
    // const [showFilters, setShowFilters] = useState(true);
    const [filteredCars, setFilteredCars] = useState(cars);
    const [searchTerm, setSearchTerm] = useState("")
    const [fuel, setFuel] = useState([])
    const [transmission, setTransmission] = useState([])
    const [year, setYear] = useState({ min: '', max: '' })
    const [kmDriven, setKmDriven] = useState({ min: '', max: '' })
    const [price, setPrice] = useState({ min: '', max: '' })
    // const [category, setCategory] = useState([])
    const [brand, setBrand] = useState("")
    // const [subCategory, setSubCategory] = useState([])
    const [sortType, setSortType] = useState("Latest")
    const [checkFuel, setCheckFuel] = useState({ Petrol: false, Diesel: false, CNG: false, Electric: false })
    const [checkTrans, setCheckTrans] = useState({ Manual: false, Automatic: false })


    function toggleFuel(e) {
        if (fuel.includes(e.target.value)) {
            setFuel(prev => prev.filter(item => item !== e.target.value))
        } else {
            setFuel(prev => [...prev, e.target.value])
        }
        // if (e.target.value === "Petrol") {
        //     setCheckFuel(prev => ({ ...prev, Petrol: !prev.Petrol }))
        // } else if (e.target.value === "Diesel") {
        //     setCheckFuel(prev => ({ ...prev, Diesel: !prev.Diesel }))
        // } else if (e.target.value === "CNG") {
        //     setCheckFuel(prev => ({ ...prev, CNG: !prev.CNG }))
        // } else if (e.target.value === "Electric") {
        //     setCheckFuel(prev => ({ ...prev, Electric: !prev.Electric }))
        // }
    }

    function toggleTransmission(e) {
        if (transmission.includes(e.target.value)) {
            setTransmission(prev => prev.filter(item => item !== e.target.value))
        } else {
            setTransmission(prev => [...prev, e.target.value])
        }
        // if (e.target.value === "Manual") {
        //     setCheckTrans(prev => ({ ...prev, Manual: !prev.Manual }))
        // } else if (e.target.value === "Automatic") {
        //     setCheckTrans(prev => ({ ...prev, Automatic: !prev.Automatic }))
        // }
    }

    function applyFilter() {
        let carsCopy = cars.slice();

        if (fuel.length > 0) {
            carsCopy = carsCopy.filter(car => fuel.includes(car.fuelType))
        }

        if (transmission.length > 0) {
            carsCopy = carsCopy.filter(car => transmission.includes(car.transmission))
        }

        if (searchTerm !== '') {
            carsCopy = carsCopy.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()) || car.model.toLowerCase().includes(searchTerm.toLowerCase()))
        }

        if (year.min !== '') {
            carsCopy = carsCopy.filter(car => car.year >= Number(year.min))
        }

        if (year.max !== '') {
            carsCopy = carsCopy.filter(car => car.year <= Number(year.max))
        }

        if (kmDriven.min !== '') {
            carsCopy = carsCopy.filter(car => car.kilometersDriven >= Number(kmDriven.min))
        }

        if (kmDriven.max !== '') {
            carsCopy = carsCopy.filter(car => car.kilometersDriven <= Number(kmDriven.max))
        }

        if (price.min !== '') {
            carsCopy = carsCopy.filter(car => car.price >= Number(price.min))
        }

        if (price.max !== '') {
            carsCopy = carsCopy.filter(car => car.price <= Number(price.max))
        }

        if (brand !== '') {
            carsCopy = carsCopy.filter(car => car.brand === brand)
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

    function clearFilter() {
        setSearchTerm("")
        setCheckFuel({ Petrol: false, Diesel: false, CNG: false, Electric: false })
        setCheckTrans({ Manual: false, Automatic: false })
        setFuel([''])
        setTransmission([''])
        setYear({ min: '', max: '' })
        setKmDriven({ min: '', max: '' })
        setPrice({ min: '', max: '' })
        setBrand("")

        setFilteredCars(cars.slice())
    }

    useEffect(() => {
        applyFilter();
    }, [cars])

    useEffect(() => {
        sortCar();
    }, [sortType])

    return (
        <div>
            <section className="cars-page">
                <div className="container">
                    <div className="cars-layout">
                        <aside className="filters-sidebar ">
                            <div className="filter-header">
                                <h3><i className="fas fa-filter"></i> FILTERS</h3>
                                <button className="filter-clear" id="clearFilters" onClick={clearFilter}>Clear All</button>
                            </div>

                            <div className="filter-group">
                                <h4>Search</h4>
                                <input type="text" id="fSearch" placeholder="Car name / model..." className="form-control"
                                    style={{ marginBottom: 0 }} onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
                            </div>

                            <div className="filter-group">
                                <h4>Brand</h4>
                                <select id="fBrand" className="brand-select" onChange={(e) => setBrand(e.target.value)}>
                                    <option value="">All Brands</option>
                                    <option value="BMW">BMW</option>
                                    <option value="Audi">Audi</option>
                                    <option value="Mercedes">Mercedes</option>
                                    <option value="Toyota">Toyota</option>
                                </select>
                            </div>

                            <div className="filter-group">
                                <h4>Fuel Type</h4>
                                <label className="filter-check"><input type="checkbox" checked={checkFuel.Petrol} onChange={(e) => setCheckFuel({ ...checkFuel, Petrol: !checkFuel.Petrol })} className="fFuel" onClick={toggleFuel} value="Petrol" /> Petrol</label>
                                <label className="filter-check"><input type="checkbox" checked={checkFuel.Diesel} onChange={(e) => setCheckFuel({ ...checkFuel, Diesel: !checkFuel.Diesel })} className="fFuel" onClick={toggleFuel} value="Diesel" /> Diesel</label>
                                <label className="filter-check"><input type="checkbox" checked={checkFuel.CNG} onChange={(e) => setCheckFuel({ ...checkFuel, CNG: !checkFuel.CNG })} className="fFuel" onClick={toggleFuel} value="CNG" /> CNG</label>
                                <label className="filter-check"><input type="checkbox" checked={checkFuel.Electric} onChange={(e) => setCheckFuel({ ...checkFuel, Electric: !checkFuel.Electric })} className="fFuel" onClick={toggleFuel} value="Electric" /> Electric</label>
                            </div>

                            <div className="filter-group">
                                <h4>Transmission</h4>
                                <label className="filter-check"><input type="checkbox" checked={checkTrans.Manual} onChange={(e) => setCheckTrans({ ...checkTrans, Manual: !checkTrans.Manual })} className="fTrans" onClick={toggleTransmission} value="Manual" /> Manual</label>
                                <label className="filter-check"><input type="checkbox" checked={checkTrans.Automatic} onChange={(e) => setCheckTrans({ ...checkTrans, Automatic: !checkTrans.Automatic })} className="fTrans" onClick={toggleTransmission} value="Automatic" /> Automatic</label>
                            </div>

                            <div className="filter-group filter-range">
                                <h4>Year</h4>
                                <div className="range-inputs">
                                    <input type="number" id="fYearMin" placeholder="From Year" min="2000" max="2024" onChange={(e) => setYear({ ...year, min: e.target.value })} value={year.min} />
                                    <input type="number" id="fYearMax" placeholder="To Year" min="2000" max="2024" onChange={(e) => setYear({ ...year, max: e.target.value })} value={year.max} />
                                </div>
                            </div>

                            <div className="filter-group filter-range">
                                <h4>KM Driven</h4>
                                <div className="range-inputs flex-col">
                                    <input type="number" id="fKmMin" placeholder="Min KM" onChange={(e) => setKmDriven({ ...kmDriven, min: e.target.value })} value={kmDriven.min} />
                                    <input type="number" id="fKmMax" placeholder="Max KM" onChange={(e) => setKmDriven({ ...kmDriven, max: e.target.value })} value={kmDriven.max} />
                                </div>
                            </div>

                            <div className="filter-group filter-range">
                                <h4>Price Range</h4>
                                <div className="range-inputs flex-col">
                                    <input type="number" id="fPriceMin" placeholder="Min ₹" onChange={(e) => setPrice({ ...price, min: e.target.value })} value={price.min} />
                                    <input type="number" id="fPriceMax" placeholder="Max ₹" onChange={(e) => setPrice({ ...price, max: e.target.value })} value={price.max} />
                                </div>
                            </div>

                            <button onClick={applyFilter} className="btn-apply-filter" id="applyFilters"><i className="fas fa-search"></i> APPLY FILTER</button>
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
                            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" id="pagination">
                                {
                                    filteredCars.map((car, index) => (
                                        <CarCard key={car._id} image={car.images[0]} name={car.name} price={car.price} km={car.kilometersDriven} fuel={car.fuelType} id={car._id} year={car.year} transmission={car.transmission} />
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
