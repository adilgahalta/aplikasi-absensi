import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
export class AuthRouter {
  private router = Router();
  private authController = new AuthController();
  constructor() {
    this.routes();
  }
  private routes() {
    this.router.post("/v1", this.authController.login);
    this.router.post("/v2", this.authController.register);
    // this.router.get(
    //   "/verification/:token",
    //   verifyEmail,
    //   this.authController.verification
    // );

    // this.router.patch(
    //   "/profile",
    //   validateUser,
    //   uploader("AVATAR", "avatars").single("image"),
    //   this.authController.updateProfile
    // );
  }
  public getRouter() {
    return this.router;
  }
}
