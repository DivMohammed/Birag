import { usePathname as pathname } from "next/navigation";

// const pathname = usePathname()

export const ROUTES = [
    {
        label: "الرئيسية",
        path: "/",
    },
    {
        label: "من نحن",
        path: "#about-us",
    },
    {
        label: "خدماتنا",
        path: "#our-services",
    },
    {
        label: "أنظم الينا",
        path: "#best-real-estate",
    },
    {
        label: "تواصل معنا",
        path: "/listings",
    }
] as const;