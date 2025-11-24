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
            Flight Booking & Accommodation Support
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-blue-200">
            Smart, Seamless & Stress-Free Travel Planning
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <section className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
          <p className="text-lg text-gray-700">
            At Global Elite Travels & Tour Agency Ltd, we take the stress out of travel planning by securing the best
            flight options and accommodation tailored to your needs, budget, and schedule. Whether you’re traveling for
            business, leisure, or family events, we ensure a smooth and well-coordinated experience from start to finish.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Our goal is simple: comfort, convenience, and complete peace of mind every time you travel.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-xl border border-blue-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Flight Booking Services</h2>
            <p className="text-gray-700 mb-3">We provide reliable flight booking options for both domestic and international destinations.</p>
            <h3 className="text-xl font-bold text-gray-900 mb-2">What We Offer</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900">1. Best Routes & Competitive Fares</h4>
                <p className="text-gray-700">We compare airlines and routes to give you the most cost-effective and convenient options.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">2. Flexible Ticket Options</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>One-way</li>
                  <li>Round-trip</li>
                  <li>Multi-city</li>
                  <li>Last-minute bookings</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">3. Priority Booking Support</h4>
                <p className="text-gray-700">Perfect for urgent travel, corporate missions, and high-traffic holiday seasons.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">4. Airline Assistance</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>Seat reservations</li>
                  <li>Extra baggage arrangements</li>
                  <li>Travel insurance guidance</li>
                  <li>Early check-in support</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Accommodation Support</h2>
            <p className="text-gray-700 mb-3">Your comfort and safety matter. We book accommodation based on your preferences, travel purpose, and budget.</p>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Types of Accommodation We Provide</h3>
            <ul className="grid sm:grid-cols-2 gap-2 text-gray-700">
              <li>Business hotels</li>
              <li>4-star & 5-star hotels</li>
              <li>Executive suites</li>
              <li>Short-let apartments</li>
              <li>Luxury villas</li>
              <li>Long-stay residences</li>
              <li>Family-friendly accommodations</li>
            </ul>
            <p className="text-gray-700 mt-4">All locations are vetted for security, convenience, and proximity to key attractions or business venues.</p>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Flight & Accommodation Service?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Personalized Matching',
              'Fast Response Time',
              'Budget-Friendly & Luxury Options',
              'Travel Security Assurance',
              'All-In-One Support',
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
                <p className="text-gray-800 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perfect For</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
            {[
              'Solo travelers',
              'Families',
              'Corporate teams',
              'Couples',
              'Holidaymakers',
              'Event travelers',
              'Students traveling for school',
              'Short and long-term travelers',
            ].map((item, idx) => (
              <li key={idx} className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">{item}</li>
            ))}
          </ul>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Travel Without the Stress</h2>
          <p className="text-lg text-gray-700">Let Global Elite handle your flights and accommodation while you enjoy a smooth travel experience.</p>
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