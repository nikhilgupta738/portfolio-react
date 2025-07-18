import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Internships from '@/components/Internships';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="floating-particles"></div>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Internships />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
