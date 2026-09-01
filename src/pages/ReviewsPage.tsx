import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, InstagramIcon, ArrowRightIcon } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { usePageTitle } from '../hooks/usePageTitle';

export function ReviewsPage() {
  usePageTitle('Reviews | Le Petit Chalet');
  return (
    <PageTransition>
      <main className="flex-grow bg-chalet-black text-chalet-cream">
        {/* Hero Banner */}
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/lepetitchalet-people.jpeg"
              alt="Guests on the patio at Le Petit Chalet"
              className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-chalet-black/70 backdrop-blur-sm"></div>
          </div>
          <div className="relative z-10 text-center px-4 mt-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-5xl md:text-6xl text-chalet-warm-white mb-4">

              Reviews
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-chalet-amber tracking-widest uppercase text-sm">

              What our guests say
            </motion.p>
          </div>
        </section>

        <section className="py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-chalet-charcoal border border-chalet-charcoal p-10 md:p-14 rounded-sm">

            <div className="flex justify-center mb-6 space-x-1">
              {[...Array(5)].map((_, j) =>
              <StarIcon key={j} className="w-6 h-6 text-chalet-amber fill-chalet-amber" />
              )}
            </div>
            <h2 className="font-display text-2xl md:text-3xl text-chalet-warm-white mb-4">
              We're building our guest reviews
            </h2>
            <p className="text-chalet-cream/70 leading-relaxed mb-10 max-w-xl mx-auto">
              Read what guests are saying on Google, or follow us on
              Instagram to see recent visits — and if you've dined with us,
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Le+Petit+Chalet+KG+5+Kigali+Rwanda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-chalet-warm-white text-chalet-black font-medium tracking-wider rounded-full hover:bg-chalet-cream transition-colors uppercase text-sm">

                Read Reviews on Google
                <ArrowRightIcon className="ml-2 w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/lepetitchalet_rwanda/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-chalet-amber text-chalet-amber font-medium tracking-wider rounded-full hover:bg-chalet-amber hover:text-chalet-black transition-colors uppercase text-sm">

                <InstagramIcon className="mr-2 w-4 h-4" />
                Follow on Instagram
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </PageTransition>);

}
