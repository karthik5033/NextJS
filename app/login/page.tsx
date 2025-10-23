"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({ email: "", password: "" });
  const [loading, setLoading] = React.useState(false);
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  const onLogin = async () => {
    if (!user.email || !user.password) {
      alert("Provide email and password");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("/api/users/login", user);
      if (res.status === 200) {
        // redirect after successful login
        router.push("/profile");
      } else {
        alert(res.data?.error || "Login failed");
      }
    } catch (err: any) {
      console.error(err);
      alert(err?.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email && user.password) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="justify-center items-center flex flex-col min-h-screen py-2">
    <h1>{loading?"Loading...":"Login"}</h1>
      <br />

      <label htmlFor="email">email</label>
      <input
        className="p-2 border rounded-lg mb-4 placeholder-gray-500 bg-gray-900 text-white"
        type="email"
        placeholder="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />

      <label htmlFor="password">password</label>
      <input
        className="p-2 border rounded-lg mb-4 placeholder-gray-500 bg-gray-900 text-white"
        type="password"
        placeholder="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <br />
      <button
        onClick={onLogin}
        disabled={loading}
        className={`p-2 border rounded-lg mb-4 ${
          loading ? "opacity-50 cursor-not-allowed" : "border-gray-300"
        }`}
      >
        {loading ? "Logging in..." : "Login Here"}
      </button>
      <Link href="/signup">Visit signup page</Link>
    </div>
  );
}
