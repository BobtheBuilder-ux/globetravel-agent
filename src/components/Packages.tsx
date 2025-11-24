"use client";
import { Crown, Star, Zap } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Packages() {
  const [hoveredPackage, setHoveredPackage] = useState<string | null>(null);

  return (
    <section id="packages" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full -mr-48 -mt-48 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full -ml-48 -mb-48 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Detty December Packages
          </h2>
          <p className="text-xl text-gray-600">
            Choose your level of luxury
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div
            className="relative group"
            onMouseEnter={() => setHoveredPackage('vip')}
            onMouseLeave={() => setHoveredPackage(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl transform group-hover:scale-105 transition-transform duration-300 shadow-2xl"></div>
            <div className="relative bg-white rounded-3xl p-8 m-1 shadow-xl">
              <div className="absolute top-4 right-4">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
              </div>
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <Crown className={`w-16 h-16 text-blue-600 transition-transform ${hoveredPackage === 'vip' ? 'scale-110 rotate-12' : ''}`} />
                  <Zap className="w-6 h-6 text-cyan-500 absolute -top-1 -right-1 animate-pulse" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-center mb-4 text-gray-900">VIP Package</h3>
              <p className="text-center text-gray-600 mb-6">
                The ultimate luxury experience for Detty December
              </p>

              <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                <div className="w-full h-48 relative mb-3">
                  <Image
                    src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="VIP Experience"
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-sm text-gray-600 text-center italic">Experience luxury at every step</p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  'Priority flight booking & upgrades',
                  'Luxury accommodation',
                  'VIP immigration assistance',
                  'Executive chauffeur service',
                  'Personal security detail',
                  'Exclusive event access',
                  'Private yacht experiences',
                  'Professional content creation team',
                  'Dedicated concierge service'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group/item">
                    <Star className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
              >
                Book VIP Package
              </button>
            </div>
          </div>

          <div
            className="relative group"
            onMouseEnter={() => setHoveredPackage('basic')}
            onMouseLeave={() => setHoveredPackage(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-500 rounded-3xl transform group-hover:scale-105 transition-transform duration-300 shadow-2xl"></div>
            <div className="relative bg-white rounded-3xl p-8 m-1 shadow-xl">
              <div className="flex items-center justify-center mb-6">
                <Star className={`w-16 h-16 text-gray-600 transition-transform ${hoveredPackage === 'basic' ? 'scale-110 rotate-12' : ''}`} />
              </div>
              <h3 className="text-3xl font-bold text-center mb-4 text-gray-900">Basic Package</h3>
              <p className="text-center text-gray-600 mb-6">
                Essential services for a smooth Detty December
              </p>

              <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                <div className="w-full h-48 relative mb-3">
                  <Image
                    src="https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Basic Experience"
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-sm text-gray-600 text-center italic">Quality essentials for your journey</p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  'Flight booking assistance',
                  'Comfortable accommodation',
                  'Visa-on-arrival support',
                  'Airport pickup & drop-off',
                  'Local transport coordination',
                  'Event ticketing assistance',
                  'Basic concierge support',
                  'Travel planning guidance',
                  '24/7 customer support'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group/item">
                    <Star className="w-5 h-5 text-gray-600 mr-3 flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-4 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-900 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Book Basic Package
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
