import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/">
            <h1 className="logo-font text-2xl font-bold text-gray-900">
              The Creator's
            </h1>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
            >
              <Link to="/">
              <span>Home</span>
              </Link>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors font-medium"
            >
              Contact Us
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-full border border-gray-200 bg-white/90 p-2 text-gray-700 shadow-sm hover:bg-blue-50 hover:border-blue-200 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 z-40 px-4 pb-4">
          <div className="rounded-3xl bg-white/95 backdrop-blur border border-gray-100 shadow-2xl px-4 py-4 space-y-2">
            <button
              onClick={() => scrollToSection('home')}
              className="flex w-full items-center justify-between rounded-2xl px-3 py-3 text-base font-medium text-gray-900 hover:bg-blue-50"
            >
              <Link to="/" className="flex-1 text-left">
                Home
              </Link>
              <span className="h-2 w-2 rounded-full bg-blue-500" />
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="flex w-full items-center justify-between rounded-2xl px-3 py-3 text-base font-medium text-gray-900 hover:bg-blue-50"
            >
              <span className="flex-1 text-left">Services</span>
              <span className="h-2 w-2 rounded-full bg-gray-300" />
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="flex w-full items-center justify-between rounded-2xl px-3 py-3 text-base font-medium text-gray-900 hover:bg-blue-50"
            >
              <span className="flex-1 text-left">About</span>
              <span className="h-2 w-2 rounded-full bg-gray-300" />
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="flex w-full items-center justify-between rounded-2xl px-3 py-3 text-base font-medium text-gray-900 hover:bg-blue-50"
            >
              <span className="flex-1 text-left">Testimonials</span>
              <span className="h-2 w-2 rounded-full bg-gray-300" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 text-center"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
