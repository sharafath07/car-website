import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CarContext } from "../Context/CarContext.jsx";

function AddCar() {

    const navigate = useNavigate();
    const { token, backendUrl, cars, setCars } = useContext(CarContext);

    const featureOptions = [
        'ABS',
        'Airbags',
        'AC',
        'Power Windows',
        'Reverse Camera',
        'Touch Screen',
        'Sunroof',
        'Leather Seats',
        'Alloy Wheels',
        'Cruise Control',
        'Parking Sensors',
        '360 Camera',
        'Bluetooth',
        'Android Auto',
        'Apple CarPlay',
        'Fog Lamps',
        'Keyless Entry',
        'Push Start',
        'Navigation',
        'Ventilated Seats'
    ];



    const [carData, setCarData] = useState({
        name: '',
        company: '',
        model: '',
        year: '',
        fuelType: '',
        transmission: '',
        kilometersDriven: '',
        owner: '',
        insurance: '',
        price: '',
        seats: '',
        description: '',
        features: [],
        images: []
    });



    function handleChange(e) {

        setCarData({
            ...carData,
            [e.target.name]: e.target.value
        });
    }



    function handleFeatureChange(feature) {

        if (carData.features.includes(feature)) {

            setCarData({
                ...carData,
                features: carData.features.filter(
                    (item) => item !== feature
                )
            });

        } else {

            setCarData({
                ...carData,
                features: [
                    ...carData.features,
                    feature
                ]
            });
        }
    }

    function handleImageUpload(e) {

        const files = Array.from(e.target.files);

        if (files.length > 10) {

            alert("Maximum 10 images allowed");

            return;
        }

        setCarData({
            ...carData,
            images: files
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const formData = new FormData();
            // TEXT DATA
            formData.append("name", carData.name);
            formData.append("description", carData.description);
            formData.append("price", carData.price);
            formData.append("year", carData.year);
            formData.append("seats", carData.seats);
            formData.append("transmission", carData.transmission);
            formData.append("fuelType", carData.fuelType);
            formData.append("kilometersDriven", carData.kilometersDriven);
            formData.append("model", carData.model);
            formData.append("company", carData.company);
            // IMAGES
            carData.images.forEach((image, index) => {
                formData.append(
                    `image${index + 1}`,
                    image
                );
            });
            const response = await axios.post(
                `${backendUrl}/api/car/add`,
                formData,
                {
                    headers: {
                        token
                    }
                }
            );
            console.log(response.data);

            if (response.data.success) {
                alert("Car added successfully");
                setCars([...cars, carData]);
                navigate("/admin/dashboard");
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.log(error);
            console.log(error.response);
            console.log(error.response?.data);
            alert(
                error.response?.data?.message ||
                error.message
            );
        }
    }
    return (
        <div className="min-h-screen bg-[#f5f7fb] py-10 px-4">
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] px-10 py-8">
                    <h1 className="text-4xl font-bold text-white">
                        Add Car
                    </h1>
                    <p className="text-gray-300 mt-2">
                        Enter vehicle details
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="p-10 grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    <input type="text" name="name" value={carData.name} onChange={handleChange} placeholder="Car Name" className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" name="company" value={carData.company} onChange={handleChange} placeholder="Company" className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" name="model" value={carData.model} onChange={handleChange} placeholder="Model" className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="number" name="year" value={carData.year} onChange={handleChange} placeholder="Year" className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500" />
                    <select name="fuelType" value={carData.fuelType} onChange={handleChange} className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Fuel Type</option>
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Electric">Electric</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="CNG">CNG</option>
                    </select>
                    <select name="transmission" value={carData.transmission} onChange={handleChange} className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Transmission</option>
                        <option value="Manual">Manual</option>
                        <option value="Automatic">Automatic</option>
                    </select>
                    <input type="number" name="kilometersDriven" value={carData.kilometersDriven} onChange={handleChange} placeholder="Kilometers Driven" className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" name="owner" value={carData.owner} onChange={handleChange} placeholder="Owner" className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" name="insurance" value={carData.insurance} onChange={handleChange} placeholder="Insurance" className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="number" name="price" value={carData.price} onChange={handleChange} placeholder="Price" className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="number" name="seats" value={carData.seats} onChange={handleChange} placeholder="Seats" className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500" />
                    <div className="md:col-span-2">
                        <textarea
                            name="description"
                            rows="5"
                            value={carData.description}
                            onChange={handleChange}
                            placeholder="Description"
                            className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">
                            Features
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {
                                featureOptions.map((feature) => (
                                    <label
                                        key={feature}
                                        className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-xl cursor-pointer hover:bg-blue-50 transition"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={carData.features.includes(feature)}
                                            onChange={() =>
                                                handleFeatureChange(feature)
                                            }
                                        />
                                        <span className="text-sm">
                                            {feature}
                                        </span>
                                    </label>
                                ))
                            }
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">
                            Upload Images (Max 10)
                        </h3>
                        <label className="border-2 border-dashed border-blue-300 rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition">
                            <i className="fas fa-cloud-upload-alt text-5xl text-blue-500 mb-4"></i>
                            <p className="text-gray-600">
                                Click to upload car images
                            </p>
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                            />
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
                            {
                                carData.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={URL.createObjectURL(image)}
                                        alt=""
                                        className="w-full h-32 object-cover rounded-xl shadow"
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="
                                w-full
                                bg-gradient-to-r
                                from-blue-900
                                to-blue-600
                                hover:opacity-90
                                text-white
                                font-semibold
                                py-4
                                rounded-2xl
                                transition
                                shadow-lg
                            "
                        >
                            Add Car
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddCar;