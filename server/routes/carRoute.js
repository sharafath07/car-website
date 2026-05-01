import express from 'express';
import { listCars, addCar, removeCar, singleCar } from '../controllers/carController.js';
import upload from '../middleware/multer.js';

const carRouter = express.Router();

carRouter.post('/add', upload.fields([{ name: "image1", maxCount: 1 }, { name: "image2", maxCount: 1 }, { name: "image3", maxCount: 1 }, { name: "image4", maxCount: 1 }, { name: "image5", maxCount: 1 }, { name: "image6", maxCount: 1 }, { name: "image7", maxCount: 1 }, { name: "image8", maxCount: 1 }, { name: "image9", maxCount: 1 }, { name: "image10", maxCount: 1 }]), addCar);
carRouter.get('/list', listCars);
carRouter.delete('/remove', removeCar);
carRouter.get('/single', singleCar);

export default carRouter;