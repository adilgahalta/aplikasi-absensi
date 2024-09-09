"use server";
import { auth } from "@/auth";
import { api } from "@/config/axios.config";

export const handleCheckIn = async (formData: FormData) => {
  const session = await auth();
  try {
    formData.append("userId", Number(session?.user.id).toString());

    await api.post("/attendance/check-in", formData, {});
  } catch (error) {
    console.error("Error checking in:", error);
  }
};

export const handleCheckOut = async (formDataCO: FormData) => {
  const session = await auth();
  try {
    formDataCO.append("userId", Number(session?.user.id).toString());

    await api.post("/attendance/check-out", formDataCO, {});
  } catch (error) {
    console.error("Error checking out:", error);
  }
};
