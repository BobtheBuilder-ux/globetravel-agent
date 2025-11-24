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
            Tours & Trips (Local & International)
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-blue-200">
            Experience the World, Your Way
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <section className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
          <p className="text-lg text-gray-700">
            At Global Elite Travels & Tour Agency Ltd, we design travel experiences that go beyond sightseeing.
            Whether you’re exploring Nigeria’s vibrant cities or discovering new cultures across the globe, our tours
            are curated to give you comfort, safety, and unforgettable memories.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            From weekend getaways to luxury international vacations, each trip is crafted to match your personality,
            lifestyle, and travel goals.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-xl border border-blue-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Tour Categories</h2>
            <h3 className="text-xl font-bold text-gray-900 mb-2">1. Local Tours (Within Nigeria)</h3>
            <p className="text-gray-700 mb-3">Discover the beauty, culture, and adventure in Nigeria with guided and private tours to top destinations.</p>
            <ul className="space-y-2 text-gray-700">
              <li>Lagos Lifestyle Experience</li>
              <li>Abuja City & Gastronomy Tour</li>
              <li>Calabar Cultural Tour</li>
              <li>Obudu Mountain Resort</li>
              <li>Yankari Game Reserve</li>
              <li>Lekki Conservation Centre</li>
              <li>Private Beach Resort Packages</li>
            </ul>
            <p className="text-gray-700 mt-4">All packages come with secure transportation, expert guides, and personalized itineraries.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">2. International Tours</h3>
            <p className="text-gray-700 mb-3">Your passport to premium travel experiences across the world. We offer curated group and private tours to:</p>
            <ul className="grid sm:grid-cols-2 gap-2 text-gray-700">
              <li>Dubai</li>
              <li>Zanzibar</li>
              <li>Kenya</li>
              <li>South Africa</li>
              <li>Ghana</li>
              <li>UK & Europe (Paris, Rome, Amsterdam, London)</li>
              <li>Maldives & Seychelles</li>
              <li>Turkey</li>
              <li>Mauritius</li>
            </ul>
            <div className="mt-4">
              <ul className="space-y-2 text-gray-700">
                <li>Visa guidance</li>
                <li>Flight booking support</li>
                <li>Airport transfers</li>
                <li>Accommodation</li>
                <li>Activity planning</li>
                <li>24/7 travel assistance</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Makes Our Tours Different?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Personalized Planning',
              'Top-tier Security & Safety',
              'Flexible Payment Options',
              'Exclusive Access',
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
                <p className="text-gray-800 font-semibold">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-2 text-gray-700">
            <p>Every itinerary is tailored to match your interests — adventure, relaxation, nightlife, culture, or luxury.</p>
            <p>We prioritize safe routes, vetted accommodation, and trusted transport partners.</p>
            <p>Spread your trip payment with our installment plan, making travel easier and stress-free.</p>
            <p>Enjoy premium packages like private yachts, curated nightlife, VIP access, fine dining, and luxury stays.</p>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who Our Tours Are Perfect For</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
            {[
              'Solo travelers',
              'Couples',
              'Families',
              'Corporate teams',
              'Birthday / anniversary trips',
              'Girls’ trips / guys’ trips',
              'Honeymooners',
              'Adventure seekers',
              'Content creators / influencers',
            ].map((item, idx) => (
              <li key={idx} className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">{item}</li>
            ))}
          </ul>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Book Your Next Trip With Ease</h2>
          <p className="text-lg text-gray-700">Our team handles everything from planning to execution so you can focus on enjoying the journey.</p>
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