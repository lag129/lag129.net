import { Footer } from "@/components/layouts/Footer";
import { GalleryView } from "@/components/layouts/GalleryView";
import { ProfileView } from "@/components/layouts/ProfileView";

export default function Home() {
  return (
    <div className="flex flex-col p-8 lg:flex-row lg:p-12">
      <aside className="pb-8 lg:w-1/4">
        <ProfileView />
      </aside>
      <main className="grid grid-cols-1 gap-8 lg:w-3/4 lg:pl-8">
        <GalleryView />
        <Footer />
      </main>
    </div>
  );
}
