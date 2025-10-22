"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "", username: "" });
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const onSignup = async () => {
    setButtonDisabled(true);
    try {
      // call the actual route path
      const res = await axios.post("/api/users/signup", user);
      if (res.status === 201 || res.status === 200) router.push("/login");
      else alert(res.data?.error || "Signup failed");
    } catch (err: any) {
      console.error(err);
      alert(err?.response?.data?.error || "Signup failed");
    } finally {
      setButtonDisabled(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(!(user.email && user.password && user.username));
  }, [user]);

  return (
    <div className="justify-center items-center flex flex-col min-h-screen py-2">
      <h1>Signup</h1>
      <label htmlFor="username">username</label>
      <input
        className="p-2 border rounded-lg mb-4 placeholder-gray-500 bg-gray-900 text-white"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <label htmlFor="email">email</label>
      <input
        className="p-2 border rounded-lg mb-4 placeholder-gray-500 bg-gray-900 text-white"
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <label htmlFor="password">password</label>
      <input
        className="p-2 border rounded-lg mb-4 placeholder-gray-500 bg-gray-900 text-white"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button
        onClick={onSignup}
        disabled={buttonDisabled}
        className={`p-2 border rounded-lg mb-4 ${
          buttonDisabled ? "opacity-50 cursor-not-allowed" : "border-gray-300"
        }`}
      >
        {buttonDisabled ? "No signup" : "Signup"}
      </button>
      <Link href="/login">Visit login page</Link>
    </div>
  );
}
