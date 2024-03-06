"use client"
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ROUTES } from "@/config/routes";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import UserAvatar from "./user-avatar";

export type UserType = {
    id: string;
    name: string;
    email: string;
    avatar: string;
    backgroundAvatar: string;
};

export interface propsUser {
    user: UserType[];
}

export const MainNav: React.FC<propsUser> = ({user}) => {
    const [isMounted, setIsMounted] = useState(false);

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
            {ROUTES.map(({label , path}) => (
                <Link
                    key={path}
                    href={path}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-black",
                        // active ? "text-black" : "text-neutral-500"
                    )}
                >
                    {label}
                </Link>
            ))}
            {localStorage.getItem("IsRegister") ?
                <UserAvatar user = {user}/>
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