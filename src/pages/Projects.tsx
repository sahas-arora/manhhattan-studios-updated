import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Seo } from '@/components/Seo';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeading } from '@/components/SectionHeading';
import { projects, projectFilters } from '@/data/projects';
import type { ProjectCategory } from '@/data/projects';

const easePremium = [0.22, 1, 0.36, 1] as const;

export default function Projects() {
  const [filter, setFilter] = useState<'All' | ProjectCategory>('All');

  const filtered =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <>
      <Seo
        title="Projects — Manhhattan Studio | Luxury Interiors in Gurugram"
        description="Explore selected residential interior projects by Manhhattan Studio across Gurugram and Delhi NCR — penthouses, villas, apartments and styling commissions."
        path="/projects"
      />

      <section className="pt-32 md:pt-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <SectionHeading
            eyebrow="Selected Work"
            title={
              <>
                Homes we have{' '}
                <span className="italic">designed and delivered.</span>
              </>
            }
          />

          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-b border-hairline pb-5">
            {projectFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative pb-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${filter === f ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
              >
                {f}
                <span
                  className={`absolute bottom-0 left-0 h-px bg-bronze transition-all duration-500 ease-premium ${filter === f ? 'w-full' : 'w-0'
                    }`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <motion.div layout className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: easePremium }}
                >
                  <ProjectCard project={project} index={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
