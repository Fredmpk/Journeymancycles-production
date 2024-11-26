import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/live";
import { Product } from "@/sanity/types";
import { PRODUCTS_QUERY } from "@/sanity/queries";

export default async function ProductsPage() {
  const { data: products } = await sanityFetch({ query: PRODUCTS_QUERY });

  return (
    <main className="flex bg-gray-100 min-h-screen flex-col p-24 gap-12">
      <h1 className="text-4xl font-bold tracking-tighter">Products</h1>
      <ul className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {products.map((product: Product) => (
          <li key={product._id} className="bg-white p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            {product.description && (
              <p className="text-gray-600">{product.description}</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
