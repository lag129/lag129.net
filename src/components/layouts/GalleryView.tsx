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
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
      </div>
    </Card>
  );
};
