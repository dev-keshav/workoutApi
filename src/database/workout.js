const Db = require("./db.json")

const { saveToDatabase } = require("./utils")

const getAllWorkouts = () => {
    return Db.workouts;
};

const createNewWorkout = (newWorkout) => {
    const isAlreadyAdded = Db.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if(isAlreadyAdded){
        return;
    }
    Db.workouts.push(newWorkout);
    saveToDatabase(Db);
    return newWorkout;
};

module.exports = {getAllWorkouts, createNewWorkout};