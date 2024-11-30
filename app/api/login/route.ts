import bcrypt from "bcrypt";

import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(
    req: Request
){
    try{
    const body = await req.json();
    const {
        email,
        password,
    } = body;

    // const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.findUnique({
        where:{
            email,
        }
    })


    if (!user) {
        return new NextResponse("user not defined" , {status: 400});
    }

        const isPasswordValid = await bcrypt.compare(password, user?.hashedPassword);

        if(!isPasswordValid){
            return new NextResponse("email or password not correct" , {status: 400});
        }
    
        // if(isPasswordValid){
        // var token = jwt.sign({id: admin._id}, "1234")
        // // Generates a token code specifically for the user
        // return res.json({token, adminID: admin._id})
        // }

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