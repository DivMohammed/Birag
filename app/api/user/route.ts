import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";


export async function GET(
    req: Request
){
    try{

    const user = await prisma.user.findMany({
        where: {}
    })

    return NextResponse.json(user);
    } catch (error) {

    console.log('[USER_GET]', error);
    return new NextResponse("Internal error", {status: 500});
    }
}