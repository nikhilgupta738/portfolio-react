import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Company Inc.',
      period: '2023 - Present',
      description: 'Lead frontend development for multiple client projects, mentoring junior developers and implementing modern React architectures.',
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2022 - 2023',
      description: 'Developed and maintained web applications using modern JavaScript frameworks and Node.js backend services.',
      technologies: ['Vue.js', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2021 - 2022',
      description: 'Built responsive web applications and collaborated with design teams to create exceptional user experiences.',
      technologies: ['React', 'JavaScript', 'CSS3', 'REST APIs'],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-surface">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 card-hover">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;