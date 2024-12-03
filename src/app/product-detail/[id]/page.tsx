import { urlFor } from "@/sanity/imageUrlBuilder";
import { sanityFetch } from "@/sanity/live";
import { PRODUCT_DETAIL_QUERY } from "@/sanity/queries";
import { Product } from "@/sanity/types";

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  console.log("test, test");

  const product: Product = await sanityFetch({
    query: PRODUCT_DETAIL_QUERY,
    params: { id: params.id },
  }).then((result) => result.data); // it returns the part of an array, product.data would fit the type Product
  console.log("Product:");

  console.log(product);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div
      className={`pt-[11vw] md:pt-[7vw] bg-cover ${product.bgImage ? `bg-[url(${urlFor(product.bgImage).url()})]` : ""}`}
    >
      {/* // irgendwie kriegt er das bg-image noch nicht, das muss nochmal aktualisiert werden */}
      <h1>{product.title}</h1>
      {product.mainImage && <img src={urlFor(product.mainImage).url()}></img>}
    </div>
  );
}
