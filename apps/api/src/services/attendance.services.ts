import { Request } from "express";
import { Prisma } from "@prisma/client";
import { ErrorHandler } from "../helpers/response";
import prisma from "../prisma";
export class AttendanceService {
  static async checkIn(req: Request) {
    try {
      const { userId, check_in_time } = req.body;
      const data: Prisma.AttendanceCreateInput = {
        User: {
          connect: {
            id: Number(userId),
          },
        },
        check_in_time,
      };
      if (req?.file) {
        const image = req.file;
        data.check_in_photo = image.filename;
      }
      return await prisma.attendance.create({ data });
    } catch (error) {
      throw new ErrorHandler("Failed to check in. Try Again!", 400);
    }
  }
  static async checkOut(req: Request) {
    try {
      const { userId, check_in_time, check_out_time } = req.body;

      const data: Prisma.AttendanceUpdateInput = {
        User: {
          connect: {
            id: Number(userId),
          },
        },
        check_out_time,
        check_out_photo: req.file?.filename,
      };
      return await prisma.attendance.update({
        data,
        where: {
          id: Number(userId),
        },
      });
    } catch (error) {
      throw new ErrorHandler("Failed to check out. Try Again!", 400);
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
