import { Plane, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPackages = () => {
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-emerald-900/80 to-teal-900/85"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
          <Plane className="w-4 h-4 text-emerald-400" />
          <span className="text-white text-sm font-medium">Premium Travel Experience</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Your Ultimate <span className="text-emerald-400">Detty December</span><br />
          Experience Awaits
        </h1>

        <p className="text-lg md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
          Every December, Nigeria transforms into the world's biggest celebration
        </p>

        <p className="text-base md:text-lg text-white/80 mb-12 max-w-2xl mx-auto">
          Music, fashion, culture, nightlife, and unforgettable memories. Globe Elite brings you the smoothest, safest, and most luxurious way to experience it all.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-emerald-500/40 transform hover:scale-105 transition-all duration-300 text-lg flex items-center gap-2"
          >
            Book Your Package
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={scrollToPackages}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transform hover:scale-105 transition-all duration-300 text-lg"
          >
            View Packages
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '24/7', label: 'Support' },
            { number: '100%', label: 'Satisfaction' },
            { number: '15+', label: 'Services' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-emerald-400 mb-1">{stat.number}</div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
