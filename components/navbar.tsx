"use server"
import Link from "next/link"
import MainNav from "@/components/main-nav"
import Container from "./ui/container"
import { Icons } from "@/config/icons"
import React from "react"
import prisma from "@/lib/prismadb";
import { UserProfile } from "./avatar-img"

import { getCookies } from 'next-client-cookies/server';


export const Navbar = async () => {

    const cookies = getCookies().get('IsRegister');

    const user = await prisma.user.findFirst({
        where: {
            id: cookies,
        }
    });

    // const formattedUser: UserType[] = user.map((item: any) => ({
    //     id: item.id,
    //     name: item.name,
    //     email: item.email,
    //     avatar: item.avatar,
    //     backgroundAvatar: item.backgroundAvatar,
    // }));


  return (
    <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        {/* <Icons.Logo/> */}
                    </Link>
                    <MainNav user={user}/>
                </div>
            </Container>
        </div>
  )
}