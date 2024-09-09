"use server";
import { signIn, signOut } from "@/auth";
import { api } from "@/config/axios.config";
import axios from "axios";
export const loginAction = async (values: {
  employee_code: string;
  password: string;
}) => {
  try {
    await signIn("credentials", {
      ...values,
      redirectTo: "/dashboardEmployee",
    });
  } catch (error) {
    throw error;
  }
};

export const actionLogout = async () => {
  return await signOut({ redirect: true, redirectTo: "/login" });
};

export const actionRegister = async (values: {
  password: string;
  first_name: string;
  last_name: string;
  birthdate: Date;
  gender: string;
  department: string;
  email: string;
  phone_number: string;
  roleId: string;
}) => {
  try {
    await api.post("/auth/v2", values);

    return {
      message: "Register Berhasil",
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data.message;
      throw new Error(errorMessage);
    }
    throw new Error("Register Gagal");
  }
};

