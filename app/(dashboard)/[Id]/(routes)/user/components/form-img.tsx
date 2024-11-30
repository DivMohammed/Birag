"use client"

import * as z  from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import axios from "axios";

import { useParams, useRouter } from "next/navigation";


import { User } from "@prisma/client"
import BackgroundImg from "@/components/background-img";
import { UserProfile } from "@/components/avatar-img";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form";

const formSchema = z.object({
    backgroundAvatar: z.string().min(1),
    avatar: z.string().min(1),
});

type ImgFormValues = z.infer<typeof formSchema>;

interface FormImgProps {
    data: User | null
}

const FormImg: React.FC<FormImgProps> = ({
    data
}) => {
    const params = useParams();

    const form = useForm<ImgFormValues>({
        resolver: zodResolver(formSchema),
            defaultValues: data || {
                backgroundAvatar: '',
                avatar: '',
            }
        });

    // const onSubmit = async (data: ImgFormValues) => {
    //     try {
    //         toast.success("done")
    //         await axios.patch(`/api/user/${params.Id}`, data);
    //     } catch (error) {
    //         toast.error("Something went wrong.")
    //     } finally {
    //         console.log(data)
    //         console.log(params.Id)
    //     }
    // }

    // const onDelete = async () => {
    //     try {
    //         await axios.delete(`/api/user/${params.Id}`)
    //         // router.push(`/${params.storeId}/billboards`);
    //         toast.success("img has been deleted.")
    //         // router.refresh();
    //     } catch (error) {
    //         toast.error("not ok")
    //     } finally {
    //     }
    // }
  return (
        <>
        <Form {...form}>
            <form className="w-full">
                    <FormField
                        control={form.control}
                        name="backgroundAvatar"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <>
                                    <BackgroundImg 
                                        adjustable={false}
                                        value={field.value? field.value :data?.backgroundAvatar}
                                    />
                                    </>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                <div className="flex justify-center">
                    <FormField
                        control={form.control}
                        name="avatar"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <>
                                    <UserProfile 
                                        info={field.value?data?.info :data?.info}
                                        adjustable={false}
                                        value={field.value?field.value :data?.avatar}
                                        width="100"
                                        height="100"
                                        state={true}
                                    />
                                    </>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                {/* <Button className="ml-auto" type="submit">
                    do
                </Button> */}
            </form>
        </Form>
        </>
  )
}

export default FormImg