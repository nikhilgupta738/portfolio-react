import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, ExternalLink, X } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import gcloudImg from '@/assets/gcloudbox.jpeg'; 
import gcloudSwagImg from '@/assets/gclodkit.jpeg'; 
import myProfileImg from '@/assets/myImg.jpg'; 
import groupPhotImg from '@/assets/groupBad.jpg';
import React from 'react';

const certificates = [
  {
    title: 'Google Cloud Arcade Program',
    issuer: 'Google Cloud',
    date: '2025',
    description: 'Reacher Champion Tier in Google cloud Arcade Program. Earned Google Cloud swags for completing hands-on labs and challenges.',
    images: [gcloudImg, gcloudSwagImg], // Add more images as needed
    link: 'https://www.cloudskillsboost.google/public_profiles/5b5209e8-70d8-41ec-8ebc-865c6f03db8e/badges/10838433?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share', // Optional: link to your badge/certificate
    tags: ['Google Cloud', 'Arcade', 'Cloud Skills']
  },
  {
    title: 'Badminton Zonal Tournament Winner',
    issuer: 'AKTU',
    date: '2024',
    description: 'Won the Zonal Badminton Tournament representing my college. This achievement reflects my dedication to sports and teamwork.',
    images: [myProfileImg, groupPhotImg], // Add more images as needed
    link: 'https://www.cloudskillsboost.google/public_profiles/5b5209e8-70d8-41ec-8ebc-865c6f03db8e/badges/10838433?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share', // Optional: link to your badge/certificate
    tags: ['Badminton', 'Zonal Tournament']
  },
  // Add more certificates here
];

const Certificates = () => {
  return (
    <section id="certificates" className="section-padding bg-surface">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Certificates & Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognitions and certifications that highlight my skills and accomplishments
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, idx) => (
            <Card key={idx} className="p-6 flex flex-col md:flex-row gap-6 items-center glass-card">
              {cert.images && cert.images.length > 1 ? (
                <div className="w-32 md:w-40">
                  <Carousel>
                    <CarouselContent>
                      {cert.images.map((img, i) => (
                        <CarouselItem key={i}>
                          <img
                            src={img}
                            alt={cert.title + ' image ' + (i + 1)}
                            className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-lg shadow-md mb-4 md:mb-0 mx-auto"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              ) : cert.images && cert.images.length === 1 ? (
                <img
                  src={cert.images[0]}
                  alt={cert.title}
                  className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-lg shadow-md mb-4 md:mb-0"
                />
              ) : null}
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1 flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  {cert.title}
                </h3>
                <p className="text-accent font-medium mb-1">{cert.issuer} <span className="text-xs text-muted-foreground">({cert.date})</span></p>
                <p className="text-muted-foreground mb-2">{cert.description}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent hover:underline text-sm ml-1"
                    title="View Certificate"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
                <div className="flex flex-wrap gap-2 mt-2">
                  {cert.tags && cert.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        For more certificates, you can check my LinkedIn profile for more details.
      </div>
    </section>
  );
};

export default Certificates;
