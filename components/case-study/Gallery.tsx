import { CaseStudy } from "@/types/caseStudy";
import Image from "next/image";
interface GalleryProps {
  images: CaseStudy["gallery"]
}
function Gallery({ images }: GalleryProps) {
  return (
    <div className="cs-card">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {images.map((image) => (
          <div key={image.src} className={image.full ? "md:col-span-2" : ""}>
            <Image
              src={image.src}
              alt=""
              width={1200}
              height={800}
              className="cs-gallery-image aspect-[3/2] "
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
