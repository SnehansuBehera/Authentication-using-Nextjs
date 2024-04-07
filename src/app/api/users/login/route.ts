
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'


export async function POST(request: NextRequest) {

    try {
        const { email, password } = await request.json()
        console.log({ email, password })

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 500 })
        }
        const password_validity = await bcryptjs.compare(password, user.password)
        if (!password_validity) {
            return NextResponse.json({ error: 'Wrong Password' }, { status: 500 });
        }

        //Create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        //Create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: '1hr' });
        const response = NextResponse.json({
            message: 'User login successful',
            success: true,
        })
        //Send token in the cookies of the user
        response.cookies.set('token', token, {
            httpOnly: true,
        })

        return response

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}