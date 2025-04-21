import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import profilePlaceholder from '../assets/screenshot-2025-03-14-182343-20.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 relative">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center">
            <span
              className="text-3xl font-extralight tracking-tighter text-pink-600"
              style={{ fontFamily: 'Helvetica' }}
            >
              lc
            </span>
          </Link>
          <button className="w-9 h-9 bg-pink-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-2xl leading-none">≡</span>
          </button>

          <div className="relative w-80 h-10 rounded-xl overflow-hidden flex items-center shadow-md">
            <Image
              src="/car.png"
              alt="Car"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-between px-4 bg-black/20 backdrop-blur-sm rounded-xl">
              <span className="text-white text-sm font-light tracking-wide">Search</span>
              <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🎤</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Profile */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
            <Image
              src={profilePlaceholder}
              alt="Profile Center"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center gap-10">
          <nav className="flex items-center gap-10">
            <Link
              href="/"
              className="text-sm font-medium text-white bg-pink-600 px-6 py-1.5 rounded-full shadow-sm"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-pink-600 transition"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium text-gray-700 hover:text-pink-600 transition"
            >
              Projects
            </Link>
          </nav>

          <button className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 via-pink-600 to-pink-500 flex items-center justify-center shadow-md">
            <div className="w-9 h-9 rounded-lg overflow-hidden">
              <Image
                src={profilePlaceholder}
                alt="Profile Mini"
                width={36}
                height={36}
                className="object-cover"
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
