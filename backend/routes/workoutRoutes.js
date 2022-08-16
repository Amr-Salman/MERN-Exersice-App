const express = require('express');
const requireAuth = require('../middleware/requireAuth');

const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require('../controllers/workoutController');

const router = express.Router();

// Require auth for all workout routes
router.use(requireAuth);

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
