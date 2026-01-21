import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />
      <section id="projects" className="py-24 px-4 max-w-7xl mx-auto bg-white dark:bg-black">
        <div className="flex flex-col mb-16">
          <h2 className="text-amber-500 mono font-medium mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-amber-500"></span>Case Studies
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Selected <span className="text-zinc-400 dark:text-zinc-500">Works.</span>
          </h3>
        </div>
        <Projects limit={3} />
        <div className="mt-16 text-center">
          <Link 
            href="/projects"
            className="px-8 py-4 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-amber-500 transition-colors font-bold inline-block text-zinc-900 dark:text-zinc-50"
          >
            View All Projects
          </Link>
        </div>
      </section>
    </>
  );
}
