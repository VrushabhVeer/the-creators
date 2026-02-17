import { CheckCircle, Clock, Award, Users } from 'lucide-react';

const advantages = [
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect deadlines and ensure timely project completion without compromising quality.',
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Rigorous quality checks at every stage to deliver excellence in every project.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Highly skilled professionals with years of experience in construction industry.',
  },
  {
    icon: CheckCircle,
    title: 'Customer Satisfaction',
    description: 'Your satisfaction is our priority. We work closely with you throughout the journey.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Building Excellence with Every Project
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At The Creator's Building Construction, we combine innovation, expertise, and
              dedication to deliver construction solutions that exceed expectations. With over
              15 years of experience, we've established ourselves as a trusted partner for
              residential and commercial projects.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-full p-2 mt-1">
                  <CheckCircle className="text-green-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Licensed & Insured</h4>
                  <p className="text-gray-600">
                    Fully licensed contractors with comprehensive insurance coverage.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-full p-2 mt-1">
                  <CheckCircle className="text-green-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Transparent Pricing</h4>
                  <p className="text-gray-600">
                    Clear and detailed quotes with no hidden costs or surprises.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-full p-2 mt-1">
                  <CheckCircle className="text-green-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Sustainable Practices</h4>
                  <p className="text-gray-600">
                    Eco-friendly construction methods for a better tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {advantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-orange-600" size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
