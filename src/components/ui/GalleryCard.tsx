import Image from "next/image";

interface GalleryCardProps {
  imgUrl?: string | null;
}

export const GalleryCard = ({ imgUrl }: GalleryCardProps) => {
  return (
    <div className="relative aspect-square">
      {imgUrl ? <Image src={imgUrl} alt="Gallery Image" fill style={{ objectFit: "cover" }} priority={true} className="rounded-3xl" /> : <div className="rounded-2xl bg-[#000000]" />}
    </div>
  );
};
