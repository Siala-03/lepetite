import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { WHATSAPP_NUMBER } from '../config/contact';
export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 animate-pulse hover:animate-none group"
      aria-label="Chat with us on WhatsApp">

      <WhatsAppIcon className="w-7 h-7" />
      <span className="absolute right-full mr-4 px-3 py-1.5 bg-chalet-rich-black text-chalet-cream text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-chalet-charcoal">
        Chat with us
      </span>
    </a>);

}