import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import SocialLinks from '../components/SocialLinks';
import Image from 'next/image';

// Import your images here
import profileImage from '../assets/screenshot-2025-03-14-182343-20.png';
import project1 from '../assets/image-30.png';
import project2 from '../assets/image-31.png';
import project3 from '../assets/image-32.png';

export default function Home() {
  const projects = [
    {
      image: project1,
      title: 'Project name',
      type: 'Project type',
      industry: 'Industry',
    },
    {
      image: project2,
      title: 'Project name',
      type: 'Project type',
      industry: 'Industry',
    },
    {
      image: project3,
      title: 'Project name',
      type: 'Project type',
      industry: 'Industry',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50">
      <Header />
      
      {/* Hero Section */}
      <main className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-0.5 bg-pink-600"></div>
                  <h2 className="text-sm text-pink-600 font-medium">Hi, I'm Adelyn Eyana</h2>
                </div>
                <h1 className="text-6xl font-bold text-gray-900 leading-tight">
                  Your<br />skill<br />here
                </h1>
              </div>
              
              <p className="text-gray-600 max-w-md">
                I create stunning web/UX designs and bring them to life with modern technologies.
                Let's work together to build something amazing.
              </p>

              <div className="flex items-center space-x-6">
                <button className="px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors">
                  View Projects
                </button>
                <SocialLinks />
              </div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square rounded-full bg-gradient-to-br from-pink-400 to-pink-600 overflow-hidden">
                <Image
                  src={profileImage}
                  alt="Profile"
                  width={600}
                  height={600}
                  className="object-cover mix-blend-overlay"
                />
              </div>
            </motion.div>
          </div>

          {/* Project Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                type={project.type}
                industry={project.industry}
              />
            ))}
          </motion.div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center py-8 mt-24 text-gray-600"
          >
            Designed by Adelyn Eyana
          </motion.footer>
        </div>
      </main>
    </div>
  );
} 