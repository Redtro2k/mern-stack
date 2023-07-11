const express = require('express')
const router = express.Router();
const Workout = require('../models/Workout')

// GET FUNCTION
router.get('/', (req, res) => {
    res.json({ msg: 'GET All workouts'})
});

//GET SINGLE FUNCTION
router.get('/:id', (req, res) => {
    res.json({msg: 'GET a single workout'})
})
//POST FUNCTION
router.post('/', async (req, res) => {
    const {title, load, reps} = req.body
    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error: error.message})
    }
    res.json({msg: 'POST a new Workout'})
})
//DELETE function
router.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE Workout'})
})
//UPDATE Function
router.patch('/:id', (req, res) => {
    res.json({msg: 'UPDATE a Workout'})
})

module.exports = router