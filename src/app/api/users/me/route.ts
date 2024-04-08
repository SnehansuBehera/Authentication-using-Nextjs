import { getTokenData } from "@/helpers/getTokenData";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    try {

        const userID = await getTokenData(request);
        const user = await User.findOne({ _id: userID }).select('-password');
        return NextResponse.json({
            message: "User found",
            data: user
        })


    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        },
            {
                status: 500
            })
    }
}