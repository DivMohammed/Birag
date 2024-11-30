"use client"

import { useState, useEffect } from "react"
import { ImagePlus, Trash } from "lucide-react";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary"



import { Button } from "@/components/ui/button";

import backimage from '@/public/default.jpg'



interface imageUploadProps {
    adjustable: boolean;
    disabled?: boolean;
    onChange: (value: string | null | undefined) => void | any;
    onRemove: (value: string | null | undefined) => void;
    value: string | null | undefined;
}

const BackgroundImg: React.FC<imageUploadProps> = ({
    adjustable,
    disabled,
    onChange,
    onRemove,
    value,
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

    return (
        <div>
            <div className="mb-4 flex items-center gap-4">
                    <div key={value} className="relative w-full h-[200px] rounded-md overflow-hidden">
                        <div className="z-10 absolute top-2 right-2">
                            {adjustable &&
                            <Button type="button" onClick={() => onRemove(value)} variant="destructive" size="icon">
                                <Trash className="h-4 w-4" />
                            </Button>
                            } 
                        </div>
                        <Image 
                            fill
                            className="object-cover"
                            alt="image"
                            src={value? value : backimage}/>
                        <div className="z-10 absolute top-2 left-2">
                        {  adjustable &&
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
                                        >
                                            <ImagePlus className="h-4 w-4" />
                                    </Button>
                                )
                            }}
                        </CldUploadWidget>
                        }
                        </div>
                    </div>
            </div>
            {/* {  adjustable &&
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
                            >
                                <ImagePlus className="h-4 w-4 mr-2" />
                                Upload an Image
                        </Button>
                    )
                }}
            </CldUploadWidget>
            } */}
        </div>
    )
}

export default BackgroundImg