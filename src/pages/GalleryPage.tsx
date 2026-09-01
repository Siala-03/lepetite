import React from 'react';
import { motion } from 'framer-motion';
import { InstagramIcon, ArrowRightIcon } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { usePageTitle } from '../hooks/usePageTitle';

const galleryImages = [
{ src: '/lepetitchalet-chef-flambe.jpeg', alt: 'Chef flambéing a dish' },
{ src: '/lepetitchalet-steak-plated.jpeg', alt: 'Plated steak' },
{ src: '/lepetitchalet-onion-soup.jpeg', alt: 'Classic French onion soup' },
{ src: '/lepetitchalet-caesar-salad.jpeg', alt: 'Caesar salad' },
{ src: '/lepetitchalet-sticky-date.jpeg', alt: 'Sticky date pudding' },
{ src: '/lepetitchalet-medallions.jpeg', alt: "Chef's plate" },
{ src: '/lepetitchalet-dinner-table.jpeg', alt: 'Guests dining at Le Petit Chalet' },
{ src: '/lepetitchalet-salmon-table.jpeg', alt: 'Salmon dish at the table' },
{ src: '/lepetitchalet-wings.jpeg', alt: 'Chili glazed chicken wings' },
{ src: '/lepetitchalet-chef.jpg', alt: 'Our Executive Chef' }];


export function GalleryPage() {
  usePageTitle('Gallery | Le Petit Chalet');
  return (
    <PageTransition>
      <main className="flex-grow bg-chalet-black text-chalet-cream">
        {/* Hero Banner */}
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/lepetitchalet-terrace-day.jpg"
              alt="Le Petit Chalet"
              className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-chalet-black/70 backdrop-blur-sm"></div>
          </div>
          <div className="relative z-10 text-center px-4 mt-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-5xl md:text-6xl text-chalet-warm-white mb-4">

              Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-chalet-amber tracking-widest uppercase text-sm">

              A glimpse inside Le Petit Chalet
            </motion.p>
          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {galleryImages.map((img, idx) =>
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 5) * 0.08 }}
              className="relative aspect-square overflow-hidden group rounded-sm">

                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-chalet-black/0 group-hover:bg-chalet-black/40 transition-colors duration-500"></div>
              </motion.div>
            )}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.instagram.com/lepetitchalet_rwanda/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-chalet-amber hover:text-chalet-honey transition-colors group tracking-wide uppercase text-sm font-medium">

              <InstagramIcon className="w-4 h-4 mr-2" />
              Follow @lepetitchalet_rwanda
              <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>
      </main>
    </PageTransition>);

}
