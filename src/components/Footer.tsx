import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Telecom Services',
    'IT Solutions',
    'Manpower Solutions',
    'Asset Rental Services',
    'AI Services'
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' }
  ];

  return (
    <footer className="bg-dark-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400/40 to-blue-500/40 rounded-xl blur-lg"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
                  <img 
                    src="/freepik__adjust__71860.png" 
                    alt="ZenAlpha Technologies Logo" 
                    className="w-12 h-12 object-contain filter brightness-125 contrast-125"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold gradient-text">ZenAlpha</h3>
                <p className="text-xs text-gray-400 -mt-1">Technologies</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering innovation and enabling connectivity through comprehensive 
              technology solutions across multiple verticals.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Facebook, href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5 text-gray-300 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 gradient-text">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 gradient-text">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 gradient-text">Contact Info</h4>
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  text: 'info@zenalpha.tech',
                  href: 'mailto:info@zenalpha.tech'
                },
                {
                  icon: Phone,
                  text: '+91 XXX XXX XXXX',
                  href: 'tel:+91XXXXXXXXXX'
                },
                {
                  icon: MapPin,
                  text: 'PAN India Operations',
                  href: '#'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {item.text}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} ZenAlpha Technologies. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Empowering Innovation | Enabling Connectivity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;