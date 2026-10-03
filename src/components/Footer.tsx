import { Link } from 'react-router-dom';
import { Instagram, MessageCircle } from 'lucide-react';
import { siteInfo } from '@/data/siteInfo';

const sitemap = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-dark text-dark-text">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="border-t border-white/10 py-24 md:py-40">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2
                className="heading-serif text-balance"
                style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
              >
                Let's design a home that feels like{' '}
                <span className="italic text-bronze">you.</span>
              </h2>
              <Link
                to="/contact"
                className="group mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-dark-text/80 transition-colors hover:text-bronze"
              >
                Start a conversation
                <span className="inline-block transition-transform duration-500 ease-premium group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="eyebrow mb-4 text-dark-text/50">Studio</p>
                  <p className="text-sm leading-relaxed text-dark-text/80">
                    {siteInfo.address.line1}
                    <br />
                    {siteInfo.address.line2}
                    <br />
                    {siteInfo.address.note}
                  </p>
                </div>
                <div>
                  <p className="eyebrow mb-4 text-dark-text/50">Contact</p>
                  <p className="text-sm leading-relaxed text-dark-text/80">
                    <a
                      href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}
                      className="transition-colors hover:text-bronze"
                    >
                      {siteInfo.phone}
                    </a>
                    <br />
                    <a
                      href={`mailto:${siteInfo.email}`}
                      className="transition-colors hover:text-bronze"
                    >
                      {siteInfo.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <a
                  href={siteInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-dark-text/80 transition-colors hover:text-bronze"
                >
                  <Instagram className="h-4 w-4" />
                  {siteInfo.instagramHandle}
                </a>
                <a
                  href={`https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent(siteInfo.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-dark-text/80 transition-colors hover:text-bronze"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-col items-start justify-between gap-8 border-t border-white/10 pt-8 md:flex-row md:items-center">
            <nav className="flex flex-wrap gap-x-8 gap-y-2">
              {sitemap.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-xs uppercase tracking-[0.2em] text-dark-text/60 transition-colors hover:text-bronze"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <p className="text-xs text-dark-text/40">
              © 2026 Manhhattan Studio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
