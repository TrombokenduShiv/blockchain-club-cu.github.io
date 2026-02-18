'use client';

import { Navbar } from './components/layout/Navbar';
import { About } from './components/sections/About';
import { Connect } from './components/sections/Contact';
import { Events } from './components/sections/Events';
import { Footer } from './components/sections/Footer';
import { Hero } from './components/sections/Hero';
import { Team } from './components/sections/Team';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1C1C1C] text-gray-900 dark:text-white selection:bg-[#10F480] selection:text-[#1C1C1C]">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Team />
      <Connect />
      <Footer />
    </div>
  );
}
