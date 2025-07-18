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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(34, 40, 49, 0.9), rgba(57, 106, 252, 0.8)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-width section-padding text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hi, I'm{' '}
            <span className="gradient-text bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-fade-in">
            Full Stack Developer & Software Engineer
          </p>
          
          <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Passionate about creating innovative solutions and bringing ideas to life through code. 
            I specialize in modern web technologies and have experience in both frontend and backend development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-semibold"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-white/80 hover:text-white transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;