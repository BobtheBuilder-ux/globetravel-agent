import { Plane, Linkedin, Shield, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Plane className="w-8 h-8 text-emerald-400" />
              <span className="text-2xl font-bold font-display">Global Elite Travels</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Your premium partner for an unforgettable Detty December experience. We handle every detail so you can focus on creating memories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('#home')} className="text-gray-400 hover:text-emerald-400 transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#services')} className="text-gray-400 hover:text-emerald-400 transition-colors">Services</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#why-us')} className="text-gray-400 hover:text-emerald-400 transition-colors">About Us</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#contact')} className="text-gray-400 hover:text-emerald-400 transition-colors">Contact</button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p className="font-semibold text-white mb-2">Phone:</p>
              <p>+234 912 952 0972</p>
              <p>+234 803 295 7176</p>
              <p className="font-semibold text-white mt-4 mb-2">Address:</p>
              <p>36 Akwa Crescent</p>
              <p>War College Gwarinpa</p>
              <p>Abuja, Nigeria</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="mb-8 bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Trusted & Certified Travel Partner</h3>
            <div className="flex flex-wrap items-center justify-center gap-8 mb-6">
              <div className="flex items-center gap-3 bg-emerald-50 rounded-xl px-6 py-3 border border-emerald-200">
                <Shield className="w-5 h-5 text-emerald-600" />
                <div className="text-left">
                  <p className="text-xs text-emerald-700 font-medium">Registered Travel Agent</p>
                  <p className="text-base font-bold text-gray-900">RC8256358</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-12 max-w-4xl mx-auto">
              <img
                src="/Globeelite (1).png"
                alt="Globe Elite Travel"
                className="h-20 md:h-24 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/ffff.png"
                alt="Verified Business"
                className="h-20 md:h-24 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/customer-choice-logo.png"
                alt="Customer Choice"
                className="h-16 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/melontech (3).png"
                alt="Amadeus Certified"
                className="h-20 md:h-24 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-8">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Global Elite Travels and Tour Agency LTD. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
