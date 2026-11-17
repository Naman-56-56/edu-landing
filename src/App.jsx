import { useEffect, useState } from 'react';
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
import { SwayamLinuxCourse } from '@/components/SwayamLinuxCourse';
import { useVerticalAnchors } from '@/hooks/useVerticalAnchors';

const isSwayamRoute = () => {
  if (typeof window === 'undefined') return false;
  const hash = window.location.hash.toLowerCase();
  const path = window.location.pathname.toLowerCase();
  return (
    hash === '#swayam-courses' ||
    hash === '#swayam-linux' ||
    hash.startsWith('#swayam') ||
    path === '/swayam-courses' ||
    path === '/swayam-linux'
  );
};

function App() {
  const [currentView, setCurrentView] = useState(() => (isSwayamRoute() ? 'swayam' : 'home'));

  useVerticalAnchors();

  useEffect(() => {
    const handleRouteChange = () => {
      if (isSwayamRoute()) {
        setCurrentView('swayam');
      } else if (window.location.hash === '' || window.location.hash === '#college' || window.location.hash === '#school' || window.location.hash === '#health') {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const openSwayam = () => {
    setCurrentView('swayam');
    window.history.pushState(null, '', '#swayam-courses');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const returnHome = () => {
    setCurrentView('home');
    window.history.pushState(null, '', '#college');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'swayam') {
    return <SwayamLinuxCourse onBack={returnHome} />;
  }

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
        <OrganizationVerticals onOpenSwayam={openSwayam} />
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
