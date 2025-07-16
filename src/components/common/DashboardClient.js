'use client';

import { useState, useEffect } from "react";
import { useAuthUser } from '../common/AuthContext';
import DashboardTable from "../common/DashboardTable";
import { apiRequest } from "../../services/commonservce/apirequests";
import { toast } from 'react-toastify';

export default function DashboardClient({ doctors }) {
  const [appointments, setAppointments] = useState({});
  const { user } = useAuthUser();

  useEffect(() => {
    if (user?.id) {
      fetchAppointments();
    }
  }, [user]);

  const fetchAppointments = async () => {
    const res = await apiRequest(`/api/appointments?patientId=${user.id}`, 'GET');
    const data = res ?? [];
    const mapped = {};
    data.forEach(appt => {
      mapped[appt.doctorId._id] = {
        id: appt._id,
        status: appt.status,
      };
    });

    setAppointments(mapped);
  };

  const handleToggleAppointment = async (doctorId) => {
    const userId = user?.id;
    const isDoctor = user?.userType === 'physician';

    if (isDoctor) {
      alert("Doctors cannot book appointments.");
      return;
    }

    const hasAppointment = appointments[doctorId];

    if (hasAppointment) {

      const res = await apiRequest(`/api/appointments?id=${appointments[doctorId].id}`, 'DELETE');

      if (res.message === 'Appointment cancelled successfully') {
        toast.success(res.message);
        const updated = { ...appointments };
        delete updated[doctorId];
        setAppointments(updated);
      } else {
        toast.error(res.message || "Failed to cancel");
      }

    } else {
        const body = {
            doctorId,
            patientId: userId,
            appointmentDate: new Date().toDateString(),
            notes: "booked via dashboard",
        };

        const data = await apiRequest("/api/appointments", 'POST', body);
        if(data?.error || !data?.appointment?._id){
            toast.error(data.error || "something went wrong");
            return;
        }
        toast.success("Appointment booked successfully");
        setAppointments((prev) => ({
            ...prev,
            [doctorId]: { id: data.appointment._id, status: data.appointment.status },
        }));
        }
  };

  const columns = [
    { header: "Name", key: "fullName" },
    { header: "Email", key: "email" },
    { header: "Phone", key: "phone" },
    { header: "Specialty", key: "specialty" },
    { header: "Experience (yrs)", key: "experience" },
    { header: "Description", key: "description" },
    { header: "Make an Appointment", key: "appointment" },
    { header: "Status", key: "status" },
  ];

  const data = doctors.map((doc) => {
    const isBooked = !!appointments[doc.id];
    const status = appointments[doc.id]?.status || "Not Booked";

    return {
      ...doc,
      appointment: (
        <button
          onClick={() => handleToggleAppointment(doc.id)}
          className={`px-3 py-1 text-sm rounded ${
            isBooked ? "bg-red-500 text-white" : "bg-blue-500 text-white"
          }`}
        >
          {isBooked ? "Cancel Appointment" : "Make Appointment"}
        </button>
      ),
      status,
    };
  });

  return <DashboardTable columns={columns} data={data} />;
}
