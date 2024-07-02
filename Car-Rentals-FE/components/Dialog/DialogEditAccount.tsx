import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarIcon, Pencil } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Calendar } from "../ui/calendar";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useAuthContext } from "@/app/contexts/authContext";
import { useMutation } from "@tanstack/react-query";
import { updateUser } from "@/app/actions/UserAction";
import { User } from "@/types";

export function DialogEditAccount() {
  const { user, refetch } = useAuthContext();

  const [date, setDate] = React.useState<Date | undefined>(user?.dob);
  const [username, setUsername] = useState(user?.fullName);
  const [gender, setGender] = useState(user?.gender);

  const mutation = useMutation({ mutationFn: updateUser });

  const handleGenderChange = (value: string) => {
    setGender(value === "male");
  };

  const handleSave = () => {};

  return (
    <Dialog>
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
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "col-span-4 justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
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
