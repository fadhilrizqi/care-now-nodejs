class Patient {
  constructor(
    patient_id,
    patient_name,
    treatment_date,
    treatment_description,
    medications_prescribed,
    treatment_cost
  ) {
    (this.patient_id = patient_id),
      (this.patient_name = patient_name),
      (this.treatment_date = treatment_date),
      (this.treatment_description = treatment_description),
      (this.medications_prescribed = medications_prescribed),
      (this.treatment_cost = treatment_cost);
  }
}

export default Patient;
