import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { RevealImage, ParallaxImage, Reveal } from '@/components/Reveal';
import { getProject, getNextProject } from '@/data/projects';
// import { TextLink } from '@/components/Button';

const easePremium = [0.22, 1, 0.36, 1] as const;

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const nextProject = getNextProject(slug!);

  const metaItems = [
    { label: 'Location', value: project.location },
    { label: 'Size', value: project.size },
    { label: 'Year', value: project.year },
    { label: 'Scope', value: project.scope },
    { label: 'Photography', value: project.photography },
  ];

  return (
    <>
      <Seo
        title={`${project.title} — Manhhattan Studio | ${project.location}`}
        description={`${project.title}: ${project.typology}. ${project.brief.substring(0, 140)}...`}
        path={`/projects/${project.slug}`}
        image={project.cover}
      />

      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-dark">
        <motion.img
          src={project.cover}
          alt={`${project.title} — ${project.location}`}
          className="h-full w-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: easePremium }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 to-ink/50" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto max-w-[1600px] px-6 pb-12 md:px-10 md:pb-20">
            <motion.p
              className="eyebrow mb-4 text-canvas/60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: easePremium }}
            >
              {project.category}
            </motion.p>
            <motion.h1
              className="font-serif font-light text-canvas text-balance"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: easePremium }}
            >
              {project.title}
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline py-12">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {metaItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: easePremium }}
              >
                <p className="eyebrow mb-2">{item.label}</p>
                <p className="text-sm text-ink">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow mb-4">The Brief</p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal>
                <p
                  className="font-serif font-light text-ink text-balance"
                  style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)', lineHeight: 1.4 }}
                >
                  {project.brief}
                </p>
              </Reveal>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow mb-4">The Approach</p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal>
                <p className="max-w-2xl text-sm leading-relaxed text-muted">
                  {project.approach}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8 pb-24 md:space-y-12 md:pb-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          {project.gallery.map((img, i) => {
            if (img.layout === 'full') {
              return (
                <ParallaxImage
                  key={i}
                  src={img.url}
                  alt={img.alt}
                  className="h-[400px] md:h-[600px]"
                />
              );
            }
            // For pair images, render the current one alongside the next pair image
            const nextImg = project.gallery[i + 1];
            if (nextImg && nextImg.layout === 'pair') {
              return (
                <div key={i} className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <RevealImage
                    src={img.url}
                    alt={img.alt}
                    className="h-[300px] md:h-[450px]"
                  />
                  <RevealImage
                    src={nextImg.url}
                    alt={nextImg.alt}
                    className="h-[300px] md:h-[450px]"
                    delay={0.15}
                  />
                </div>
              );
            }
            // Skip if this pair image was already rendered as part of the previous pair
            const prevImg = project.gallery[i - 1];
            if (prevImg && prevImg.layout === 'pair') {
              return null;
            }
            return (
              <RevealImage
                key={i}
                src={img.url}
                alt={img.alt}
                className="h-[300px] md:h-[450px]"
              />
            );
          })}
        </div>
      </section>

      <section className="border-y border-hairline py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <Reveal>
            <p
              className="font-serif font-light italic text-ink text-balance"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.3 }}
            >
              "{project.pullQuote}"
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative">
        <Link
          to={`/projects/${nextProject.slug}`}
          data-cursor="view"
          className="group block"
        >
          <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
            <img
              src={nextProject.cover}
              alt={`${nextProject.title} — ${nextProject.location}`}
              className="h-full w-full object-cover transition-transform duration-[1.5s] ease-premium group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink/40 transition-colors duration-500 group-hover:bg-ink/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="eyebrow mb-4 text-canvas/60">Next Project</p>
              <h2
                className="font-serif font-light text-canvas text-balance"
                style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.05 }}
              >
                {nextProject.title}
              </h2>
              <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-canvas/80">
                View Project
                <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-premium group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}
