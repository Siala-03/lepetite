import React from 'react';
import { Link } from 'react-router-dom';
import {
  InstagramIcon,
  FacebookIcon,
  SendIcon } from
'lucide-react';
import { PHONE_DISPLAY, EMAIL, WHATSAPP_NUMBER, ADDRESS_LINE, ADDRESS_CITY } from '../config/contact';

const RESERVATION_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function Footer() {
  return (
    <footer className="bg-chalet-black border-t border-chalet-charcoal pt-20 pb-28 sm:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block group">
              <span className="font-display text-2xl tracking-wide text-chalet-warm-white">
                Le Petit Chalet
              </span>
            </Link>
            <p className="text-chalet-cream/70 text-sm leading-relaxed">
              A mountain-inspired dining and wine retreat in the heart of
              Kigali.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/lepetitchalet_rwanda/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-chalet-cream/60 hover:text-chalet-amber transition-colors">

                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/LePetitChaletRwanda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-chalet-cream/60 hover:text-chalet-amber transition-colors">

                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-chalet-warm-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
              {
                name: 'Our Story',
                path: '/our-story'
              },
              {
                name: 'Menu',
                path: '/menu'
              },
              {
                name: 'Reviews',
                path: '/reviews'
              },
              {
                name: 'Gallery',
                path: '/gallery'
              },
              {
                name: 'Book a Table',
                href: RESERVATION_URL
              },
              {
                name: 'Contact',
                path: '/contact'
              }].
              map((item) =>
              <li key={item.name}>
                  {item.href ?
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-chalet-cream/70 hover:text-chalet-amber transition-colors text-sm">

                      {item.name}
                    </a> :

                <Link
                  to={item.path!}
                  className="text-chalet-cream/70 hover:text-chalet-amber transition-colors text-sm">

                      {item.name}
                    </Link>
                }
                </li>
              )}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg text-chalet-warm-white mb-6">
              Hours of Operation
            </h4>
            <ul className="space-y-4 text-sm text-chalet-cream/70">
              <li className="flex justify-between">
                <span>Daily</span>
                <span>11:30 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-display text-lg text-chalet-warm-white mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-chalet-cream/70 mb-8">
              <li>{ADDRESS_LINE}, {ADDRESS_CITY}</li>
              <li>{PHONE_DISPLAY}</li>
              <li>{EMAIL}</li>
            </ul>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Subscribe to newsletter"
                className="bg-chalet-charcoal border border-chalet-charcoal text-chalet-cream px-4 py-2 w-full focus:outline-none focus:border-chalet-amber text-sm rounded-l-sm" />
              
              <button
                type="submit"
                className="bg-chalet-amber text-chalet-black px-4 py-2 hover:bg-chalet-honey transition-colors rounded-r-sm flex items-center justify-center"
                aria-label="Subscribe">
                
                <SendIcon className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-chalet-charcoal flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-chalet-cream/50 text-xs">
            &copy; {new Date().getFullYear()} Le Petit Chalet. All rights reserved.
          </p>
          <p className="text-chalet-cream/50 text-xs flex items-center">
            Crafted with passion • Developed by Siala Solutions
          </p>
        </div>
      </div>
    </footer>);

}