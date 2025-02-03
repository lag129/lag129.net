import ReactMarkdown from "react-markdown";
import { GalleryCard } from "../ui/GalleryCard";
import remarkGfm from "remark-gfm";
import { Card } from "../ui/Card";

export const GalleryView = () => {
  return (
    <Card>
      <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown">
        {"## Gallery"}
      </ReactMarkdown>
      <div className="grid grid-cols-4 gap-2">
        <GalleryCard imgUrl="/img/IMG_7509.webp" />
        <GalleryCard imgUrl="/img/IMG_7512.webp" />
        <GalleryCard imgUrl="/img/IMG_7530.webp" />
        <GalleryCard imgUrl="/img/IMG_7690.webp" />
        <GalleryCard imgUrl="/img/IMG_7724.webp" />
        <GalleryCard imgUrl="/img/IMG_7744.webp" />
      </div>
    </Card>
  );
};
