"use client"

import * as z  from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import axios from "axios";

import { useParams, useRouter } from "next/navigation";


import { User } from "@prisma/client"
import { Button, buttonVariants } from "./ui/button"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form";

import { cn } from "@/lib/utils"
import { CommandIcon } from "lucide-react"
import { Input } from "./ui/input";
import AddImg from "./add-img";
import Image from "next/image";

const formSchema = z.object({
    text: z.string().min(1),
    imag: z.string().min(1),
});

type PostFormValues = z.infer<typeof formSchema>;

interface AddPostProps extends React.HTMLAttributes<HTMLDivElement> {
    data: User | null
}

const AddPost:React.FC<AddPostProps> = ({
    data,
    ...props
}) => {
    const params = useParams();

    const form = useForm<PostFormValues>({
        resolver: zodResolver(formSchema),
            defaultValues:{
                text: '',
                imag: '',
            }
        });

    const onSubmit = async (post: PostFormValues) => {
        try {
            toast.success("done")
            await axios.post(`/api/post/${params.Id}`, post);
        } catch (error) {
            toast.error("Something went wrong.")
        } finally {
            console.log(post)
            console.log(params.Id)
        }
    }

  return (
    <div {...props}>
    <Dialog>
    <DialogTrigger className={cn(buttonVariants())}>
        <CommandIcon/>
    </DialogTrigger>
    <DialogContent>
        <DialogHeader>
        <DialogTitle>
            type something
        </DialogTitle>
        <DialogDescription>
            any
        </DialogDescription>
        </DialogHeader>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                    <FormField
                        control={form.control}
                        name="text"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <textarea {...field} id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 " placeholder="Write your thoughts here..."></textarea>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                <div className="w-full">
                    <FormField
                        control={form.control}
                        name="imag"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <>
                                    <AddImg
                                    onChange={(url)=>{
                                        field.onChange(url)
                                    }}
                                    />
                                    <Image
                                    width={100}
                                    height={100}
                                    className="object-cover"
                                    alt="image"
                                    src={field.value}
                                    />
                                    </>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button className="ml-auto" type="submit">
                    ارسل
                </Button>
            </form>
        </Form>
    </DialogContent>
    </Dialog>
    </div>
  )
}

export default AddPost