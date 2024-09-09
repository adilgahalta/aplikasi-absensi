import { Router } from "express";
import { AttendanceController } from "../controllers/attendance.controller";
import { uploader } from "../lib/uploader";
export class AttendanceRouter {
  private router = Router();
  private attendanceController = new AttendanceController();

  constructor() {
    this.routes();
  }
  private routes() {
    this.router.get("/get-log", this.attendanceController.getAttendance);
    this.router.post(
      "/check-in",
      uploader("IN", "checkin").single("check_in_photo"),
      this.attendanceController.attendanceCheckIn
    );
    this.router.post(
      "/check-out",
      uploader("OUT", "checkout").single("check_out_photo"),
      this.attendanceController.attendanceCheckOut
    );
  }
  public getRouter() {
    return this.router;
  }
}
