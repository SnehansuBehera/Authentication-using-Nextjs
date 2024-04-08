import { NextResponse } from "next/server";


export async function GET() {
    try {

        const response = NextResponse.json({
            message: "logged out success",
            success: 200
        })
        response.cookies.set('token', '', { expires: new Date(0) });
        return response;
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 500 })
    }
}