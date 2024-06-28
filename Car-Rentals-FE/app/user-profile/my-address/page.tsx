import { Home, Pencil } from "lucide-react";

export default function page() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">My address</h1>
      <div className="bg-white rounded-xl flex flex-col px-5 py-5 gap-8">
        {/* header */}
        <div className="flex justify-between items-center">
          <span className="text-2xl font-semibold">Saved Address</span>
          <div className="border rounded-md flex px-3 py-3 items-end hover:bg-slate-100 hover:shadow-md">
            <span className="text-xl font-normal">Add new address</span>
          </div>
        </div>
        {/* address current */}
        <div className="flex border rounded-lg justify-between items-center px-2">
          <div className="flex justify-center items-center">
            <Home className="mr-2" />
            <div className="flex flex-col justify-center py-2">
              <h1 className="font-semibold">Home</h1>
              <p className="text-gray-600 text-sm">
                27/A, 4 district, Go Vap ward, Ho Chi Minh city, Vietnam
              </p>
            </div>
          </div>
          <Pencil />
        </div>

        <div className="flex border rounded-lg justify-between items-center px-2">
          <div className="flex justify-center items-center">
            <Home className="mr-2" />
            <div className="flex flex-col justify-center py-2">
              <h1 className="font-semibold">Home</h1>
              <p className="text-gray-600 text-sm">
                27/A, 4 district, Go Vap ward, Ho Chi Minh city, Vietnam
              </p>
            </div>
          </div>
          <Pencil />
        </div>

        <div className="flex border rounded-lg justify-between items-center px-2">
          <div className="flex justify-center items-center">
            <Home className="mr-2" />
            <div className="flex flex-col justify-center py-2">
              <h1 className="font-semibold">Home</h1>
              <p className="text-gray-600 text-sm">
                27/A, 4 district, Go Vap ward, Ho Chi Minh city, Vietnam
              </p>
            </div>
          </div>
          <Pencil />
        </div>
      </div>
    </div>
  );
}
