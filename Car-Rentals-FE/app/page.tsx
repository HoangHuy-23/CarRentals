import Image from "next/image";
import landingImage from "../public/landing1.png";
import appDownloadImage from "../public/appDownload.png";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar/SearchBar";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />
      <div className="container mx-auto flex-1 py-10">
        <div className="flex flex-col gap-12">
          {/* Search */}
          <SearchBar />
          <div className="grid md:grid-cols-2 gap-5">
            <Image src={landingImage} alt="" className="rounded-xl" />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <span className="font-bold text-3xl tracking-tighter">
                Thuê xe thậm chí còn nhanh hơn!
              </span>
              <span>
                Tải xuống ứng dụng CarRentals để đặt hàng nhanh hơn và đề xuất
                được cá nhân hóa
              </span>
              <Image src={appDownloadImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
