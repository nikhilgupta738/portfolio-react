import { Card } from '@/components/ui/card';
import { User, Code, Rocket } from 'lucide-react';
import profileImg from '@/assets/profile.jpg'; 

const About = () => {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating meaningful digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-foreground">
                I'm a dedicated software developer with a passion for solving complex problems 
                and creating user-friendly applications. My journey in tech started during my 
                studies, where I discovered the power of code to transform ideas into reality.
              </p>
              
              <p className="text-foreground">
                With experience in both frontend and backend technologies, I enjoy working on 
                full-stack projects that challenge me to think creatively and learn continuously. 
                I believe in writing clean, maintainable code and staying updated with the latest 
                industry trends and best practices.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="p-6 text-center glass-card">
                <User className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Problem Solver</h3>
                <p className="text-sm text-muted-foreground">
                  Analytical thinking and creative solutions
                </p>
              </Card>
              
              <Card className="p-6 text-center glass-card">
                <Code className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Clean Code</h3>
                <p className="text-sm text-muted-foreground">
                  Maintainable and scalable development
                </p>
              </Card>
              
              <Card className="p-6 text-center glass-card">
                <Rocket className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Always learning and adapting
                </p>
              </Card>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-accent to-accent/70 rounded-full p-1">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <div className="w-72 h-72 bg-gradient-to-br from-muted to-surface rounded-full flex items-center justify-center">
                    <img
                      src={profileImg}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;