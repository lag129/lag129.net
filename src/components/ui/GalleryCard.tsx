// import { useEffect, useState } from "react";
import Image from "next/image";

interface GalleryCardProps {
  imgUrl: string;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ imgUrl }) => {
  // const [imageUrl, setImageUrl] = useState("");
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetchImage().then((newImage) => {
  //     setImageUrl(newImage.url);
  //     setLoading(false);
  //   });
  // }, []);

  return (
    <div className="relative aspect-square">
      {/* {loading || ( */}
      <Image src={imgUrl} alt="Gallery Image" fill style={{ objectFit: "cover" }} priority={true} className="rounded-2xl" />
      {/* )} */}
    </div>
  );
};

// type Image = {
//   url: string;
// };

// const fetchImage = async (): Promise<Image> => {
//   const res = await fetch("https://api.thecatapi.com/v1/images/search");
//   const images = await res.json();
//   console.log(images);
//   return images[0];
// };
