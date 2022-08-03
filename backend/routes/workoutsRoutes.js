const express = require('express');
const router = express.Router();

const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require('../controllers/workoutController');

// Routes
// GET All workouts
router.get('/', getWorkouts);

// GET a single Workout
router.get('/:id', getWorkout);

// POST a workout
router.post('/', createWorkout);

// DELETE a workout
router.delete('/:id', deleteWorkout);

// PATCH(Update) a workout
router.patch('/:id', updateWorkout);

module.exports = router;
