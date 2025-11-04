import React, { lazy } from 'react';
import { Youtube, BookOpen, Users, Newspaper, MessageSquare, Video, ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Creator() {
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
  }];
  const articles = [{
    title: 'The Seed, the Tool, and the Steward',
    excerpt: "Why I'm launching The 80/20 Podcast to spotlight stories of advantage and accountability. It's not about having an advantage, but what you do with it.",
    date: 'July 15, 2025',
    category: 'Purpose',
    image: "/nepo_baby.webp",
    path: '/blog/seed-tool-steward'
  }, {
    title: 'API as a Product: Building an Enabling Developer Experience',
    excerpt: 'Explore how to build intentional developer experiences for API products, focusing on the Developer Console, Developer Community, and Business Management tools.',
    date: 'May 22, 2023',
    category: 'API & Platform Strategy',
    image: "/dx.webp",
    path: '/blog/api-as-product'
  }, {
    title: 'The Power of Dreams',
    excerpt: 'One year after moving to London, I reflect on my journey and share encouragement for every dreamer. Your dreams are valid, and with faith, determination, and the right support, they can become reality.',
    date: 'April 6, 2023',
    category: 'Faith & Purpose',
    image: "/New_years_23.webp",
    path: '/blog/power-of-dreams'
  }];
  return <main className="flex-grow bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            LEARN WITH TOCHII
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Inspiring, educating, and empowering the next generation of
            creators, product builders, and ecosystem leaders
          </p>
        </div>
      </section>
      {/* Mission & Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                MY CREATOR MISSION
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Through content, community, and platforms, I'm dedicated to
                helping the next generation of leaders find their path and make
                an impact. My mission is to empower creators, product builders,
                and ecosystem leaders across Africa and the world.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-[#002147] text-[#f5e7c8] p-4 rounded-lg text-center">
                  <h3 className="text-xl font-bold mb-2">INSPIRE</h3>
                  <p>Find clarity, cultivate conviction, and live fearlessly</p>
                </div>
                <div className="bg-[#002147] text-[#f5e7c8] p-4 rounded-lg text-center">
                  <h3 className="text-xl font-bold mb-2">EDUCATE</h3>
                  <p>Learn technology and systems for the future of work</p>
                </div>
                <div className="bg-[#002147] text-[#f5e7c8] p-4 rounded-lg text-center">
                  <h3 className="text-xl font-bold mb-2">EMPOWER</h3>
                  <p>Gain access to opportunities to level up and succeed</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="/IMG_2307.png" alt="Tochii's YouTube Studio showing API educational content" className="rounded-lg shadow-lg w-full h-auto" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
      {/* Content Pillars Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            CONTENT PILLARS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                API Design & Strategy
              </h3>
              <p className="text-gray-700">
                Versioning, governance, developer experience, and platform
                strategy
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Career Development
              </h3>
              <p className="text-gray-700">
                Growth strategies, interviewing, storytelling, and leadership
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Newspaper className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Faith & Purpose
              </h3>
              <p className="text-gray-700">
                Biblical wisdom for leadership, identity, vision, and resilience
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Education & Mentorship
              </h3>
              <p className="text-gray-700">
                Teaching, coaching, and building programs for STEM, AI, and
                professional growth
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* YouTube Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-3">
                YOUTUBE CHANNEL
              </h2>
              <p className="text-lg text-gray-700">
                Educational content to help you level up your skills in tech and
                leadership
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <a href="https://www.youtube.com/@TochiiStudio" target="_blank" rel="noopener noreferrer" className="flex items-center bg-[#002147] text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors">
                <Youtube className="h-5 w-5 mr-2" />
                Visit My Channel
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => <a key={index} href={video.link} target="_blank" rel="noopener noreferrer" className="group cursor-pointer transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative w-full" style={{
                paddingBottom: '56.25%'
              }}>
                    <img src={video.image} alt={video.title} className="absolute top-0 left-0 w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Youtube className="h-5 w-5 text-red-500 mr-2" />
                            <span className="text-white text-sm">
                              Watch Now
                            </span>
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
        </div>
      </section>
      {/* Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-3">
                LATEST ARTICLES
              </h2>
              <p className="text-lg text-gray-700">
                Insights on technology, leadership, and personal growth
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link to="/blog" className="flex items-center bg-[#002147] text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors">
                <Newspaper className="h-5 w-5 mr-2" />
                Visit Blog
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative w-full h-48 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="bg-blue-100 text-blue-900 text-xs px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      {article.date}
                    </span>
                    <Link to={article.path} className="text-blue-900 font-medium hover:text-blue-700 transition-colors flex items-center">
                      Read More
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Speaking & Workshops Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            SPEAKING & WORKSHOPS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div>
              <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg shadow-md mb-6">
                <img src="/IMG_4292.jpg" alt="Tochii presenting on APIs in modern software development at ProductDive conference" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                CONFERENCE SPEAKING
              </h3>
              <p className="text-gray-700">
                I regularly share my expertise at industry events like
                ProductDive's Product Leadership Conference, where I speak on
                topics such as "The Role of APIs in Modern Software
                Development."
              </p>
            </div>
            <div>
              <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg shadow-md mb-6">
                <img src="/IMG_4293.jpg" alt="Tochii speaking and engaging with audience at ProductDive event" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                INTERACTIVE WORKSHOPS
              </h3>
              <p className="text-gray-700">
                Beyond presentations, I facilitate interactive workshops and Q&A
                sessions that dive deep into technical concepts and leadership
                principles, helping participants translate complex ideas into
                actionable strategies.
              </p>
            </div>
          </div>
          {/* Merged Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-64 overflow-hidden">
                <img src="/0079_ColorinTechDojo2_AT_Catherine_20082024_Original.jpg" alt="Tochii leading a workshop at Tech event" className="w-full h-full object-cover object-center" loading="lazy" />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-blue-900">Tech Workshop</h4>
                <p className="text-gray-700 text-sm">
                  Facilitating hands-on learning experiences for tech
                  professionals
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-64 overflow-hidden">
                <img src="/0070_ColorInTechDojo_Catherine_210125_Original.jpg" alt="Tochii teaching at Color In Tech event" className="w-full h-full object-cover object-center" loading="lazy" />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-blue-900">Mentorship Sessions</h4>
                <p className="text-gray-700 text-sm">
                  Providing guidance and support to emerging tech leaders
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-64 overflow-hidden">
                <img src="/DD1F9920-FDE3-472E-B45D-F33CE32B5344.jpg" alt="Tochii at a professional speaking engagement" className="w-full h-full object-cover object-center" loading="lazy" />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-blue-900">Leadership Talks</h4>
                <p className="text-gray-700 text-sm">
                  Sharing insights on platform strategy and API leadership
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
              UPCOMING EVENTS
            </h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-blue-900">
                    API Course at ProductDive
                  </h4>
                  <p className="text-gray-700">Lagos, Nigeria</p>
                </div>
                <span className="bg-blue-100 text-blue-900 text-sm px-3 py-1 rounded-full">
                  October 2025
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                Teaching an in-depth API design and integration course at
                ProductDive, focusing on practical implementation strategies and
                best practices. More events to be confirmed for Q4 2025.
              </p>
              <a href="#" className="text-blue-900 font-medium hover:text-blue-700 transition-colors flex items-center">
                Learn More
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Community Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              JOIN OUR COMMUNITY
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Connect with like-minded professionals, get exclusive content, and
              participate in live Q&A sessions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                WhatsApp Community
              </h3>
              <p className="text-gray-700 mb-6">
                Join our WhatsApp community for quick updates, resources
                sharing, and direct interaction.
              </p>
              <a href="https://chat.whatsapp.com/L6UMszpHVflEzh30Nl7yft" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors">
                Join WhatsApp
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Youtube className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                YouTube Community
              </h3>
              <p className="text-gray-700 mb-6">
                Join 3,900+ subscribers for weekly educational content, live
                streams, and community discussions.
              </p>
              <a href="https://youtube.com/@tochiistudio?si=O8F1MnIpkn6k2o0b" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors">
                Subscribe
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Video className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">TikTok</h3>
              <p className="text-gray-700 mb-6">
                Follow me on TikTok for bite-sized wisdom, quick tips, and
                engaging content on tech and leadership.
              </p>
              <a href="https://www.tiktok.com/@learnwithtochii?_t=ZS-8ytdRIhtAG8&_r=1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                Follow on TikTok
              </a>
            </div>
          </div>
          <div className="bg-[#002147] text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              LEARN WITH TOCHII NEWSLETTER
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Get weekly insights, resources, and opportunities delivered
              straight to your inbox.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none" />
              <button className="bg-white text-blue-900 font-bold px-6 py-3 rounded-md hover:bg-blue-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>;
}