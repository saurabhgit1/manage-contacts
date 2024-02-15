import express from "express";
import dotenv from "dotenv";
import contactRouter from "./routes/contactRoutes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1/contacts", contactRouter);

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log("Server Started !!!"+PORT);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
