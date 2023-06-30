const express = require("express")

const bodyparser = require("body-parser");

const v1WorkoutRouter = require("./v1/routes/workoutRoutes")

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("<h2>It is cool api</h2>");    
})

app.use(bodyparser.json());
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
    console.log(`API is listing on port ${PORT}`);
});