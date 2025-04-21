'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  { 
    id: 1, 
    title: 'Project name', 
    image: '/project1.jpg',
    description: 'View case study'
  },
  { 
    id: 2, 
    title: 'Project name', 
    image: '/project2.jpg',
    description: 'View case study'
  },
  { 
    id: 3, 
    title: 'Project name', 
    image: '/project3.jpg',
    description: 'View case study'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
            <div className="relative">
              <div className="bg-[#111111] rounded-lg flex items-center px-4 py-2 space-x-3">
                <Image src="/car.png" alt="Car" width={40} height={24} className="rounded opacity-60" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent text-white/60 placeholder-white/60 outline-none w-32"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-white/60 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">About</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Projects</a>
            <div className="w-10 h-10 rounded-full bg-[#FF1493] flex items-center justify-center">
              <Image src="/profile.png" alt="Profile" width={32} height={32} className="rounded-full" />
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pt-24">
        {/* Hero Section */}
        <section className="py-16">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-sm text-white/60">Hi, I'm Adelyn Eyana</p>
                <h1 className="text-7xl font-bold leading-tight">
                  Your<br />skill<br />here
                </h1>
              </div>
              <p className="text-white/60 text-lg max-w-md leading-relaxed">
                I create blackground by throwing krmis kmgkn jkygkm kgmjkn jkygkm kgmjkn
                jkygkm kgmjkn kbhk sgy qmhkhy yfhk nky sgy qmhkhy yfhk r nk pnk r y nk
                pnk r y nk pnk por y r nk pnk r y nk pnk por y nk pnk por y
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full">
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF1493] to-[#FF69B4] mix-blend-soft-light"></div>
                <Image
                  src="/hero-image.jpg"
                  alt="Hero"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="grid grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-xl font-medium mb-1">{project.title}</h3>
                      <p className="text-sm text-white/80">{project.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
} 