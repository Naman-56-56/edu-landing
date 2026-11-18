import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  ExternalLink,
  GraduationCap,
  Play,
  Quote,
  Sparkles,
} from 'lucide-react';
import { Logo } from '@/components/Logo';

const SWAYAM_ENROLL_URL = 'https://swayamplus.education.gov.in/courses/linux-ubuntu';
const SPOKEN_TUTORIAL_CONTACT_URL =
  'https://process.spoken-tutorial.org/index.php/Software-Training#Contacts_For_Training';
// Official course intro video (the one SWAYAM Plus shows), on the Spoken-Tutorial IIT Bombay channel.
const INTRO_VIDEO_ID = '4Ta06Yg5Ndk';

export const SwayamLinuxCourse = ({ onBack }) => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [selectedSource, setSelectedSource] = useState('');
  const [formFeedback, setFormFeedback] = useState(
    'Demo interaction only — connect this form to your website analytics or backend before publishing.'
  );
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!selectedSource) {
      setFormFeedback('Please select an option before submitting.');
      setFormSubmitted(false);
      return;
    }
    setFormFeedback(
      `Thanks! Your selected response: ${selectedSource}. This is a preview; connect the form to save responses.`
    );
    setFormSubmitted(true);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeNavigation = (e) => {
    if (onBack) {
      e.preventDefault();
      onBack();
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-700 antialiased selection:bg-brand-100 selection:text-brand-700">
      {/* Top Announcement Bar */}
      <div className="border-b border-navy-900 bg-navy-950 py-2.5 text-[13px] text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-3">
            <a
              href="/"
              onClick={handleHomeNavigation}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-300 transition-colors hover:text-white"
            >
              <ArrowLeft className="size-3.5" />
              Back to EduPyramids Home
            </a>
            <span className="hidden text-navy-700 sm:inline">|</span>
            <span className="hidden sm:inline text-slate-300">
              EduPyramids · Learning for a digital future
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-300">
            <span className="size-1.5 rounded-full bg-brand-500 animate-pulse" />
            Available on SWAYAM Plus
          </span>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-6">
            <a
              href="/"
              onClick={handleHomeNavigation}
              aria-label="EduPyramids home"
              className="inline-flex items-center focus:outline-none"
            >
              <Logo />
            </a>

            <nav aria-label="Course section navigation" className="hidden md:flex items-center gap-1">
              {[
                { name: 'Why Linux', id: 'why-linux' },
                { name: 'Careers', id: 'careers' },
                { name: 'Story', id: 'testimonials-swayam' },
                { name: 'Contact', id: 'contact-swayam' },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-navy-900 hover:bg-slate-50"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#enrol"
              onClick={(e) => scrollToSection(e, 'enrol')}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-600 hover:shadow"
            >
              Enroll now
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_85%_10%,rgba(58,65,168,0.45)_0,transparent_50%),radial-gradient(ellipse_at_15%_90%,rgba(242,99,33,0.18)_0,transparent_40%),linear-gradient(135deg,#0f1133,#171a4a_55%,#252a7a)] py-16 text-white sm:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-200">
                <Sparkles className="size-3.5 text-brand-300" />
                Build skills that power the digital world
              </div>

              <h1 className="mt-4 text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-[52px] text-white">
                Linux: The Technology Powering the <span className="text-brand-300">Digital World</span>
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-navy-100 sm:text-xl">
                Learn Linux. Develop practical technology skills. Earn academic recognition.
              </p>

              <p className="mt-2 text-sm font-medium text-navy-200">
                A course by EduPyramids, available on SWAYAM Plus.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#enrol"
                  onClick={(e) => scrollToSection(e, 'enrol')}
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-500/40"
                >
                  Enroll now →
                </a>
                <a
                  href="#course"
                  onClick={(e) => scrollToSection(e, 'course')}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  <Play className="size-4 fill-current" />
                  Course Overview
                </a>
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-white">
                <BadgeCheck className="size-5 text-brand-300" />
                Earn Academic Bank of Credits (ABC)
              </div>

              <div className="mt-4 inline-flex flex-wrap items-center gap-3.5 rounded-xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-md">
                <span className="text-sm font-medium text-navy-200">Course fee</span>
                <strong className="text-2xl font-extrabold text-white">₹375</strong>
                <span className="border-l border-white/30 pl-3.5 text-xs text-navy-100">
                  20% discount for subscribed colleges
                </span>
              </div>
            </div>

            {/* Terminal Mockup Graphic */}
            <div className="relative flex min-h-[320px] items-center justify-center rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 shadow-2xl shadow-navy-950/60 backdrop-blur-sm">
              <div className="w-full max-w-[420px] -rotate-2 rounded-2xl border border-navy-700/80 bg-navy-950 shadow-2xl overflow-hidden transition-transform duration-300 hover:rotate-0">
                <div className="flex h-10 items-center justify-between border-b border-navy-800 bg-navy-900/90 px-4">
                  <div className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-rose-500/90" />
                    <span className="size-3 rounded-full bg-amber-400/90" />
                    <span className="size-3 rounded-full bg-emerald-500/90" />
                  </div>
                  <span className="font-mono text-xs text-slate-400">bash — learner@linux</span>
                  <span className="w-8" />
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed text-slate-200">
                  <div>
                    <span className="text-amber-300 font-semibold">learner@linux:~$</span> whoami
                  </div>
                  <div className="font-bold text-emerald-400 mt-0.5">future-ready technologist</div>
                  <div className="mt-3">
                    <span className="text-amber-300 font-semibold">learner@linux:~$</span> ls skills/
                  </div>
                  <div className="text-white mt-0.5 tracking-wide">
                    open-source&nbsp;&nbsp; cloud&nbsp;&nbsp; security
                  </div>
                  <div className="mt-3 flex items-center">
                    <span className="text-amber-300 font-semibold">learner@linux:~$</span>&nbsp;
                    <span className="inline-block h-4 w-2 animate-pulse bg-white" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 right-4 rounded-xl border border-slate-200/80 bg-white px-4 py-2.5 text-sm font-bold text-navy-950 shadow-xl">
                Learn. Practice. Grow.
              </div>
            </div>
          </div>
        </section>

        {/* Course Overview Section */}
        <section className="py-20 sm:py-28" id="course">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold text-brand-600">Course Overview</p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl text-slate-900">
                Linux Course Overview
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Explore the fundamentals of Linux and understand its role in today's technology ecosystem.
              </p>
            </div>

            {/* Course intro video: a preview panel that loads the YouTube player only when clicked */}
            <div className="relative mx-auto mt-12 aspect-video max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 text-white shadow-xl">
              {videoPlaying ? (
                <iframe
                  className="absolute inset-0 size-full"
                  src={`https://www.youtube-nocookie.com/embed/${INTRO_VIDEO_ID}?autoplay=1&rel=0`}
                  title="Linux course introduction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setVideoPlaying(true)}
                  aria-label="Play the Linux course introduction video"
                  className="group/video absolute inset-0 flex flex-col items-center justify-center p-4 text-center sm:p-8"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(46,52,148,0.4),transparent_65%)]" />
                  <span className="relative z-10 flex size-14 items-center justify-center rounded-full bg-white text-navy-600 shadow-2xl transition duration-200 group-hover/video:scale-110 group-hover/video:text-brand-500 sm:size-20">
                    <Play className="size-6 fill-current pl-1 sm:size-8" />
                  </span>
                  <strong className="relative z-10 mt-4 text-lg font-bold text-white sm:mt-6 sm:text-2xl">
                    Watch a quick course introduction
                  </strong>
                  <span className="relative z-10 mt-2 hidden max-w-md text-sm leading-relaxed text-slate-300 sm:block">
                    Get a quick overview of the Linux course, its relevance and learning opportunity.
                  </span>
                </button>
              )}
            </div>

            {/* Section tabs */}
            <div
              className="mt-10 flex flex-wrap justify-center gap-3"
              aria-label="Course information navigation"
            >
              {[
                { name: 'Why Learn Linux', id: 'why-linux' },
                { name: 'Career Opportunities', id: 'careers' },
                { name: 'Testimonial', id: 'testimonials-swayam' },
                { name: 'Contact Us', id: 'contact-swayam' },
              ].map((tab) => (
                <a
                  key={tab.id}
                  href={`#${tab.id}`}
                  onClick={(e) => scrollToSection(e, tab.id)}
                  className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-navy-300 hover:bg-navy-50 hover:text-navy-700"
                >
                  {tab.name}
                </a>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href="#enrol"
                onClick={(e) => scrollToSection(e, 'enrol')}
                className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600"
              >
                Enroll now
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Why Learn Linux Section */}
        <section className="border-y border-slate-200/80 bg-slate-50 py-20 sm:py-28" id="why-linux">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold text-brand-600">Why Learn Linux?</p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl text-slate-900">
                Linux Is Behind Systems We Rely On
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Explore examples of Linux and open-source technologies in important digital infrastructure.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-navy-900/5">
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-navy-50 text-2xl border border-navy-100">
                  🚆
                </div>
                <h3 className="text-xl font-bold text-slate-900">Railways &amp; Aadhaar</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  Reporting has highlighted the use of IBM-acquired Red Hat software in key Indian systems, including railways and Aadhaar.
                </p>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <a
                    href="https://economictimes.indiatimes.com/tech/software/from-railways-to-aadhaar-indias-key-systems-run-on-ibm-acquired-red-hat-software/articleshow/66425951.cms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition hover:text-brand-700"
                  >
                    Read the Economic Times article
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </article>

              <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-navy-900/5">
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-navy-50 text-2xl border border-navy-100">
                  📈
                </div>
                <h3 className="text-xl font-bold text-slate-900">Bombay Stock Exchange</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  BSE's BOLT Plus trading system uses Linux. Its technology transformation involved Red Hat Enterprise Linux and open-source architecture, with reported gains in speed, scalability and infrastructure costs.
                </p>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    Technology case study
                  </span>
                </div>
              </article>

              <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-navy-900/5">
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-navy-50 text-2xl border border-navy-100">
                  🇮🇳
                </div>
                <h3 className="text-xl font-bold text-slate-900">CoWIN platform</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  India's CoWIN platform was made open source, demonstrating the role of open technologies in large-scale public digital platforms.
                </p>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <a
                    href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=1732812&reg=48&lang=2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition hover:text-brand-700"
                  >
                    Read the PIB release
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-20 sm:py-28" id="careers">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold text-brand-600">Career Opportunities</p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl text-slate-900">
                Skills That Connect to Technology Careers
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Linux knowledge can support a range of roles across IT infrastructure, cloud, DevOps and security.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {[
                { title: 'Linux Administrator', icon: '🖥️' },
                { title: 'DevOps Engineer', icon: '⚙️' },
                { title: 'Cloud Engineer', icon: '☁️' },
                { title: 'System Administrator', icon: '🛠️' },
                { title: 'Cybersecurity Professional', icon: '🔐' },
              ].map((role) => (
                <div
                  key={role.title}
                  className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-navy-300 hover:shadow-lg hover:shadow-navy-900/5"
                >
                  <span className="text-3xl mb-3">{role.icon}</span>
                  <span className="text-sm font-bold text-slate-900">{role.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learner Story / Testimonial */}
        <section className="border-y border-slate-200/80 bg-slate-50 py-20 sm:py-28" id="testimonials-swayam">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold text-brand-600">Learner Story</p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl text-slate-900">
                Learning That Builds Confidence
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Hear how hands-on learning can open doors to new opportunities.
              </p>
            </div>

            <figure className="mx-auto mt-14 max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <Quote className="size-8 text-brand-500" strokeWidth={1.75} aria-hidden />
              <blockquote className="mt-5 text-lg leading-relaxed text-slate-700 sm:text-xl">
                “Organizing several workshops during my college days brought in me the confidence to undertake any task. I have got into TCS as a Linux developer. The first time I learned about Linux is when I conducted as well as undertook a test on Linux which was organized by IIT Bombay.”
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-slate-100 pt-5">
                <span
                  aria-hidden
                  className="flex size-11 shrink-0 items-center justify-center rounded-full bg-navy-100 text-sm font-bold text-navy-700"
                >
                  KN
                </span>
                <span className="text-sm leading-snug">
                  <span className="block font-semibold text-slate-900">Krishnaveni Nair</span>
                  <span className="block text-slate-600">B.Sc Graduate, SIES, Mumbai University</span>
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Enroll Band */}
        <section className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 py-14 text-white" id="enrol">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl text-white">
                Ready to Take Your First Step with Linux?
              </h2>
              <p className="mt-1.5 text-sm text-navy-200 sm:text-base">
                Enrol through SWAYAM Plus and start learning for just ₹375.
              </p>
            </div>
            <a
              href={SWAYAM_ENROLL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600 shrink-0"
            >
              Go to SWAYAM Plus
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </section>

        {/* Feedback / Source Form */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <h3 className="text-2xl font-bold text-slate-900">How did you hear about us?</h3>
              <p className="mt-1 text-sm text-slate-600">
                Help us understand how learners discover the Linux course.
              </p>

              <form onSubmit={handleFormSubmit} className="mt-6">
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    'College / University',
                    'Faculty / Teacher',
                    'WhatsApp / Social Media',
                    'Email',
                    'Website / Search Engine',
                    'Friend / Colleague',
                    'Other',
                  ].map((option) => (
                    <label
                      key={option}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 text-sm transition ${
                        selectedSource === option
                          ? 'border-brand-500 bg-brand-50/60 font-semibold text-slate-900 ring-1 ring-brand-500/20'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="source"
                        value={option}
                        checked={selectedSource === option}
                        onChange={(e) => setSelectedSource(e.target.value)}
                        className="accent-brand-500"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>

                <p
                  className={`mt-4 text-xs ${
                    formSubmitted ? 'font-medium text-emerald-600' : 'text-slate-500'
                  }`}
                >
                  {formFeedback}
                </p>

                <button
                  type="submit"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600"
                >
                  Submit response
                </button>
              </form>
            </div>

            <div className="mt-12 text-center">
              <a
                href="#enrol"
                onClick={(e) => scrollToSection(e, 'enrol')}
                className="inline-flex items-center gap-2 rounded-lg bg-navy-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-navy-700"
              >
                Enroll now
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="border-t border-slate-200/80 bg-slate-50 py-20 text-center sm:py-28" id="contact-swayam">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-sm font-semibold text-brand-600">Need help?</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl text-slate-900">
              Queries? Get in Touch with Our Team.
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
              Our team can help with institutional and course-related enquiries.
            </p>
            <div className="mt-6">
              <a
                href={SPOKEN_TUTORIAL_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-base font-semibold text-navy-600 hover:text-navy-800 hover:underline"
              >
                Contact the Spoken Tutorial team
                <ArrowUpRight className="size-4" />
              </a>
            </div>
            <div className="mt-8">
              <a
                href="#enrol"
                onClick={(e) => scrollToSection(e, 'enrol')}
                className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-2.5 font-semibold text-white shadow-sm transition hover:bg-brand-600"
              >
                Enroll now
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-sm text-slate-600">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="text-xs text-slate-500">© EduPyramids Educational Services Pvt. Ltd.</span>
          </div>
          <span className="text-xs font-medium text-navy-600">Linux course · SWAYAM Plus</span>
        </div>
      </footer>
    </div>
  );
};
