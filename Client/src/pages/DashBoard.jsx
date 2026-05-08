import React from 'react'
import { useContext } from 'react'
import { CarContext } from '../Context/CarContext'
import axios from 'axios'

function DashBoard() {
    const { cars, backendUrl, token, setCars } = useContext(CarContext)

    async function handleDeleteCar(carId) {
        const confirmDelete =
            window.confirm("Are you sure you want to delete this car?");
        if (!confirmDelete) return;
        try {
            const response = await axios.delete(
                `${backendUrl}/api/car/remove`, { headers: { token }, data: { "id": carId } }
            );
            if (response.data.success) {
                alert("Car deleted successfully");
                // REMOVE FROM UI
                setCars((prev) =>
                    prev.filter((car) => car._id !== carId)
                );
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Error deleting car:", error);
            alert(error.response?.data?.message || "Something went wrong");
        }
    }

    function handleEditCar(carId) {
        alert("Edit Car: " + carId)
    }

    return (
        <div className=" w-[100vw] flex flex-col bg-white gap-10 items-center justify-center mt-10">
            <h1 className="text-5xl font-bold text-gray-800 mb-4 underline">Dashboard</h1>
            <div className="w-full h-80 bg-gray-200 rounded-2xl flex items-center justify-between gap-10 px-8 py-5">
                <div className="w-full h-full p-5 bg-white rounded-2xl flex flex-col items-center justify-center gap-3">
                    <i className="fas fa-car text-6xl text-blue-900"></i>
                    <h3 className="w-full text-2xl text-center text-gray-700 m-3">
                        Total Cars: <br />
                        <span className="w-full text-6xl font-bold text-blue-900 m-3">{cars.length}</span>
                    </h3>
                </div>
                <div className="w-full h-full p-5 bg-white rounded-2xl flex flex-col items-center justify-center gap-3">
                    <i className="fa-solid fa-comments text-6xl text-blue-900"></i>
                    <h3 className="w-full text-2xl text-center text-gray-700 m-3">
                        Total Enquiries: <br />
                        <span className="w-full text-6xl font-bold text-blue-900 m-3">{cars.length}</span>
                    </h3>
                </div>                <div className="w-full h-full p-5 bg-white rounded-2xl"></div>
            </div>
            <div className="flex flex-col items-center w-full justify-center py-10">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">CARS</h1>
                <div className="overflow-x-auto scrollbar-hide h-[100vh] bg-white rounded-xl shadow">

                    <table className="min-w-max w-[90vw] text-lg text-center">

                        <thead className="bg-blue-900 text-white">
                            <tr>
                                <th className="p-3 text-xl text-left">Image</th>
                                <th className="p-3 text-xl text-left">Name</th>
                                <th className="p-3 text-xl text-left">Model</th>
                                <th className="p-3 text-xl text-left">Company</th>
                                <th className="p-3 text-xl text-left">Year</th>
                                <th className="p-3 text-xl text-left">Features</th>
                                <th className="p-3 text-xl text-left">KM</th>
                                <th className="p-3 text-xl text-left">Price</th>
                                <th className="p-3 text-xl text-left">Actions</th>

                            </tr>
                        </thead>

                        <tbody>
                            {cars.map((car, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50">

                                    <td className="p-2">
                                        <img
                                            src={car.images?.[0]}
                                            alt={car.name}
                                            className="w-14 h-12 object-fit rounded"
                                        />
                                    </td>

                                    <td className="p-2 font-medium whitespace-nowrap">
                                        {car.name}
                                    </td>

                                    <td className="p-2 whitespace-nowrap">
                                        {car.model}
                                    </td>

                                    <td className="p-2 whitespace-nowrap">
                                        {car.company}
                                    </td>

                                    <td className="p-2">
                                        {car.year}
                                    </td>

                                    <td className="p-2">
                                        <div className="flex flex-wrap gap-1">
                                            {car.features?.slice(0, 2).map((feature, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-blue-100 text-blue-700 text-[10px] px-1.5 py-0.5 rounded"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </td>

                                    <td className="p-2 whitespace-nowrap">
                                        {car.kilometersDriven}
                                    </td>

                                    <td className="p-2 font-semibold text-blue-900 whitespace-nowrap">
                                        ₹{car.price?.toLocaleString()}
                                    </td>
                                    <td className="text-center p-2 whitespace-nowrap">
                                        <button onClick={() => handleEditCar(car._id)} className="fa-solid fa-pen-to-square cursor-pointer bg-blue-900 text-white p-2 mr-2 rounded hover:bg-blue-700">
                                        </button>
                                        <button onClick={() => handleDeleteCar(car._id)} className="fa-solid fa-trash-can cursor-pointer bg-red-600 text-white p-2 rounded hover:bg-red-500">
                                        </button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    )
}

export default DashBoard
