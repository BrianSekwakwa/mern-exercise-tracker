const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// -- Setting environment variables
require("dotenv").config();

// -- Creating the server
const app = express();
const port = process.env.PORT || 5000;

// -- Middlewares
app.use(cors());
app.use(express.json());

// -- Uniform Resourse Indetifier for the mongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// -- Connecting to the mongoDB
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

// -- Routes
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

// -- Listeing to changes on the server from a specific PORT
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
