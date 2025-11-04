import React from 'react';
import { Link } from 'react-router-dom';
export function Hero() {
  return <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight mb-6">
            Hi, I'm Tochii Achebe.
          </h2>
          <p className="text-xl text-blue-900 font-semibold mb-4">
            Platform and API Product Leader | Stanford GSB | Educator | Builder
            of Impactful Communities
          </p>
          <p className="text-lg text-gray-700 mb-8">
            I help organisations scale platforms, empower communities, and
            unlock growth through APIs, partnerships, and storytelling.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:achebetochukwu@gmail.com" className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors cursor-pointer">
              Work With Me
            </a>
            <a href="https://www.youtube.com/@TochiiStudio" target="_blank" rel="noopener noreferrer" className="border border-blue-900 text-blue-900 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors cursor-pointer">
              Watch My Videos
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="rounded-full overflow-hidden w-80 h-80 border-4 border-gray-200">
            <img src="/IMG_4084.jpg" alt="Tochukwu Achebe teaching and mentoring" className="w-full h-full object-cover object-center" style={{
            filter: 'contrast(1.1) brightness(1.05) saturate(1.1)'
          }} loading="eager" />
          </div>
        </div>
      </div>
    </section>;
}