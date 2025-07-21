import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Folder } from 'lucide-react';
import watchHubImg from '@/assets/watchHub.png';
import fraudshieldImg from '@/assets/fraudshield.png';
import housepriceImg from '@/assets/housePrice.png';
import alienImg from '@/assets/alien.png';

const Projects = () => {
  const projects = [
    {
      title: 'WatchHub - Movie Discovery Platform',
      description: 'A Movie discovery platform built with ReactJS, Tailwind CSS personalized recommendations, and a sleek UI.',
      image: watchHubImg,
      technologies: ['React', 'Tailwind CSS',],
      githubUrl: 'https://github.com/nikhilgupta738/WatchHub',
      liveUrl: 'https://watch-hub-mauve.vercel.app/',
      featured: true,
    },
    {
      title: 'FraudShield - AI-Powered Fraud Detection',
      description: 'This project aims to detect fraudulent online transactions using machine learning models. It includes a Flask-based backend, a responsive HTML/CSS frontend, and pretrained ML models for prediction.',
      image: fraudshieldImg,
      technologies: ['HTML', 'CSS', 'Python', 'Flask', 'Numpy', 'Pandas', 'Scikit-learn', 'Rest API'],
      githubUrl: 'https://github.com/nikhilgupta738/FraudShield-AI-Powered-Payment-Fraud-Detection',
      // liveUrl: 'https://fraud-shield-ai-powered-payment-fraud-detection-g5xb3kojz.vercel.app/',
      featured: true,
    },
    {
      title: 'House Price Prediction',
      description: 'A house price prediction web application that uses machine learning to predict house prices based on various features. ',
      image: housepriceImg,
      technologies: ['HTML', 'CSS', 'REST API', 'Python', 'Flask', 'Numpy', 'Pandas', 'Scikit-learn'],
      githubUrl: 'https://github.com/nikhilgupta738/house-price-prediction',
      // liveUrl: '#',
      featured: false ,
    },
    {
      title: 'Alien Shooter Game using pygame',
      description: 'A retro-style alien shooter game built with Python and Pygame. Features include multiple levels, power-ups, and enemy AI.',
      image: alienImg,
      technologies: ['Python', 'Pygame'],
      githubUrl: 'https://github.com/nikhilgupta738/alien_invasion',
      // liveUrl: '#',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding bg-surface">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden glass-card">
              <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Folder className="h-16 w-16 text-muted-foreground" />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="p-6 glass-card">
                <div className="flex items-start justify-between mb-3">
                  <Folder className="h-8 w-8 text-accent flex-shrink-0" />
                  <div className="flex gap-2">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
