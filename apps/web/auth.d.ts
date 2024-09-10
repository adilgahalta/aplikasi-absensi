/** @format */

declare module "next-auth" {
  interface User {
    id: number | undefined;
    employee_code: string | undefined;
    birthdate: Date | undefined;
    gender: string | undefined;
    department: string | undefined;
    email: string | undefined;
    first_name: string | undefined;
    last_name: string | undefined;
    phone_number: string | undefined;
    role: Role | undefined;
  }

  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: number | undefined;
    employee_code: string | undefined;
    birthdate: Date | undefined;
    gender: string | undefined;
    department: string | undefined;
    email: string | undefined;
    first_name: string | undefined;
    last_name: string | undefined;
    email: string | undefined;
    phone_number: string | undefined;
    role: Role | undefined;
  }
}

interface Role {
  id: number;
  name: string;
}
