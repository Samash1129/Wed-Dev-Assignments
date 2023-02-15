const express = require("express");
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://webdev:qwerty123@cluster0.jz6o52d.mongodb.net/test');

mongoose.connection.on('error', err => {
    console.log("Connection Failed");
})
mongoose.connection.on("connected", connected => {
    console.log("Connected to Database");
})

const app = express();

app.use(express.json());

const testRoute = require("./Routes/testRoute");
app.use("/testRoute", testRoute);

app.get("/", (req, res) => {
    res.send("Welcome");
})

const port = 8000;

app.listen(port, () => {
    console.log(`Server running at Port ${port}`);
})