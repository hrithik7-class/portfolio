import React from 'react';
import { SOCIAL_LINKS } from '@/Constants';
import { Terminal } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-4 border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-center md:text-left">
          <a href="#" className="flex items-center gap-2 text-2xl font-black tracking-tighter justify-center md:justify-start text-zinc-900 dark:text-white">
             <div className="p-1.5 bg-amber-500 rounded-lg">
                <Terminal size={20} className="text-white" />
              </div>
            <span>Hrithik<span className="text-amber-500">.</span>DEV</span>
          </a>
          <p className="text-zinc-500 dark:text-zinc-400 mt-4 text-sm max-w-xs leading-relaxed">
            Crafting resilient digital infrastructures and high-converting user experiences.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white
                 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600
                  dark:text-zinc-400 hover:text-amber-500 hover:border-amber-500/50 transition-all 
                  shadow-sm"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.2em]">Connect via socials</p>
        </div>

        <div className="text-center md:text-right space-y-2">
          <p className="text-sm font-bold mono text-zinc-400 dark:text-zinc-600">
            &copy; {new Date().getFullYear()} DESIGNED & CODED BY JD.
          </p>
          <p className="text-[10px] text-zinc-400 mono">SAN FRANCISCO / REMOTE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
