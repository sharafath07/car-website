import React from 'react'

function Search() {
    return (
        <div>
            <section className="search-section">
                <div className="container">
                    <div className="search-form">
                        <div className="form-group">
                            <label><i className="fas fa-search"></i> Search Car</label>
                            <input type="text" id="searchQ" placeholder="Car name / model..." />
                        </div>
                        <div className="form-group">
                            <label>Brand</label>
                            <select id="searchBrand" className="brand-select">
                                <option value="">Select Brand</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Min Price</label>
                            <select id="searchMinPrice">
                                <option value="">Min Price</option>
                                <option value="100000">₹1 Lakh</option>
                                <option value="200000">₹2 Lakh</option>
                                <option value="300000">₹3 Lakh</option>
                                <option value="500000">₹5 Lakh</option>
                                <option value="800000">₹8 Lakh</option>
                                <option value="1000000">₹10 Lakh</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Max Price</label>
                            <select id="searchMaxPrice">
                                <option value="">Max Price</option>
                                <option value="300000">₹3 Lakh</option>
                                <option value="500000">₹5 Lakh</option>
                                <option value="800000">₹8 Lakh</option>
                                <option value="1000000">₹10 Lakh</option>
                                <option value="1500000">₹15 Lakh</option>
                                <option value="2000000">₹20 Lakh</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Fuel Type</label>
                            <select id="searchFuel">
                                <option value="">All Fuel Types</option>
                                <option value="Petrol">Petrol</option>
                                <option value="Diesel">Diesel</option>
                                <option value="CNG">CNG</option>
                                <option value="Electric">Electric</option>
                            </select>
                        </div>
                        <button className="btn-search" id="searchBtn"><i className="fas fa-search"></i> SEARCH</button>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Search
