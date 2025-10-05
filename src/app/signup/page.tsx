"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function signupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const onSignup = async () => {};

  return (
    <div className=" justify-center items-center flex flex-col min-h-screen py-2 ">
      <h1>Signup</h1>
      <br />
      <label htmlFor="username">username</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 placeholder-gray-500 bg-gray-900 focus:outline-none focus:border-gray-600 text-black"
        type="text"
        placeholder="username"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
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
        className="p-2 border border-gray-300 bg-gray-900 placeholder-gray-500  rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        type="text"
        placeholder="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button
        onClick={onSignup}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Signup Here
      </button>
      <Link href="/login">Visit login page </Link>
    </div>
  );
}
