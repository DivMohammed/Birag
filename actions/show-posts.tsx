"use client"
import { Post, User } from '@prisma/client'
import React from 'react'
import { UserProfile } from '@/components/avatar-img'
import Container from '@/components/ui/container'
import Image from 'next/image'
import Link from 'next/link'
// import { url } from 'inspector'

interface ShowPostsProps {
    posts?: Post[] | null
    user?: User | null
}

const ShowPosts:React.FC<ShowPostsProps> = ({
    posts,
    user
}) => {
  return (
      <>
      <Container>
        <div style={{width: "400px" , margin: "auto"}}>
      {posts?.map((post) => (
        <div key={post.id} className=' border-b-[1px] border-neutral-800 p-5 cursor-pointer hover:bg-neutral-900 transition'>
        <div className='flex flex-row items-start gap-3'>
        <UserProfile 
            width="50"
            height="50"
            adjustable={false}
            value={user?.avatar}
            />
        <div>
            <div className='flex flex-row items-center gap-2'>
                <p className='text-black font-semibold cursor-pointer hover:underline'>{user?.name}</p>
                {/* <span className=' text-neutral-500 cursor-pointer hover:underline hidden md:block'>@{user?.name}</span> */}
                {/* <span className=' text-neutral-500 text-sm'>{user?.createdAt.getHours.length}</span> */}
            </div>
            <div className=' text-black mt-1 break-all break-words'>
                {post.text}
            </div>
            <div className='aspect-[4/2] relative h-full w-full sm:rounded-lg overflow-hidden'>
            <Image
            width={200}
            height={200}
            className="object-cover object-center"
            src={post?.url}
            alt="img"
            />
        </div>
        </div>
        </div>
    </div>
    )).reverse()}
    </div>
    </Container>
    </>
  )
}

{/* <hr className="mt-10" /> */}

{/* <div className='aspect-[4/2] relative h-full w-full sm:rounded-lg overflow-hidden'>
            <Image
            fill
            className="object-cover object-center"
            src={post?.url}
            alt="img"
            /> */}


export default ShowPosts