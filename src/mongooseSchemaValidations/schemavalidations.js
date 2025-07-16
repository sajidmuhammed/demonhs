import { z } from "zod";

export const nameValidation = {
  type: String,
  required: [true, "Full name is required"],
  trim: true,
  minlength: [3, "Name must be at least 3 characters long"],
  maxlength: [100, "Name must be at most 100 characters long"],
};

export const emailValidation = {
  type: String,
  required: [true, "Email is required"],
  unique: true,
  lowercase: true,
  trim: true,
  maxlength: [254, "Email is too long"],
  match: [
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    "Please enter a valid email address",
  ],
};

export const phoneValidation = {
  type: String,
  required: [true, "Phone number is required"],
  match: [/^\d{10,15}$/, "Phone number must be between 10 and 15 digits"],
};

export const dobValidation = {
  type: Date,
  required: [true, "Date of birth is required"],
};

export const ageValidation = {
  type: Number,
  required: [true, "Age is required"],
  min: [0, "Age must be a positive number"],
  max: [120, "Age must be less than 120"],
};

export const deceaseValidation = {
  type: String,
  required: [true, "Disease is required"],
  trim: true,
  minlength: [3, "Disease name too short"],
  maxlength: [100, "Disease name too long"],
};

export const passwordValidation = {
  type: String,
  required: [true, "Password is required"],
  minlength: [8, "Password must be at least 8 characters long"],
  maxlength: [100, "Password is too long"],
  match: [
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/,
    "Password must include uppercase, lowercase, number, and special character",
  ],
};

export const descriptionValidation = {
  type: String,
  required: [true, "Issue description is required"],
  minlength: [10, "Description must be at least 10 characters"],
  maxlength: [500, "Description is too long"],
};


export const experienceValidation = {
  type: Number,
  required: [true, "Experience is required"],
  min: [0, "Experience must be a positive number"],
  max: [70, "Experience seems too high"],
};

export const specialtyValidation = {
  type: String,
  required: [true, "Specialty is required"],
  trim: true,
  minlength: [3, "Specialty must be at least 3 characters"],
  maxlength: [100, "Specialty must be at most 100 characters"],
};


export const appointmentSchemaValidation = z.object({
  doctorId: z.string().length(24, "Invalid doctor ID"),
  patientId: z.string().length(24, "Invalid patient ID"),
  appointmentDate: z.coerce.date({ invalid_type_error: "Invalid date" }),
  notes: z.string().max(500, "Notes too long").optional(),
});
