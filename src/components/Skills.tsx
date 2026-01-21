'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '@/Constants';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const Skills: React.FC = () => {
  const experiences = [
    {
      role: "Junior Full Stack Web Developer",
      company: "Digiigrow",
      period: "NOv 2025 - Present",
      desc: "At DigiiGrow, I working as a Full Stack Web Developer. Contributing to 2 major products. One is a matrimony application focused on user matching and engagement, and the other was MediGrow, a healthcare platform similar to Practo."
    },
    {
      role: "Full Stack Web Developer Intern",
      company: "Better website4U",
      period: "Sep 2025 - Nov 2025",
      desc: "At Better Website4U, I worked as a Full Stack Web Developer Intern, where I built a complete ticket-based exclusive winning platform for the company."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-20">
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-zinc-900 dark:text-white">Expertise<span className="text-amber-500">.</span></h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl">A curated stack of technologies I use to build scalable, resilient, and high-converting digital infrastructures.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Left: Skills Grid */}
        <div className="lg:col-span-8 space-y-16">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={cat.title}>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-zinc-900 dark:text-white">
                <span className="w-1.5 h-8 bg-amber-500 rounded-full"></span>
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {cat.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-6 rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center gap-4 text-center shadow-sm"
                  >
                    <div className="text-4xl">{skill.icon}</div>
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Experience & Timeline */}
        <div className="lg:col-span-4 space-y-12">
          <div className="p-10 rounded-[2.5rem] bg-amber-500 text-white shadow-xl shadow-amber-500/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Briefcase size={28} /> Experience 6M +
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-6 border-l border-white/30">
                  <div className="absolute top-0 -left-1.5 w-3 h-3 rounded-full bg-white"></div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-200 mb-1">{exp.period}</p>
                  <h4 className="font-bold text-lg leading-tight mb-1">{exp.role}</h4>
                  <p className="text-xs opacity-90 mb-3">{exp.company}</p>
                  <p className="text-sm opacity-80 leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <GraduationCap size={28} /> Education
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-zinc-900 dark:text-white">B.Sc. Information Technology</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Sahyog Collage • 2021-2024</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">SGPA • 9.35</p>
              </div>
              {/* <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
                <h4 className="font-bold">Full Stack web developer</h4>
                
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
