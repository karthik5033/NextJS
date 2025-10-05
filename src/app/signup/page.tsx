"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
// import {axios} from "axios"





export default function signupPage(){
    const [user,setUser]=React.useState({
        email:"",
        password:"",
        username:"" 

    })
    const onSignup=async ()=>{

    }


    return(
        <div>
            <h1 className=" justify-center text-center ">SignUp</h1>
        </div>
    )
}