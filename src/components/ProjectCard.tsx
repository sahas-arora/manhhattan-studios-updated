import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
  className?: string;
}

export function ProjectCard({ project, index = 0, className = '' }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      data-cursor="view"
      className={`group block ${className}`}
    >
      <div className="relative overflow-hidden bg-alt" style={{ aspectRatio: '4 / 5' }}>
        <motion.img
          src={project.thumbnail}
          alt={`${project.title} — ${project.location}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.4s] ease-premium group-hover:scale-[1.035]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        <span className="absolute left-5 top-5 text-[0.58rem] font-medium tracking-[0.2em] text-canvas mix-blend-difference">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="mt-5 flex items-start justify-between gap-6 border-b border-hairline pb-5">
        <div>
          <h3 className="font-serif text-[1.45rem] font-normal leading-none tracking-[-0.02em] text-ink transition-opacity duration-500 group-hover:opacity-65">
            {project.title}
          </h3>
          <p className="mt-2 text-[0.58rem] uppercase tracking-[0.2em] text-muted">
            {project.typology}
          </p>
        </div>
        <p className="pt-1 text-right text-[0.58rem] uppercase tracking-[0.16em] text-muted">
          {project.location}
        </p>
      </div>
    </Link>
  );
}
