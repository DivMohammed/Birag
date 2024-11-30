import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    { params }: {params: {Id: string }}
){
    try {
        const body = await req.json()
    
        const { info } = body;
    
    
        if (!info) {
            return new NextResponse("Info Avatar URL is required" , {status: 400});
        }
    
    
        const user =await prisma.user.updateMany({
            where: {
                id: params.Id,
            },
            data: {
                info,
            }
        })
    
    
        return NextResponse.json(user)
        } catch (error) {
        console.log('[USER_PATCH]', error);
        return new NextResponse("Internal error", {status: 500});
        }
}