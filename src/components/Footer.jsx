import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS, NAVBAR_ITEMS } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-dark-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl">🎓</div>
              <h3 className="text-xl font-bold text-forest-green">Shridevi</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering students with cutting-edge education in Computer Science & Engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-forest-green">Quick Links</h4>
            <ul className="space-y-2">
              {NAVBAR_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-forest-green transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-forest-green">Contact</h4>
            <div className="space-y-3">
              <div className="flex gap-3">
                <MapPin size={20} className="text-academic-gold flex-shrink-0 mt-1" />
                <p className="text-gray-400 text-sm">{CONTACT_INFO.address}</p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={20} className="text-academic-gold flex-shrink-0" />
                <p className="text-gray-400 text-sm">{CONTACT_INFO.phone}</p>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={20} className="text-academic-gold flex-shrink-0" />
                <p className="text-gray-400 text-sm">{CONTACT_INFO.email}</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-forest-green">Follow Us</h4>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-forest-green/20 flex items-center justify-center text-forest-green hover:bg-forest-green hover:text-white transition-all"
                  title={link.name}
                >
                  {link.name === 'Facebook' && '📘'}
                  {link.name === 'Twitter' && '𝕏'}
                  {link.name === 'LinkedIn' && '💼'}
                  {link.name === 'Instagram' && '📷'}
                  {link.name === 'YouTube' && '▶️'}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 Department of CSE, Shridevi Institute of Engineering & Technology. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-forest-green transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-forest-green transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
