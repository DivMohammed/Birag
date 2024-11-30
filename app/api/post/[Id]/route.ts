import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
    { params }: {params: {Id: string }}
){
    try{
    const body = await req.json();
    const { text, imag } = body;

    if (!text) {
        return new NextResponse("TEXT is required" , {status: 400});
    }

    if (!imag) {
        return new NextResponse("URL is required" , {status: 403});
    }

    const post = await prisma.post.create({
        data: {
            text,
            url: imag,
            postId: params.Id,
        }
    })

    return NextResponse.json(post);
    } catch (error) {
    console.log('[POST_POST]', error);
    return new NextResponse("Internal error", {status: 500});
    }
}


export async function GET(
    req: Request,
    { params }: {params: {Id: string }}
){
    try{

    const post = await prisma.post.findMany({
        where: {
            postId: params.Id
        }
    })

    return NextResponse.json(post);
    } catch (error) {

    console.log('[USER_GET]', error);
    return new NextResponse("Internal error", {status: 500});
    }
}