import { v2 as cloudinary } from "cloudinary";
import carModel from "../models/carModels.js";

async function addCar(req, res) {
    try {
        const { name, description, price, year, seats, transmission, fuelType, kilometersDriven, model, company, category, subCategory } = req.body;

        const image1 = req.files["image1"] ? req.files["image1"][0].path : null;
        const image2 = req.files["image2"] ? req.files["image2"][0].path : null;
        const image3 = req.files["image3"] ? req.files["image3"][0].path : null;
        const image4 = req.files["image4"] ? req.files["image4"][0].path : null;
        const image5 = req.files["image5"] ? req.files["image5"][0].path : null;
        const image6 = req.files["image6"] ? req.files["image6"][0].path : null;
        const image7 = req.files["image7"] ? req.files["image7"][0].path : null;
        const image8 = req.files["image8"] ? req.files["image8"][0].path : null;
        const image9 = req.files["image9"] ? req.files["image9"][0].path : null;
        const image10 = req.files["image10"] ? req.files["image10"][0].path : null;

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
            category,
            subCategory,
            images: imageUrl,
            date: Date.now()
        };

        const car = new carModel(carData);
        await car.save();

        console.log(name, description, price, year, seats, transmission, fuelType, kilometersDriven, model, company, category, subCategory);
        console.log(image1, image2, image3, image4, image5, image6, image7, image8, image9, image10);

        res.json({ success: true, message: "Car added successfully" });

    } catch (error) {
        console.log(error);

        res.json({ success: false, message: "Error adding car", error: error.message });
    }
}

async function listCars(req, res) {

}

async function removeCar(req, res) {

}

async function singleCar(req, res) {

}

export { addCar, listCars, removeCar, singleCar }