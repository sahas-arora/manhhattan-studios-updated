import { useCallback, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Button, TextLink } from '@/components/Button';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal, ParallaxImage } from '@/components/Reveal';
// import { Marquee } from '@/components/Marquee';
import { images } from '@/data/images';
import { projects } from '@/data/projects';
import { services } from '@/data/services';
import { testimonials } from '@/data/content';
import { processSteps } from '@/data/content';
import { siteInfo } from '@/data/siteInfo';

const easePremium = [0.22, 1, 0.36, 1] as const;

function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const heroImages = images.hero;
  const total = heroImages.length;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 6000);

    return () => clearInterval(interval);
  }, [total]);

  return (
    <section data-hero className="relative h-[100svh] w-full overflow-hidden bg-dark">
      <AnimatePresence mode="popLayout">
        {heroImages.map((src, i) =>
          i === current ? (
            <motion.div
              key={i}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8, ease: easePremium }}
            >
              <img
                src={src}
                alt={`Luxury interior ${i + 1}`}
                className="kenburns h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-10">
        <div className="mx-auto max-w-[1600px] w-full">
          <motion.h1
            className=" font-serif font-light text-canvas text-balance"
            style={{ fontSize: 'clamp(2.25rem, 6vw, 5rem)', lineHeight: 1.05, textAlign: 'center' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: easePremium }}
          >
            Luxury interiors,{' '}
            designed and delivered as one.
          </motion.h1>

          <motion.p
            className="mt-8 text-base leading-relaxed text-canvas/100"
            style={{ fontSize: 'clamp(1.25rem, 3vw, 0.75rem)', textAlign: "center" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: easePremium }}
          >
            Residential interiors, turnkey solutions and modern styling across
            Delhi NCR &amp; Gurugram.
          </motion.p>

          {/* <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: easePremium }}
          >
            <Button to="/projects" variant="solid">
              View Projects
            </Button>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-canvas/40 py-4 px-8 text-xs uppercase tracking-[0.2em] text-canvas transition-all duration-500 ease-premium hover:bg-canvas hover:text-ink"
            >
              Start a Conversation
            </Link>
          </motion.div> */}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="mx-auto flex max-w-[1600px] items-end justify-between px-6 pb-8 md:px-10">
          <div className="flex items-center gap-3 text-canvas/60">
            <ArrowDown className="h-4 w-4 animate-bounce" />
            <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          </div>
          <p className="font-serif text-sm tracking-[0.2em] text-canvas/60">
            {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </p>
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="py-24 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow">The Studio</p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <p
                className="font-serif font-light text-ink text-balance"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', lineHeight: 1.3 }}
              >
                We design homes that are quiet, considered and built to be lived
                in. From the first sketch to the final styling, one team holds
                the entire project, so nothing gets lost between the drawing
                and the door handle.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10">
                <TextLink to="/about">More about us</TextLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesStrip() {
  return (
    <section className="border-y border-hairline py-20 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-1 divide-y divide-hairline md:grid-cols-3 md:divide-x md:divide-y-0">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              className="group relative px-0 py-10 md:px-10 md:py-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: easePremium }}
            >
              <Link
                to="/services"
                className="block"
                data-cursor="view"
              >
                <div className="flex items-start gap-6">
                  <span className="font-serif text-lg text-bronze">
                    {service.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl text-ink md:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {service.shortDescription}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted transition-colors duration-300 group-hover:text-bronze">
                      <span className="relative">
                        Learn more
                        <span className="absolute left-0 -bottom-1 h-px w-0 bg-bronze transition-all duration-500 ease-premium group-hover:w-full" />
                      </span>
                      <ArrowRight className="h-3 w-3 transition-transform duration-500 ease-premium group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EditorialProjectStory({
  project,
  index,
  onActive,
}: {
  project: (typeof projects)[number];
  index: number;
  onActive: (index: number) => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, {
    amount: 0.5,
    margin: '-18% 0px -30% 0px',
  });

  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <article
      ref={ref}
      className="flex min-h-[68vh] flex-col justify-center border-t border-hairline py-16 first:border-t-0 md:min-h-[72vh] md:py-20"
    >
      <div className="mb-8 flex items-center justify-between gap-6">
        <span className="editorial-index">{String(index + 1).padStart(2, '0')}</span>
        <span className="eyebrow">{project.category}</span>
      </div>

      <Link to={`/projects/${project.slug}`} data-cursor="view" className="group block">
        <h3
          className="font-serif font-normal text-ink transition-opacity duration-500 group-hover:opacity-70"
          style={{ fontSize: 'clamp(2.25rem, 4.5vw, 4.7rem)', lineHeight: 0.98, letterSpacing: '-0.035em' }}
        >
          {project.title}
        </h3>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-7">
            <p className="max-w-xl text-[0.88rem] leading-[1.85] text-muted">
              {project.brief}
            </p>
          </div>
          <div className="md:col-span-5 md:border-l md:border-hairline md:pl-6">
            <div className="grid grid-cols-2 gap-y-4">
              <div>
                <p className="eyebrow mb-2">Location</p>
                <p className="text-sm text-ink">{project.location}</p>
              </div>
              <div>
                <p className="eyebrow mb-2">Year</p>
                <p className="text-sm text-ink">{project.year}</p>
              </div>
              <div>
                <p className="eyebrow mb-2">Size</p>
                <p className="text-sm text-ink">{project.size}</p>
              </div>
              <div>
                <p className="eyebrow mb-2">Scope</p>
                <p className="text-sm text-ink">{project.scope}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-9 inline-flex items-center gap-3 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-ink">
          <span>View project</span>
          <span className="h-px w-10 bg-bronze transition-all duration-500 ease-premium group-hover:w-16" />
        </div>
      </Link>
    </article>
  );
}

function SelectedWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const featuredProjects = projects.slice(0, 4);

  const handleActive = useCallback((index: number) => setActiveIndex(index), []);

  return (
    <>
      <section className="section-rule hidden md:block">
        <div className="mx-auto max-w-[1680px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-7 py-12">
              <div className="sticky top-[82px] h-[calc(100vh-114px)] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={featuredProjects[activeIndex].slug}
                    initial={{ opacity: 0, scale: 1.025 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.99 }}
                    transition={{ duration: 0.7, ease: easePremium }}
                    className="relative h-full w-full"
                  >
                    <img
                      src={featuredProjects[activeIndex].cover}
                      alt={`${featuredProjects[activeIndex].title} interior`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/65 via-ink/20 to-transparent px-8 pb-8 pt-28">
                      <div className="flex items-end justify-between gap-8 text-canvas">
                        <div>
                          <p className="editorial-kicker">Selected work</p>
                          <p className="mt-2 font-serif text-2xl italic md:text-3xl">
                            {featuredProjects[activeIndex].title}
                          </p>
                        </div>
                        <p className="text-right text-[0.58rem] uppercase tracking-[0.2em] text-canvas/70">
                          {featuredProjects[activeIndex].location}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="col-span-5 py-12">
              <div className="mb-2 flex items-end justify-between pb-8">
                <div>
                  <p className="eyebrow">Selected Work</p>
                  <h2 className="mt-4 max-w-sm font-serif text-4xl font-normal leading-none tracking-[-0.03em] lg:text-5xl">
                    Spaces with a point of view.
                  </h2>
                </div>
                <TextLink to="/projects" className="mb-1 hidden lg:inline-flex">All projects</TextLink>
              </div>

              {featuredProjects.map((project, index) => (
                <EditorialProjectStory
                  key={project.slug}
                  project={project}
                  index={index}
                  onActive={handleActive}
                />
              ))}

              <div className="border-t border-hairline pt-8 lg:hidden">
                <TextLink to="/projects">All projects</TextLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-rule py-20 md:hidden">
        <div className="px-6">
          <p className="eyebrow">Selected Work</p>
          <h2 className="mt-4 max-w-sm font-serif text-4xl font-normal leading-none tracking-[-0.03em]">
            Spaces with a point of view.
          </h2>

          <div className="mt-10 space-y-12">
            {featuredProjects.map((project, index) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                data-cursor="view"
                className="group block"
              >
                <div className="overflow-hidden" style={{ aspectRatio: '4 / 5' }}>
                  <img
                    src={project.cover}
                    alt={`${project.title} interior`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-premium group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <p className="font-serif text-2xl leading-none">{project.title}</p>
                    <p className="mt-2 text-[0.58rem] uppercase tracking-[0.2em] text-muted">
                      {project.location}
                    </p>
                  </div>
                  <span className="editorial-index">{String(index + 1).padStart(2, '0')}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <TextLink to="/projects">View all projects</TextLink>
          </div>
        </div>
      </section>
    </>
  );
}

function ProcessSection() {
  return (
    <section className="py-24 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <SectionHeading
          eyebrow="Process"
          title={
            <>
              From first sketch to{' '}
              <span className="italic">final styling.</span>
            </>
          }
          className="mb-20"
        />
        <div className="relative">
          <div className="absolute left-0 right-0 top-[40px] hidden h-px bg-hairline md:block">
            <motion.div
              className="h-full bg-bronze origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-200px' }}
              transition={{ duration: 2, ease: easePremium }}
            />
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: easePremium }}
              >
                <div className="relative mb-6 flex items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-hairline bg-canvas">
                    <span className="font-serif text-2xl text-bronze">
                      {step.number}
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-xl text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureBlock() {
  const stats = [
    { value: siteInfo.stats.homes, label: 'Homes delivered' },
    { value: siteInfo.stats.years, label: 'Years of practice' },
    { value: siteInfo.stats.craftspeople, label: 'In-house craftspeople & partners' },
  ];

  return (
    <section className="bg-dark py-24 text-dark-text md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: easePremium }}
            >
              <p className="eyebrow mb-6 text-dark-text/50">Why Turnkey</p>
              <h2
                className="font-serif font-light text-balance"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}
              >
                One studio.{' '}
                <span className="italic text-bronze">One accountable team.</span>
              </h2>
              <p className="mt-8 max-w-lg text-sm leading-relaxed text-dark-text/70">
                Turnkey means a single point of responsibility for design,
                procurement, execution and styling. There is no gap between the
                drawing and the build, no finger-pointing between contractors,
                and no detail that falls through the cracks. We hold the project
                from the first conversation to the final styled photograph.
              </p>
            </motion.div>

            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2, ease: easePremium }}
                >
                  <p className="font-serif text-4xl text-bronze md:text-5xl">
                    {stat.value}
                    {stat.label.includes('Homes') || stat.label.includes('craftspeople') ? '+' : ''}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.15em] leading-relaxed text-dark-text/50">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <ParallaxImage
              src={images.darkSection}
              alt="Elegant contemporary interior with warm lighting"
              className="h-[400px] md:h-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-12">Client Words</p>
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: easePremium }}
            >
              <p
                className="font-serif font-light text-ink text-balance"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', lineHeight: 1.3 }}
              >
                "{testimonials[current].quote}"
              </p>
              <footer className="mt-8">
                <p className="text-sm font-medium text-ink">
                  {testimonials[current].name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
                  {testimonials[current].locality}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-12 flex justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-500 ${i === current ? 'w-8 bg-bronze' : 'w-2 bg-hairline'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InstagramStrip() {
  return (
    <section className="border-t border-hairline py-20 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-12 flex items-end justify-between">
          <p className="eyebrow">Instagram</p>
          <a
            href={siteInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-ink"
          >
            <span className="relative">
              Follow {siteInfo.instagramHandle}
              <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-bronze transition-all duration-500 ease-premium group-hover:w-full" />
            </span>
            <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-premium group-hover:translate-x-1" />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
          {images.instagram.map((src, i) => (
            <a
              key={i}
              href={siteInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden"
              style={{ aspectRatio: '1 / 1' }}
            >
              <img
                src={src}
                alt={`Instagram post ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-premium group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-500 group-hover:bg-ink/30" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="border-t border-hairline py-24 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-col items-center text-center">
          <motion.h2
            className="font-serif font-light text-ink text-balance"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.1 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: easePremium }}
          >
            Planning a new home or a{' '}
            <span className="italic">renovation?</span>
          </motion.h2>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: easePremium }}
          >
            <Button to="/contact" variant="solid">
              Start a Conversation
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Seo
        title="Manhhattan Studios — Luxury Residential Interiors | Delhi NCR & Gurugram"
        description="Manhhattan Studios designs and delivers luxury residential interiors across Delhi NCR and Gurugram. Turnkey solutions, modern styling, and bespoke homes — one team, one accountability."
        path="/"
      />
      <HeroSlideshow />
      <IntroSection />
      <ServicesStrip />
      <SelectedWork />
      {/* <SelectedWorkMobile /> */}
      <ProcessSection />
      <FeatureBlock />
      <Testimonials />
      <InstagramStrip />
      <CtaBand />
    </>
  );
}
