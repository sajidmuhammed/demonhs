import { connectDB } from "../db";
import Appointment from "../../../models/appointment/appoinmtmentSchema";
import { appointmentSchemaValidation } from "../../../mongooseSchemaValidations/schemavalidations";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();

  try {
    const body = await req.json();    
    const validated = appointmentSchemaValidation.parse(body);
    const { doctorId, patientId, appointmentDate, notes } = validated;

    const timeConflict = await Appointment.findOne({ doctorId, appointmentDate });
    if (timeConflict) {
      return NextResponse.json(
        { message: "Doctor already booked at this time." },
        { status: 409 }
      );
    }

    const alreadyBooked = await Appointment.findOne({
      doctorId,
      patientId,
      status: { $ne: "cancelled" },
    });

    if (alreadyBooked) {
      return NextResponse.json(
        { message: "You already have an active appointment with this doctor." },
        { status: 409 }
      );
    }

    const appointment = await Appointment.create({
      doctorId,
      patientId,
      appointmentDate: new Date(appointmentDate),
      notes,
    });

    return NextResponse.json({ message: "Appointment created", appointment });

  } catch (err) {
    return NextResponse.json(
      { message: "Error creating appointment", error: err.message },
      { status: 400 }
    );
  }
}


export async function GET(req) {
  await connectDB();

  try {
    const { searchParams } = new URL(req.url);
    
    const patientId = searchParams.get("patientId");

    if (!patientId) {
      return NextResponse.json(
        { message: "patientId query parameter is required" },
        { status: 400 }
      );
    }

    const appointments = await Appointment.find({ patientId })
      .populate("doctorId", "fullName email phone specialty experience description")
      .lean();

    return NextResponse.json(appointments);
  } catch (err) {
    return NextResponse.json(
      { message: "Error fetching appointments", error: err.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  await connectDB();
  
  try {
    const { searchParams } = new URL(req.url); 
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "Appointment ID is required" },
        { status: 400 }
      );
    }

    const appointment = await Appointment.findByIdAndDelete(id);

    if (!appointment) {
      return NextResponse.json(
        { message: "Appointment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Appointment cancelled successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Error cancelling appointment", error: err.message },
      { status: 500 }
    );
  }
}

