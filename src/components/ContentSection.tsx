import React from 'react';
import { Youtube, BookOpen, Linkedin as LinkedinIcon } from 'lucide-react';
export function ContentSection() {
  const videos = [{
    title: 'BREAKING INTO PRODUCT MANAGEMENT',
    duration: '5:52',
    thumbnail: "/IMG_1775.png",
    color: 'bg-purple-600'
  }, {
    title: 'WORKING REMOTELY IN TECH',
    duration: '3:18',
    thumbnail: "/IMG_1775.png",
    color: 'bg-red-600'
  }, {
    title: 'UNDERSTANDING API DEPRECATION',
    duration: '12:25',
    thumbnail: "/IMG_1775.png",
    color: 'bg-blue-600'
  }, {
    title: 'CONFIDENCE IN PUBLIC SPEAKING',
    duration: '5:39',
    thumbnail: "/IMG_1775.png",
    color: 'bg-yellow-500'
  }];
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
          WATCH MY VIDEOS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => <div key={index} className="group cursor-pointer">
              <div className={`relative ${video.color} rounded-lg overflow-hidden aspect-video mb-3`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">
                    {video.title}
                  </span>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <h3 className="text-lg font-bold text-blue-900 truncate">
                {video.title}
              </h3>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            In my work with The Nwa-Amaka Achebe Trust, I am dedicated to
            supporting education and empowerment across Nigeria and the UK.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-blue-900 hover:text-blue-700 transition-colors">
              <Youtube className="h-8 w-8" />
            </a>
            <a href="#" className="text-blue-900 hover:text-blue-700 transition-colors">
              <LinkedinIcon className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>;
}