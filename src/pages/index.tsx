import { Footer } from "@/components/layouts/Footer";
import { GalleryView } from "@/components/layouts/GalleryView";
import { Header } from "@/components/layouts/Header";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

const markdownString = `
# lag129
`;

export default function Home() {
  return (
    <div className="flex flex-wrap">
      <aside className="w-1/4 p-8">
        <div className="rounded-xl p-8 bg-[#fff8f7]">
          <Image
            src="/img/profile.jpg"
            alt="Profile Image"
            width={500}
            height={500}
            className="rounded-full"
          />
          <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown">
            {markdownString}
          </ReactMarkdown>
          <Footer />
        </div>
      </aside>
      <div className="w-3/4 pt-8 pr-8">
        <Header />
        <GalleryView />
      </div>
    </div>
  );
}
