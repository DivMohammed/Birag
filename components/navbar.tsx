
import Link from "next/link"
import MainNav from "@/components/main-nav"
import Container from "./ui/container"
import { Icons } from "@/config/icons"
import React from "react"
import prisma from "@/lib/prismadb";



export const Navbar = async () => {

    const user = await prisma.user.findMany({
        where: {}
    })

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