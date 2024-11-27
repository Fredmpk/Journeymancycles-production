export default function Products() {
  return (
    <div className="relative w-full h-full bg-cover bg-[url('/img/products-bg.png')]">
      <div className="w-full h-full flex justify-center items-center p-4">
        {/* The white background with opacity */}
        <div className="bg-white bg-opacity-50 rounded-full p-2">
          <h1 className="text-black font-bold text-xl">Die Modelle</h1>
        </div>
      </div>
    </div>
  );
}
