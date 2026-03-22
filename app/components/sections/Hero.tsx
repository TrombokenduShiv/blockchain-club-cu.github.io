'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { InteractiveGrid } from '../ui/InteractiveGrid';
import { ScrambleText } from '../ui/ScrambleText';

export const Hero = () => {
  return (
    // 1. Fix main background text
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <InteractiveGrid />

        {/* 2. FIX: Gradient now fades to WHITE in light mode and BLACK in dark mode */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-[#1C1C1C] dark:via-transparent dark:to-[#1C1C1C] pointer-events-none"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#10F480]/10 rounded-full blur-[100px] pointer-events-none translate-z-0"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        <div className="flex flex-col items-center text-center space-y-8 w-full max-w-5xl">
          {/* 3. FIX: Text color is now dark gray in light mode */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white font-mono leading-tight">
            <div className="flex flex-col items-center">
              <span className="block mb-2 lg:mb-4">
                <ScrambleText text="BLOCKCHAIN" delay={100} speed={1} />
              </span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10F480] to-teal-400 block">
                <ScrambleText text="CLUB CU" delay={600} speed={1} />
              </span>
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            // 4. FIX: Description text color
            className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light px-4"
          >
            <ScrambleText
              text="A student-led community focused on learning Blockchain and Web3 from fundamentals to real-world use."
              delay={1000}
              speed={3}
            />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-8 w-full"
          >
            <a
              href="https://chat.whatsapp.com/CXY53ovXAas7bWBfwRnEsa?utm_source=website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="group relative px-8 py-4 bg-[#10F480] text-[#1C1C1C] font-bold font-mono rounded hover:bg-[#0dd66f] transition-all duration-300 overflow-hidden w-full sm:w-auto text-center shadow-[0_0_20px_rgba(16,244,128,0.3)] hover:shadow-[0_0_30px_rgba(16,244,128,0.5)]">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  REGISTER NOW
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
                <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out skew-y-12"></div>
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
