import React from 'react';
import { Youtube, ExternalLink } from 'lucide-react';
export function ContentSection() {
  const videos = [{
    title: 'API AS A PRODUCT',
    subtitle: 'TURN YOUR API INTO A REAL PRODUCT',
    duration: '12:45',
    image: "/Yellow_Modern_Mathematics_Lecture_Youtube_Thumbnail_%281%29.png",
    link: 'https://youtu.be/Ynb9g594SF4'
  }, {
    title: 'STOP BREAKING YOUR APIS',
    subtitle: 'THE GUIDE TO VERSIONING & DEPRECATION',
    duration: '8:32',
    image: "/Yellow_Modern_Mathematics_Lecture_Youtube_Thumbnail_%282%29.png",
    link: 'https://youtu.be/8zh0hGZwylc'
  }, {
    title: 'CHOOSING THE RIGHT API',
    subtitle: 'API SPECIFICATION FOR YOUR PROJECT',
    duration: '15:20',
    image: "/Colorful_Bright_and_Bold_Podcast_YouTube_Thumbnail.png.png",
    link: 'https://youtu.be/1WL_qlG-Low'
  }, {
    title: 'FROM CLASSMATES TO CO-FOUNDERS',
    subtitle: 'OF TWO SUCCESSFUL STARTUPS',
    duration: '22:15',
    image: "/Colorful_Bright_and_Bold_Podcast_YouTube_Thumbnail_%2817%29.png",
    link: 'https://youtu.be/XuxNRthq4bg'
  }];
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900">Watch My Videos</h2>
          <p className="text-lg text-gray-700 mt-3 max-w-2xl mx-auto">
            Educational content to help you level up your skills and knowledge
            in tech and leadership
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {videos.map((video, index) => <a key={index} href={video.link} target="_blank" rel="noopener noreferrer" className="group cursor-pointer transform hover:scale-105 transition-transform duration-300">
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative aspect-video">
                  <img src={video.image} alt={video.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Youtube className="h-5 w-5 text-red-500 mr-2" />
                          <span className="text-white text-sm">Watch Now</span>
                        </div>
                        <div className="bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-blue-900 text-lg">
                    {video.title}
                  </h3>
                  {video.subtitle && <p className="text-gray-600 text-sm mt-1">
                      {video.subtitle}
                    </p>}
                </div>
              </div>
            </a>)}
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            My mission is to empower the next generation of creators, product
            builders, and ecosystem leaders— across Africa and the world.
          </p>
          <a href="https://www.youtube.com/@TochiiStudio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-[#002147] text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors">
            <Youtube className="h-5 w-5 mr-2" />
            Visit My Channel
          </a>
        </div>
      </div>
    </section>;
}