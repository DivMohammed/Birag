"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

import { propsUser } from "./main-nav";

import DEA from '@/public/icondefult.jpg';
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";




const UserAvatar: React.FC<propsUser> = ({user}) => {
    const  [avatarUser, setAvatarUser] = useState("")
    const router = useRouter()
    const params = useParams()

    useEffect(() => {
    // user.map((h)=> setAvatarUser(h.avatar))
    user.filter((userInfo) => userInfo.id === window.localStorage.getItem("IsRegister") && setAvatarUser(userInfo.avatar))
    console.log(params.Id)
    },[])

  return (
  <>
    <Image
        width={50}
        height={50}
        className="object-cover rounded-full size-10"
        alt="image"
        src={!avatarUser? DEA : avatarUser}
        onClick={() => router.push("")}
    />
  </>
  )
}

export default UserAvatar