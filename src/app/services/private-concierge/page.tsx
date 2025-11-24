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
            Private & Concierge Travel
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-blue-200">
            Luxury. Privacy. Exclusivity — Tailored for You.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <section className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
          <p className="text-lg text-gray-700">
            For clients who desire a higher level of comfort, discretion, and personalized attention, Global Elite Travels
            & Tour Agency Ltd offers an exclusive Private & Concierge Travel service. This service is designed for individuals,
            celebrities, executives, families, and high-profile travelers who value privacy, ease, and a seamless lifestyle
            experience from departure to return.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            We don’t just book trips — we curate sophisticated journeys that reflect your taste and meet your unique needs.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-xl border border-blue-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Concierge Travel Services</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">1. Private Flight Arrangement</h3>
                <p className="text-gray-700 mb-3">Experience unmatched comfort with access to:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Private jets</li>
                  <li>Charter flights</li>
                  <li>Executive VIP lounges</li>
                  <li>Priority boarding & fast clearance</li>
                </ul>
                <p className="text-gray-700 mt-2">Perfect for urgent travel, business missions, or clients who prefer flying privately.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">2. Luxury Accommodation Selection</h3>
                <p className="text-gray-700 mb-3">We secure top-tier stays at the world’s finest hotels, resorts, and residences.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>5-star hotel suites</li>
                  <li>Luxury beachfront villas</li>
                  <li>Executive penthouses</li>
                  <li>Private island resorts</li>
                </ul>
                <p className="text-gray-700 mt-2">Each stay is customized to your preferences — from ocean views to private chefs.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">3. Chauffeur & Exclusive Transport</h3>
                <p className="text-gray-700 mb-3">Move in comfort and security with:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Executive SUVs</li>
                  <li>Luxury sedans</li>
                  <li>Chauffeur-driven cars</li>
                  <li>Airport pick-up & drop-off</li>
                  <li>Private yacht or boat rides</li>
                </ul>
                <p className="text-gray-700 mt-2">We ensure smooth, discreet, and secure transportation throughout your journey.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">4. Lifestyle Concierge Services</h3>
                <p className="text-gray-700 mb-3">Your comfort is our priority every step of the way. We assist with:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Restaurant reservations</li>
                  <li>VIP event access</li>
                  <li>Luxury shopping assistance</li>
                  <li>Personal photographers/videographers</li>
                  <li>Private tours & experiences</li>
                  <li>Wellness & spa bookings</li>
                </ul>
                <p className="text-gray-700 mt-2">Every detail is taken care of so you can just relax and enjoy.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">5. High-Security Travel Arrangements</h3>
                <p className="text-gray-700 mb-3">For clients who require additional protection, we offer:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Professional security escorts</li>
                  <li>Secure route planning</li>
                  <li>Vetted accommodation</li>
                  <li>24/7 on-ground support</li>
                </ul>
                <p className="text-gray-700 mt-2">Your safety is always paramount.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Concierge Service?</h2>
            <ul className="space-y-2 text-gray-700">
              <li>Discreet & Personalized</li>
              <li>Time-Saving & Stress-Free</li>
              <li>Exclusive Access</li>
              <li>Trusted Network of Partners</li>
            </ul>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-8 mb-4">Who This Service Is Perfect For</h2>
            <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
              <li className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">Executives & CEOs</li>
              <li className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">Celebrities & Influencers</li>
              <li className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">High-Net-Worth Individuals</li>
              <li className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">Luxury Travelers</li>
              <li className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">Politicians & Diplomats</li>
              <li className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">Families seeking premium experiences</li>
              <li className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">Corporate leaders attending important events</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Travel the World, Privately & Comfortably</h2>
          <p className="text-lg text-gray-700">When you choose Global Elite’s Concierge Travel, you’re choosing ease, elegance, and expert handling of every detail.</p>
          <div className="mt-6">
            <Link
              href="/#contact"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all"
            >
              Start Your Private Journey
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}