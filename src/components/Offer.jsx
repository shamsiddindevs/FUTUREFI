import hero from "../assets/bitcoin.jpg";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 px-6 md:px-12 lg:px-24 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Level Up Your <span className="text-blue-600">Data Career</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Learn real-world skills such as financial modeling, business analysis, data
            visualization, and more!
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
              Browse Courses
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-100 transition">
              For Teams
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute z-20 -top-6 -right-6 w-20 h-20 bg-yellow-400 rounded-full"></div>
          <div className="absolute z-20 bottom-0 -left-6 w-16 h-16 bg-green-500 rounded-full"></div>
          <div className="absolute z-20 top-16 right-10 w-12 h-12 bg-blue-500 rounded-full"></div>
          <img
            src={hero}
            alt="Professional"
            className="relative rounded-xl shadow-lg z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
