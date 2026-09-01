import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { usePageTitle } from '../hooks/usePageTitle';

// Placeholder quotes — replace with real guest reviews before launch.
const testimonials = [
{
  quote: 'An extraordinary dining experience. The wine list was impeccable and the ambiance is unmatched.',
  name: 'Sarah M.'
},
{
  quote: 'Le Petit Chalet has become our go-to for special occasions. Every visit feels like a celebration.',
  name: 'James K.'
},
{
  quote: 'Weekend brunch here is unbeatable — great food in a beautiful, relaxed setting.',
  name: 'Amara O.'
}];

export function ReviewsPage() {
  usePageTitle('Reviews | Le Petit Chalet');
  return (
    <PageTransition>
      <main className="flex-grow bg-chalet-black text-chalet-cream">
        {/* Hero Banner */}
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/done_5.webp"
              alt="Le Petit Chalet table setting"
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

        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.2, duration: 0.5 }}
              className="bg-chalet-charcoal p-10 rounded-sm relative">

                <div className="flex justify-center mb-6 space-x-1">
                  {[...Array(5)].map((_, j) =>
                <StarIcon key={j} className="w-5 h-5 text-chalet-amber fill-chalet-amber" />
                )}
                </div>
                <p className="text-chalet-cream/90 italic mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <p className="font-display text-chalet-amber text-lg">
                  — {testimonial.name}
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </main>
    </PageTransition>);

}
