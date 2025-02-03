import { Footer } from "@/components/layouts/Footer";
import { GalleryView } from "@/components/layouts/GalleryView";
import { Header } from "@/components/layouts/Header";
import { ProfileView } from "@/components/layouts/ProfileView";

export default function Home() {
  return (
    <div className="flex flex-wrap">
      <aside className="w-1/4 p-8">
        <ProfileView />
        <div className="pt-8"></div>
        <Footer />
      </aside>
      <div className="w-3/4 pt-8 pr-8">
        <Header />
        <GalleryView />
      </div>
    </div>
  );
}
