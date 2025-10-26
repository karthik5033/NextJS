import { NextResponse } from "next/server";
// initially it says import nextapiresponse from next....juat change it to above one
export default async function GET() {
    try {
        const response=NextResponse.json(
            {message:"logout successful"},
            {status:200}
        )
        response.cookies.set(
            "token", "",
            {
                httpOnly:true,
                expires: new Date(0)
            }
        );return response;
    } catch (error:any) {
        return NextResponse.json(
            {error:error.message},
            {status:500}) 
    }
}