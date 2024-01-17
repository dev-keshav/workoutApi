const express = require("express")

const bodyparser = require("body-parser");

const v1WorkoutRouter = require("./v1/routes/workoutRoutes")


const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("<h2>It is cool api</h2> ");    
})

app.use(bodyparser.json());
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
    console.log(`API is listing on port ${PORT}`);
});


app.get('*', (req, res) => {
    res.send(`<h2> Le API response..404</h2> <img height=222 width=222 src="https://memeheist.com/wp-content/uploads/2023/08/Hum-Pe-To-Hai-Hi-No-Meme-1-1024x1024.jpg" /> <br><h3>Here you can find👇</h3> <p>https://health-and-fitness-api.onrender.com/api/v1/workouts</p>`);    
})