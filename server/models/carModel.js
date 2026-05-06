import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        model: {
            type: String,
            required: true,
            trim: true,
        },

        company: {
            type: String,
            required: true,
            trim: true,
        },

        year: Number,

        price: {
            type: Number,
            required: true,
        },

        // 🪑 Seats
        seats: {
            type: Number,
            enum: [2, 4, 5, 6, 7, 8],
        },

        // 🚘 Category (main type)
        category: {
            type: String,
            enum: [
                "Hatchback",
                "Sedan",
                "SUV",
                "MUV",
                "Coupe",
                "Convertible",
                "Pickup",
            ],
        },

        // 🔽 Sub Category (more specific)
        subCategory: {
            type: String,
            enum: [
                "Compact",
                "Mid-size",
                "Full-size",
                "Luxury",
                "Off-road",
                "Electric",
                "Crossover",
            ],
        },

        fuelType: {
            type: String,
            enum: ["Petrol", "Diesel", "Electric", "Hybrid"],
        },

        transmission: {
            type: String,
            enum: ["Manual", "Automatic"],
        },

        kilometersDriven: Number,

        description: String,

        // 🖼️ Multiple Images
        images: [
            {
                type: String,
            },
        ],

        features: [String],

        date: {
            type: Number,
            required: true,
        }
    },
    { timestamps: true }
);

const carModel = mongoose.models.car || mongoose.model("car", carSchema);

export default carModel;