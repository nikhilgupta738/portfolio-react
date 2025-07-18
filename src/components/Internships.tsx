import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Internships = () => {
  const internships = [
    {
      title: 'Software Development Intern',
      company: 'Google',
      period: 'Summer 2023',
      duration: '3 months',
      description: 'Worked on improving search algorithms and contributed to the development of new features for Google Search. Collaborated with senior engineers and gained hands-on experience with large-scale systems.',
      achievements: [
        'Improved search result relevance by 15%',
        'Contributed to 3 major feature releases',
        'Received excellent performance review'
      ],
      technologies: ['Python', 'TensorFlow', 'Go', 'Kubernetes'],
    },
    {
      title: 'Frontend Development Intern',
      company: 'Microsoft',
      period: 'Summer 2022',
      duration: '3 months',
      description: 'Developed user interfaces for Microsoft Teams using React and TypeScript. Focused on accessibility improvements and mobile responsiveness.',
      achievements: [
        'Enhanced accessibility score by 40%',
        'Optimized mobile performance',
        'Led intern presentation session'
      ],
      technologies: ['React', 'TypeScript', 'Azure', 'CSS3'],
    },
    {
      title: 'Web Development Intern',
      company: 'Local Tech Startup',
      period: 'Summer 2021',
      duration: '2 months',
      description: 'Built and maintained the company website and internal tools. Learned full-stack development and gained experience with modern web technologies.',
      achievements: [
        'Redesigned company website',
        'Reduced page load time by 50%',
        'Implemented user authentication system'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js'],
    },
  ];

  return (
    <section id="internships" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Internships</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experiences that shaped my career and technical skills
          </p>
        </div>

        <div className="space-y-8">
          {internships.map((internship, index) => (
            <Card key={index} className="p-6 card-hover">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{internship.title}</h3>
                      <p className="text-accent font-medium text-lg">{internship.company}</p>
                    </div>
                    <div className="flex flex-col text-sm text-muted-foreground mt-2 md:mt-0">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {internship.period}
                      </div>
                      <div className="text-xs mt-1">
                        Duration: {internship.duration}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{internship.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Award className="h-4 w-4 mr-2 text-accent" />
                      Key Achievements
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {internship.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
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

export default Internships;