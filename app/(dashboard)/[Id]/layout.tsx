import { redirect } from "next/navigation";

import prisma from "@/lib/prismadb";
import {Navbar} from "@/components/navbar";



export default async function DashboardLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: { Id: string }
}) {

    // const { userId } = auth();


    // if (!userId){
    //     redirect('/sign-in')
    // }


    // const store = await prisma.user.findFirst({
    //     where: {
    //         id: params.storeId,
    //         userId
    //     }
    // });

    // if (!store){
    //     redirect('/');
    // }

return (
    <>
        <Navbar />
        {children}
    </>
)
}