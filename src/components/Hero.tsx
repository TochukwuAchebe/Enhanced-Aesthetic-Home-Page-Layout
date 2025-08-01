import React from 'react';
export function Hero() {
  return <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight mb-6">
            Hi, I'm Tochii Achebe.
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Thought leader in content, community, and platforms.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors">
              Work With Me
            </button>
            <button className="border border-blue-900 text-blue-900 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors">
              Watch My Videos
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="rounded-full overflow-hidden w-80 h-80 border-4 border-gray-200">
            <img src="/695E6E62-AF24-47EE-AD10-F2014597D1F0.png" alt="Tochukwu Achebe" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>;
}