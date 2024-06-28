import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function page() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">Change password</h1>
      <p className="text-xl">
        Please input your current password to change password
      </p>
      <form
        action=""
        method="post"
        className="flex flex-col gap-6 bg-white rounded-lg px-4 py-4"
      >
        <h1 className="text-3xl font-semibold">Input password</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="cur">Current password</label>
          <Input id="cur" type="password" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="new">New password</label>
          <Input id="new" type="password" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="identify">Identify password</label>
          <Input id="identify" type="password" />
        </div>
        <div className="flex items-center justify-end">
          <Button type="submit" className="bg-blue-500 hover:bg-blue-300">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
