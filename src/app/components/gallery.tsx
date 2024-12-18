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

export default function GallerySection({ gallery }: { gallery: Gallery }) {
  return (
    <>
      <div
        className="bg-zinc-200 bg-cover w-full p-[1vw] md:pt-[7vw]"
        id="gallery"
      >
        <div className="w-full h-full flex justify-center items-center">
          {/* The white background with opacity */}
          <div className="bg-opacity-15 rounded-full p-[1vw] m-[3vw]">
            <h1 className="text-black font-bold text-xl md:text-2xl lg:text-5xl">
              GALERIE
              {/* Abstand soll links und rechts gleich sein */}
            </h1>
          </div>
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
                    <DialogContent className="bg-zinc-300 rounded-[1vw] max-w-[75vw] 2xl:max-w-[60vw] ">
                      <DialogTitle>{image.title}</DialogTitle>{" "}
                      <img
                        src={urlFor(image).url()}
                        alt="Image"
                        className="rounded-[vw]  object-contain p-[1vw] 2xl:max-h[60vh] 2xl:p-1"
                      />
                    </DialogContent>
                  </Dialog>
                ))
                .slice(0, 3)}
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
                          className="rounded-[1vw] max-h-[80vh] object-contain"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ))
                .slice(0, 2)}
          </div>
        </div>
        <div className="flex justify-center w-auto">
          <Link
            href={`/gallery`}
            className={`${buttonVariants()} px-[7vw] m-[1vw] sm:text-xl`}
          >
            Mehr
          </Link>
        </div>
      </div>
    </>
  );
}
