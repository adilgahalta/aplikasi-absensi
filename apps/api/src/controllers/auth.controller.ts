import { AuthService } from "../services/auth.services";
import { Request, Response, NextFunction } from "express";
import { responseHandler } from "../helpers/response";
export class AuthController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await AuthService.login(req);
      return res.send(responseHandler("Login Success", data));
    } catch (error) {
      next(error);
    }
  }
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.url, req.body);
      const data = await AuthService.register(req);
      return res.send(responseHandler("Register Success", data));
    } catch (error) {
      next(error);
    }
  }
}
