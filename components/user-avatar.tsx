"use client"
import axios from "axios";
import { useState, useEffect } from "react";


import DEA from '@/public/icondefult.jpg';
import Image from "next/image";
import { propsUser } from "./main-nav";




const UserAvatar: React.FC<propsUser> = ({user}) => {
    const  [avatar, setAvatar] = useState("")

    useEffect(() => {
    user.filter((user: any) => user.id === window.localStorage.getItem("IsRegister")) && setAvatar(user.avatar)
    },[user])

  return (
    <>
        <Image 
            className="object-cover rounded-full size-10"
            alt="image"
            src={!avatar? DEA : avatar}
        />
    </>
  )
}

export default UserAvatar