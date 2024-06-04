import React, { useState, useEffect } from 'react';
import { getAllCars, deleteCar } from '../carService';

const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async () => {
        try {
            const response = await getAllCars();
            setCars(response.data);
        } catch (error) {
            console.error('Error fetching cars:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteCar(id);
            fetchCars();
        } catch (error) {
            console.error('Error deleting car:', error);
        }
    };

    return (
        <div>
            <h1>Car List</h1>
            <ul>
                {cars.map(car => (
                    <li key={car._id}>
                        {car.make} {car.model} - {car.registrationNumber} - {car.currentOwner} - {car.year}
                        <button onClick={() => handleDelete(car._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarList;


