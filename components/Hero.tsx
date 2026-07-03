export default function Hero() {
  return (
    <section className="text-center py-24 bg-gray-50">

      <h1 className="text-6xl font-extrabold text-gray-900">
        Find Verified Manufacturers
      </h1>

      <p className="text-xl text-gray-600 mt-6">
        AI-powered sourcing platform connecting buyers with manufacturers worldwide.
      </p>

      <div className="mt-10 flex justify-center gap-4">

        <input
          type="text"
          placeholder="Search products, manufacturers..."
          className="w-[600px] max-w-full border rounded-xl px-5 py-4 text-lg shadow"
        />

        <button className="bg-blue-600 text-white px-8 rounded-xl hover:bg-blue-700">
          Search
        </button>

      </div>

    </section>
  );
}