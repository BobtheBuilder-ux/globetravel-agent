"use client";
import { Plane, ChevronDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="flex items-center justify-center mb-8 space-x-3 animate-fade-in">
          <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
          <Plane className="w-12 h-12 text-blue-400 animate-bounce" />
          <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
        </div>
        {/* <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent mb-2">
          Globe Elite
        </h1>

        <p className="text-2xl md:text-3xl font-semibold text-blue-200 mb-8">
          Travel Agency
        </p> */}

        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Your Premium <span className="text-cyan-400">Detty December</span> Experience Starts Here
          </h2>

          <p className="text-lg md:text-xl text-blue-100 mb-4 leading-relaxed">
            Every December, Nigeria transforms into the world's biggest celebration — music, fashion, culture, nightlife, and unforgettable memories.
          </p>

          <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
            This year, Globe Elite Travel Agency brings you the smoothest, safest, and most luxurious way to experience Detty December.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() => window.location.href = '/dettu-december'}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-110 transition-all duration-300 text-lg"
          >
            <span className="flex items-center gap-2">
              Explore Our <br/> Detty-December package
              {/* <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" /> */}
            </span>
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transform hover:scale-110 transition-all duration-300 text-lg"
          >
            Explore <br/> Basic Packages
          </button>
        </div>

        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400 mx-auto" />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none"></div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
