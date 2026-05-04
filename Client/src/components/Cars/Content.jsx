import React from 'react'

function Content() {
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
                                <label className="filter-check"><input type="checkbox" className="fFuel" value="Petrol" /> Petrol</label>
                                <label className="filter-check"><input type="checkbox" className="fFuel" value="Diesel" /> Diesel</label>
                                <label className="filter-check"><input type="checkbox" className="fFuel" value="CNG" /> CNG</label>
                                <label className="filter-check"><input type="checkbox" className="fFuel" value="Electric" /> Electric</label>
                            </div>

                            <div className="filter-group">
                                <h4>Transmission</h4>
                                <label className="filter-check"><input type="checkbox" className="fTrans" value="Manual" /> Manual</label>
                                <label className="filter-check"><input type="checkbox" className="fTrans" value="Automatic" /> Automatic</label>
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
                                <div className="results-count">Showing <strong id="resultCount">0</strong> cars</div>
                                <div className="sort-bar">
                                    <label>Sort by:</label>
                                    <select id="sortSelect">
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
                            <div className="pagination" id="pagination"></div>
                        </main>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Content
