'use client';

import { TEAM_MEMBERS } from '@/app/data/constants';
import { motion } from 'framer-motion';
import { Linkedin, Users } from 'lucide-react'; // Added Users icon
import { SectionHeader } from '../ui/SectionHeader';

export const Team = () => {
  // Check if team members exist
  const hasTeam = TEAM_MEMBERS && TEAM_MEMBERS.length > 0;

  return (
    <section
      id="team"
      className="py-24 bg-white dark:bg-[#1C1C1C] relative border-t border-gray-200 dark:border-white/5 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="CORE TEAM" subtitle="Meet The Builders" />

        {!hasTeam ? (
          /* --- EMPTY STATE --- */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center text-center py-16 px-6 border border-dashed border-gray-300 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-white/5"
          >
            <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center mb-6 text-gray-400 dark:text-gray-500">
              <Users size={32} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-mono text-gray-900 dark:text-white mb-2">
              Team Information Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Our core team is currently being finalized. Stay tuned to meet the
              builders behind the Blockchain Club Chandigarh University!
            </p>
          </motion.div>
        ) : (
          /* --- TEAM GRID --- */
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
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-2 border-black/10 dark:border-white/10 group-hover:border-[#10F480] transition-all duration-300">
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
                <h3 className="text-lg font-bold text-gray-900 dark:text-white font-mono">
                  {member.name}
                </h3>
                <p className="text-emerald-600 dark:text-[#10F480] text-sm font-mono mb-3">
                  {member.role}
                </p>

                <div className="flex justify-center gap-3 transition-opacity duration-300">
                  <a
                    href={member.linkedin}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
