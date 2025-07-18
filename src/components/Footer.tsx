import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="section-padding bg-primary text-primary-foreground">
      <div className="container-width">
        <div className="text-center">
          <p className="text-sm flex items-center justify-center gap-1">
            Built with <Heart className="h-4 w-4 text-red-400" fill="currentColor" /> using React & Tailwind CSS
          </p>
          <p className="text-xs mt-2 opacity-80">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;