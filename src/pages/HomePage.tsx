import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { usePageTitle } from '../hooks/usePageTitle';

const slides = [
{ word: 'welcome', img: '/lepetitchalet-steak-view.webp', alt: 'Le Petit Chalet plated steak with a view over Kigali' },
{ word: 'experience', img: '/lepetitchalet-terrace-gold.webp', alt: 'Le Petit Chalet terrace at golden hour' },
{ word: 'taste', img: '/lepetitchalet-pizza.jpg', alt: 'Le Petit Chalet wood-fired pizza' },
{ word: 'savour', img: '/lepetitchalet-cocktail.jpeg', alt: 'Le Petit Chalet crafted cocktail' }];


export function HomePage() {
  usePageTitle('Le Petit Chalet | Dining & Wine in Kigali');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageTransition>
      <main className="relative h-screen w-full overflow-hidden bg-chalet-black">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="absolute inset-0">

            <img
              src={slides[index].img}
              alt={slides[index].alt}
              className="w-full h-full object-cover object-center" />

          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <AnimatePresence mode="wait">
            <motion.h1
              key={slides[index].word}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="font-hero text-outline text-center text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] font-medium leading-none lowercase">

              {slides[index].word}
            </motion.h1>
          </AnimatePresence>
        </div>
      </main>
    </PageTransition>);

}
