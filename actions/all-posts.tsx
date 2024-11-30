"use client"
import { Post, User } from '@prisma/client'
import React from 'react'
import { UserProfile } from '@/components/avatar-img'
import Container from '@/components/ui/container'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { getTimeDifference } from './time'

interface AllPostsProps {
    posts?: Post[] | null
    users?: User[] | null
}
const AllPosts:React.FC<AllPostsProps> = ({
    posts,
    users
}) => {
    const router = useRouter()

    const filtered = users?.filter((user) => {
        // Check if there exists a user with a matching id
        return posts?.some((post) => post.postId === user.id);
    });

  return (
    // <Container>
    <div style={{maxWidth: "400px" , margin: "auto"}} className='border rounded-md' >
      {posts?.map((post) => (
        <div key={post.id} className=' border-b-[1px] border-neutral-800 p-5 cursor-pointer hover:bg-neutral-900 transition'>
        <div className='flex flex-row items-start gap-2'>
        {filtered?.map((n) => (
            n.id === post.postId &&
            <UserProfile
                key={n.id} 
                width="50"
                height="50"
                adjustable={false}
                value={n.avatar}
            />
        ))
        }

        <div>
                {filtered?.map((n) => (
                    n.id === post.postId &&
                    <p key={n.id} onClick={()=> {router.push(`/${n.id}/user`)}}  className='text-black font-semibold cursor-pointer hover:underline'>{n?.name}</p>
                ))
            }
        </div>

        <div>
                {filtered?.map((n) => (
                    n.id === post.postId &&
                    <span key={n.id} className=' text-neutral-500 text-sm'>{getTimeDifference(post.createdAt)}</span>
                ))
            }
        </div>

        </div>
        <div>
            <div className=' text-black mt-1 break-all break-words'>
                {post.text}
            </div>
            <div className='aspect-[4/2] relative h-full w-full sm:rounded-lg overflow-hidden'>
            <Image
            width={400}
            height={200}
            className="object-cover object-center"
            src={post?.url}
            alt="img"
            />
            </div>
        </div>
        </div>
    )).reverse()}
    </div>
    // </Container>
  )
}

export default AllPosts