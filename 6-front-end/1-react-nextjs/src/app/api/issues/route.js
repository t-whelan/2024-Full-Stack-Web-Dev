import { NextRequest } from "next/server"

const GET = async(NextRequest)=>{
    return NextResponse.json({message:"This is  a get request"})

}

