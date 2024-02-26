import express from "express";

import {
  createPatient,
  getPatients,
} from "../Controllers/patientControllers.js";

const router = express.Router();

router.get("/", getPatients);
router.post("/new", createPatient);

export default router;
