// import Image from "next/image";
// import { defineQuery } from "next-sanity";
// import { sanityFetch } from "@/sanity/live";

// const PRODUCTS_QUERY = defineQuery(`*[_type == "product"]{
//   _id,
//   title,
//   description
// }`);

// export default async function ProductsPage() {
//   const { data: products } = await sanityFetch({ query: PRODUCTS_QUERY });

//   return (
//     <main className="flex bg-gray-100 min-h-screen flex-col p-24 gap-12">
//       <h1 className="text-4xl font-bold tracking-tighter">Products</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white rounded-lg shadow-md overflow-hidden"
//           >
//             <div className="p-6">
//               <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
//               <p className="text-gray-600">{product.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }
