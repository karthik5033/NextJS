// import {connect} from "@/dbConfig/dbConfig.ts"
import { connect } from "../../../../dbConfig/dbConfig";
import User from "../../../../models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();
export async function POST(request: NextRequest) {
  try {
    await connect();

    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log("login request:", { email });

    if (!email || !password) {
      return NextResponse.json(
        { error: "Missing email or password" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email }).lean();
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const safeUser = {
      id: user._id,
      username: user.username,
      email: user.email,
    };
    return NextResponse.json(
      { message: "Login successful", user: safeUser },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
