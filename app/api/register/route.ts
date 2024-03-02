import bcrypt from "bcrypt";

import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(
    req: Request
){
    try{
    const body = await req.json();
    const {
        name,
        email,
        password,
    } = body;

    const hashedPassword = await bcrypt.hash(password, 12);
    // await bcrypt.hash(password, 20);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword,
        }
    })

    return NextResponse.json(user);
    } catch (error) {
    console.log('[REGISTER_POST]', error);
    return new NextResponse("Internal error", {status: 500});
    }
}

// export async function GET(
//     req: Request
// ){
//     try{

//     const user = await prisma.user.findMany({
//         where: {
            
//         }
//     });

//     return NextResponse.json(user);
//     } catch (error) {
//     console.log('[REGISTER_GET]', error);
//     return new NextResponse("Internal error", {status: 500});
//     }
// }