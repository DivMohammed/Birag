import { useState } from "react"
import toast from "react-hot-toast";
import axios from "axios";

import { useParams } from "next/navigation";

import {MessageCircleMore} from "lucide-react";

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "./ui/input";

interface InfoProps {
  info?: String | null
}

const DrawerInfo: React.FC<InfoProps> = ({
  info
}) => {
  const params = useParams();

  const [infoinput, setInfoinput] = useState(info);
  const [loading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    try {
      setIsLoading(true)
      await axios.patch(`/api/user/${params.Id}/info`,{info:infoinput});
      toast.success("تم اضافة الحالة")
    } catch (error) {
        toast.error("هناك خطأ ما")
    } finally {
      setIsLoading(false)
    }
}

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <MessageCircleMore className=" text-[#dbdbdb] size-5 stroke-[3px]"/>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>الحالة</DrawerTitle>
            <DrawerDescription>Set your daily activity</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <div className="flex-1 text-center">
                <div className="text-3xl font-bold tracking-tighter">
                  <Input className="text-wrap" value={infoinput} onChange={(e) => setInfoinput(e.target.value)}></Input>
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  only (60) chart
                </div>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button disabled={loading} onClick={()=> onSubmit()}>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default DrawerInfo