'use client';

import { motion } from 'framer-motion';
import Skills from '@/components/Skills';

export default function SkillsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="pt-32 pb-20 min-h-screen bg-white dark:bg-black"
    >
      <Skills />
    </motion.div>
  );
}
