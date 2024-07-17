import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarIcon, Pencil } from "lucide-react";
import React, { ChangeEvent, useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useAuthContext } from "@/app/contexts/authContext";
import { User } from "@/types";
import { useUpdateUser } from "@/app/hooks/useUser";
import { formatDayToString } from "@/utils";

export function DialogEditAccount() {
  const { user } = useAuthContext();
  const { mutate, isPending, isError } = useUpdateUser();
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<string>(user?.dob as unknown as string);
  const [username, setUsername] = useState<string | undefined>(
    user?.fullName || "user"
  );
  const [gender, setGender] = useState<boolean | undefined>(user?.gender);

  useEffect(() => {
    if (isOpen) {
      setDate((user?.dob as unknown as string) || "");
      setUsername(user?.fullName || "");
      setGender(user?.gender || true);
    }
  }, [isOpen, user]);

  const handleGenderChange = (value: string) => {
    setGender(value === "male");
  };

  const handleSave = () => {
    if (user && user.id !== undefined) {
      const req: User = {
        ...user,
        fullName: username || "",
        dob: new Date(date) || new Date(),
        gender: gender || false,
      };
      mutate(req);
      setIsOpen(false);
    } else {
      console.error("User id is undefined");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="ml-2 rounded-full px-2 py-2">
          <Pencil width={16} height={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Chỉnh sửa thông tin</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-6 items-center gap-4">
            <Label htmlFor="name" className="text-left col-span-2">
              Tên người người
            </Label>
            <Input
              id="name"
              defaultValue={username}
              className="col-span-4"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="grid grid-cols-6 items-center gap-4">
            <Label htmlFor="dob" className="text-left col-span-2">
              Ngày sinh
            </Label>
            <Input
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              className="col-span-4 block"
            />
          </div>
          <div className="grid grid-cols-6 items-center gap-4">
            <Label htmlFor="username" className="text-left col-span-2">
              Giới tính
            </Label>
            <RadioGroup
              defaultValue={gender ? "male" : "female"}
              className="col-span-4 flex flex-row justify-around"
              onValueChange={handleGenderChange}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="r1" />
                <Label htmlFor="r1">Nam</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="r2" />
                <Label htmlFor="r2">Nữ</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <DialogFooter>
          <Button
            type="button"
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-300"
          >
            Lưu
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
