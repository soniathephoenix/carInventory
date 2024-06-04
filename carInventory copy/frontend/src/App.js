// src/App.js
import React from 'react';
import CarList from './components/CarList';
import AddCar from './components/AddCar';
import UpdateCar from './components/UpdateCar';

function App() {
    return (
        <div className="App">
            <h1>Car Inventory Management</h1>
            <AddCar />
            <UpdateCar />
            <CarList />
        </div>
    );
}

export default App;

