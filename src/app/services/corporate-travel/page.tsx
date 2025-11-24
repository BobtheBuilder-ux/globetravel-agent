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
            Corporate Travel Management
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-blue-200">
            Seamless, Professional & Efficient Travel Solutions for Your Organisation
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <section className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
          <p className="text-lg text-gray-700">
            Global Elite Travels & Tour Agency Ltd provides tailored corporate travel solutions designed to support
            businesses, executives, and teams. We understand the unique demands of professional travel—speed,
            convenience, reliability, and cost efficiency—so we handle every detail with precision and confidentiality.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Whether it’s conferences, retreats, business missions, training trips, or executive travel, we ensure your
            organization moves with ease and excellence.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-xl border border-blue-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Corporate Travel Services</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">1. Flight & Ticket Management</h3>
                <p className="text-gray-700 mb-3">We secure the best routes and fares for domestic and international travel.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Priority booking</li>
                  <li>Flexible ticket options</li>
                  <li>Cost-effective corporate fares</li>
                  <li>24/7 travel updates</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">2. Visa & Travel Documentation Support</h3>
                <p className="text-gray-700 mb-3">A dedicated team handles your visa, passport fast-track, and document needs.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Business visas</li>
                  <li>Conference visas</li>
                  <li>Passport renewal & fast-track</li>
                  <li>Document review and profiling</li>
                  <li>Invitation letters (where applicable)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">3. Hotel & Accommodation Coordination</h3>
                <p className="text-gray-700 mb-3">We book vetted, secure, and fully equipped accommodations.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Business hotels</li>
                  <li>Executive apartments</li>
                  <li>Long-stay corporate housing</li>
                  <li>Group bookings at discounted rates</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">4. Executive Airport Transfers</h3>
                <p className="text-gray-700 mb-3">Professional, punctual, and secure transfer services.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Private cars</li>
                  <li>Executive SUVs</li>
                  <li>Chauffeur-driven transport</li>
                  <li>Group shuttle services</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">5. Corporate Retreats & Team Travel</h3>
                <p className="text-gray-700 mb-3">We design and manage complete travel logistics for teams and leaders.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Annual retreats</li>
                  <li>Strategy sessions</li>
                  <li>Team-building getaways</li>
                  <li>Staff incentive trips</li>
                  <li>Leadership retreats</li>
                </ul>
                <p className="text-gray-700 mt-2">Includes accommodation, activities, meeting spaces, and a structured itinerary.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">6. International Conference & Event Travel Planning</h3>
                <p className="text-gray-700 mb-3">We support global events, training, and conferences.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Registration support</li>
                  <li>Visa guidance</li>
                  <li>Accommodation</li>
                  <li>Flights</li>
                  <li>Airport transfers</li>
                  <li>Itinerary planning</li>
                  <li>On-ground coordination</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Businesses Trust Us</h2>
            <ul className="space-y-2 text-gray-700">
              <li>Tailored Travel Solutions</li>
              <li>Cost Control & Transparency</li>
              <li>Reliable & Time-Saving</li>
              <li>Dedicated Corporate Support Team</li>
              <li>Secure Travel Assurance</li>
            </ul>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-8 mb-4">Who This Service Is Designed For</h2>
            <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
              <li className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">Companies & Firms</li>
              <li className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">NGOs & Development Organizations</li>
              <li className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">Government Agencies</li>
              <li className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">Tech Startups</li>
              <li className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">Educational Institutions</li>
              <li className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">Multinational Corporations</li>
              <li className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">Media & Production Teams</li>
              <li className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">High-net-worth Executives</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partner With Us</h2>
          <p className="text-lg text-gray-700">Streamline your organization’s travel processes with an agency that understands excellence, efficiency, and discretion.</p>
          <p className="text-lg text-gray-700 mt-2">Let Global Elite manage your travel—so your teams can focus on performance.</p>
          <div className="mt-6">
            <Link
              href="/#contact"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all"
            >
              Contact Corporate Travel Team
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}