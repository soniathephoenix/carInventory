const Car = require('../models/Car');

// Create a new car
exports.addCar = async (req, res) => {
    const newCar = new Car(req.body);
    try {
        const savedCar = await newCar.save();
        res.status(201).json(savedCar);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all cars
exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get cars older than five years
exports.getOldCars = async (req, res) => {
    try {
        const oldCars = await Car.find({ year: { $lt: new Date().getFullYear() - 5 } });
        res.json(oldCars);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a car
exports.updateCar = async (req, res) => {
    try {
        const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedCar);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a car
exports.deleteCar = async (req, res) => {
    try {
        await Car.findByIdAndDelete(req.params.id);
        res.json({ message: 'Car deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
