import { Router } from "express";
import { AttendanceController } from "../controllers/attendance.controller";

export class AttendanceRouter {
  private router = Router();
  private attendanceController = new AttendanceController();

  constructor() {
    this.routes();
  }
  private routes() {
    this.router.get("/get-log", this.attendanceController.getAttendance);
    this.router.post("/log", this.attendanceController.attendanceLog);
  }
  public getRouter() {
    return this.router;
  }
}
