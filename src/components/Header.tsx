import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import profilePlaceholder from '../assets/screenshot-2025-03-14-182343-20.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-light text-pink-600">lc</span>
          </Link>
          <button className="w-8 h-8 bg-pink-600 rounded flex items-center justify-center">
            <span className="text-white text-xl">≡</span>
          </button>
          <div className="relative h-8 w-48 rounded overflow-hidden">
            <Image
              src="/car-banner.jpg"
              alt="Car Banner"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Center Profile */}
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <Image
            src={profilePlaceholder}
            alt="Profile"
            width={32}
            height={32}
            className="object-cover"
          />
        </div>

        {/* Right Navigation */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-xs font-medium bg-pink-600 text-white px-3 py-1 rounded">
            Home
          </Link>
          <Link href="/about" className="text-xs font-medium text-gray-900">
            About
          </Link>
          <Link href="/projects" className="text-xs font-medium text-gray-900">
            Projects
          </Link>
          <button className="w-8 h-8 rounded bg-pink-600 flex items-center justify-center">
            <Image
              src={profilePlaceholder}
              alt="Profile"
              width={24}
              height={24}
              className="rounded"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
