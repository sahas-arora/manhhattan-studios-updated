import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, MessageCircle, MapPin, Check } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Reveal } from '@/components/Reveal';
import { siteInfo } from '@/data/siteInfo';

const easePremium = [0.22, 1, 0.36, 1] as const;

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  budget: string;
  timeline: string;
  message: string;
}

const initialData: FormData = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  location: '',
  budget: '',
  timeline: '',
  message: '',
};

const projectTypes = ['Apartment', 'Villa', 'Penthouse', 'Renovation', 'Styling only'];
const budgetRanges = [
  'Under ₹15 lakhs',
  '₹15–35 lakhs',
  '₹35–75 lakhs',
  '₹75 lakhs–1.5 crore',
  '₹1.5 crore+',
];
const timelines = ['1–3 months', '3–6 months', '6–12 months', '12+ months', 'Flexible'];

export default function Contact() {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!data.name.trim()) newErrors.name = 'Please enter your name';
    if (!data.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!data.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[+\d\s()-]{8,}$/.test(data.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!data.projectType) newErrors.projectType = 'Please select a project type';
    if (!data.message.trim()) newErrors.message = 'Please tell us about your project';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // ─── PLUG IN YOUR FORM HANDLER HERE ───────────────────────────
    // Wire this to Formspree, Resend, EmailJS, or a Supabase Edge Function.
    // Example (Formspree):
    //   fetch('https://formspree.io/f/YOUR_ID', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data),
    //   }).then(() => setSubmitted(true));
    // ──────────────────────────────────────────────────────────────

    setSubmitted(true);
  };

  const inputClass = (hasError?: string) =>
    `w-full border-b pb-3 pt-2 bg-transparent text-sm text-ink placeholder:text-muted/50 transition-colors duration-300 focus:outline-none ${hasError ? 'border-red-400' : 'border-hairline focus:border-bronze'
    }`;

  const labelClass = 'eyebrow mb-3 block';

  return (
    <>
      <Seo
        title="Contact — Manhhattan Studio | Start a Project in Gurugram"
        description="Get in touch with Manhhattan Studio to discuss your residential interior project in Delhi NCR or Gurugram. By appointment only."
        path="/contact"
      />

      <section className="pt-32 md:pt-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-6">Contact</p>
                <h1
                  className="font-serif font-light text-ink text-balance"
                  style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: 1.05 }}
                >
                  Let's start a{' '}
                  <span className="italic">conversation.</span>
                </h1>
                <p className="mt-8 max-w-md text-sm leading-relaxed text-muted">
                  Tell us about your home, your timeline and what you are
                  hoping for. We respond to every enquiry within two working
                  days.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-12 space-y-8">
                  <div>
                    <p className="eyebrow mb-3">Studio</p>
                    <p className="flex items-start gap-2 text-sm leading-relaxed text-ink">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-bronze" />
                      <span>
                        {siteInfo.address.line1}
                        <br />
                        {siteInfo.address.line2}
                        <br />
                        {siteInfo.address.note}
                      </span>
                    </p>
                  </div>

                  <div>
                    <p className="eyebrow mb-3">Phone</p>
                    <a
                      href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}
                      className="text-sm text-ink transition-colors hover:text-bronze"
                    >
                      {siteInfo.phone}
                    </a>
                  </div>

                  <div>
                    <p className="eyebrow mb-3">Email</p>
                    <a
                      href={`mailto:${siteInfo.email}`}
                      className="text-sm text-ink transition-colors hover:text-bronze"
                    >
                      {siteInfo.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-6 pt-4">
                    <a
                      href={siteInfo.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-ink transition-colors hover:text-bronze"
                    >
                      <Instagram className="h-4 w-4" />
                      {siteInfo.instagramHandle}
                    </a>
                    <a
                      href={`https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent(siteInfo.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-ink transition-colors hover:text-bronze"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.2}>
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: easePremium }}
                      className="flex min-h-[400px] flex-col items-center justify-center border border-hairline p-12 text-center"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-bronze">
                        <Check className="h-7 w-7 text-bronze" />
                      </div>
                      <h2 className="mt-8 font-serif text-3xl text-ink">
                        Thank you.
                      </h2>
                      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                        Your enquiry has been received. We will be in touch
                        within two working days. In the meantime, feel free to
                        explore our projects.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setData(initialData);
                        }}
                        className="mt-8 text-xs uppercase tracking-[0.2em] text-bronze transition-colors hover:text-ink"
                      >
                        Send another enquiry
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleSubmit}
                      noValidate
                      className="space-y-8"
                    >
                      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div>
                          <label className={labelClass} htmlFor="name">
                            Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            value={data.name}
                            onChange={(e) => update('name', e.target.value)}
                            className={inputClass(errors.name)}
                            placeholder="Your full name"
                            aria-invalid={!!errors.name}
                          />
                          {errors.name && (
                            <p className="mt-2 text-xs text-red-400">
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className={labelClass} htmlFor="email">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => update('email', e.target.value)}
                            className={inputClass(errors.email)}
                            placeholder="you@email.com"
                            aria-invalid={!!errors.email}
                          />
                          {errors.email && (
                            <p className="mt-2 text-xs text-red-400">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div>
                          <label className={labelClass} htmlFor="phone">
                            Phone
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            value={data.phone}
                            onChange={(e) => update('phone', e.target.value)}
                            className={inputClass(errors.phone)}
                            placeholder="+91 98110 66070"
                            aria-invalid={!!errors.phone}
                          />
                          {errors.phone && (
                            <p className="mt-2 text-xs text-red-400">
                              {errors.phone}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className={labelClass} htmlFor="projectType">
                            Project Type
                          </label>
                          <select
                            id="projectType"
                            value={data.projectType}
                            onChange={(e) => update('projectType', e.target.value)}
                            className={inputClass(errors.projectType)}
                            aria-invalid={!!errors.projectType}
                          >
                            <option value="">Select a type</option>
                            {projectTypes.map((t) => (
                              <option key={t} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                          {errors.projectType && (
                            <p className="mt-2 text-xs text-red-400">
                              {errors.projectType}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div>
                          <label className={labelClass} htmlFor="location">
                            Location / Locality
                          </label>
                          <input
                            id="location"
                            type="text"
                            value={data.location}
                            onChange={(e) => update('location', e.target.value)}
                            className={inputClass()}
                            placeholder="e.g. DLF Phase 5, Gurugram"
                          />
                        </div>
                        <div>
                          <label className={labelClass} htmlFor="budget">
                            Approximate Budget
                          </label>
                          <select
                            id="budget"
                            value={data.budget}
                            onChange={(e) => update('budget', e.target.value)}
                            className={inputClass()}
                          >
                            <option value="">Select a range</option>
                            {budgetRanges.map((b) => (
                              <option key={b} value={b}>
                                {b}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className={labelClass} htmlFor="timeline">
                          Timeline
                        </label>
                        <select
                          id="timeline"
                          value={data.timeline}
                          onChange={(e) => update('timeline', e.target.value)}
                          className={inputClass()}
                        >
                          <option value="">Select a timeline</option>
                          {timelines.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className={labelClass} htmlFor="message">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          value={data.message}
                          onChange={(e) => update('message', e.target.value)}
                          className={`${inputClass(errors.message)} resize-none`}
                          placeholder="Tell us about your home and what you're hoping for..."
                          aria-invalid={!!errors.message}
                        />
                        {errors.message && (
                          <p className="mt-2 text-xs text-red-400">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <motion.button
                        type="submit"
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 bg-ink py-4 px-8 text-xs uppercase tracking-[0.2em] text-canvas transition-colors duration-500 ease-premium hover:bg-bronze"
                      >
                        Send Enquiry
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24 md:mt-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">Find Us</p>
          </Reveal>
        </div>
        <div className="h-[400px] w-full overflow-hidden border-t border-hairline">
          {/* Google Map placeholder — styled in greyscale */}
          <div className="flex h-full w-full items-center justify-center bg-alt">
            <div
              className="h-full w-full"
              style={{
                background:
                  'repeating-linear-gradient(45deg, #ECE7DF, #ECE7DF 10px, #E5DFD4 10px, #E5DFD4 20px)',
                filter: 'grayscale(100%)',
              }}
            >
              <div className="flex h-full w-full flex-col items-center justify-center">
                <MapPin className="h-8 w-8 text-bronze" />
                <p className="mt-4 font-serif text-xl text-ink">
                  {siteInfo.address.line2}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
                  Map placeholder — embed Google Maps here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
