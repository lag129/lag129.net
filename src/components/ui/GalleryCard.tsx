import Image from "next/image";

interface GalleryCardProps {
  imgUrl: string;
}

export const GalleryCard = ({ imgUrl }: GalleryCardProps) => {
  return (
    <div className="relative aspect-square">
      <Image src={imgUrl} alt="Gallery Image" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority={true} className="rounded-3xl" />
    </div>
  );
};
