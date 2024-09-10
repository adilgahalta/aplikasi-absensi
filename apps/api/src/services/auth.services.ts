import { Prisma } from "@prisma/client";
import { Request } from "express";
import prisma from "../prisma";
import { hash, compare } from "bcrypt";
import { generateToken } from "../lib/jwt";
import { ErrorHandler } from "../helpers/response";
import { IUser } from "../interfaces/user";
import fs from "fs";
export class AuthService {
  static async login(req: Request) {
    try {
      const { employee_code, password } = req.body;
      const user = (await prisma.user.findUnique({
        where: {
          employee_code,
        },
      })) as IUser;
      if (!user) throw new ErrorHandler("user not found", 404);
      const checkPassword = await compare(password, user.password!);
      if (checkPassword) {
        delete user.password;
      } else throw new ErrorHandler("wrong password", 400);
      console.log(user);

      return generateToken(user);
    } catch (error) {
      throw new ErrorHandler("Login Failed, Try Again!", 400);
    }
  }
  static async register(req: Request) {
    try {
      const {
        password,
        first_name,
        last_name,
        birthdate,
        gender,
        department,
        email,
        phone_number,
        roleId,
      } = req.body;
      console.log(password, roleId, email);
      const hashPassword = await hash(password, 10);

      const data: Prisma.UserCreateInput = {
        password: hashPassword,
        first_name,
        last_name,
        birthdate,
        employee_code: Math.random()
          .toString(36)
          .slice(2, 9)
          .padEnd(7, "0")
          .toUpperCase(),
        gender,
        department,
        email,
        phone_number,
        Role: {
          connect: {
            id: Number(roleId),
          },
        },
      };

      await prisma.user.create({ data });
    } catch (error) {
      console.log(error);
      throw new ErrorHandler("Failed Create new Empoloyee", 400);
    }
  }
}
