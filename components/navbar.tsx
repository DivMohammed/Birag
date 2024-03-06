"use server"
import Link from "next/link"
import MainNav, { UserType } from "@/components/main-nav"
import Container from "./ui/container"
import { Icons } from "@/config/icons"
import React from "react"
import prisma from "@/lib/prismadb";


export const Navbar = async () => {

    const user = await prisma.user.findMany({
        where: {}
    })

    const formattedUser: UserType[] = user.map((item: any) => ({
        id: item.id,
        name: item.name,
        email: item.email,
        avatar: item.avatar,
        backgroundAvatar: item.backgroundAvatar,
    }));

  return (
    <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        {/* <Icons.Logo/> */}
                    </Link>
                    <MainNav user={formattedUser}/>
                </div>
            </Container>
        </div>
  )
}