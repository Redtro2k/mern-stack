const express = require('express')
const router = express.Router();
const Workout = require('../models/WorkoutModel')
const { createWorkout, getWorkouts, getOneWorkout, deleteWorkout, updateWorkout } = require('../controllers/WorkoutController')
// GET FUNCTION
router.get('/', getWorkouts);

//GET SINGLE FUNCTION
router.get('/:id', getOneWorkout)
//POST FUNCTION
router.post('/', createWorkout)
//DELETE function
router.delete('/:id', deleteWorkout)
//UPDATE Function
router.patch('/:id', updateWorkout)

module.exports = router