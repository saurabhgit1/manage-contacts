import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log("Server Started !!!");
    });
  } catch (error) {
      console.error(error);
  }
};

start();
