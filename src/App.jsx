import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { StatsBand } from '@/components/StatsBand';
import { OrganizationVerticals } from '@/components/OrganizationVerticals';
import { MethodSection } from '@/components/MethodSection';
import { FounderVision } from '@/components/FounderVision';
import { Testimonials } from '@/components/Testimonials';
import { PartnerSection } from '@/components/PartnerSection';
import { ContactCta } from '@/components/ContactCta';
import { Footer } from '@/components/Footer';
import { useVerticalAnchors } from '@/hooks/useVerticalAnchors';

function App() {
  useVerticalAnchors();

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:shadow"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <StatsBand />
        <OrganizationVerticals />
        <MethodSection />
        <FounderVision />
        <Testimonials />
        <PartnerSection />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
