import ReactMarkdown from "react-markdown";
import { GalleryCard } from "../ui/GalleryCard";
import remarkGfm from "remark-gfm";

export const GalleryView = () => {
  return (
    <div className="rounded-3xl bg-[#fff8f7] p-8">
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
    </div>
  );
};
