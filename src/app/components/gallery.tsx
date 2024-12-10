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
                    <DialogContent className="bg-zinc-300 rounded-[2vw]">
                      <DialogTitle>Bildbeschreibung oder Titel?</DialogTitle>{" "}
                      <img
                        src={urlFor(image).url()}
                        alt="Image"
                        className="rounded-[2vw] w-full object-contain"
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
                    <DialogContent className="bg-zinc-300 rounded-[2vw]">
                      {" "}
                      <DialogTitle hidden>
                        Ein Bild aus der Bildergalerie
                      </DialogTitle>
                      {/* Hier vielleicht Bildbeschreibung? */}
                      <img
                        src={urlFor(image).url()}
                        alt="Image"
                        className="rounded-[2vw] w-full object-contain"
                      />
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
