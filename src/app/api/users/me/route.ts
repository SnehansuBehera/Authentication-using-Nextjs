import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    try {

    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        },
            {
                status: 500
            })
    }
}