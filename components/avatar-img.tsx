"use client"

import { User } from "@prisma/client"

import { useState, useEffect } from "react"
import { Trash , Pencil, MessageCircleMore} from "lucide-react";

import Image from "next/image";
import { CldImage, CldUploadWidget } from "next-cloudinary"

import { Button } from "@/components/ui/button";

import backimage from '@/public/icondefult.jpg'
import DrawerInfo from "./drawer-info";


interface UserProfileProps {
    // data: User | null
    adjustable: boolean;
    disabled?: boolean;
    onChange?: (value: string | null | undefined) => void;
    onRemove?: (value: string | null | undefined) => void;
    value:  string | null | undefined ;
    // value: Exclude<string | null | undefined, void>
    className?: string;
    width: string;
    height: string;
    info?: string | null | undefined;
    state?: boolean
}

export const UserProfile: React.FC<UserProfileProps> = ({
    // data,
    info,
    adjustable,
    disabled,
    onChange,
    onRemove,
    value,
    className,
    width,
    height,
    state
}) => {

  const [isMounted, setIsMounted] = useState(false);


useEffect(() => {
    setIsMounted(true)
}, [])

const onUpload = (result: any) => {
    onChange(result.info.secure_url)
}

if (!isMounted) {
    return null;
}

const rootClassName = className ? `${className}` : '';


return (
    <div>
        <div className="mb-4 flex items-center gap-4">
                <div key={value} className="relative rounded-md overflow-hidden">
                    <div className="z-10 absolute top-2 right-2">
                        {adjustable &&
                        <Button className="h-5 w-5" type="button" onClick={() => onRemove(value)} variant="destructive" size="icon">
                            <Trash className="h-3 w-3" />
                        </Button>
                        } 
                    </div>
                    {value ?
                    <CldImage
                      // fill
                        width={width}
                        height={height}
                        crop="thumb"
                        gravity="face"
                        className={`object-cover rounded-full ${rootClassName} bg-gradient-to-r from-red-400 to-indigo-600`}
                        alt="image"
                    //   src={value? value: backimage}
                        src={value}
                    />
                    :
                    <Image
                    width={width}
                    height={height}
                    className={`object-cover rounded-full ${rootClassName} bg-gradient-to-r from-red-400 to-indigo-600`}
                    src={backimage}
                    alt="image"
                    />
                    }
                    { adjustable &&
                        <div className="z-10 absolute bottom-2 left-2">
                        <CldUploadWidget onUpload={onUpload} uploadPreset="n0vjehw2">
                            {({ open }) => {
                                const onClick = () => {
                                    open();
                                }
                                
                                return (
                                    <Button
                                        type="button"
                                        disabled={disabled}
                                        variant="secondary"
                                        onClick={onClick}
                                        className="h-5 w-5"
                                        size="icon"
                                        >
                                            <Pencil className="h-3 w-3" />
                                    </Button>
                                )
                            }}
                        </CldUploadWidget>
                        </div>
                    }

                    { state &&
                    <div className="z-10 absolute bottom-2 right-1">
                        {/* <Button className="h-5 w-5" type="button" variant="secondary" size="icon"> */}
                            {/* <MessageCircleMore className=" text-[#dbdbdb] size-5 stroke-[3px]" onClick={()=> setOpen(prev=> !prev)} /> */}
                            <DrawerInfo info={info}/>
                        {/* </Button> */}
                    </div>
                    }
                </div>
        </div>
    </div>
)
}