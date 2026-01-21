'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Search, ChevronRight } from 'lucide-react';
import { BLOG_POSTS } from '@/Constants';
import Image from 'next/image';
import Link from 'next/link';

const Blog: React.FC = () => {
  const featuredPost = BLOG_POSTS[0];
  const otherPosts = BLOG_POSTS.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-zinc-900 dark:text-white">Journal<span className="text-amber-500">.</span></h1>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-xl">Deep dives into software architecture, front-end performance, and the future of artificial intelligence.</p>
        </div>
        {/* <div className="w-full md:w-auto relative">
          <input 
            type="text" 
            placeholder="Search articles..." 
            className="w-full md:w-80 pl-12 pr-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:border-amber-500 outline-none transition-all shadow-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500" size={20} />
        </div> */}
      </div>

      {/* Featured Post */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="group relative mb-20 rounded-[3rem] overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl cursor-pointer"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="aspect-video lg:aspect-auto overflow-hidden">
            <Image
            height={600}
            width={600}
              src="/images/blogImg.avif" 
              alt="Featured" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              // 
            />
          </div>
          <div className="p-10 md:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1 rounded-full bg-amber-500 text-white text-xs font-bold uppercase tracking-widest">Featured</span>
              <span className="text-zinc-400 text-sm mono">{featuredPost.date}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white group-hover:text-amber-500 transition-colors leading-tight">
              {featuredPost.title}
            </h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-10 leading-relaxed">
              {featuredPost.excerpt}
            </p>
            <Link href={'https://medium.com/@kesarwaniraj11/my-oasis-infobyte-internship-a-transformative-journey-in-software-development-67c29fdf00d2'}  className="flex items-center gap-2 font-bold text-amber-500 group-hover:gap-4 transition-all">
              Read Full Article <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {BLOG_POSTS.map((post, idx) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group p-8 rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-amber-500/40 transition-all cursor-pointer shadow-sm hover:shadow-xl hover:shadow-amber-500/5 flex flex-col h-full"
          >
             <div className="flex justify-between items-start mb-8">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500/60 mono">{post.category}</span>
              <span className="text-zinc-400 text-[10px] mono">{post.date}</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white group-hover:text-amber-500 transition-colors leading-tight flex-grow">
              {post.title}
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-8 leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between pt-6 border-t border-zinc-100 dark:border-zinc-800">
              <span className="text-[10px] text-zinc-400 font-bold mono uppercase">{post.readTime}</span>
              <div className="p-2 rounded-full bg-zinc-50 dark:bg-zinc-950 group-hover:bg-amber-500 group-hover:text-white transition-all">
              <Link href={'https://medium.com/@kesarwaniraj11/my-oasis-infobyte-internship-a-transformative-journey-in-software-development-67c29fdf00d2'}> <ArrowUpRight size={18}  /></Link> 
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
