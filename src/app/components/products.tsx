import { urlFor } from "@/sanity/imageUrlBuilder";
import { Product } from "@/sanity/types";
import { Anton, Dancing_Script, Goldman } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: "400" });
const dancingscript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ProductsSection({ products }: { products: Product[] }) {
  return (
    <div
      className="relative w-full h-full bg-cover bg-zinc-200 pt-[9vw] md:pt-[7vw]"
      id="products"
    >
      <div className="w-full h-full flex justify-center items-center">
        {/* The white background with opacity */}
        <div className=" bg-opacity-15 rounded-full p-[1vw] m-[3vw]">
          <h1 className="text-black font-bold text-xl md:text-2xl lg:text-5xl">
            MODELLE
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
            <p
              className={`absolute top-[12%] inset-0 flex justify-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${
                product.font == "dancingscript"
                  ? dancingscript.className
                  : product.font == "anton"
                    ? anton.className
                    : ""
              }`}
            >
              {product.title}
            </p>
            <div></div>
          </a>
        ))}
      </div>
    </div>
  );
}
