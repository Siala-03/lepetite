import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { usePageTitle } from '../hooks/usePageTitle';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export function OurStoryPage() {
  usePageTitle('Our Story | Le Petit Chalet');
  return (
    <PageTransition>
      <main className="flex-grow bg-chalet-black text-chalet-cream">
        {/* Hero Banner */}
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/DSC_8494.webp"
              alt="Le Petit Chalet ambiance"
              className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-chalet-black/70 backdrop-blur-sm"></div>
          </div>
          <div className="relative z-10 text-center px-4 mt-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-5xl md:text-6xl text-chalet-warm-white mb-4">

              Our Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-chalet-amber tracking-widest uppercase text-sm">

              A mountain retreat, in the heart of Kigali
            </motion.p>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              className="relative">

              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src="/done_1.webp"
                  alt="Le Petit Chalet interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-chalet-charcoal border border-chalet-amber/30 hidden md:flex items-center justify-center p-6 rounded-sm">
                <p className="font-display text-2xl text-chalet-amber text-center italic">
                  "A mountain-inspired retreat for food and wine lovers."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="space-y-8">

              <motion.div variants={fadeInUp}>
                <span className="text-chalet-amber text-sm font-bold tracking-[0.2em] uppercase">
                  Who We Are
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-chalet-warm-white mt-4 mb-6">
                  A Chalet-Inspired Kitchen & Cellar
                </h2>
                <div className="w-16 h-0.5 bg-chalet-amber mb-8"></div>
                <p className="text-chalet-cream/80 leading-relaxed mb-6">
                  Le Petit Chalet brings the warmth of a mountain lodge to
                  Kigali — a place to settle in over a slow meal, a glass of
                  wine, or a weekend brunch with friends.
                </p>
                <p className="text-chalet-cream/80 leading-relaxed">
                  Our kitchen draws on European comfort-food traditions —
                  from French onion soup to dry-aged steaks — paired with a
                  cellar of carefully chosen reds, whites, and champagnes, and
                  a bar program of house-crafted cocktails.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-chalet-charcoal">

                {[
                { label: 'Dishes', value: '50+' },
                { label: 'Wines', value: '25+' },
                { label: 'Cocktails', value: '25+' },
                { label: 'Brunch', value: 'Sat & Sun' }].
                map((stat, i) =>
                <div key={i} className="text-center sm:text-left">
                    <div className="font-display text-3xl text-chalet-amber mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-chalet-cream/60 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Cinematic break */}
        <section className="relative h-[60vh] min-h-[420px] overflow-hidden flex items-center justify-center">
          <img
            src="/done_3.webp"
            alt="Le Petit Chalet at dusk"
            className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-chalet-black/50"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 font-display italic text-2xl md:text-4xl text-chalet-warm-white text-center max-w-3xl px-6 leading-relaxed">

            "Every detail, from the pour to the plate, is crafted to be
            remembered."
          </motion.p>
        </section>
      </main>
    </PageTransition>);

}
