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
      className="relative w-full h-full bg-zinc-200 pt-16 sm:pt-20"
      id="products"
    >
      <h1 className=" font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center tracking-widest pb-8">
        MODELLE
      </h1>

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
              className={`absolute top-[12%] tracking-widest inset-0 flex justify-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${
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
