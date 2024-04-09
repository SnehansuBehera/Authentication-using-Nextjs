import { dbConnect } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";

dbConnect();

export async function POST(request: NextRequest) {
    try {
        const reqbody = await request.json();
        const { token } = reqbody;
        console.log(token);
        const user = await User.findOne({
            verifyToken: token,
            verifyTokenExpire: { $gt: Date.now() }
        })
        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 500 });
        }
        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpire = undefined;
        const savedUser = await user.save();
        return NextResponse.json({
            message: 'User verified successfully',
            success: true,
            savedUser
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}