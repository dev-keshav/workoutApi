const { v4: uuid } = require("uuid");

const workout = require("../database/workout");

const getAllWorkouts = () => {
    try{
        const allWorkouts = workout.getAllWorkouts();
        return allWorkouts;
    } catch(error){
        throw error;
    }
};

const getOneWorkout = (workoutId) => {
    try{
        const Workout = workout.getOneWorkout(workoutId);
        return Workout;
    } catch(error){
        throw error
    }
};

const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    const createdWorkout = workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
  } catch (error) {
    throw error;
  }
};

const updateOneWorkout = (workoutId, changes) => {
    try{
        const updatedWorkout = workout.updateOneWorkout(workoutId, changes);
        return updatedWorkout;
    } catch(error){
        throw error;
    }
};

const deleteOneWorkout = (workoutId) => {
    try{
        workout.deleteOneWorkout(workoutId);
    } catch(error){
        throw error;
    }
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
