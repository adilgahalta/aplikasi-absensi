import { Request, Response, NextFunction } from "express";
import { AttendanceService } from "../services/attendance.services";
import { responseHandler, ErrorHandler } from "../helpers/response";
export class AttendanceController {
  async getAttendance(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await AttendanceService.getAttendanceLog();
      return res.send(responseHandler("Get attendance log success", data));
    } catch (error) {
      next(error);
    }
  }

  async attendanceLog(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await AttendanceService.AttendanceLog(req);
      return res.send(responseHandler("Logging succesfull", data));
    } catch (error) {
      next(error);
    }
  }
}
