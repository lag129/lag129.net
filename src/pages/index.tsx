import { Footer } from "@/components/layouts/Footer";
import { GalleryView } from "@/components/layouts/GalleryView";
import { Header } from "@/components/layouts/Header";
import { ProfileView } from "@/components/layouts/ProfileView";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col xl:flex-row">
      <aside className="w-full p-8 xl:w-1/4 xl:p-10">
        <ProfileView />
      </aside>
      <main className="w-full px-8 pb-8 xl:w-3/4 xl:pr-10 xl:pt-10">
        <Header />
        <GalleryView />
        <div className="pt-8">
          <Footer />
        </div>
      </main>
    </div>
  );
}
