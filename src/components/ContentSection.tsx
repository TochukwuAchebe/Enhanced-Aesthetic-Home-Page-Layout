import React from 'react';
import { Youtube, BookOpen, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export function ContentSection() {
  const featuredVideos = [{
    title: 'API AS A PRODUCT',
    subtitle: 'Turn Your API Into A Real Product',
    views: '8.5K views',
    image: "/Yellow_Modern_Mathematics_Lecture_Youtube_Thumbnail_%281%29.png",
    link: 'https://youtu.be/Ynb9g594SF4'
  }, {
    title: 'STOP BREAKING YOUR APIS',
    subtitle: 'The Guide to Versioning & Deprecation',
    views: '3.5K views',
    image: "/Yellow_Modern_Mathematics_Lecture_Youtube_Thumbnail_%282%29.png",
    link: 'https://youtu.be/8zh0hGZwylc'
  }];
  const featuredArticles = [{
    title: 'API as a Product: Building an Enabling Developer Experience',
    category: 'API & Platform Strategy',
    excerpt: 'Explore how to build intentional developer experiences for API products...',
    path: '/blog/api-as-product'
  }, {
    title: 'The Power of Dreams',
    category: 'Faith & Purpose',
    excerpt: 'One year after moving to London, reflecting on my journey and sharing encouragement for every dreamer...',
    path: '/blog/power-of-dreams'
  }];
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            LEARN WITH TOCHII
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Inspiring, educating, and empowering the next generation through
            content, community, and platforms
          </p>
        </div>
        {/* Content Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="bg-blue-900 text-white h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-blue-900 mb-2">API Design</h3>
            <p className="text-sm text-gray-700">
              Strategy, governance & developer experience
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="bg-blue-900 text-white h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-blue-900 mb-2">Career Growth</h3>
            <p className="text-sm text-gray-700">
              Interviewing, storytelling & leadership
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="bg-blue-900 text-white h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-blue-900 mb-2">Faith & Purpose</h3>
            <p className="text-sm text-gray-700">
              Biblical wisdom for leadership & resilience
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="bg-blue-900 text-white h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-blue-900 mb-2">Mentorship</h3>
            <p className="text-sm text-gray-700">
              Teaching & coaching for professional growth
            </p>
          </div>
        </div>
        {/* Featured Videos */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-blue-900">
              Featured Videos
            </h3>
            <a href="https://www.youtube.com/@TochiiStudio" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-900 hover:text-blue-700 transition-colors">
              <Youtube className="h-5 w-5 mr-2" />
              <span className="font-medium">View All Videos</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredVideos.map((video, index) => <a key={index} href={video.link} target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative w-full h-48 overflow-hidden">
                    <img src={video.image} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Youtube className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-blue-900 mb-1">
                      {video.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {video.subtitle}
                    </p>
                    <p className="text-xs text-gray-500">{video.views}</p>
                  </div>
                </div>
              </a>)}
          </div>
        </div>
        {/* Featured Articles */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-blue-900">
              Latest Articles
            </h3>
            <Link to="/blog" className="flex items-center text-blue-900 hover:text-blue-700 transition-colors">
              <BookOpen className="h-5 w-5 mr-2" />
              <span className="font-medium">View All Articles</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => <Link key={index} to={article.path} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="mb-3">
                    <span className="bg-blue-100 text-blue-900 text-xs px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-blue-900 mb-3">
                    {article.title}
                  </h4>
                  <p className="text-gray-700 mb-4">{article.excerpt}</p>
                  <span className="text-blue-900 font-medium hover:text-blue-700 transition-colors flex items-center">
                    Read More
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </span>
                </div>
              </Link>)}
          </div>
        </div>
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Join the Learn with Tochii Community
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Get access to exclusive content, mentorship opportunities, and
            connect with like-minded professionals
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/creator" className="bg-white text-blue-900 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors font-bold">
              Explore Content
            </Link>
            <a href="https://chat.whatsapp.com/L6UMszpHVflEzh30Nl7yft" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-blue-900 transition-colors font-bold">
              Join Community
            </a>
          </div>
        </div>
      </div>
    </section>;
}