import { Button } from '@/components/ui/button';
import { ChevronDown, Download, Mail } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
    >
      <div className="floating-particles"></div>
      <div className="container-width section-padding text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Hi, I'm{' '}
            <span className="gradient-text">
              Nikhil Gupta
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            Graduated and Open to Work
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Passionate about creating innovative solutions and bringing ideas to life through code. 
            I specialize in modern web technologies and have experience in both frontend and backend development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-semibold glow-button"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="glass-card border-glass-border text-foreground hover:bg-glass-bg px-8 py-3 text-lg font-semibold glow-button"
            >
              <a href="/NikhilGupta_Resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-muted-foreground hover:text-accent transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;