"use client";
import {
  Plane, Hotel, ShieldCheck, Car, Ship, Ticket,
  Camera, Music, UtensilsCrossed, Briefcase, Shirt,
  Gift, HeartPulse, Sparkles, User
} from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: Plane,
    title: 'Flight Booking & Travel Planning',
    image: 'https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=400',
    items: [
      'Best flight deals from any country',
      'Priority seat selection & upgrades',
      'Group bookings for friends/family',
      'Visa assistance for international guests'
    ]
  },
  {
    icon: Hotel,
    title: 'Accommodation Packages',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400',
    items: [
      'Luxury hotels, private villas, serviced apartments',
      'Short-term stays (3–30 days)',
      'Airport-proximity options',
      'Nightlife-proximity options'
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Immigration & Arrival Support',
    image: 'https://images.pexels.com/photos/4031013/pexels-photo-4031013.jpeg?auto=compress&cs=tinysrgb&w=400',
    items: [
      'Visa-on-arrival processing',
      'Pre-arrival documentation assistance',
      'Airport escort and clearance protocol',
      'Dedicated arrival host'
    ]
  },
  {
    icon: Car,
    title: 'Local Transport & Chauffeur Services',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=400',
    items: [
      'Private drivers',
      'Executive SUVs',
      'Airport pickup & drop-off',
      'Multi-city transport packages'
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Security Consulting & VIP Protection',
    image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=400',
    items: [
      'Close protection officers',
      'Secure movement logistics',
      'Risk assessment for events & nightlife',
      '24/7 monitoring support'
    ]
  },
  {
    icon: Ticket,
    title: 'VIP Events & Entertainment Access',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    items: [
      'Premium access to top Detty December concerts',
      'Guest list & VIP tables at major clubs',
      'Festival itineraries',
      'Private celebrity meet & greet (by request)'
    ]
  },
  {
    icon: Ship,
    title: 'Luxury Boat & Yacht Rentals',
    image: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=400',
    items: [
      'Lagoon tours',
      'Private yacht parties',
      'Island hopping trips',
      'Customized water experiences'
    ]
  },
  {
    icon: User,
    title: 'Concierge & Lifestyle Services',
    image: 'https://images.pexels.com/photos/6942067/pexels-photo-6942067.jpeg?auto=compress&cs=tinysrgb&w=400',
    items: [
      'Restaurant reservations',
      'Spa appointments',
      'Personal shopper services',
      'On-demand assistance'
    ]
  },
  {
    icon: Camera,
    title: 'Content Creation & Personal Media Team',
    image: 'https://images.pexels.com/photos/2866077/pexels-photo-2866077.jpeg?auto=compress&cs=tinysrgb&w=400',
    items: [
      'Professional photographers',
      'Videographers',
      'Social media-ready edits',
      'Event coverage packages'
    ]
  },
  {
    icon: Music,
    title: 'Nightlife Management Service',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
    items: [
      'Custom party itinerary',
      'VIP table bookings',
      'Personal nightlife guide',
      'Club recommendations'
    ]
  },
  {
    icon: UtensilsCrossed,
    title: 'Food & Culture Experience Tours',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    items: [
      'Nigerian food tasting tours',
      'Local markets & art galleries',
      'Cultural excursions to Badagry, Nike Art Gallery',
      'Freedom Park visits'
    ]
  },
  {
    icon: Briefcase,
    title: 'Business Travel Add-Ons',
    image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400',
    items: [
      'Meeting room reservations',
      'Co-working space access',
      'Corporate chauffeur service',
      'Nigerian business environment briefing'
    ]
  },
  {
    icon: Shirt,
    title: 'Fashion & Styling Concierge',
    image: 'https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=400',
    items: [
      'Tailors for quick outfits',
      'Event styling',
      'Access to premium Nigerian designers',
      'Personal shopping assistance'
    ]
  },
  {
    icon: Gift,
    title: 'Personal Errand & Gifting Service',
    image: 'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=400',
    items: [
      'Gift sourcing',
      'Last-minute item delivery',
      'Family-home visitation logistics',
      'Personal shopping assistance'
    ]
  },
  {
    icon: HeartPulse,
    title: 'Health & Wellness Add-Ons',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400',
    items: [
      'Travel health insurance guidance',
      'On-call medical support',
      'Premium gym/day-pass access',
      'Health consultation'
    ]
  },
  {
    icon: Sparkles,
    title: 'Relax & Rejuvenate Packages',
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400',
    items: [
      'Spa and massage',
      'Yoga & fitness trainers',
      'Wellness retreats near Lagos',
      'Meditation sessions'
    ]
  }
];

export default function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From arrival to departure, we handle every detail of your Detty December experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isExpanded = expandedService === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-blue-100 cursor-pointer"
                onClick={() => setExpandedService(isExpanded ? null : idx)}
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <ul className={`space-y-2 transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-32 overflow-hidden'}`}>
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {service.title === 'Immigration & Arrival Support' && (
                    <div className="mt-4">
                      <Link
                        href="/services/passport-visa"
                        className="inline-block text-sm px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all"
                      >
                        Learn more
                      </Link>
                    </div>
                  )}
                  {service.title === 'Flight Booking & Travel Planning' && (
                    <div className="mt-4">
                      <Link
                        href="/services/flight-accommodation"
                        className="inline-block text-sm px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all"
                      >
                        Learn more
                      </Link>
                    </div>
                  )}
                  {service.title === 'Accommodation Packages' && (
                    <div className="mt-4">
                      <Link
                        href="/services/flight-accommodation"
                        className="inline-block text-sm px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all"
                      >
                        Learn more
                      </Link>
                    </div>
                  )}
                  {service.title === 'Business Travel Add-Ons' && (
                    <div className="mt-4">
                      <Link
                        href="/services/corporate-travel"
                        className="inline-block text-sm px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all"
                      >
                        Learn more
                      </Link>
                    </div>
                  )}
                  {service.title === 'Concierge & Lifestyle Services' && (
                    <div className="mt-4">
                      <Link
                        href="/services/private-concierge"
                        className="inline-block text-sm px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all"
                      >
                        Learn more
                      </Link>
                    </div>
                  )}
                  {service.title === 'Food & Culture Experience Tours' && (
                    <div className="mt-4">
                      <Link
                        href="/services/tours-trips"
                        className="inline-block text-sm px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all"
                      >
                        Learn more
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
