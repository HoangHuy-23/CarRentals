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
import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useAuthContext } from "@/app/contexts/authContext";
import { User } from "@/types";
import { useUpdateUser } from "@/app/hooks/useUser";

export function DialogEditAccount() {
  const { user } = useAuthContext();
  const mutation = useUpdateUser();
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(user?.dob);
  const [username, setUsername] = useState<string | undefined>(
    user?.fullName || "user"
  );
  const [gender, setGender] = useState<boolean | undefined>(user?.gender);

  useEffect(() => {
    if (isOpen) {
      setDate(user?.dob);
      setUsername(user?.fullName);
      setGender(user?.gender);
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
        dob: date || new Date(),
        gender: gender || false,
      };
      mutation.mutate(req);
      setIsOpen(false);
    } else {
      console.error("User id is undefined");
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      const newDate = new Date(value);
      setDate(newDate);
    } else {
      setDate(undefined);
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
          <DialogTitle>Edit profile</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-6 items-center gap-4">
            <Label htmlFor="name" className="text-left col-span-2">
              User name
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
              Date of birth
            </Label>
            <Input
              type="date"
              value={date?.toString()}
              onChange={handleDateChange}
              defaultValue={date?.toString()}
              className="col-span-4 block"
            />
          </div>
          <div className="grid grid-cols-6 items-center gap-4">
            <Label htmlFor="username" className="text-left col-span-2">
              Gender
            </Label>
            <RadioGroup
              defaultValue={gender ? "male" : "female"}
              className="col-span-4 flex flex-row justify-around"
              onValueChange={handleGenderChange}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="r1" />
                <Label htmlFor="r1">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="r2" />
                <Label htmlFor="r2">Female</Label>
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
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
