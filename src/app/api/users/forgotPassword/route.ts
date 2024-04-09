import { sendMail } from "@/helpers/mailer";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    try {
        const [email] = await request.json();
        console.log(email)
        const user = await User.findOne({ email });
        user.password = '';
        await sendMail({ email, emailType: 'RESET', userID: user._id });
    } catch (error) {
        return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }
}