import React, { useState } from 'react';
import { addCar } from '../carService';

const AddCar = () => {
    const [car, setCar] = useState({
        make: '',
        model: '',
        registrationNumber: '',
        currentOwner: '',
        year: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCar({ ...car, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addCar(car);
        setCar({
            make: '',
            model: '',
            registrationNumber: '',
            currentOwner: '',
            year: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Car</h2>
            <input type="text" name="make" value={car.make} onChange={handleChange} placeholder="Make" required />
            <input type="text" name="model" value={car.model} onChange={handleChange} placeholder="Model" required />
            <input type="text" name="registrationNumber" value={car.registrationNumber} onChange={handleChange} placeholder="Registration Number" required />
            <input type="text" name="currentOwner" value={car.currentOwner} onChange={handleChange} placeholder="Current Owner" required />
            <input type="number" name="year" value={car.year} onChange={handleChange} placeholder="Year" required />
            <button type="submit">Add Car</button>
        </form>
    );
};

export default AddCar;

