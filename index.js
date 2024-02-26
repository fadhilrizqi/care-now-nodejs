import express from "express";
import cors from "cors";

import config from "./config.js";
//import productRoute from "./Routes/productRoute.js";
import patientRoute from "./Routes/patientRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use("/api", patientRoute);

app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`)
);
