'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = () => {
  const [phase, setPhase] = useState<'dropping' | 'splashing' | 'done'>('dropping');

  useEffect(() => {
    // Lock scrolling while the preloader is active
    document.body.style.overflow = 'hidden';
    
    // Start the splash (drip) effect after the drop animation finishes
    const splashTimer = setTimeout(() => {
      setPhase('splashing');
    }, 1200);

    // End the preloader sequence
    const doneTimer = setTimeout(() => {
      setPhase('done');
      document.body.style.overflow = 'unset';
    }, 2200);

    return () => {
      clearTimeout(splashTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1C1C1C] overflow-hidden"
        >
          <motion.div
            initial={{ y: "-100vh", scale: 0.5 }}
            animate={
              phase === 'dropping' 
                ? { y: 0, scale: 1 } 
                : { y: 0, scale: 150 } // Scale up to cover the entire screen
            }
            transition={
              phase === 'dropping'
                ? { type: 'spring', bounce: 0.5, duration: 1.2 }
                : { duration: 0.8, ease: "circIn" }
            }
            className="w-16 h-16 bg-[#10F480] rounded-full shadow-[0_0_40px_rgba(16,244,128,0.8)]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
