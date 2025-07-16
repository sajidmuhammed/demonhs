
import DashboardClient from "../../components/common/DashboardClient";
import { connectDB } from "../api/db";
import Physician from "../../models/auth/physician";

export default async function PatientDashboard() {
  await connectDB();
  const doctors = await Physician.find({});

  const serializedDoctors = doctors.map((doc) => ({
    id: doc._id.toString(),
    fullName: doc.fullName,
    email: doc.email,
    phone: doc.phone,
    specialty: doc.specialty,
    experience: doc.experience,
    description: doc.description,
  }));

  return (
    <div className="min-h-[60vh] bg-grey-100">
      <h1 className="w-full py-4 px-6 text-xl font-bold text-center">Patient Dashboard</h1>
      <DashboardClient doctors={serializedDoctors} />
    </div>
  );
}
