import ProcessBooking from "@/components/booking/ProcessBooking";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-neutral-100 py-12 min-h-[80vh]">
      <div className="container max-w-[800px] bg-white border rounded-md flex flex-col justify-center items-center">
        <ProcessBooking />
        {children}
      </div>
    </section>
  );
}
