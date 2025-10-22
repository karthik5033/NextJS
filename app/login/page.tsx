"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const onLogin = async () => {};

  return (
    <div className=" justify-center items-center flex flex-col min-h-screen py-2 ">
      <h1>Login</h1>
      <br />

      <label htmlFor="email">email</label>
      <input
        className="p-2 border border-gray-300 bg-gray-900 placeholder-gray-500  rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        type="text"
        placeholder="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <label htmlFor="password">password</label>
      <input
        className=" p-3 rounded-xl border border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 ease-in-out"
        type="text"
        placeholder="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <br />
      <button
        onClick={onLogin}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Login Here
      </button>
      <Link href="/signup">Visit signup page </Link>
    </div>
  );
}
