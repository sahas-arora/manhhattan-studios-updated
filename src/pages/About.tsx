import { motion } from 'framer-motion';
import { Seo } from '@/components/Seo';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal, ParallaxImage, RevealImage, fadeUp, staggerContainer } from '@/components/Reveal';
import { TextLink } from '@/components/Button';
import { values, team } from '@/data/content';
import { siteInfo } from '@/data/siteInfo';
import { images } from '@/data/images';

const easePremium = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <>
      <Seo
        title="About — Manhhattan Studio | Interior Design Studio in Gurugram"
        description="Manhhattan Studio is a luxury residential interior design studio based in Gurugram, serving Delhi NCR. Meet the team and learn the philosophy behind our turnkey approach."
        path="/about"
      />

      <section className="pt-32 md:pt-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-6">The Studio</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1
                  className="font-serif font-light text-ink text-balance"
                  style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: 1.05 }}
                >
                  A studio built on{' '}
                  <span className="italic">restraint</span> and{' '}
                  <span className="italic">accountability.</span>
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.2}>
                <p className="text-sm leading-relaxed text-muted">
                  Manhhattan Studio was founded in {siteInfo.founded} with a
                  simple conviction: that the best interiors are the ones you do
                  not notice at first. Based in Gurugram, we design and deliver
                  luxury residential interiors across Delhi NCR — from compact
                  apartments to independent villas — under a single turnkey
                  model that puts one team in charge of everything.
                </p>
                <p className="mt-6 text-sm leading-relaxed text-muted">
                  We are not a large practice, and we do not want to be. We take
                  on a limited number of projects each year so that every home
                  receives the attention it deserves. Our in-house team of
                  designers, craftspeople and project managers work side by
                  side, which means the person who draws the detail is often the
                  one who builds it.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
            <ParallaxImage
              src={images.livingRoom.wide}
              alt="Elegant living room interior"
              className="h-[300px] md:col-span-7 md:h-[500px]"
            />
            <div className="grid grid-cols-1 gap-4 md:col-span-5 md:grid-rows-2 md:gap-6">
              <RevealImage
                src={images.staircase}
                alt="Minimalist staircase"
                className="h-[200px] md:h-full"
              />
              <RevealImage
                src={images.bedroom.tall}
                alt="Warm bedroom interior"
                className="h-[300px] md:h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-hairline py-24 md:py-40">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <Reveal>
            <p
              className="font-serif font-light italic text-ink text-balance"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: 1.25 }}
            >
              "A home should not announce itself. It should simply feel right —
              the moment you walk in, and every day after."
            </p>
            <p className="mt-8 text-xs uppercase tracking-[0.2em] text-muted">
              — The Studio
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <SectionHeading
            eyebrow="How We Think"
            title={
              <>
                Four ideas that guide{' '}
                <span className="italic">every project.</span>
              </>
            }
            className="mb-20"
          />
          <motion.div
            className="grid grid-cols-1 gap-px bg-hairline md:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="bg-canvas p-10 md:p-12"
                variants={fadeUp}
              >
                <span className="font-serif text-lg text-bronze">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-serif text-2xl text-ink">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-t border-hairline py-24 md:py-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <SectionHeading
            eyebrow="The Team"
            title={
              <>
                The people behind{' '}
                <span className="italic">the work.</span>
              </>
            }
            className="mb-20"
          />
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: easePremium }}
              >
                <div className="overflow-hidden" style={{ aspectRatio: '3 / 4' }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-premium hover:scale-105"
                  />
                </div>
                <h3 className="mt-6 font-serif text-xl text-ink">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-bronze">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-hairline py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="flex flex-col items-center text-center">
            <h2
              className="font-serif font-light text-ink text-balance"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: 1.1 }}
            >
              Want to know{' '}
              <span className="italic">more?</span>
            </h2>
            <div className="mt-8">
              <TextLink to="/contact">Get in touch</TextLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
