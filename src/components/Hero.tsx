import { ArrowRight } from "lucide-react";
import HeroRight from "./HeroRight";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-blue-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center min-h-[600px]">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                Building Dreams Since 2018
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Building the
              <span className="block text-blue-500">Future Together</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Transform your vision into reality with our comprehensive
              construction services. From design to completion, we deliver
              excellence in every project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2 font-medium text-lg group"
              >
                Get Started
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-900 hover:text-white transition-all font-medium text-lg"
              >
                Our Services
              </button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div>
                <p className="text-3xl font-bold text-gray-900">500+</p>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900">100+</p>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900">7+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
          <HeroRight />
        </div>
      </div>
    </section>
  );
}