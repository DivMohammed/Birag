"use client"

import { useState ,useEffect} from "react";
import * as z  from "zod";
import axios from "axios"
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Link from "next/link";
import { redirect, useParams, useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";
import { Icons } from "@/config/icons";
import { useCookies } from 'next-client-cookies';


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { buttonVariants } from '@/components/ui/button'
import Container from "@/components/ui/container";
import { error } from "console";





const message = "هذا الحقل فارغ!"
const formSchema = z.object({
    email: z.string().min(1, message),
    password: z.coerce.string().min(8, "يجب أن تكون كلمة السر 8 خانات أو أكثر"),
});


type ProductFormValues = z.infer<typeof formSchema>;


export const FormSignIn = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const cookies = useCookies();



  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
        defaultValues:{
            email: '',
            password: '',
        }
    });

const onSubmit = (data: ProductFormValues) => {
    const validateEmail = async () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (emailRegex.test(data.email)) {
            try {
                setLoading(true)
                await axios.post('/api/login', data)
                .then((res) => {
                    toast.success("تم تسجيلك")
                    // localStorage.setItem("IsRegister", res.data.id);
                    cookies.set('IsRegister', res.data.id)
                    router.push(`/${res.data.id}`)
                }).catch((error) => {
                    toast.error("هناك خطأ ما")
                    console.log(error)
                    console.log(data)
                })
            } catch (error) {
                toast.error("Something went wrong.")
            } finally {
                setLoading(false)
            }
        }
    };
    validateEmail()
}

  return (
  <>

<div className="container">
  <div className="md:container flex flex-wrap items-center justify-center gap-6 bg-[#DDEFFF] p-5 rounded-md">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                <div className="grid gap-4 items-end lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>البريد الألكتروني</FormLabel>
                                <FormControl>
                                    <Input type="text" disabled={loading} placeholder="البريد الألكتروني" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>كلمة المرور</FormLabel>
                                <FormControl>
                                    <Input type="password" disabled={loading} placeholder="كلمة المرور" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button disabled={loading} className="" type="submit">
                      تسجيل دخول
                    </Button>
                </div>
            </form>
        </Form>
  </div>
  </div>
  </>
  );
};