import React, { useState } from 'react';
import { Calendar, Clock, Tag, Search, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
// Mock blog post data
const blogPosts = [{
  id: 0,
  title: 'The Seed, the Tool, and the Steward',
  excerpt: "Why I'm launching The 80/20 Podcast to spotlight stories of advantage and accountability. It's not about having an advantage, but what you do with it.",
  date: 'July 15, 2025',
  readTime: '6 min read',
  category: 'Purpose',
  image: "/nepo_baby.webp",
  path: '/blog/seed-tool-steward'
}, {
  id: 1,
  title: 'API as a Product: Building an Enabling Developer Experience & Measuring Success',
  excerpt: 'Explore how to build intentional developer experiences for API products, focusing on the Developer Console, Developer Community, and Business Management tools to create successful API platforms.',
  date: 'May 22, 2024',
  readTime: '9 min read',
  category: 'API & Platform Strategy',
  image: "/dx.webp",
  path: '/blog/api-as-product'
}, {
  id: 8,
  title: 'API Integration 101',
  excerpt: 'A comprehensive guide to understanding API integration concepts including system design patterns, API user management, integration concepts, and API specifications.',
  date: 'July 15, 2023',
  readTime: '10 min read',
  category: 'API & Platform Strategy',
  image: "/1_oSgsUj3-2hV-KgADMtrWbA2x.webp",
  path: '/blog/api-integration-101'
}, {
  id: 7,
  title: 'This is 30, Tobechukwu',
  excerpt: "Thank you, God, for this journey called life. I wouldn't change any experience — they've shaped the man I've become. Here are ten lessons I've learned over the last 29 years.",
  date: 'October 28, 2023',
  readTime: '5 min read',
  category: 'Faith & Purpose',
  image: "/_M2A3646.jpg",
  path: '/blog/this-is-30'
}, {
  id: 10,
  title: 'Accepting Payments as an African Business',
  excerpt: 'A comprehensive guide to understanding payment methods in Africa, including USSD, Cards, POS terminals, and Instant Transfers to help businesses make informed decisions.',
  date: 'June 15, 2022',
  readTime: '8 min read',
  category: 'Fintech & Payments',
  image: "/African_businesses.webp",
  path: '/blog/accepting-payments'
}, {
  id: 11,
  title: 'So what is an API and how can this 10x your business revenue?',
  excerpt: 'Understanding the technology behind successful business partnerships and how APIs enable collaboration between different companies to create innovative solutions.',
  date: 'March 15, 2021',
  readTime: '7 min read',
  category: 'API & Platform Strategy',
  image: "/Yellow_Modern_Mathematics_Lecture_Youtube_Thumbnail_%282%29.png",
  path: '/blog/what-is-an-api'
}, {
  id: 12,
  title: 'What Are You Creating for the Future?',
  excerpt: 'Our greatest calling in life should be to create, whether that is a job, a service, an application, or an idea. The ultimate goal is to leave the world better than we found it.',
  date: 'March 12, 2019',
  readTime: '5 min read',
  category: 'Innovation & Purpose',
  image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  path: '/blog/creating-for-future'
}, {
  id: 13,
  title: 'Intentional Living, Endless Possibilities',
  excerpt: 'Living intentionally is about more than just setting goals, it is about engineering new beginnings. Learn how to apply the GIST framework from Product Management to your life.',
  date: 'January 15, 2020',
  readTime: '6 min read',
  category: 'Personal Growth',
  image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
  path: '/blog/intentional-living'
}, {
  id: 14,
  title: 'Stop the Killing, Reform the Police',
  excerpt: 'As a Nigerian living in Nigeria, the last few days have been a whirlwind of emotions. We are demanding an end to police brutality and calling for comprehensive reform from the ground up.',
  date: 'October 20, 2020',
  readTime: '4 min read',
  category: 'Social Justice',
  image: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
  path: '/blog/stop-the-killing'
}];
// New featured post
const featuredPost = {
  id: 9,
  title: 'The Power of Dreams',
  excerpt: 'One year after moving to London, I reflect on my journey and share encouragement for every dreamer. Your dreams are valid, and with faith, determination, and the right support, they can become reality.',
  date: 'April 6, 2023',
  readTime: '8 min read',
  category: 'Faith & Purpose',
  image: "/New_years_23.webp",
  featured: true,
  path: '/blog/power-of-dreams'
};
// All unique categories from blog posts
const allCategories = ['All', ...new Set([...blogPosts.map(post => post.category), featuredPost.category])];
export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  // Filter posts based on category and search term
  const filteredPosts = blogPosts.filter(post => (selectedCategory === 'All' || post.category === selectedCategory) && (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())));
  return <main className="flex-grow bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            BLOG & INSIGHTS
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Thoughts on API design, platform strategy, career growth, and more
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:w-1/2">
              <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-auto object-cover" />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center mb-2">
                <span className="bg-blue-100 text-blue-900 text-sm px-3 py-1 rounded-full font-medium">
                  Featured
                </span>
                <span className="bg-blue-100 text-blue-900 text-sm px-3 py-1 rounded-full font-medium ml-2">
                  {featuredPost.category}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-blue-900 mb-3">
                {featuredPost.title}
              </h2>
              <p className="text-gray-700 mb-4">{featuredPost.excerpt}</p>
              <div className="flex items-center text-gray-600 mb-6">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="text-sm mr-4">{featuredPost.date}</span>
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-sm">{featuredPost.readTime}</span>
              </div>
              <Link to={featuredPost.path} className="flex items-center bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors">
                Read Article
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Search</h3>
                <div className="relative">
                  <input type="text" placeholder="Search articles..." className="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Categories
                </h3>
                <ul className="space-y-2">
                  {allCategories.map((category, index) => <li key={index}>
                      <button className={`w-full text-left px-3 py-2 rounded-md transition-colors ${selectedCategory === category ? 'bg-blue-100 text-blue-900 font-medium' : 'text-gray-700 hover:bg-gray-100'}`} onClick={() => setSelectedCategory(category)}>
                        {category}
                      </button>
                    </li>)}
                </ul>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="md:w-3/4">
              <div className="mb-8 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-blue-900">
                  {selectedCategory === 'All' ? 'All Articles' : selectedCategory}
                </h2>
                <p className="text-gray-600">{filteredPosts.length} articles</p>
              </div>
              {filteredPosts.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map(post => <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <div className="flex items-center mb-2">
                          <Tag className="h-4 w-4 text-blue-900 mr-1" />
                          <span className="text-sm text-blue-900 font-medium">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-blue-900 mb-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-700 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center text-gray-600 mb-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="text-sm mr-3">{post.date}</span>
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="text-sm">{post.readTime}</span>
                        </div>
                        <Link to={post.path || '/blog'} className="text-blue-900 font-medium hover:text-blue-700 transition-colors flex items-center">
                          Read More
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                      </div>
                    </div>)}
                </div> : <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <p className="text-gray-700 mb-4">
                    No articles found matching your criteria.
                  </p>
                  <button className="text-blue-900 font-medium" onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
              }}>
                    Clear filters
                  </button>
                </div>}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey Highlight */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">
            MY PROFESSIONAL JOURNEY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/VMN_2019.webp" alt="Starting at VerifyMe Nigeria" className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="bg-blue-100 text-blue-900 text-xs px-2 py-1 rounded-full mb-2 inline-block">
                  2019
                </span>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  The Beginning
                </h3>
                <p className="text-gray-700 mb-4">
                  From an unpaid intern to an Analyst at VerifyMe Nigeria, my
                  journey in tech began with a step of faith.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/Interswitch_2021.webp" alt="Leading at Interswitch" className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="bg-blue-100 text-blue-900 text-xs px-2 py-1 rounded-full mb-2 inline-block">
                  2020-2022
                </span>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Growth Journey
                </h3>
                <p className="text-gray-700 mb-4">
                  From Product Owner to leading API products across Interswitch,
                  Nigeria's first digital technology unicorn.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/_K0A9854-Edit_Original.jpg" alt="Head of Platform Services at RedCloud" className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="bg-blue-100 text-blue-900 text-xs px-2 py-1 rounded-full mb-2 inline-block">
                  2023-Present
                </span>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Global Impact and Leadership
                </h3>
                <p className="text-gray-700 mb-4">
                  Moving to London as a Global Talent and becoming Head of
                  Platform Services & Integrations at RedCloud Technologies.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link to="/blog" className="inline-flex items-center bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors">
              Read My Full Journey
              <ChevronRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-blue-900 rounded-lg shadow-md p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Subscribe to My Newsletter
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Get the latest articles, insights, and resources on API design,
              platform strategy, and career growth delivered straight to your
              inbox.
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