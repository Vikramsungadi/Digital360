// import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Digital360</div>
        <div className="space-x-4">
          {/* <Link
            to="/"
            className="hover:text-gray-200 cursor-pointer hover:underline"
          >
            Home
          </Link> */}
          <a href="#services" className=" cursor-pointer hover:underline">
            Services
          </a>
        </div>
      </div>
    </nav>
  );
}
