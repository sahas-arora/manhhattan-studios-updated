import { motion } from 'framer-motion';
import { Seo } from '@/components/Seo';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal, ParallaxImage, RevealImage } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { Accordion } from '@/components/Accordion';
import { services, faqs } from '@/data/services';

const easePremium = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  return (
    <>
      <Seo
        title="Services — Manhattan Studios | Interior Design, Turnkey & Styling"
        description="Luxury residential interiors, turnkey solutions, and modern home styling by Manhattan Studios in Gurugram and Delhi NCR. One team from design to handover."
        path="/services"
      />

      <section className="pt-32 md:pt-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <SectionHeading
            eyebrow="What We Do"
            title={
              <>
                Three ways we work —{' '}
                <span className="italic">one standard of care.</span>
              </>
            }
          />
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
              Whether you need a complete turnkey delivery or the finishing
              layer of styling, every engagement is held to the same standard:
              considered design, honest materials, and a single team that owns
              the outcome.
            </p>
          </Reveal>
        </div>
      </section>

      {services.map((service, i) => (
        <section
          key={service.number}
          className={`py-24 md:py-40 ${i === 0 ? '' : 'border-t border-hairline'}`}
        >
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className={`grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <ParallaxImage
                  src={service.image}
                  alt={service.title}
                  className="h-[400px] md:h-[560px]"
                />
              </div>

              <div className={`flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.8, ease: easePremium }}
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="font-serif text-2xl text-bronze">
                      {service.number}
                    </span>
                    <span className="h-px flex-1 bg-hairline" />
                  </div>
                  <h2
                    className="font-serif font-light text-ink text-balance"
                    style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.15 }}
                  >
                    {service.title}
                  </h2>
                  <p className="mt-8 max-w-lg text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>

                  <div className="mt-10">
                    <p className="eyebrow mb-6">What's Included</p>
                    <ul className="divide-y divide-hairline border-t border-hairline">
                      {service.includes.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-center gap-4 py-3 text-sm text-ink"
                        >
                          <span className="font-serif text-xs text-bronze">
                            {String(j + 1).padStart(2, '0')}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-hairline py-24 md:py-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionHeading
                  eyebrow="FAQ"
                  title={
                    <>
                      Common{' '}
                      <span className="italic">questions.</span>
                    </>
                  }
                />
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Accordion items={faqs} />
            </div>
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
              Ready to start a{' '}
              <span className="italic">project?</span>
            </h2>
            <div className="mt-8">
              <Button to="/contact" variant="solid">
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
