import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Express.js', 'FastAPI', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Firebase', 'Figma', 'VS Code', 'Linux', 'Agile'],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="p-6 glass-card">
              <h3 className="text-xl font-semibold mb-4 text-accent">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="skill-tag"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;