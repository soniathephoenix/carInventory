const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

router.post('/', carController.addCar);
router.get('/', carController.getAllCars);
router.get('/old', carController.getOldCars);
router.put('/:id', carController.updateCar);
router.delete('/:id', carController.deleteCar);

module.exports = router;

