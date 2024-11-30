import { Navbar } from "@/components/navbar";
import { redirect } from "next/navigation";

import { getCookies } from 'next-client-cookies/server';
import prisma from "@/lib/prismadb";


export default async function SetupLayout({
    children
}: {
    children: React.ReactNode;
}) {

    const cookies = getCookies().get('IsRegister');
    // const { userId } = auth();


    // if (!userId){
    //     redirect('/sign-in')
    // }

if(cookies){
    const user = await prisma.user.findFirst({
        where: {
            id: cookies,
        }
    })

    if (user){
        redirect(`/${user.id}`)
    }
}


    // if (!cookies){
    //     redirect(`/`)
    // }



    if (cookies){
        console.log(cookies)
    }

    return (
        <>
        <Navbar/>
        {children}
        </>
    )
}