import { urlFor } from "@/sanity/imageUrlBuilder";
import { Gallery } from "@/sanity/types";

export default function GallerySection({ gallery }: { gallery: Gallery }) {
  console.log(gallery);

  return (
    <>
      <div className="bg-[url('/img/gallery-bg.png')] bg-cover w-full">
        <div className="w-full h-full flex justify-center items-center p-4">
          {/* The white background with opacity */}
          <div className="bg-white bg-opacity-15 rounded-full p-[1vw] m-[3vw]">
            <h1 className="text-black font-bold text-xl md:text-2xl lg:text-5xl">
              Galerie
            </h1>
          </div>
        </div>
        {gallery.images?.map((image) => (
          <img src={urlFor(image).url()} alt="" />
        ))}
      </div>
    </>
  );
}
