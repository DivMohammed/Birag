import Link from "next/link";

import { cn } from "@/lib/utils";
import { ROUTES } from "@/config/routes";
import { Button } from "./ui/button";


export const MainNav = () => {
    
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
            <Button>
                <Link href="/sign-up">
                تسجيل دخول
                </Link>
            </Button>
        </nav>
    )
}

export default MainNav