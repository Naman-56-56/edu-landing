import { Mail, Phone } from 'lucide-react';
import { contactInfo } from '@/data/landingData';
import { Button } from '@/components/ui/button';

export const ContactCta = () => (
  <section id="contact" className="scroll-mt-16 bg-slate-50/70 px-4 py-16 sm:px-6 lg:py-20">
    <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-navy-900 px-6 py-14 sm:px-12 lg:px-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(36rem_20rem_at_100%_0%,rgb(242_99_33/0.28),transparent),radial-gradient(30rem_18rem_at_0%_100%,rgb(58_65_168/0.6),transparent)]"
      />
      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Partner with EduPyramids</h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-100">
            Let us explore institutional partnerships and joint content creation.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={`mailto:${contactInfo.email}`} variant="white" size="lg">
            <Mail />
            Email Us
          </Button>
          <Button
            href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
            size="lg"
            className="bg-white/10 text-white ring-1 ring-inset ring-white/20 hover:bg-white/15"
          >
            <Phone />
            {contactInfo.phone}
          </Button>
        </div>
      </div>
    </div>
  </section>
);
