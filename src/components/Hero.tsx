import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-gray-50 rounded-3xl overflow-hidden mt-24 mx-4">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex justify-between">
          {/* Left Content */}
          <div className="max-w-xl">
            <div className="mb-4 flex items-center">
              <div className="h-px w-8 bg-pink-600 mr-4"></div>
              <span className="text-sm text-gray-500">hi, im fullstack dev</span>
            </div>
            <h1 className="text-6xl font-serif mb-6">
              Your
              <br />
              skill
              <br />
              here
            </h1>
            <p className="text-gray-600 max-w-md">
              I create stackworkslo lylthwing kxms kmgln jkygm kxmg mj nkm
              kxm ksy kgn thy yfn rink pxt pry r jrk ng ly kyx sm mght hy thxt by
              gm thwgn jn kgmst jxly rh ts gr
              drynk dk rly jxly
            </p>
            <div className="mt-8">
              <div className="inline-flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium">POWERED BY</div>
                  <div className="text-sm text-gray-500">FIGMA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-[400px] h-[400px]">
            <div className="absolute right-0 top-0 w-[350px] h-[350px] rounded-full bg-pink-600 overflow-hidden">
              <Image
                src="/profile-image.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 