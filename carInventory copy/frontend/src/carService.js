import axios from 'axios';

const API_URL = 'http://localhost:3000/api/cars';

export const addCar = (car) => axios.post(API_URL, car);
export const getAllCars = () => axios.get(API_URL);
export const getOldCars = () => axios.get(`${API_URL}/old`);
export const updateCar = (id, car) => axios.put(`${API_URL}/${id}`, car);
export const deleteCar = (id) => axios.delete(`${API_URL}/${id}`);
