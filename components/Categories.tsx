const categories = [
  "Textiles",
  "Sports",
  "Surgical",
  "Chemicals",
  "Furniture",
  "Packaging",
  "Rice",
  "Machinery",
];

export default function Categories() {
  return (
    <section className="max-w-6xl mx-auto py-20">

      <h2 className="text-4xl font-bold text-center mb-10">
        Explore Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {categories.map((item) => (
          <div
            key={item}
            className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl cursor-pointer transition"
          >
            <h3 className="font-semibold text-xl">
              {item}
            </h3>
          </div>
        ))}

      </div>

    </section>
  );
}