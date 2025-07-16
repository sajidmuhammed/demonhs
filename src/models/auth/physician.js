import mongoose from "mongoose";
import {
  nameValidation,
  emailValidation,
  phoneValidation,
  dobValidation,
  experienceValidation,
  specialtyValidation,
  passwordValidation,
  descriptionValidation,
} from "../../mongooseSchemaValidations/schemavalidations";

const physicianSchema = new mongoose.Schema(
  {
    fullName: nameValidation,
    email: emailValidation,
    phone: phoneValidation,
    dob: dobValidation,
    experience: experienceValidation,
    specialty: specialtyValidation,
    password: passwordValidation,
    description: descriptionValidation,
  },
  { timestamps: true }
);

export default mongoose.models.Physician || mongoose.model("Physician", physicianSchema);
