"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Email atau password salah. Coba lagi.");
      } else if (result?.ok) {
        router.push("/home"); // Redirect ke halaman utama
      } else {
        setError("Terjadi kesalahan yang tidak diketahui.");
      }
    } catch (error) {
      setError("Terjadi kesalahan. Coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 ${
                error && "border-red-500"
              }`}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 ${
                error && "border-red-500"
              }`}
              required
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Belum punya akun?{" "}
          <a href="/register" className="text-blue-400 hover:underline">
            Daftar
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;