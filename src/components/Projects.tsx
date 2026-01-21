'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { PROJECTS } from '@/Constants';
import Link from 'next/link';
import Image from 'next/image';

const Projects: React.FC<{ limit?: number }> = ({ limit }) => {
  const displayedProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {displayedProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="group flex flex-col h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] overflow-hidden hover:border-amber-500/40 transition-all duration-500"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              width={500}
              height={500}
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div className="flex gap-4">
                <Link href={project.github!} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-amber-500 transition-colors">
                  <Github size={20} />
                </Link>
                <Link href={project.link!} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-amber-500 transition-colors">
                  <ExternalLink size={20} />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="p-8 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white group-hover:text-amber-500 transition-colors">
              {project.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-500 rounded-lg border border-zinc-200 dark:border-zinc-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
            <motion.a 
              href={project.link}
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 dark:text-amber-500 hover:gap-4 transition-all"
            >
              Case Study <ArrowRight size={16} />
            </motion.a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
