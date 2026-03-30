import { useState } from "react";
import { Star, Quote } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  content: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    role: "Homeowner",
    content:
      "The Creator's Building Construction transformed our dream home into reality. Their attention to detail and professionalism was outstanding. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Business Owner",
    content:
      "Exceptional work on our commercial complex. The team completed the project on time and within budget. The quality of work exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Property Developer",
    content:
      "We have worked with them on multiple projects. Their expertise in structural design and construction management is unmatched. True professionals!",
    rating: 5,
  },
  {
    name: "Sneha Mehta",
    role: "Architect",
    content:
      "Collaborating with this team was a pleasure. They understood our design vision perfectly and executed it flawlessly. A reliable partner for any construction project.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Real Estate Investor",
    content:
      "Outstanding craftsmanship and transparent communication throughout the project. They delivered exactly what was promised, on time and on budget.",
    rating: 5,
  },
];

// Duplicate for seamless infinite loop
const doubled = [...testimonials, ...testimonials];

function TestimonialCard( { testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 relative flex-shrink-0 w-80 mx-4 hover:shadow-xl transition-shadow duration-300 flex flex-col"
      style={{ height: "260px" }}>
      <div className="absolute top-6 right-6 opacity-10">
        <Quote size={64} className="text-orange-500" />
      </div>

      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      <p className="text-gray-700 mb-6 leading-relaxed relative z-10 text-sm flex-1 overflow-hidden">
        "{testimonial.content}"
      </p>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-gray-900">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [paused, setPaused] = useState(false);

  return (
    <section id="testimonials" className="py-20 bg-white overflow-hidden">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .marquee-track.paused {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say
            about working with us.
          </p>
        </div>
      </div>

      {/* Fade edges */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
          style={{ background: "linear-gradient(to right, white, transparent)" }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
          style={{ background: "linear-gradient(to left, white, transparent)" }} />

        <div
          className="overflow-hidden py-4"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className={`marquee-track${paused ? " paused" : ""}`}>
            {doubled.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}