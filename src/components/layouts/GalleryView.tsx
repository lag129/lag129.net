import { GalleryCard } from "../ui/GalleryCard";
import { Card } from "../ui/Card";

export const GalleryView = () => {
  return (
    <Card>
      <div className="mb-4 border-b pb-2 text-2xl font-semibold leading-tight">
        Gallery
      </div>
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        <div><GalleryCard imgUrl="/img/IMG_7509.webp" /></div>
        <div><GalleryCard imgUrl="/img/IMG_7512.webp" /></div>
        <div><GalleryCard imgUrl="/img/IMG_7530.webp" /></div>
        <div><GalleryCard imgUrl="/img/IMG_7690.webp" /></div>
        <div><GalleryCard imgUrl="/img/IMG_7724.webp" /></div>
        <div><GalleryCard imgUrl="/img/IMG_7744.webp" /></div>
      </div>
    </Card>
  );
};
