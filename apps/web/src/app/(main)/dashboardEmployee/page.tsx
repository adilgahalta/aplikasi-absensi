"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { handleCheckIn, handleCheckOut } from "@/app/action/log.action";

const AttendancePage = () => {
  const { data: session } = useSession();
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [photo, setPhoto] = useState<File | null>(null);

  useEffect(() => {
    const checkAttendanceStatus = async () => {
      try {
        const response = await axios.get(`/api/attendance/status`);
        setIsCheckedIn(response.data.isCheckedIn);
      } catch (error) {
        console.error("Error checking attendance status:", error);
      }
    };

    checkAttendanceStatus();
  }, []);

  const handleCI = async () => {
    if (!photo) {
      alert("Please upload a photo to check in.");
      return;
    }
    const formData = new FormData();
    formData.append("check_in_photo", photo);
    formData.append("check_in_time", new Date().toISOString());

    try {
      handleCheckIn(formData);
      setIsCheckedIn(true);
    } catch (error) {
      console.error("Error checking in:", error);
    }
  };

  const handleCO = async () => {
    if (!photo) {
      alert("Please upload a photo to check in.");
      return;
    }
    const formDataCO = new FormData();
    formDataCO.append("check_out_photo", photo);
    formDataCO.append("check_out_time", new Date().toISOString());

    try {
      handleCheckOut(formDataCO);
      setIsCheckedIn(false);
    } catch (error) {
      console.error("Error checking in:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">
        Welcome, {session?.user.first_name}!
      </h1>
      <div className="border p-6 rounded-lg shadow-lg">
        {!isCheckedIn ? (
          <>
            <h2 className="text-xl mb-2">Check In</h2>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files?.[0] || null)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              onClick={handleCI}
            >
              Check In
            </button>
          </>
        ) : (
          <>
            <h2 className="text-xl mb-2">Check Out</h2>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files?.[0] || null)}
            />
            <button
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
              onClick={handleCO}
            >
              Check Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AttendancePage;
