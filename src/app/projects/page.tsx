'use client';

import { motion } from 'framer-motion';
import Projects from '@/components/Projects';

export default function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="pt-32 pb-20 min-h-screen bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-6xl font-black mb-4 text-zinc-900 dark:text-white">Portfolio<span className="text-amber-500">.</span></h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-16 max-w-2xl">A comprehensive list of my professional works, ranging from enterprise architecture to creative UI experiments.</p>
        <Projects />
      </div>
    </motion.div>
  );
}
