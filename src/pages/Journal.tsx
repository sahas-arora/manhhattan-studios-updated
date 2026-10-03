import { motion } from 'framer-motion';
import { Seo } from '@/components/Seo';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { TextLink } from '@/components/Button';

const journalEntries = [
  {
    title: 'On the quiet authority of natural materials',
    excerpt:
      'Why we choose oak that deepens, stone that quiets, and linen that softens — and why the way a material ages matters more than how it looks on day one.',
    date: 'September 2025',
    category: 'Materials',
  },
  {
    title: 'The turnkey model, explained honestly',
    excerpt:
      'What single-point accountability actually means in practice — and why it changes the relationship between designer and client.',
    date: 'August 2025',
    category: 'Process',
  },
  {
    title: 'Lighting a home for the way you actually live',
    excerpt:
      'A note on layered lighting: why we remove overhead fixtures in favour of indirect sources, and what it does to a room.',
    date: 'July 2025',
    category: 'Design Notes',
  },
];

export default function Journal() {
  return (
    <>
      <Seo
        title="Journal — Manhattan Studios | Design Notes & Thinking"
        description="Notes on materials, process and residential interior design from Manhattan Studios, a luxury interior design studio in Gurugram."
        path="/journal"
      />

      <section className="pt-32 md:pt-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <SectionHeading
            eyebrow="Journal"
            title={
              <>
                Notes on materials,{' '}
                <span className="italic">process and craft.</span>
              </>
            }
          />
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
              Occasional writing from the studio on the ideas that shape our
              work — from how we choose materials to why we build turnkey.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="divide-y divide-hairline border-t border-hairline">
            {journalEntries.map((entry, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:gap-10"
              >
                <div className="md:col-span-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-bronze">
                    {entry.category}
                  </p>
                  <p className="mt-2 text-xs text-muted">{entry.date}</p>
                </div>
                <div className="md:col-span-8">
                  <h3 className="font-serif text-2xl text-ink md:text-3xl">
                    {entry.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
                    {entry.excerpt}
                  </p>
                </div>
                <div className="flex items-start md:col-span-2 md:justify-end">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted transition-colors group-hover:text-bronze">
                    Read →
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
