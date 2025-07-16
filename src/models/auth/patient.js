import mongoose from "mongoose";
import {
  nameValidation,
  emailValidation,
  phoneValidation,
  dobValidation,
  ageValidation,
  deceaseValidation,
  passwordValidation,
  descriptionValidation,
} from "../../mongooseSchemaValidations/schemavalidations";

const patientSchema = new mongoose.Schema(
  {
    fullName: nameValidation,
    email: emailValidation,
    phone: phoneValidation,
    dob: dobValidation,
    age: ageValidation,
    decease: deceaseValidation,
    password: passwordValidation,
    description: descriptionValidation,
  },
  { timestamps: true }
);

export default mongoose.models.Patient || mongoose.model("Patient", patientSchema);
