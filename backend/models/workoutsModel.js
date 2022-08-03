const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const workoutModel = mongoose.model('Workout', workoutsSchema);

module.exports = workoutModel;
