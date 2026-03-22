'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, CalendarOff, Bell } from 'lucide-react'; // Added CalendarOff and Bell
import { SectionHeader } from '../ui/SectionHeader';
import { EVENTS } from '@/app/data/constants';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const Events = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Check if events exist
  const hasEvents = EVENTS && EVENTS.length > 0;

  return (
    <section
      id="events"
      className="py-24 bg-white dark:bg-[#1C1C1C] relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="UPCOMING EVENTS" subtitle="Join The Action" />

        {!hasEvents ? (
          /* ---------------- EMPTY STATE ---------------- */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center text-center py-20 px-6 border border-dashed border-black/10 dark:border-gray-200 dark:border-white/10 rounded-xl bg-white/5"
          >
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 text-gray-500">
              <CalendarOff size={32} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-mono text-gray-900 dark:text-white mb-2">
              No Upcoming Events
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
              We are currently brewing something special for the next semester.
              Join our WhatsApp community to be the first to know when we
              launch!
            </p>
            <a
              href="#contact" // Or link to your Discord/WhatsApp
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#10F480]/10 text-emerald-600 dark:text-[#10F480] border border-[#10F480]/20 rounded hover:bg-[#10F480] hover:text-black dark:hover:text-[#1C1C1C] transition-all duration-300 font-mono font-bold text-sm"
            >
              <Bell size={16} />
              Join Community
            </a>
          </motion.div>
        ) : (
          /* ---------------- EVENTS GRID ---------------- */
          <div className="grid gap-6 md:grid-cols-2">
            {EVENTS.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative border border-gray-200 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-white/5 hover:border-emerald-500 dark:hover:border-[#10F480]/50 hover:bg-white dark:hover:bg-white/10 transition-colors duration-300 shadow-sm dark:shadow-none"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10F480]/10 text-emerald-600 dark:text-[#10F480] text-xs font-mono">
                      <Calendar size={12} />
                      {event.date}
                    </div>
                    <span className="text-xs text-gray-500 font-mono border border-gray-700 px-2 py-1 rounded">
                      {event.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2 font-mono group-hover:text-emerald-600 dark:text-[#10F480] dark:group-hover:text-[#10F480] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm line-clamp-2">
                    {event.description}
                  </p>

                  <div className="flex justify-center relative h-60 w-full mb-8">
                    <Image
                      src={
                        theme === 'dark' && event.imageDarkURL
                          ? event.imageDarkURL
                          : event.imageURL
                      }
                      alt={event.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-500 font-mono mb-6">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {event.location}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      if (event.formFields && event.formFields.length > 0) {
                        window.dispatchEvent(
                          new CustomEvent('openEventPopup', {
                            detail: { eventId: event.id },
                          }),
                        );
                      } else {
                        window.open(event.link, '_blank');
                      }
                    }}
                    className="w-full py-3 border border-gray-600 dark:border-white/20 text-gray-900 dark:text-white font-mono text-sm hover:bg-[#10F480] hover:text-black dark:hover:text-[#1C1C1C] hover:border-[#10F480] transition-all duration-300 rounded"
                  >
                    REGISTER NOW
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
