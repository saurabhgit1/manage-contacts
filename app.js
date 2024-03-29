import express from "express";
import dotenv from "dotenv";
import contactRouter from "./routes/contactRoutes.js";
import routeNotFound from "./middlewares/route-not-found.js";
import errorHandler from "./middlewares/error-handler.js";
import connectDB from "./config/dbConnection.js";
import userRouter from "./routes/userRoutes.js";
import tokenAuthentication from "./middlewares/token-authentication.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1/contacts", tokenAuthentication, contactRouter);
app.use("/api/v1/user", userRouter);

app.use(routeNotFound);
app.use(errorHandler);

const start = async () => {
  try {
    const dbResp = await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(
        "Server Started !!!" +
          PORT +
          "\nDB Host:" +
          dbResp.connection.host +
          "\nDB Name:" +
          dbResp.connection.name
      );
    });
  } catch (error) {
    // console.error(error);
    process.exit(1);
  }
};

start();
