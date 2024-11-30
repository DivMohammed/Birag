import React from 'react'

import { useState, useEffect } from "react"
import { ImagePlus } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary"

import { Button } from "@/components/ui/button";

interface AddImgProps {
    disabled?: boolean;
    onChange?: (value: string | null | undefined) => void | any;
    // onRemove?: (value: string | null | undefined) => void;
    // value: string | null | undefined;
}

const AddImg:React.FC<AddImgProps> = ({
    disabled,
    onChange,
    // onRemove,
    // value
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
  )
}

export default AddImg