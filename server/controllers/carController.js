import { v2 as cloudinary } from "cloudinary";
import carModel from "../models/carModel.js";

async function addCar(req, res) {
    try {
        const { name, description, price, year, seats, transmission, fuelType, kilometersDriven, model, company, features, owner, insurance } = req.body;

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]
        const image5 = req.files.image5 && req.files.image5[0]
        const image6 = req.files.image6 && req.files.image6[0]
        const image7 = req.files.image7 && req.files.image7[0]
        const image8 = req.files.image8 && req.files.image8[0]
        const image9 = req.files.image9 && req.files.image9[0]
        const image10 = req.files.image10 && req.files.image10[0]

        const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10].filter(img => img !== undefined);

        let imageUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
                return result.secure_url;
            })
        );

        const carData = {
            name,
            description,
            price: Number(price),
            year: Number(year),
            seats: Number(seats),
            transmission,
            fuelType,
            kilometersDriven: Number(kilometersDriven),
            model,
            company,
            images: imageUrl,
            date: Number(Date.now()),
            features: JSON.parse(features),
            owner,
            insurance
        };
        console.log(carData);
        const car = new carModel(carData);
        console.log(car);

        await car.save();

        res.json({ success: true, message: "Car added successfully" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error adding car", error: error.message });
    }
}

async function listCars(req, res) {
    try {

        const cars = await carModel.find({});

        res.json({ success: true, cars });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error adding car", error: error.message });
    }

}

async function removeCar(req, res) {
    try {

        await carModel.findByIdAndDelete(req.body.id);

        res.json({ success: true, message: "Car removed successfully" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error adding car", error: error.message });
    }
}

async function singleCar(req, res) {
    try {

        const { carId } = req.body;
        const car = await carModel.findById(carId);

        res.json({ success: true, car });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error adding car", error: error.message });
    }

}

export { addCar, listCars, removeCar, singleCar }