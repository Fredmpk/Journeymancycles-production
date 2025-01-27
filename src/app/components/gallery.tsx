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
      <div className="bg-zinc-300 bg-cover w-full pt-16 sm:pt-20" id="gallery">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center tracking-widest">
          GALERIE
        </h1>

        <div className="flex flex-row pt-[3vw]">
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
                    <DialogContent className="bg-zinc-300 rounded-[1vw] max-w-[95vw] md:max-w-[85vw] xl:max-w-[70vw] 2xl:max-w-[60vw] lg:max-w-[80vw]lg:flex lg:justify-center">
                      <DialogTitle>{image.title}</DialogTitle>{" "}
                      <img
                        src={urlFor(image).url()}
                        alt="Image"
                        className="rounded-[2vw]  object-contain  2xl:max-h[60vh] max-h-[90vh] xl:p-2 text-center"
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
