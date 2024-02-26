import firebase from "../firebase.js";
import Patient from "../Models/patientModel.js";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const db = getFirestore(firebase);

export const createPatient = async (req, res, next) => {
  try {
    const data = req.body;
    await addDoc(collection(db, "patients"), data);
    res.status(200).send("patient created successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getPatients = async (req, res, next) => {
  try {
    const patients = await getDocs(collection(db, "patients"));
    const patientArray = [];

    if (patients.empty) {
      res.status(400).send("no patients found");
    } else {
      patients.forEach((doc) => {
        const patient = new Patient(
          doc.data().patient_id,
          doc.data().patient_name,
          doc.data().treatment_date,
          doc.data().treatment_description,
          doc.data().medications_prescribed,
          doc.data().treatment_cost
        );
        patientArray.push(patient);
      });

      res.status(200).send(patientArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
