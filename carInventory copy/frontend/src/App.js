import React, { useState, useEffect } from 'react';
import { getAllCars, updateCar } from './carService';
import CarList from './components/CarList';
import AddCar from './components/AddCar';
import UpdateCar from './components/UpdateCar';

function App() {
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

    const handleUpdateCar = async (id, carDetails) => {
        try {
            await updateCar(id, carDetails);
            fetchCars();
        } catch (error) {
            console.error('Error updating car:', error);
        }
    };

    return (
        <div className="App">
            <h1>Car Inventory Management</h1>
            <AddCar fetchCars={fetchCars} />
            <UpdateCar cars={cars} fetchCars={fetchCars} handleUpdateCar={handleUpdateCar} />
            <CarList cars={cars} fetchCars={fetchCars} />
        </div>
    );
}

export default App;
