import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OrganizationVerticals } from './components/OrganizationVerticals';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="app-layout">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero / About Us Section with Image Carousel */}
        <HeroSection />

        {/* Organization Verticals Section: School, College, Health */}
        <OrganizationVerticals />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
