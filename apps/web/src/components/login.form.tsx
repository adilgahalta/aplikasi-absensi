// // pages/login.tsx
// import { useState } from "react";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Simple validation for empty fields
//     if (!email || !password) {
//       setError("Both email and password are required");
//       return;
//     }

//     // Clear error message
//     setError("");
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center">Login</h2>
//         {error && <p className="text-red-500">{error}</p>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="you@example.com"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="********"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
