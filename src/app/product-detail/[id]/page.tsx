import { urlFor } from "@/sanity/imageUrlBuilder";
import { sanityFetch } from "@/sanity/live";
import { PRODUCT_DETAIL_QUERY } from "@/sanity/queries";
import { Product } from "@/sanity/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { AutosizeTextarea } from "@/components/ui/autosize-textarea";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  console.log("promise?", params);

  const resolvedParams = await params;
  console.log("Resolved Params:", resolvedParams);

  // The params somehow returned a Promise, i donno why, but if i await it like this it works
  const data = await sanityFetch({
    query: PRODUCT_DETAIL_QUERY,
    params: { id: resolvedParams.id },
  });

  const product: Product = data.data;

  // .then((result) => result.data); // it returns the part of an array, product.data would fit the type Product

  if (!product) {
    return <div className="pt-30 sm:pt-40">Product not found</div>;
  }

  return (
    <div
      // style={{
      //   backgroundImage: product.bgImage
      //     ? `url(${urlFor(product.bgImage).url()})`
      //     : "none",

      //   backgroundPosition: "center",
      // }}
      className="pt-16 sm:pt-20 flex flex-col justify-center items-center bg-cover bg-zinc-200"
    >
      <div className=" bg-opacity-75 rounded-full pt-[1vw] m-[3vw] ">
        <h1 className="text-black font-bold text-3xl md:text-5xl lg:text-7xl px-[2vw] tracking-widest">
          {product.title}
        </h1>
      </div>
      <div className="flex flex-col xl:flex-row">
        <div className="w-full">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem>
                {" "}
                <img
                  src={urlFor(product.mainImage).url()}
                  alt="Image"
                  className="w-full object-contain rounded-2xl p-[3vw] xl:p-[1vw]  max-h-[90vh] lg:max-h-[70vh]"
                />
              </CarouselItem>
              {product.gallery &&
                product.gallery.map((image) => (
                  <CarouselItem key={image._key}>
                    <img
                      src={urlFor(image).url()}
                      alt="Image"
                      className="w-full object-contain rounded-2xl p-[3vw] xl:p-[1vw]  max-h-[90vh] lg:max-h-[70vh]"
                    />
                  </CarouselItem>
                ))}
            </CarouselContent>
            <div className="absolute top-1/2 left-2 flex items-center justify-center">
              <CarouselPrevious className="relative left-[4vw] translate-x-0 hover:translate-x-0 hover:bg-zinc-200" />
            </div>
            <div className="absolute top-1/2 right-[4vw] flex items-center justify-center">
              <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0 hover:bg-zinc-200" />
            </div>
          </Carousel>
        </div>
        {/*
        {product.mainImage && (
          <img
            src={urlFor(product.mainImage).url()}
            className="p-[3vw] rounded-[7%]"
          ></img>
        )} */}
        <Tabs
          defaultValue="description"
          className="w-[90vw] xl:w-[70vw] mb-[5vw] xl:mr-[2vw] mx-3 md:mx-8"
        >
          <TabsList>
            <TabsTrigger value="description">Beschreibung</TabsTrigger>
            <TabsTrigger value="datesheet">Datenblatt</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="">
            <AutosizeTextarea
              placeholder={product.description}
              maxHeight={500}
              className="p-[3vw] text-lg tracking-wide"
            />
          </TabsContent>
          <TabsContent value="datesheet">
            <AutosizeTextarea
              placeholder={product.dateSheet}
              maxHeight={500}
              className="tracking-wide"
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
