import { Footer } from "@/components/layouts/Footer";
import { GalleryView } from "@/components/layouts/GalleryView";
import { Header } from "@/components/layouts/Header";
import { ProfileView } from "@/components/layouts/ProfileView";

export default function Home() {
  return (
    <div className="flex flex-col xl:flex-row min-h-screen">
      <aside className="w-full xl:w-1/4 p-8 xl:p-10">
        <ProfileView />
      </aside>
      <main className="w-full xl:w-3/4 pr-8 pb-8 pl-8 xl:pt-10 xl:pr-10">
        <Header />
        <GalleryView />
        <div className="pt-8">
          <Footer />
        </div>
      </main>
    </div>
  );
}