"use client"
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { ROUTES } from "@/config/routes";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

import { useCookies } from 'next-client-cookies';
import { UserProfile } from "./avatar-img";
import { Icons } from "@/config/icons";


export type UserType = {
    id: string;
    name: string;
    email: string;
    avatar: string;
    backgroundAvatar: string;
    images: any;
};

export interface propsUser {
    // user: UserType[];
    user: {
        avatar: string | null;
        backgroundAvatar: string | null;
    } | null;
}

export const MainNav: React.FC<propsUser> = ({user}) => {
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();
    const params = useParams();
    const cookie = useCookies();


    
    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted){
        return null
    }



    return (
        <nav
            className="mx-6 flex items-center space-x-4 lg:space-x-6"
        >
            {ROUTES.map(({Label , path}) => (
                <Link
                    key={path}
                    href={path}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-black",
                        // active ? "text-black" : "text-neutral-500"
                    )}
                >
                    {<Label/>}
                </Link>
            ))}
            {cookie.get('IsRegister')?
                <>
                <Link href={`/${cookie.get('IsRegister')}/profile`}>
                <UserProfile 
                    width="50"
                    height="50"
                    adjustable={false}
                    value={user?.avatar}
                    // className="w-20 h-20"
                />
                </Link>
                <Button onClick={()=> {
                cookie.remove("IsRegister") 
                router.push("/")}}>تسجيل خروج</Button>
                </>
            :
            <Button>
                <Link href="/sign-up">
                تسجيل دخول
                </Link>
            </Button>
            }
        </nav>
    )
}

export default MainNav