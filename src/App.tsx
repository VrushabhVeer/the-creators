import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './layout/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Contact from './components/Contact';
import Footer from './layout/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </Layout>
  );
}

function PrivacyPage() {
  return (
    <Layout>
      <PrivacyPolicy />
    </Layout>
  );
}

function TermsPage() {
  return (
    <Layout>
      <TermsOfService />
    </Layout>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/terms-of-service" element={<TermsPage />} />
      </Routes>
    </>
  );
}

export default App;
