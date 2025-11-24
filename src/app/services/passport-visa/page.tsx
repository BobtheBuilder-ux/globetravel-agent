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
            PASSPORT & VISA PROCESSING
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-blue-200">
            Fast, Secure, and Hassle-Free Travel Documentation
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <section className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
          <p className="text-lg text-gray-700">
            At Global Elite Travels & Tour Agency LTD, we simplify the most stressful part of travel —
            documentation. Whether you need a new passport, a renewal, or a visa for any destination,
            our team handles the process with accuracy, speed, and complete professionalism.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            We understand the urgency that comes with travel, and that’s why we provide flexible,
            reliable, and high-touch support designed to take the stress off you.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-xl border border-blue-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">1. Nigerian Passport Processing</h3>
                <p className="text-gray-700 mb-3">Whether you’re applying for the first time or renewing, we guide you through every step.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Clean, error-free applications</li>
                  <li>Fast and smooth processing</li>
                  <li>Expert guidance on documents</li>
                  <li>Updates at each stage</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">2. Fast-Track Passport Service</h3>
                <p className="text-gray-700 mb-3">Need your passport urgently? Our fast-track service moves your application quicker than the regular queue.</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Priority processing</li>
                  <li>Accurate documentation</li>
                  <li>Quick appointment scheduling</li>
                  <li>Ideal for emergency travel</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">3. Installment Payment Option</h3>
                <p className="text-gray-700 mb-3">We make passport processing accessible by allowing you to pay in instalments.</p>
                <p className="text-gray-700">No pressure. No financial strain. Just flexible steps that fit your budget.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">4. Visa Assistance for All Destinations</h3>
                <p className="text-gray-700 mb-3">From tourist visas to work, study, medical, and business visas, we handle everything:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Document review</li>
                  <li>Interview preparation</li>
                  <li>Professional application support</li>
                  <li>Guidance on clearance, requirements, and embassy expectations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">5. Error-Free Application Support</h3>
                <p className="text-gray-700 mb-3">Mistakes delay approval — sometimes for months. We prevent:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Wrong uploads</li>
                  <li>Wrong biometrics data</li>
                  <li>Wrong names/date formats</li>
                  <li>Missing documents</li>
                  <li>Rejections due to technical errors</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Passport & Visa Services?</h2>
            <ul className="space-y-2 text-gray-700">
              <li>Fast & reliable processing</li>
              <li>Installment payments available</li>
              <li>Support for all types of visas</li>
              <li>Dedicated travel documentation team</li>
              <li>High approval success rate</li>
              <li>Zero-stress experience</li>
            </ul>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-8 mb-4">Who This Service Is For</h2>
            <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
              <li className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">Individuals traveling soon</li>
              <li className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">Students preparing for international study</li>
              <li className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">Families planning vacation trips</li>
              <li className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">Business professionals</li>
              <li className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">Corporate organizations</li>
              <li className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">Anyone needing a passport or visa without delays</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <ol className="list-decimal ml-5 space-y-2 text-gray-700">
            <li>You contact us</li>
            <li>We review your case</li>
            <li>Payment (installment or full)</li>
            <li>We prepare your documents</li>
            <li>We schedule appointments where needed</li>
            <li>You get your passport or visa seamlessly</li>
          </ol>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Book Your Processing Today</h2>
          <div className="space-y-2 text-gray-700">
            <p>Office: 32 Akwa Crescent, Gwarinpa, Abuja</p>
            <p>Phone: +234 912 952 0972</p>
            <p>WhatsApp: <Link href="https://wa.me/2349129520972" className="text-blue-600 hover:text-cyan-600">Chat with us</Link></p>
          </div>
          <div className="mt-6">
            <Link
              href="/#contact"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}