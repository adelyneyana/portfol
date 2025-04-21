import React from 'react';
import Image from 'next/image';

const ProjectCard = ({ imageSrc }: { imageSrc: string }) => {
  return (
    <div className="group relative aspect-square rounded-3xl overflow-hidden bg-gray-100">
      <Image
        src={imageSrc}
        alt="Project"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white text-lg font-medium">Project name</h3>
          <p className="text-white/80 text-sm mt-2">View case</p>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    '/project1.jpg',
    '/project2.jpg',
    '/project3.jpg',
    '/project4.jpg',
    '/project5.jpg',
    '/project6.jpg',
    '/project7.jpg',
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Feature Project */}
          <div className="md:col-span-2 lg:col-span-3">
            <ProjectCard imageSrc={projects[0]} />
          </div>
          
          {/* Regular Projects Grid */}
          {projects.slice(1).map((project, index) => (
            <ProjectCard key={index} imageSrc={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 