import seoImage from "../../assets/dm.jpg";

export default function Hero() {
  return (
    <div
      className="relative h-[90vh] md:h-screen isolate overflow-hidden"
      id="hero"
    >
      <img
        src={`${seoImage}`}
        className="md:block hidden absolute inset-0 -top-40 -z-10 opacity-20"
      />
      <div className="bg-gray-900 bg-opacity-10 h-full flex flex-col justify-center items-center z-10 text-center gap-5">
        <h1 className="md:text-7xl text-5xl font-bold text-black mb-4">
          Welcome to Digital360
        </h1>
        <p className="md:text-xl text-lg text-gray-900/80 mb-6 text-wrap">
          Empowering businesses with top-notch SEO and marketing solutions.
        </p>
        <a
          href="#services"
          className="bg-gray-900 hover:bg-gray-700 text-white px-6 py-3 text-lg"
        >
          Explore Our Services
        </a>
      </div>
    </div>
  );
}
