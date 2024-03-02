"use client"

import { useState ,useEffect} from "react";
import * as z  from "zod";
import axios from "axios"
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";
import { Icons } from "@/config/icons";

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





const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1),
  password: z.coerce.string().min(1),
  passwordConfirm: z.coerce.string().min(1),
});


type ProductFormValues = z.infer<typeof formSchema>;


export const FormRegister = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
        defaultValues:{
            name: '',
            email: '',
            password: '',
            passwordConfirm: '',
        }
    });

const onSubmit = (data: ProductFormValues) => {
    try {
        axios.post('/api/register', data)
        .then(() => {
            toast.success("تم تسجيلك")
        }).catch((error) => {
            toast.error("هناك خطأ ما")
            console.log(error)
        }).finally(() => {
            // setLoading(true)
        })
    } catch (error) {
        toast.error("Something went wrong.")
    } finally {
        setLoading(false)
    }
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
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>الأسم</FormLabel>
                                <FormControl>
                                    <Input type="text" disabled={loading} placeholder="الأسم" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>البريد الألكتروني</FormLabel>
                                <FormControl>
                                    <Input type="email" disabled={loading} placeholder="البريد الألكتروني" {...field} />
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
                    <FormField
                        control={form.control}
                        name="passwordConfirm"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>أعد كلمة المرور</FormLabel>
                                <FormControl>
                                    <Input type="password" disabled={loading} placeholder="أعد كلمة المرور" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button disabled={loading} className="" type="submit">
                      تسجيل دخول جديد
                    </Button>
                </div>
            </form>
        </Form>
  </div>
  </div>
  </>
  );
};