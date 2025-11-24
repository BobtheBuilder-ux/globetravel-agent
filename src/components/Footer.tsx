import { Plane, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Plane className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold">Globe Elite Travel</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Your premium partner for an unforgettable Detty December experience. We handle every detail so you can focus on creating memories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('#home')} className="text-gray-400 hover:text-cyan-400 transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#packages')} className="text-gray-400 hover:text-cyan-400 transition-colors">Packages</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#services')} className="text-gray-400 hover:text-cyan-400 transition-colors">Services</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#why-us')} className="text-gray-400 hover:text-cyan-400 transition-colors">Why Us</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#contact')} className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('#packages')} className="text-gray-400 hover:text-cyan-400 transition-colors">VIP Packages</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#services')} className="text-gray-400 hover:text-cyan-400 transition-colors">Event Access</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#services')} className="text-gray-400 hover:text-cyan-400 transition-colors">Security Services</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#services')} className="text-gray-400 hover:text-cyan-400 transition-colors">Concierge</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Globe Elite Travel Agency. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
