import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl font-bold text-blue-700">
          AXORA
        </h1>

        <div className="flex gap-8 font-medium text-gray-700">
          <a href="#">Home</a>
          <a href="#">Manufacturers</a>
          <a href="#">Products</a>
          <a href="#">About</a>
        </div>

        <div className="flex items-center gap-3">
  <Link
    href="/login"
    className="text-gray-700 hover:text-blue-600 font-medium"
  >
    Login
  </Link>

  <Link
    href="/signup"
    className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
  >
    Sign Up
  </Link>
</div>

      </div>
    </nav>
  );
}