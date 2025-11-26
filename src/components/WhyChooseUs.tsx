import { CheckCircle2, Clock, DollarSign, Shield, Star, Users } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: '24/7 Customer Support',
    description: 'Round-the-clock assistance whenever you need us'
  },
  {
    icon: DollarSign,
    title: 'Diaspora-Friendly Pricing',
    description: 'Transparent pricing designed for international travelers'
  },
  {
    icon: Users,
    title: 'Professional Protocol Officers',
    description: 'Trained experts to handle all your needs'
  },
  {
    icon: Shield,
    title: 'Trusted Security Partnerships',
    description: 'Your safety is our top priority'
  },
  {
    icon: Star,
    title: 'VIP Experience',
    description: 'Premium service from start to finish'
  },
  {
    icon: CheckCircle2,
    title: 'Proven Track Record',
    description: 'Years of successful Detty December experiences'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Globe Elite?
          </h2>
          <p className="text-xl text-gray-600">
            Excellence in every detail
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200 rounded-full -mr-16 -mt-16 opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl mb-4 shadow-lg group-hover:rotate-6 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-1 shadow-2xl">
            <div className="bg-white rounded-3xl p-8 max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready for Detty December?
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Whether you're coming for fun, family, or full luxury — we make your December unforgettable.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300 text-lg"
              >
                Contact Us to Book Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
