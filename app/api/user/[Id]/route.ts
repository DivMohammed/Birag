import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    { params }: {params: {Id: string }}
){
    try {
        const body = await req.json()
    
        const { backgroundAvatar, avatar, info} = body;
    
    
        if (!backgroundAvatar) {
            return new NextResponse("Background Avatar URL is required" , {status: 400});
        }

        if (!avatar) {
            return new NextResponse("image Avatar is required" , {status: 400});
        }
    
    
        const user =await prisma.user.updateMany({
            where: {
                id: params.Id,
            },
            data: {
                backgroundAvatar,
                avatar,
            }
        })
    
    
        return NextResponse.json(user)
        } catch (error) {
        console.log('[USER_PATCH]', error);
        return new NextResponse("Internal error", {status: 500});
        }
}

export async function DELETE(
    req: Request,
    { params }: {params: {Id: string }}
){
    try {    
    
        const user =await prisma.user.updateMany({
            where: {
                id: params.Id,
            },
            data: {
                backgroundAvatar: "",
                // avatar,
            }
        })
    
    
        return NextResponse.json(user)
        } catch (error) {
        console.log('[USER_PATCH]', error);
        return new NextResponse("Internal error", {status: 500});
        }
}