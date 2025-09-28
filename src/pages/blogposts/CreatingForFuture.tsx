import React from 'react';
import { Calendar, Clock, Tag, ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export function CreatingForFuture() {
  return <main className="flex-grow bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            What Are You Creating for the Future?
          </h1>
          <p className="text-xl max-w-3xl mx-auto italic">
            "Our greatest calling in life should be to create"
          </p>
        </div>
      </section>
      {/* Blog Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link to="/blog" className="flex items-center text-blue-900 hover:text-blue-700 transition-colors mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to all articles
              </Link>
              <div className="flex flex-wrap items-center text-gray-600 mb-6">
                <div className="flex items-center mr-6 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">March 12, 2019</span>
                </div>
                <div className="flex items-center mr-6 mb-2">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">5 min read</span>
                </div>
                <div className="flex items-center mb-2">
                  <Tag className="h-4 w-4 mr-1" />
                  <span className="text-sm">Innovation & Purpose</span>
                </div>
              </div>
              <div className="w-full h-64 md:h-96 mb-8 overflow-hidden rounded-lg">
                <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Person creating and innovating for the future" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="prose max-w-none text-gray-800">
              <p className="text-lg mb-6">
                Our greatest calling in life should be to create, whether that
                is a job that gives someone dignity, a service that solves real
                problems, an application that changes how we live, or an idea
                that outlives us. The ultimate goal is to leave the world better
                than we found it.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Standing on the Shoulders of Giants
                </h2>
                <p className="mb-0">
                  It is easy to forget that the world we enjoy today is the
                  product of someone else's imagination and courage. Just a few
                  decades ago, there were no smartphones to call an Uber, no
                  pocket sized devices to connect us instantly to our loved
                  ones. We relied on postcards, landlines, and slower, less
                  connected systems to move ideas and resources.
                </p>
              </div>
              <div className="mb-12">
                <div className="flex flex-col md:flex-row gap-8 mb-6">
                  <div className="md:w-1/2">
                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" alt="Digital technology connecting the world" className="rounded-lg shadow-md w-full h-auto" />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      The Era of Unprecedented Opportunity
                    </h3>
                    <p className="mb-4">
                      Now, we live in an era of unprecedented communication,
                      access, and opportunity. Technology has not only shrunk
                      the world but also given us a unique edge, a chance to
                      create innovations, systems, and solutions that once
                      seemed impossible.
                    </p>
                    <p className="mb-0">
                      This moment in history carries a responsibility: to push
                      boundaries in research, technology, art, community
                      building, in whatever field we find ourselves, so that
                      those who come after us inherit something better.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Creation as Legacy
                </h2>
                <p className="mb-6">
                  Our creativity is not just for today's applause; it is an
                  investment into the lives of those who will one day fill the
                  positions we occupy now. The things we build, the systems we
                  design, and the values we embed in our work will shape how
                  future generations live, work, and relate to one another.
                </p>
                <p className="mb-6">
                  Consider the impact of past innovations: the printing press
                  democratized knowledge, antibiotics extended lifespans, and
                  the internet connected humanity in ways previously
                  unimaginable. Each of these creations fundamentally altered
                  human experience—not just for their creators' contemporaries,
                  but for countless generations that followed.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      Technology
                    </h3>
                    <p className="text-gray-700">
                      Building tools and platforms that enhance human capability
                      and connection
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      Systems & Services
                    </h3>
                    <p className="text-gray-700">
                      Designing frameworks that make life more efficient,
                      accessible, and equitable
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      Ideas & Culture
                    </h3>
                    <p className="text-gray-700">
                      Shaping values, narratives, and perspectives that guide
                      societal development
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  The Responsibility of Creation
                </h2>
                <p className="mb-6">
                  With the power to create comes the responsibility to consider
                  the long-term implications of our work. As we build new
                  technologies, businesses, and institutions, we must ask
                  ourselves not just "Can we create this?" but also "Should we
                  create this?" and "How might this shape the world our children
                  and grandchildren will inherit?"
                </p>
                <p className="mb-6">
                  This perspective transforms how we approach our daily work.
                  Suddenly, the code we write isn't just about meeting this
                  quarter's objectives—it's about building systems that will
                  serve people with integrity for years to come. The business
                  models we develop aren't just about maximizing short-term
                  profit—they're about creating sustainable value that benefits
                  communities over generations.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <blockquote className="border-l-4 border-blue-900 pl-4 py-2 italic text-gray-700 mb-4">
                    "We are called to be architects of the future, not its
                    victims." — R. Buckminster Fuller
                  </blockquote>
                  <p className="text-gray-700">
                    As creators, we have the unique privilege and responsibility
                    to design the future we wish to see. This means being
                    intentional about what we build, how we build it, and the
                    values we embed within our creations.
                  </p>
                </div>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Questions for Reflection
                </h2>
                <p className="mb-6">
                  As you consider your own creative work—whether that's
                  developing software, building a business, raising children, or
                  contributing to your community—I invite you to reflect on
                  these questions:
                </p>
                <div className="bg-blue-900 text-white p-8 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-4">
                    What are you creating?
                  </h3>
                  <p className="mb-6">
                    Beyond the immediate outputs of your work, what larger
                    systems, opportunities, or possibilities are you helping to
                    bring into existence?
                  </p>
                  <h3 className="text-xl font-bold mb-4">
                    How will it shape the next generation?
                  </h3>
                  <p className="mb-0">
                    If your creation achieves everything you hope for it, how
                    might it influence the lives of those who come after you?
                    What kind of world are you helping to build?
                  </p>
                </div>
                <p className="mb-6">
                  These questions aren't meant to paralyze us with the weight of
                  responsibility, but rather to inspire us to think more
                  expansively about our work and its potential impact. When we
                  create with the future in mind, we infuse our work with
                  greater purpose and meaning.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Conclusion: Create Boldly, Create Responsibly
                </h2>
                <p className="text-lg text-blue-900 mb-4">
                  The act of creation is one of humanity's greatest gifts.
                  Through it, we express our deepest values, solve our most
                  pressing problems, and shape the world that future generations
                  will inherit.
                </p>
                <p className="text-lg text-blue-900 mb-0">
                  So create boldly—push boundaries, challenge assumptions, and
                  imagine possibilities that others cannot yet see. But also
                  create responsibly—with awareness of how your work might
                  ripple through time, affecting lives and systems far beyond
                  your own experience.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-8 mt-12">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Share this article
                </h3>
                <div className="flex space-x-4">
                  <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">
                    Share on LinkedIn
                  </button>
                  <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">
                    Share on Twitter
                  </button>
                  <button className="border border-blue-900 text-blue-900 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors">
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Related Articles */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/Colorful_Bright_and_Bold_Podcast_YouTube_Thumbnail_%288%29.png" alt="Faith and Technology Leadership" className="w-full h-40 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Tag className="h-4 w-4 text-blue-900 mr-1" />
                  <span className="text-sm text-blue-900 font-medium">
                    Faith & Purpose
                  </span>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  The Intersection of Faith and Technology Leadership
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  How biblical principles can inform and enhance your approach
                  to leading technical teams...
                </p>
                <Link to="/blog" className="text-blue-900 font-medium hover:text-blue-700 transition-colors flex items-center">
                  Read More
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/Yellow_Modern_Mathematics_Lecture_Youtube_Thumbnail_%282%29.png" alt="What is an API" className="w-full h-40 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Tag className="h-4 w-4 text-blue-900 mr-1" />
                  <span className="text-sm text-blue-900 font-medium">
                    API Design & Technology
                  </span>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  So what is an API and how can this 10x your business revenue?
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Understanding the technology behind successful business
                  partnerships...
                </p>
                <Link to="/blog/what-is-an-api" className="text-blue-900 font-medium hover:text-blue-700 transition-colors flex items-center">
                  Read More
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/Colorful_Bright_and_Bold_Podcast_YouTube_Thumbnail_%281%29.png" alt="From Technical Expert to Product Leader" className="w-full h-40 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Tag className="h-4 w-4 text-blue-900 mr-1" />
                  <span className="text-sm text-blue-900 font-medium">
                    Career Growth
                  </span>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  From Technical Expert to Product Leader: My Journey
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Personal reflections on transitioning from engineering to
                  product leadership...
                </p>
                <Link to="/blog" className="text-blue-900 font-medium hover:text-blue-700 transition-colors flex items-center">
                  Read More
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
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
              Get the latest articles, insights, and resources on innovation,
              technology, and creating meaningful impact delivered straight to
              your inbox.
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