"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent mb-3">
            Detty December Lagos Experience
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-blue-200">
            Your VIP Access to the Most Exciting December in Africa
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <section className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
          <p className="text-lg text-gray-700">
            Lagos in December is not just a place — it’s an experience. The lights, the concerts, the energy,
            the beaches, the nightlife, the street food, the luxury… everything comes alive.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Global Elite Travels & Tour Agency Ltd brings you a curated, private, and secure Detty December package
            that ensures you enjoy the best of Lagos without stress, crowds, or safety concerns. From your arrival to
            your last night out, we’ve designed a premium experience that keeps you comfortable, secure, and fully
            immersed in the festive vibes.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            This December, you don’t just go to Lagos — you experience it the Global Elite way.
          </p>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Detty December Package Includes</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Private Airport Pickup (MM2/MMIA)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Chauffeur-driven cars</li>
                <li>Executive SUVs</li>
                <li>On-ground protocol & fast assistance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Luxury Accommodation</h3>
              <p className="text-gray-700 mb-2">Choose from top-tier hotels and apartments in:</p>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-gray-700">
                <li>Victoria Island</li>
                <li>Lekki Phase 1</li>
                <li>Ikoyi</li>
                <li>Oniru</li>
                <li>Banana Island (Premium Tier)</li>
              </ul>
              <p className="text-gray-700 mt-2">All stays are vetted for security, cleanliness, and proximity to major event locations.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Nightlife & Party Access</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Concerts</li>
                <li>Beach parties</li>
                <li>Nightclubs</li>
                <li>Festivals</li>
                <li>Private celebrity events (Premium Tier)</li>
              </ul>
              <p className="text-gray-700 mt-2">We handle ticketing, table reservations, and VIP access where available.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">4. Beach & Leisure Experiences</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Private beach houses</li>
                <li>Jet ski rides</li>
                <li>Boat cruises</li>
                <li>Landmark & Oniru beaches</li>
                <li>Spa and relaxation experiences</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">5. Food & Lagos Lifestyle Tour</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Fine dining restaurants</li>
                <li>Local Lagos food spots</li>
                <li>Street food tour</li>
                <li>Mainland/Island culture exploration</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">6. High-Security & Private Escort Options</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Professional security drivers</li>
                <li>Bodyguards (Premium Tier)</li>
                <li>Secure movement routes</li>
                <li>24/7 monitoring & on-call assistance</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who Is This For?</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
            {[
              "Travelers visiting Lagos for December",
              "Abuja residents looking for a planned December experience",
              "Solo travelers who want safety and coordination",
              "Groups, couples, and friends",
              "Corporate teams and influencers needing structured movement",
            ].map((item, idx) => (
              <li key={idx} className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Packages</h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100 shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Basic – “Soft December”</h3>
              <p className="text-gray-700">Perfect for solo travelers and friends who want to enjoy Lagos without overspending. Includes hotel, transport, event suggestions, and guided support.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100 shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Executive – “Elite December”</h3>
              <p className="text-gray-700">Accommodation in VI/Oniru, VIP nightlife access, private tours, transport, and luxury dining.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100 shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium – “The Full Lagos Takeover”</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Luxury suites</li>
                <li>Private security</li>
                <li>Yacht cruises</li>
                <li>Premium nightclub/private concert access</li>
                <li>Dedicated concierge</li>
                <li>Exclusive Lagos experiences</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-2xl border border-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Book Your Detty December Experience Today</h2>
          <p className="text-lg text-gray-700">December in Lagos is always unforgettable — but with Global Elite, it becomes premium, private, and perfectly planned.</p>
          <p className="text-lg text-gray-700 mt-2">Click Book Now to secure your slot. Limited spaces available.</p>
          <div className="mt-6">
            <Link
              href="/#contact"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all"
            >
              Book Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}