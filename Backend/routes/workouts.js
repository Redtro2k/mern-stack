const express = require('express')
const router = express.Router();

// GET FUNCTION
router.get('/', (req, res) => {
    res.json({ msg: 'GET All workouts'})
});

//GET SINGLE FUNCTION
router.get('/:id', (req, res) => {
    res.json({msg: 'GET a single workout'})
})
//POST FUNCTION
router.post('/', (req, res) => {
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