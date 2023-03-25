const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// use of middlewares
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : false}));
app.use(cors());

// routes to the server
const loginRoutes = require("./routes/router");

// connection to the database
main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb+srv://nitwrohit12345:Rohit12345@cluster0.mjzehea.mongodb.net/assignment?retryWrites=true&w=majority");
    console.log("Databse connection sucessfull...")
}

//
app.use("/api/v1", loginRoutes);


app.get("/", (req, res) => {
    res.send("Ok...")
});

// connect to the port
app.listen(8080, () => {
    console.log("Server started at 8080 port..");
})