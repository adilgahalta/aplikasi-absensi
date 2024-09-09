import { Request } from "express";
import { Prisma } from "@prisma/client";
import { ErrorHandler } from "../helpers/response";
import prisma from "../prisma";
export class AttendanceService {
  static async AttendanceLog(req: Request) {
    try {
      const { userId, attendance_type, photo_url } = req.body;
      const data: Prisma.AttendanceCreateInput = {
        user_id: {
          connect: {
            id: Number(userId),
          },
        },
        attendance_type,
        attendance_date: new Date(),
        photo_url,
      };

      const res = await prisma.attendance.create({ data });
      return res;
    } catch (error) {
      throw new ErrorHandler("Failed to log. Try Again!", 400);
    }
  }
  static async getAttendanceLog() {
    try {
      const data = await prisma.attendance.findMany({});
      return data;
    } catch (error) {
      throw new ErrorHandler("Failed to get Attendance Log, Try Again!", 400);
    }
  }
}
