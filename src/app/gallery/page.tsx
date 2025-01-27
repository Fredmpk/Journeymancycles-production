// export default function GalleryPage() {
//   return <div className="pt-[11vw] md:pt-[7vw]">This is the gallery page</div>;

// }

import { urlFor } from "@/sanity/imageUrlBuilder";
import { Gallery } from "@/sanity/types";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { sanityFetch } from "@/sanity/live";
import { GALLERY_QUERY } from "@/sanity/queries";

export default async function GalleryPage() {
  const { data: gallery }: { data: Gallery } = await sanityFetch({
    query: GALLERY_QUERY,
  });
  return (
    <>
      <div className="bg-[url('/img/gallery-bg.png')] bg-cover w-full pt-16 sm:pt-20">
        <div className="w-full h-full flex justify-center items-center p-4">
          {/* The white background with opacity */}

          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center tracking-widest">
            GALERIE
          </h1>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col w-[55%]">
            {gallery.images &&
              gallery.images
                .filter((image) => image.format == "landscape")
                .map((image) => (
                  <Dialog key={image._key}>
                    <DialogTrigger>
                      <img
                        src={urlFor(image).url()}
                        alt="Image"
                        className="rounded-[2vw] w-full p-[1vw]"
                      />
                    </DialogTrigger>
                    <DialogContent className="bg-zinc-300 rounded-[2vw] max-w-[75vw] 2xl:max-w-[60vw] ">
                      <DialogTitle>{image.title}</DialogTitle>{" "}
                      <img
                        src={urlFor(image).url()}
                        alt="Image"
                        className="rounded-[3vw]  object-contain p-[1vw] 2xl:max-h[60vh] 2xl:p-1"
                      />
                    </DialogContent>
                  </Dialog>
                ))}
          </div>
          <div className="flex flex-col justify-between w-[44%]">
            {gallery.images &&
              gallery.images
                .filter((image) => image.format == "portrait")
                .map((image) => (
                  <Dialog key={image._key}>
                    <DialogTrigger>
                      <img
                        src={urlFor(image).url()}
                        alt="Image"
                        className="rounded-[2vw] w-full p-[1vw]"
                      />
                    </DialogTrigger>
                    <DialogContent className="bg-zinc-300 rounded-[2vw] lg:max-h-[90vh] lg:max-w-[40vw] 2xl:max-w-[35vw]">
                      {" "}
                      <DialogTitle>{image.title}</DialogTitle>
                      {/* Hier vielleicht Bildbeschreibung? */}
                      <div className="w-full flex justify-center">
                        <img
                          src={urlFor(image).url()}
                          alt="Image"
                          className="rounded-[2vw] max-h-[80vh] object-contain"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
          </div>
        </div>
      </div>
    </>
  );
}
