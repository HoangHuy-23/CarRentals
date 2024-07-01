import ProfileNav from "@/components/ProfileNav";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-neutral-100 py-12">
      <div className="container grid grid-cols-1 md:grid-cols-[2fr_5fr]">
        <ProfileNav />
        {children}
      </div>
    </section>
  );
}
