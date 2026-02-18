'use client';

import { TEAM_MEMBERS } from '@/app/data/constants';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export const Team = () => {
  return (
    <section
      id="team"
      className="py-24 bg-[#1C1C1C] relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="CORE TEAM" subtitle="Meet The Builders" />

        <div className="flex flex-wrap justify-center gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] group text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#10F480] transition-all duration-300">
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = `https://placehold.co/400x400/222/10F480?text=${member.name.charAt(0)}`;
                    }}
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white font-mono">
                {member.name}
              </h3>
              <p className="text-[#10F480] text-sm font-mono mb-3">
                {member.role}
              </p>

              <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={member.linkedin}
                  className="text-gray-400 hover:text-white"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
