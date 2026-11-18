import { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Check, Play, ExternalLink } from 'lucide-react';

const SWAYAM_ENROLL_URL = 'https://swayam-plus.swayam2.ac.in/';
const SPOKEN_TUTORIAL_CONTACT_URL =
  'https://process.spoken-tutorial.org/index.php/Software-Training#Contacts_For_Training';

export const SwayamLinuxCourse = ({ onBack }) => {
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

  return (
    <div className="min-h-screen bg-white text-[#182536] antialiased">
      {/* Topbar */}
      <div className="bg-[#10233f] py-2.5 text-[13px] text-[#dce8f6]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-3">
            {onBack && (
              <button
                type="button"
                onClick={onBack}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8ce7ee] transition hover:text-white"
              >
                <ArrowLeft className="size-3.5" />
                Back to EduPyramids
              </button>
            )}
            <span className="hidden text-slate-500 sm:inline">|</span>
            <span>EduPyramids · Learning for a digital future</span>
          </div>
          <span className="font-medium text-[#8ce7ee]">Available on SWAYAM Plus</span>
        </div>
      </div>

      {/* Header / Nav */}
      <header className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onBack}
              className="text-left font-extrabold tracking-tight text-[#10233f] text-xl"
            >
              EDU<span className="text-[#1769aa]">PYRAMIDS</span>
            </button>
            {onBack && (
              <button
                type="button"
                onClick={onBack}
                className="hidden text-sm font-semibold text-slate-600 transition hover:text-[#1769aa] sm:inline-flex items-center gap-1"
              >
                <ArrowLeft className="size-4" />
                Return to main site
              </button>
            )}
          </div>
          <a
            href="#enrol"
            onClick={(e) => scrollToSection(e, 'enrol')}
            className="rounded-lg bg-[#1769aa] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-[#1769aa]/20 transition hover:bg-[#10558e]"
          >
            Enroll now
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_85%_10%,#1d789b_0,transparent_32%),linear-gradient(120deg,#0d203b,#123d68_65%,#176b91)] py-16 text-white sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-[2px] text-[#8ce7ee]">
                Build skills that power the digital world
              </div>
              <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[54px] text-white">
                Linux: The Technology Powering the Digital World
              </h1>
              <p className="mt-4 text-lg text-[#d7e7f6] sm:text-xl">
                Learn Linux. Develop practical technology skills. Earn academic recognition.
              </p>
              <div className="mt-4 text-sm font-medium text-[#b8d2e7]">
                A course by EduPyramids, available on SWAYAM Plus.
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="#enrol"
                  onClick={(e) => scrollToSection(e, 'enrol')}
                  className="rounded-lg bg-[#ffbf47] px-6 py-3 font-bold text-[#172b43] transition hover:bg-[#ffc95f]"
                >
                  Enroll now →
                </a>
              </div>

              <div className="mt-6 font-bold text-white">
                Earn Academic Bank of Credits (ABC)
              </div>

              <div className="mt-3 inline-flex flex-wrap items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-sm">
                <span className="text-sm text-[#d7e7f6]">Course fee</span>
                <strong className="text-2xl font-extrabold text-white">₹375</strong>
                <span className="border-l border-white/30 pl-3 text-xs text-[#d7e7f6]">
                  20% discount for subscribed colleges
                </span>
              </div>
            </div>

            {/* Terminal Mockup Graphic */}
            <div className="relative flex min-h-[300px] items-center justify-center rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-2xl shadow-[#06162b]/50">
              <div className="w-full max-w-[420px] -rotate-2 rounded-xl border border-[#47617d] bg-[#09182b] shadow-2xl overflow-hidden">
                <div className="flex h-9 items-center gap-1.5 bg-[#203b59] px-3.5">
                  <span className="size-2.5 rounded-full bg-[#ff6d6d]" />
                  <span className="size-2.5 rounded-full bg-[#ffca62]" />
                  <span className="size-2.5 rounded-full bg-[#58d69a]" />
                  <span className="ml-2 font-mono text-xs text-slate-300">bash — 80x24</span>
                </div>
                <div className="p-5 font-mono text-sm leading-relaxed text-[#c7e5f6]">
                  <div>
                    <span className="text-[#ffce70]">learner@linux:~$</span> whoami
                  </div>
                  <div className="font-bold text-[#65e2c1]">future-ready technologist</div>
                  <div className="mt-2">
                    <span className="text-[#ffce70]">learner@linux:~$</span> ls skills/
                  </div>
                  <div className="text-white">open-source&nbsp;&nbsp; cloud&nbsp;&nbsp; security</div>
                  <div className="mt-2 flex items-center">
                    <span className="text-[#ffce70]">learner@linux:~$</span>&nbsp;
                    <span className="inline-block h-4 w-2 animate-pulse bg-white" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 right-4 rounded-xl bg-white px-4 py-2.5 text-sm font-extrabold text-[#10233f] shadow-xl">
                Learn. Practice. Grow.
              </div>
            </div>
          </div>
        </section>

        {/* Course Overview Section */}
        <section className="py-16 sm:py-20" id="course">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold text-[#10233f] sm:text-4xl">
                Linux Course Overview
              </h2>
              <p className="mt-3 text-base text-[#64748b]">
                Explore the fundamentals of Linux and understand its role in today's technology ecosystem.
              </p>
            </div>

            {/* Video preview container */}
            <div className="relative mx-auto mt-10 flex min-h-[340px] max-w-4xl flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#0d1d32] p-8 text-center text-white shadow-lg">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#1c6790,#0d1d32_65%)] opacity-80" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex size-18 items-center justify-center rounded-full bg-white text-[#1769aa] shadow-lg transition hover:scale-105">
                  <Play className="size-8 fill-current pl-1" />
                </div>
                <strong className="mt-5 text-xl font-bold">
                  Watch this 24-second course introduction
                </strong>
                <p className="mt-2 max-w-md text-sm text-[#b8d1e6]">
                  Get a quick overview of the Linux course, its relevance and learning opportunity.
                </p>
              </div>
            </div>

            {/* Section tabs */}
            <div className="mt-8 flex flex-wrap justify-center gap-3" aria-label="Course information navigation">
              <a
                href="#why-linux"
                onClick={(e) => scrollToSection(e, 'why-linux')}
                className="rounded-full border border-[#cbddeb] bg-white px-5 py-2.5 text-sm font-bold text-[#10233f] transition hover:border-[#1769aa] hover:bg-[#eaf5fb] hover:text-[#1769aa]"
              >
                Why Learn Linux
              </a>
              <a
                href="#careers"
                onClick={(e) => scrollToSection(e, 'careers')}
                className="rounded-full border border-[#cbddeb] bg-white px-5 py-2.5 text-sm font-bold text-[#10233f] transition hover:border-[#1769aa] hover:bg-[#eaf5fb] hover:text-[#1769aa]"
              >
                Career Opportunities
              </a>
              <a
                href="#testimonials-swayam"
                onClick={(e) => scrollToSection(e, 'testimonials-swayam')}
                className="rounded-full border border-[#cbddeb] bg-white px-5 py-2.5 text-sm font-bold text-[#10233f] transition hover:border-[#1769aa] hover:bg-[#eaf5fb] hover:text-[#1769aa]"
              >
                Testimonial
              </a>
              <a
                href="#contact-swayam"
                onClick={(e) => scrollToSection(e, 'contact-swayam')}
                className="rounded-full border border-[#cbddeb] bg-white px-5 py-2.5 text-sm font-bold text-[#10233f] transition hover:border-[#1769aa] hover:bg-[#eaf5fb] hover:text-[#1769aa]"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-6 text-center">
              <a
                href="#enrol"
                onClick={(e) => scrollToSection(e, 'enrol')}
                className="inline-block rounded-lg bg-[#1769aa] px-6 py-3 font-bold text-white shadow-md shadow-[#1769aa]/20 transition hover:bg-[#10558e]"
              >
                Enroll now →
              </a>
            </div>
          </div>
        </section>

        {/* Why Learn Linux Section */}
        <section className="bg-[#f3f8fc] py-16 sm:py-20" id="why-linux">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-xs font-extrabold uppercase tracking-[1.8px] text-[#1769aa]">
                Why learn Linux?
              </div>
              <h2 className="mt-2 text-3xl font-extrabold text-[#10233f] sm:text-4xl">
                Linux Is Behind Systems We Rely On
              </h2>
              <p className="mt-3 text-base text-[#64748b]">
                Explore examples of Linux and open-source technologies in important digital infrastructure.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <article className="flex flex-col rounded-2xl border border-[#e2eaf2] bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-[#e8f5fb] text-2xl text-[#1769aa]">
                  🚆
                </div>
                <h3 className="text-xl font-bold text-[#10233f]">Railways &amp; Aadhaar</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#64748b]">
                  Reporting has highlighted the use of IBM-acquired Red Hat software in key Indian systems, including railways and Aadhaar.
                </p>
                <a
                  href="https://economictimes.indiatimes.com/tech/software/from-railways-to-aadhaar-indias-key-systems-run-on-ibm-acquired-red-hat-software/articleshow/66425951.cms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#1769aa] hover:underline"
                >
                  Read the Economic Times article ↗
                </a>
              </article>

              <article className="flex flex-col rounded-2xl border border-[#e2eaf2] bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-[#e8f5fb] text-2xl text-[#1769aa]">
                  📈
                </div>
                <h3 className="text-xl font-bold text-[#10233f]">Bombay Stock Exchange</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#64748b]">
                  BSE's BOLT Plus trading system uses Linux. Its technology transformation involved Red Hat Enterprise Linux and open-source architecture, with reported gains in speed, scalability and infrastructure costs.
                </p>
                <span className="mt-4 inline-block text-xs font-semibold text-[#64748b]">
                  Technology case study
                </span>
              </article>

              <article className="flex flex-col rounded-2xl border border-[#e2eaf2] bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-[#e8f5fb] text-2xl text-[#1769aa]">
                  🇮🇳
                </div>
                <h3 className="text-xl font-bold text-[#10233f]">CoWIN platform</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#64748b]">
                  India's CoWIN platform was made open source, demonstrating the role of open technologies in large-scale public digital platforms.
                </p>
                <a
                  href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=1732812&reg=48&lang=2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#1769aa] hover:underline"
                >
                  Read the PIB release ↗
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-16 sm:py-20" id="careers">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-xs font-extrabold uppercase tracking-[1.8px] text-[#1769aa]">
                Career opportunities
              </div>
              <h2 className="mt-2 text-3xl font-extrabold text-[#10233f] sm:text-4xl">
                Skills That Connect to Technology Careers
              </h2>
              <p className="mt-3 text-base text-[#64748b]">
                Linux knowledge can support a range of roles across IT infrastructure, cloud, DevOps and security.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {[
                { title: 'Linux Administrator', icon: '🖥️' },
                { title: 'DevOps Engineer', icon: '⚙️' },
                { title: 'Cloud Engineer', icon: '☁️' },
                { title: 'System Administrator', icon: '🛠️' },
                { title: 'Cybersecurity Professional', icon: '🔐' },
              ].map((role) => (
                <div
                  key={role.title}
                  className="flex flex-col items-center justify-center rounded-2xl border border-[#e2eaf2] bg-white p-6 text-center shadow-sm transition hover:border-[#1769aa]/40 hover:shadow-md"
                >
                  <span className="text-3xl mb-3">{role.icon}</span>
                  <span className="text-sm font-bold text-[#10233f]">{role.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learner Story / Testimonial */}
        <section className="bg-[#f3f8fc] py-16 sm:py-20" id="testimonials-swayam">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-xs font-extrabold uppercase tracking-[1.8px] text-[#1769aa]">
                Learner story
              </div>
              <h2 className="mt-2 text-3xl font-extrabold text-[#10233f] sm:text-4xl">
                Learning That Builds Confidence
              </h2>
              <p className="mt-3 text-base text-[#64748b]">
                Hear how hands-on learning can open doors to new opportunities.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-[#e2eaf2] bg-white p-8 shadow-sm sm:p-10">
              <div className="text-5xl font-serif text-[#20b8c9] leading-none select-none">“</div>
              <blockquote className="mt-3 text-lg leading-relaxed text-[#34445a] sm:text-xl">
                Organizing several workshops during my college days brought in me the confidence to undertake any task. I have got into TCS as a Linux developer. The first time I learned about Linux is when I conducted as well as undertook a test on Linux which was organized by IIT Bombay.
              </blockquote>
              <div className="mt-6 border-t border-slate-100 pt-5">
                <div className="font-extrabold text-[#10233f] text-base">Krishnaveni Nair</div>
                <div className="text-sm text-[#64748b]">B.Sc Graduate, SIES, Mumbai University</div>
              </div>
            </div>
          </div>
        </section>

        {/* Enroll Band */}
        <section className="bg-gradient-to-r from-[#123b65] to-[#176d91] py-12 text-white" id="enrol">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl text-white">
                Ready to Take Your First Step with Linux?
              </h2>
              <p className="mt-1 text-sm text-[#d3e6f3] sm:text-base">
                Enrol through SWAYAM Plus and start learning for just ₹375.
              </p>
            </div>
            <a
              href={SWAYAM_ENROLL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#ffbf47] px-6 py-3.5 font-bold text-[#172b43] transition hover:bg-[#ffc95f] shrink-0"
            >
              Go to SWAYAM Plus →
            </a>
          </div>
        </section>

        {/* Feedback / Source Form */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl rounded-2xl border border-[#e2eaf2] bg-white p-8 shadow-sm sm:p-10">
              <h3 className="text-2xl font-bold text-[#10233f]">How did you hear about us?</h3>
              <p className="mt-1 text-sm text-[#64748b]">
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
                          ? 'border-[#1769aa] bg-[#eaf5fb] font-semibold text-[#10233f]'
                          : 'border-[#e2eaf2] hover:bg-slate-50 text-[#182536]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="source"
                        value={option}
                        checked={selectedSource === option}
                        onChange={(e) => setSelectedSource(e.target.value)}
                        className="accent-[#1769aa]"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>

                <p
                  className={`mt-4 text-xs ${
                    formSubmitted
                      ? 'font-medium text-emerald-600'
                      : 'text-[#64748b]'
                  }`}
                >
                  {formFeedback}
                </p>

                <button
                  type="submit"
                  className="mt-5 rounded-lg bg-[#1769aa] px-6 py-3 text-sm font-bold text-white shadow-md shadow-[#1769aa]/20 transition hover:bg-[#10558e]"
                >
                  Submit response
                </button>
              </form>
            </div>

            <div className="mt-12 text-center">
              <a
                href="#enrol"
                onClick={(e) => scrollToSection(e, 'enrol')}
                className="inline-block rounded-lg bg-[#1769aa] px-6 py-3 font-bold text-white shadow-md shadow-[#1769aa]/20 transition hover:bg-[#10558e]"
              >
                Enroll now →
              </a>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="bg-[#f3f8fc] py-16 text-center sm:py-20" id="contact-swayam">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-xs font-extrabold uppercase tracking-[1.8px] text-[#1769aa]">
              Need help?
            </div>
            <h2 className="mt-2 text-3xl font-extrabold text-[#10233f] sm:text-4xl">
              Queries? Get in Touch with Our Team.
            </h2>
            <p className="mt-3 text-base text-[#64748b]">
              Our team can help with institutional and course-related enquiries.
            </p>
            <div className="mt-6">
              <a
                href={SPOKEN_TUTORIAL_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-base font-bold text-[#1769aa] hover:underline"
              >
                Contact the Spoken Tutorial team →
              </a>
            </div>
            <div className="mt-8">
              <a
                href="#enrol"
                onClick={(e) => scrollToSection(e, 'enrol')}
                className="inline-block rounded-lg bg-[#1769aa] px-6 py-3 font-bold text-white shadow-md shadow-[#1769aa]/20 transition hover:bg-[#10558e]"
              >
                Enroll now
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0b1b30] py-6 text-[13px] text-[#b7c8d9]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <span>© EduPyramids Educational Services Pvt. Ltd.</span>
          <span>Linux course · SWAYAM Plus</span>
        </div>
      </footer>
    </div>
  );
};
