import {connect} from "@/dbConfig/dbConfig.ts"
import User from "@/src/models/userModel"
import { NextRequest,NextResponse } from "next/server"
import bcryptjs from "bcryptjs"


connect()
export async function POST(request:NextRequest){
    try {
        const reqBody=await request.json()
        const [username,email,password]= reqBody
        console.log(reqBody);

        // Check if user already exists
        const user=username.findOne({email})
        
    } catch (error:any) {
        return NextResponse.json({error: error.message},
            {status:500}
        )
    }
}