import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import { dbConnect } from "@/dbConfig/dbConfig";

dbConnect()

export async function POST(request: NextRequest) {
    try {

        const { token, newPassword } = await request.json();
        const user = await User.findOne({
            forgotPasswordToken: token,
            forgotPasswordTokenExpire: { $gt: Date.now() }
        })

        if (!user) {
            return NextResponse.json({
                error: 'User not found'
            }, { status: 400 })
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedNewPassword = await bcryptjs.hash(newPassword, salt);

        user.password = hashedNewPassword;
        user.forgotPasswordToken = undefined;
        user.forgotPasswordTokenExpire = undefined;

        const savedUser = await user.save();

        return NextResponse.json({
            message: 'Changed Password sucessfully',
            success: true,
            savedUser
        })



    } catch (error) {
        return NextResponse.json({
            error: 'Either token is incorrect or the newPassword is invalid'
        }, { status: 400 })
    }
}