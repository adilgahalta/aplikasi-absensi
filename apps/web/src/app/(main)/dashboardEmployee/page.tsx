import React from "react";
// import Navbar from "@/components/Navbar/navbar.desktop";
import { auth } from "@/auth";

export default async function page() {
  const session = await auth();
  return (
    <div>
      {/* <Navbar /> */}
      <div>Hello, {session?.user.first_name}</div>
      <div>Employee Dashboard</div>
    </div>
  );
}
