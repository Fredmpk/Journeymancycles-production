import { urlFor } from "@/sanity/imageUrlBuilder";
import { sanityFetch } from "@/sanity/live";
import { PRODUCT_DETAIL_QUERY } from "@/sanity/queries";
import { Product } from "@/sanity/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { AutosizeTextarea } from "@/components/ui/autosize-textarea";

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const product: Product = await sanityFetch({
    query: PRODUCT_DETAIL_QUERY,
    params: { id: params.id },
  }).then((result) => result.data); // it returns the part of an array, product.data would fit the type Product

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div
      style={{
        backgroundImage: product.bgImage
          ? `url(${urlFor(product.bgImage).url()})`
          : "none",

        backgroundPosition: "center",
      }}
      className="pt-[11vw] md:pt-[7vw] flex flex-col justify-center items-center"
    >
      {/* // irgendwie kriegt er das bg-image noch nicht, das muss nochmal aktualisiert werden */}
      <div className="bg-white bg-opacity-55 rounded-full pt-[1vw] m-[3vw] ">
        <h1 className="text-black font-bold text-3xl md:text-5xl lg:text-7xl px-[2vw]">
          {product.title}
        </h1>
      </div>

      {product.mainImage && (
        <img
          src={urlFor(product.mainImage).url()}
          className="p-[3vw] rounded-[7%]"
        ></img>
      )}
      <Tabs defaultValue="account" className="w-[400px] mb-[5vw]">
        <TabsList>
          <TabsTrigger value="description">Beschreibung</TabsTrigger>
          <TabsTrigger value="datesheet">Datenblatt</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="">
          <AutosizeTextarea
            placeholder={product.description}
            maxHeight={700}
            className="p-[3vw] text-lg"
          />
        </TabsContent>
        <TabsContent value="datesheet">
          <AutosizeTextarea placeholder={product.dateSheet} maxHeight={700} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
