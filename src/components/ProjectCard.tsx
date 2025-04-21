import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProjectCardProps {
  image: string | StaticImageData;
  title: string;
  type: string;
  industry: string;
  className?: string;
}

const ProjectCard = ({ image, title, type, industry, className = '' }: ProjectCardProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="relative w-full aspect-video overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-2">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{type}</p>
        </div>
        <div className="inline-block px-3 py-1 text-sm text-pink-600 bg-pink-50 rounded-full">
          {industry}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 