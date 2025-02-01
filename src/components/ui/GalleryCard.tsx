import { useEffect, useState } from "react";
import Image from "next/image";

export const GalleryCard = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImage().then((newImage) => {
      setImageUrl(newImage.url);
      setLoading(false);
    });
  }, []);

  return (
    <div className="relative w-[200px] h-[200px]">
      {loading || (
        <Image
          src={imageUrl}
          alt="Gallery Image"
          fill
          sizes="(max-width: 768px) 100vw, 200px"
          style={{ objectFit: "cover" }}
          priority={true}
          className="rounded-2xl"
        />
      )}
    </div>
  );
};

type Image = {
  url: string;
};

const fetchImage = async (): Promise<Image> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const images = await res.json();
  console.log(images);
  return images[0];
};
