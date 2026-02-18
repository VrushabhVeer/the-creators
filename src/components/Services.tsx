import { Building2, Ruler, Home, PenTool, Layers, Hammer } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Building Design',
    description: 'Innovative architectural designs tailored to your vision and needs.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Ruler,
    title: 'Structural Analysis',
    description: 'Comprehensive structural engineering and safety assessments.',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    icon: Hammer,
    title: 'Construction',
    description: 'Expert construction services with quality craftsmanship.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: PenTool,
    title: 'Planning & Design',
    description: 'Strategic planning and detailed design for successful projects.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Home,
    title: 'Elevation Design',
    description: 'Beautiful and functional elevation designs for modern buildings.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Layers,
    title: 'Interior Design',
    description: 'Transform spaces with our creative interior design solutions.',
    color: 'bg-pink-100 text-pink-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer end-to-end construction services to bring your projects to life with
            precision and excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
