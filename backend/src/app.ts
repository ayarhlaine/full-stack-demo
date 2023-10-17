import express from "express";
import "reflect-metadata"; // Required for Tsyringe
import controllers from "./controllers";

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("Hello, Express!"));

// Use the controllers
app.use(controllers);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
