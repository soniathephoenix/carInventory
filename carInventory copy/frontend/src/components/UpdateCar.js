import React, { useState, useEffect } from 'react';
import { updateCar, getAllCars } from '../carService';

const UpdateCar = () => {
    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);
    const [carDetails, setCarDetails] = useState({
        make: '',
        model: '',
        registrationNumber: '',
        currentOwner: '',
        year: ''
    });

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarDetails({ ...carDetails, [name]: value });
    };

    const handleSelectChange = (e) => {
        const car = cars.find(car => car._id === e.target.value);
        setSelectedCar(car);
        setCarDetails(car);
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateCar(selectedCar._id, carDetails); 
            fetchCars();
            window.location.reload();
       } catch (error) {
            console.error('Error updating car:', error);
        }
    };
    

    return (
        <div>
            <h2>Update Car</h2>
            <select onChange={handleSelectChange}>
                <option value="">Select a car to update</option>
                {cars.map(car => (
                    <option key={car._id} value={car._id}> 
                        {car.make} {car.model}
                    </option>
                ))}
            </select>
            {selectedCar && (
                <form onSubmit={handleSubmit}>
                    <input type="text" name="make" value={carDetails.make} onChange={handleChange} placeholder="Make" required />
                    <input type="text" name="model" value={carDetails.model} onChange={handleChange} placeholder="Model" required />
                    <input type="text" name="registrationNumber" value={carDetails.registrationNumber} onChange={handleChange} placeholder="Registration Number" required />
                    <input type="text" name="currentOwner" value={carDetails.currentOwner} onChange={handleChange} placeholder="Current Owner" required />
                    <input type="number" name="year" value={carDetails.year} onChange={handleChange} placeholder="Year" required />
                    <button type="submit">Update Car</button>
                </form>
            )}
        </div>
    );
};



export default UpdateCar;