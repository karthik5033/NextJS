"use client";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-hot-toast";
// import { useRouter } from "next/router";this peice of shit doesnt work
import {useRouter} from "next/navigation";
export default function ProfilePage() {
    const router = useRouter();
    const logout = async () => {
        try {
            await axios.get("/api/users/logout");
            toast.success("Logout successful");
            router.push("/login");
            window.location.href = "/login";
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message);
        }  
    }
    
    return (
        <div className=" justify-center items-center flex flex-col min-h-screen py-2 ">
            <h1>Profile</h1>
            <h2>page</h2>
            <h2>p</h2>
            <hr />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Logout</button>
        </div>
    );
}