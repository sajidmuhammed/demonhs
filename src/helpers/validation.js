// validation.js

export const nameValidation = {
  required: "Full name is required",
  minLength: {
    value: 2,
    message: "Name must be at least 2 characters",
  },
};

export const emailValidation = {
  required: "Email is required",
  pattern: {
    value: /^\S+@\S+$/i,
    message: "Enter a valid email address",
  },
};

export const phoneValidation = {
  required: "Phone number is required",
  pattern: {
    value: /^[0-9]{10,15}$/,
    message: "Enter a valid phone number",
  },
};

export const dobValidation = {
  required: "Date of birth is required",
};

export const experienceValidation = {
  required: "Experience is required",
  min: { value: 0, message: "Experience must be positive" },
};

export const specialtyValidation = {
  required: "Specialty is required",
};

export const passwordValidation = {
  required: "Password is required",
  minLength: {
    value: 6,
    message: "Password must be at least 6 characters",
  },
};

export const confirmPasswordValidation = (password) => ({
  required: "Please confirm your password",
  validate: (value) => value === password || "Passwords do not match",
});

export const descriptionValidation = {
  required: "Description is required",
};
