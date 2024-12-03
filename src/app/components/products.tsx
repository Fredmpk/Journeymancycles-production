import { urlFor } from "@/sanity/imageUrlBuilder";
import { Product } from "@/sanity/types";

export default function Products({ products }: { products: Product[] }) {
  console.log(products);
  return (
    <div className="relative w-full h-full bg-cover bg-[url('/img/products-bg.png')]">
      <div className="w-full h-full flex justify-center items-center p-4">
        {/* The white background with opacity */}
        <div className="bg-white bg-opacity-15 rounded-full p-[1vw] m-[3vw]">
          <h1 className="text-black font-bold text-xl md:text-2xl lg:text-5xl">
            Die Modelle
          </h1>
        </div>
      </div>

      <div className="flex flex-col ">
        {products.map((product) => (
          <a
            key={product._id}
            href={`/product-detail/${product._id}`}
            className="p-[4vw] relative"
          >
            {product.mainImage && (
              <img
                src={urlFor(product.mainImage).url()}
                alt={product.title || "Product"}
                className="w-full object-cover rounded-lg"
              />
            )}
            <p className="absolute top-[12%] inset-0 flex justify-center text-white text-lg md:text-2xl lg:text-5xl">
              {product.title}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
