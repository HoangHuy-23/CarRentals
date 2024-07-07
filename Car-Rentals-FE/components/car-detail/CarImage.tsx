import { Car, carImage } from "@/types";
import { AspectRatio } from "../ui/aspect-ratio";
import { useEffect, useState } from "react";

type Props = {
  data: Car | undefined;
  isLoading: boolean;
  isError: boolean;
};

export default function CarImage({ data, isLoading, isError }: Props) {
  const [listImage, setListImage] = useState<carImage[]>([]);
  const [image, setImage] = useState<carImage | undefined>(listImage?.[0]);

  useEffect(() => {
    if (data?.carImages?.length) {
      setListImage(data.carImages);
      setImage(data.carImages[0]);
    }
  }, [data]);

  const handleChangeImage = (index: number) => {
    if (listImage && index < listImage.length && index >= 0) {
      const updatedListImage = [...listImage];
      [updatedListImage[0], updatedListImage[index]] = [
        updatedListImage[index],
        updatedListImage[0],
      ];
      setListImage(updatedListImage);
      setImage(updatedListImage[0]);
    }
  };
  return (
    <div className="grid md:grid-cols-[4fr_2fr] gap-4">
      <AspectRatio ratio={10 / 6} className="">
        <img
          src={listImage?.at(0)?.urlImage}
          alt=""
          className="rounded-md w-full h-full object-cover"
          onClick={() => handleChangeImage(0)}
        />
      </AspectRatio>
      <div className="md:grid grid-cols-1 gap-4 hidden">
        <AspectRatio ratio={12 / 5} className="">
          <img
            src={listImage?.at(1)?.urlImage}
            alt=""
            className="rounded-md w-full h-full object-cover"
            onClick={() => handleChangeImage(1)}
          />
        </AspectRatio>
        <AspectRatio ratio={12 / 5} className="">
          <img
            src={listImage?.at(2)?.urlImage}
            alt=""
            className="rounded-md w-full h-full object-cover"
            onClick={() => handleChangeImage(2)}
          />
        </AspectRatio>
        <AspectRatio ratio={12 / 5} className="">
          <img
            src={listImage?.at(3)?.urlImage}
            alt=""
            className="rounded-md w-full h-full object-cover"
            onClick={() => handleChangeImage(3)}
          />
        </AspectRatio>
      </div>
    </div>
  );
}
