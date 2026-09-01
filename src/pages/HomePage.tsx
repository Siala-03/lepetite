import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { usePageTitle } from '../hooks/usePageTitle';

const slides = [
{ word: 'welcome', img: '/done_4.webp', alt: 'Le Petit Chalet venue' },
{ word: 'discover', img: '/done_1.webp', alt: 'Le Petit Chalet interior' },
{ word: 'experience', img: '/DSC_8450.webp', alt: 'Le Petit Chalet signature dish' },
{ word: 'taste', img: '/DSC_8433.webp', alt: 'Le Petit Chalet signature dish' },
{ word: 'savour', img: '/done_7.webp', alt: 'Le Petit Chalet wine collection' }];


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
