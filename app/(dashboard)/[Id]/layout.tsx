import { redirect } from "next/navigation";
import { getCookies } from 'next-client-cookies/server';

import prisma from "@/lib/prismadb";
import {Navbar} from "@/components/navbar";



export default async function DashboardLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { Id: string };
}) {

    const cookies = getCookies().get('IsRegister');
    // const { userId } = auth();


    // if (!userId){
    //     redirect('/sign-in')
    // }


    const user = await prisma.user.findFirst({
        where: {
            id: cookies,
        }
    });

    // if (params.Id !== cookies){
    //     redirect(`/${cookies}`)
    // }


    // if (cookies){
    //     console.log(cookies.get('IsRegister'))
    // }

return (
    <>
        <Navbar />
        {children}
    </>
)
}