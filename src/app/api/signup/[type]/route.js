import { connectDB } from "../../db";
import Patient from "../../../../models/auth/patient";
import Physician from "../../../../models/auth/physician";
import bcrypt from 'bcryptjs';

export async function POST(request, { params }) {
  try {
    const body = await request.json();
    const userType = params?.type;

    await connectDB();

    const {
      fullName,
      email,
      phone,
      dob,
      age,
      experience,
      specialty,
      decease,
      password,
      description,
    } = body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = {
      fullName,
      email,
      phone,
      dob,
      password: hashedPassword,
      description,
    };

    let existingUser = null;
    let newUser = null;

    if (userType === "patient") {
      existingUser = await Patient.findOne({ email });
      if (existingUser) {
        return Response.json(
          { error: "User already exists", field: "email" },
          { status: 409 }
        );
      }

      userData.age = age;
      userData.decease = decease;
      newUser = new Patient(userData);
    } else if (userType === "physician") {
      existingUser = await Physician.findOne({ email });
      if (existingUser) {
        return Response.json(
          { error: "User already exists", field: "email" },
          { status: 409 }
        );
      }

      userData.experience = experience;
      userData.specialty = specialty;
      newUser = new Physician(userData);
    } else {
      return Response.json({ error: "Invalid user type" }, { status: 400 });
    }

    await newUser.save();

    return Response.json({
      message: `${userType} created successfully`,
      data: newUser,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return Response.json(
      { error: "Something went wrong", details: error.message },
      { status: 500 }
    );
  }
}
