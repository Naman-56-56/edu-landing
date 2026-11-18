import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { websiteLinks } from '@/config/websiteLinks';
import { contactInfo, socialLinks, navigationLinks, verticalsData } from '@/data/landingData';
import { Logo } from '@/components/Logo';

const socialIcons = { LinkedIn: Linkedin, YouTube: Youtube, Facebook, Instagram };

const linkClass = 'text-sm text-slate-600 transition-colors hover:text-slate-900';

export const Footer = () => (
  <footer className="border-t border-slate-200 bg-slate-50">
    <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
            EduPyramids is a low-cost skilling solution that gets learners ready for the AI era.
          </p>
          <div className="mt-6 flex gap-2">
            {socialLinks.map((s) => {
              const Icon = socialIcons[s.name];
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex size-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-900"
                >
                  {Icon && <Icon className="size-4" />}
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Navigation</h3>
          <ul className="mt-4 space-y-3">
            {navigationLinks.map((l) => (
              <li key={l.name}>
                <a href={l.href} className={linkClass}>
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Our Verticals</h3>
          <ul className="mt-4 space-y-3">
            {verticalsData.map((v) => (
              <li key={v.id}>
                <a
                  href={websiteLinks[v.linkKey]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} inline-flex items-center gap-1`}
                >
                  {v.title}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Get in Touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-slate-400" />
              <a href={`mailto:${contactInfo.email}`} className={linkClass}>
                {contactInfo.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-slate-400" />
              <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className={linkClass}>
                {contactInfo.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-slate-400" />
              <span className="leading-relaxed">
                {contactInfo.company}
                <br />
                {contactInfo.address}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-4 border-t border-slate-200 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} {contactInfo.company} All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#top" className="hover:text-slate-900">Privacy Policy</a>
          <a href="#top" className="hover:text-slate-900">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);
