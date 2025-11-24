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
            DETTY DECEMBER EXPERIENCE – LAGOS EDITION
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-blue-200">
            Powered by Global Elite Travels & Tour Agency LTD
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Event Overview</h2>
            <p className="text-lg text-gray-700">
              Detty December is here again, and this year, Global Elite Travels brings you a premium,
              secure, and unforgettable Lagos experience. From exclusive events to private movement,
              we ensure you enjoy the best of the season without stress.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-xl border border-blue-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Promise</h2>
            <ul className="space-y-3 text-gray-700">
              <li>Private transportation and guided movement</li>
              <li>High-level security and trusted local coordination</li>
              <li>Exclusive access to top events and curated activities</li>
              <li>Accommodation support with vetted luxury and mid-budget options</li>
              <li>Stress-free planning from Abuja or Lagos</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Detty December with Global Elite?</h2>
          <p className="text-lg text-gray-700 mb-6">
            This is not the regular December hustle. We simplify everything so you can enjoy Lagos
            without the chaos — parties, beaches, food spots, concerts, nightlife, shopping, and relaxation.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Curated Lagos itineraries",
              "Priority access to high-demand events",
              "Safe and calm private travel",
              "Dedicated concierge team",
              "Airport pickup, movement, and bookings handled for you",
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
                <p className="text-gray-800 font-semibold">{item}</p>
              </div>
            ))}
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Packages Available</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "BASIC", desc: "Access planning + movement coordination" },
              { title: "STANDARD", desc: "Full itinerary + accommodation support" },
              { title: "PREMIUM", desc: "VIP movement + event access + concierge" },
              { title: "CUSTOM", desc: "Tailored Lagos December experience" },
            ].map((pkg, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100 shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                <p className="text-gray-700">{pkg.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Booking & Enquiries</h2>
          <div className="space-y-2 text-gray-700">
            <p>Global Elite Travels & Tour Agency LTD</p>
            <p>Address: 32 Akwa Crescent, Gwarinpa, Abuja</p>
            <p>Phone: +234 912 952 0972</p>
          </div>
          <div className="mt-6">
            <Link
              href="/#contact"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all"
            >
              Book Now — Limited Slots Available
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}