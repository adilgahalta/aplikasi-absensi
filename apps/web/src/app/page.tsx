"use client";
import { useState } from "react";
import { loginAction } from "./action/user.action";

const LoginPage = () => {
  const [employee_code, setEmployee_code] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<Error | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!employee_code || !password) {
      setError(new Error("Both Employee Code and password are required"));
      return;
    }
    const data = { employee_code, password };
    loginAction(data)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then((res) => {
        console.log("berhasil login");
      })
      .catch((err) => {
        setError(err);
      });

    setError(null);
    console.log("Employee code:", employee_code);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        {error && <p className="text-red-500">{error.message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Employee Code
            </label>
            <input
              type="text"
              id="employee"
              value={employee_code}
              onChange={(e) => setEmployee_code(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Masukkan Employee Code"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
