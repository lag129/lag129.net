import { GalleryCard } from "@/components/ui/GalleryCard";
import { Card } from "@/components/ui/Card";
import { supabase } from "@/utils/supabase";
import { useEffect, useState } from "react";

export const GalleryView = () => {
  const [images, setImages] = useState<string[]>([]);

  const getImages = async () => {
    const { data: files, error } = await supabase.storage.from("images").list();

    if (error) {
      console.error("Error fetching images:", error);
      return;
    }

    const imageUrls = files
      .map((file) => {
        const { data } = supabase.storage.from("images").getPublicUrl(file.name);
        return data.publicUrl;
      })
      .reverse();

    setImages(imageUrls);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <Card>
      <div className="mb-4 border-b pb-2 text-2xl font-semibold leading-tight">Gallery</div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((imageUrl, index) => (
          <div key={index}>
            <GalleryCard imgUrl={imageUrl} />
          </div>
        ))}
      </div>
    </Card>
  );
};
