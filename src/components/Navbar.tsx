import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MenuIcon,
  XIcon,
  ClockIcon,
  ChevronUpIcon,
  InstagramIcon,
  FacebookIcon } from
'lucide-react';
import { WHATSAPP_NUMBER } from '../config/contact';

const RESERVATION_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

type NavLink = { name: string; path?: string; href?: string };

const primaryLinks: NavLink[] = [
{ name: 'Home', path: '/' },
{ name: 'Menu', path: '/menu' },
{ name: 'Reviews', path: '/reviews' },
{ name: 'Contacts', path: '/contact' }];


const secondaryLinks: NavLink[] = [
{ name: 'Our Story', path: '/our-story' },
{ name: 'Gallery', path: '/gallery' }];


export function Navbar() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isHoursOpen, setIsHoursOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Fixed top bar: logo + socials */}
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center">
          <span className="font-display text-lg sm:text-xl tracking-wide text-chalet-warm-white">
            Le Petit Chalet
          </span>
        </Link>
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href="https://www.instagram.com/lepetitchalet_rwanda/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-chalet-cream/80 hover:text-chalet-warm-white transition-colors">

            <InstagramIcon className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/LePetitChaletRwanda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-chalet-cream/80 hover:text-chalet-warm-white transition-colors">

            <FacebookIcon className="w-5 h-5" />
          </a>
        </div>
        {/* Mobile toggle */}
        <button
          className="sm:hidden text-chalet-warm-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu">

          {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Floating bottom capsule nav (desktop) */}
      <div className="hidden sm:flex fixed bottom-4 left-0 right-0 z-40 justify-center px-4">
        <div className="flex items-center gap-1 bg-chalet-rich-black/90 backdrop-blur-md border border-chalet-charcoal rounded-full px-2 py-2 shadow-lg relative">
          {primaryLinks.map((link) =>
          <Link
            key={link.name}
            to={link.path!}
            className={`px-4 py-2 text-sm tracking-wide rounded-full transition-colors ${location.pathname === link.path ? 'bg-chalet-charcoal text-chalet-warm-white' : 'text-chalet-cream/80 hover:text-chalet-warm-white'}`}>

              {link.name}
            </Link>
          )}

          {/* Hours */}
          <div className="relative">
            <button
              onClick={() => {
                setIsHoursOpen(!isHoursOpen);
                setIsMoreOpen(false);
              }}
              aria-label="Opening hours"
              className="p-2.5 rounded-full text-chalet-cream/80 hover:text-chalet-warm-white transition-colors">

              <ClockIcon className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {isHoursOpen &&
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-56 bg-chalet-rich-black border border-chalet-charcoal rounded-lg p-4 text-left">

                  <h3 className="font-display text-sm text-chalet-warm-white mb-2">Opening Hours</h3>
                  <p className="text-xs text-chalet-cream/70">Daily</p>
                  <p className="text-xs text-chalet-cream/70">11:30 AM - 10:00 PM</p>
                </motion.div>
              }
            </AnimatePresence>
          </div>

          {/* More (secondary links) */}
          <div className="relative">
            <button
              onClick={() => {
                setIsMoreOpen(!isMoreOpen);
                setIsHoursOpen(false);
              }}
              aria-label="More links"
              className="p-2.5 rounded-full text-chalet-cream/80 hover:text-chalet-warm-white transition-colors">

              {isMoreOpen ? <ChevronUpIcon className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
            </button>
            <AnimatePresence>
              {isMoreOpen &&
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-full mb-3 right-0 w-48 bg-chalet-rich-black border border-chalet-charcoal rounded-lg p-2 text-left">

                  {secondaryLinks.map((link) =>
                link.href ?
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 text-sm text-chalet-cream/80 hover:text-chalet-warm-white rounded-md hover:bg-chalet-charcoal transition-colors">

                        {link.name}
                      </a> :

                <Link
                  key={link.name}
                  to={link.path!}
                  className="block px-4 py-2.5 text-sm text-chalet-cream/80 hover:text-chalet-warm-white rounded-md hover:bg-chalet-charcoal transition-colors">

                        {link.name}
                      </Link>

                )}
                </motion.div>
              }
            </AnimatePresence>
          </div>

          <a
            href={RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 px-5 py-2 bg-chalet-warm-white text-chalet-black text-sm font-medium tracking-wide rounded-full hover:bg-chalet-cream transition-colors uppercase">

            Book a Table
          </a>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="sm:hidden fixed inset-0 z-30 bg-chalet-black/98 backdrop-blur-md flex flex-col items-center justify-center space-y-5 overflow-y-auto py-24">

            {[...primaryLinks, ...secondaryLinks].map((link) =>
          'href' in link && link.href ?
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl tracking-wide text-chalet-cream/90"
            onClick={() => setIsMobileMenuOpen(false)}>

                  {link.name}
                </a> :

          <Link
            key={link.name}
            to={(link as { path: string }).path}
            className={`text-2xl tracking-wide ${location.pathname === (link as { path: string }).path ? 'text-chalet-warm-white' : 'text-chalet-cream/90'}`}
            onClick={() => setIsMobileMenuOpen(false)}>

                  {link.name}
                </Link>

          )}
            <a
            href={RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-8 py-3 bg-chalet-warm-white text-chalet-black text-sm font-medium tracking-wide rounded-full uppercase">

              Book a Table
            </a>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}
