import React from 'react';
import { Calendar, Clock, Tag, ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export function IntentionalLiving() {
  return <main className="flex-grow bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Intentional Living, Endless Possibilities
          </h1>
          <p className="text-xl max-w-3xl mx-auto italic">
            "You are the CEO of Me Incorporated"
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
                  <span className="text-sm">January 15, 2020</span>
                </div>
                <div className="flex items-center mr-6 mb-2">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">6 min read</span>
                </div>
                <div className="flex items-center mb-2">
                  <Tag className="h-4 w-4 mr-1" />
                  <span className="text-sm">Personal Growth & Purpose</span>
                </div>
              </div>
              <div className="w-full h-64 md:h-96 mb-8 overflow-hidden rounded-lg">
                <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" alt="Person planning and working intentionally with notebook and laptop" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="prose max-w-none text-gray-800">
              <p className="text-lg mb-6">
                Living intentionally is about more than just setting goals, it
                is about engineering new beginnings. In Product Management,
                there's a method called GIST: Goals, Ideas, Steps, and Tasks.
                I've found that this framework is just as powerful when applied
                to life.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  The GIST Framework for Life
                </h2>
                <p className="mb-0">
                  Just as we structure our approach to building products, we can
                  structure our approach to building our lives. The GIST
                  framework provides a powerful mental model for intentional
                  living that balances vision with execution.
                </p>
              </div>
              <div className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      Goals
                    </h3>
                    <p className="mb-4">
                      Goals give you a vision of the future you want. They help
                      you see the direction clearly, almost like a map showing
                      your destination.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 italic">
                        "A goal properly set is halfway reached." — Zig Ziglar
                      </p>
                    </div>
                  </div>
                  <div>
                    <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Person standing on mountain top looking at the horizon, representing goals and vision" className="rounded-lg shadow-md w-full h-auto" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div className="order-2 md:order-1">
                    <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Person brainstorming ideas with sticky notes and laptop" className="rounded-lg shadow-md w-full h-auto" />
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      Ideas
                    </h3>
                    <p className="mb-4">
                      Ideas are the creative pathways to reach those goals. They
                      turn abstract ambitions into tangible opportunities.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 italic">
                        "Ideas are the currency of the 21st century." — Carmine
                        Gallo
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      Steps
                    </h3>
                    <p className="mb-4">
                      Steps are the structured actions that move your ideas
                      forward. Here, you learn that progress is iterative,
                      breaking it down into manageable phases keeps you focused
                      on what matters most in the moment.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 italic">
                        "The journey of a thousand miles begins with a single
                        step." — Lao Tzu
                      </p>
                    </div>
                  </div>
                  <div>
                    <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Steps leading upward, representing progress and structured actions" className="rounded-lg shadow-md w-full h-auto" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div className="order-2 md:order-1">
                    <img src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" alt="Person checking off tasks on a to-do list" className="rounded-lg shadow-md w-full h-auto" />
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      Tasks
                    </h3>
                    <p className="mb-4">
                      Tasks are the smallest, most actionable units of progress.
                      They are the drops of water that, over time, create an
                      ocean of results.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 italic">
                        "Success is the sum of small efforts, repeated day in
                        and day out." — Robert Collier
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Making the Conscious Shift
                </h2>
                <p className="mb-6">
                  Sometimes, living intentionally means making a conscious
                  shift, breaking away from negative patterns and aligning
                  yourself with a new direction. It starts with an internal
                  change, a decision that your current chapter can be re-written
                  with purpose.
                </p>
                <div className="bg-blue-900 text-white p-6 rounded-lg mb-6">
                  <p className="mb-4">
                    For me, that shift came in 2019 through Edubridge Academy.
                    It was not just a course; it was a catalyst. That experience
                    completely reshaped my trajectory for the year. One
                    deliberate decision led to a chain of opportunities, and I
                    learned that goal-seeking is not a one-time event, it's a
                    lifelong posture.
                  </p>
                  <p className="mb-0 italic">
                    "The moment you make a decision is the moment you set a new
                    trajectory for your life."
                  </p>
                </div>
                <p className="mb-6">
                  This principle of intentional decision-making has transformed
                  not just my personal life but my professional approach as
                  well. Each deliberate choice creates ripples that extend far
                  beyond what we can initially see.
                </p>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  The Power of Exposure
                </h2>
                <p className="mb-6">
                  Another pillar of intentional living is exposure. You cannot
                  engineer a better life while surrounding yourself with the
                  wrong influences. Be deliberate about what you consume, who
                  you listen to, and the environments you place yourself in.
                  Every piece of content you engage with is either fueling your
                  development or draining your potential.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Audit Your Influences
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-bold text-blue-900 mb-2">Content</h4>
                      <p className="text-gray-700 text-sm">
                        What books, articles, podcasts, and videos are you
                        consuming daily? Are they aligned with your goals?
                      </p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-bold text-blue-900 mb-2">People</h4>
                      <p className="text-gray-700 text-sm">
                        Who are the five people you spend the most time with? Do
                        they elevate your thinking and support your growth?
                      </p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-bold text-blue-900 mb-2">
                        Environments
                      </h4>
                      <p className="text-gray-700 text-sm">
                        What spaces—physical and digital—do you occupy? Do they
                        foster creativity, productivity, and well-being?
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mb-6">
                  Your mind is like fertile soil—it will grow whatever seeds you
                  plant in it. Choose wisely what you allow to take root through
                  your daily exposures.
                </p>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  You Are the CEO of Me Incorporated
                </h2>
                <p className="mb-6">
                  At the end of the day, Product Management is more than a
                  career skill, it's a way of life. You are the CEO of Me
                  Incorporated. The requirements you define, the roadmap you
                  create, and the execution you commit to will determine the end
                  product, your life.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Person working as CEO of their own life, making strategic decisions" className="w-full h-auto rounded-lg shadow-md mb-6" />
                  <p className="text-gray-700">
                    Just as a product manager carefully considers user needs,
                    market conditions, and technical constraints, you must
                    thoughtfully design your life with awareness of your values,
                    circumstances, and long-term vision.
                  </p>
                </div>
                <p className="mb-6">
                  This mindset shift—from passive participant to active creator
                  of your life—is perhaps the most powerful transformation you
                  can make. It puts you firmly in the driver's seat, with both
                  the responsibility and the freedom that comes with that
                  position.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Questions for Reflection
                </h2>
                <p className="mb-6">So I leave you with this:</p>
                <ul className="space-y-4 text-blue-900">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <p>What are your goals?</p>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <p>
                      Are they broken down into Goals, Ideas, Steps, and Tasks?
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <p>
                      And are you exposing yourself to the influences that will
                      help you live intentionally and unlock endless
                      possibilities?
                    </p>
                  </li>
                </ul>
                <p className="mt-6 text-blue-900 italic">
                  "The best way to predict your future is to create it." —
                  Abraham Lincoln
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
              <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Creating for the future" className="w-full h-40 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Tag className="h-4 w-4 text-blue-900 mr-1" />
                  <span className="text-sm text-blue-900 font-medium">
                    Innovation & Purpose
                  </span>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  What Are You Creating for the Future?
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Our greatest calling in life should be to create, whether that
                  is a job, a service, an application, or an idea...
                </p>
                <Link to="/blog/creating-for-future" className="text-blue-900 font-medium hover:text-blue-700 transition-colors flex items-center">
                  Read More
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1531686264889-56fdcabd163b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="This is 30" className="w-full h-40 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Tag className="h-4 w-4 text-blue-900 mr-1" />
                  <span className="text-sm text-blue-900 font-medium">
                    Faith & Purpose
                  </span>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  This is 30, Tobechukwu
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Thank you, God, for this journey called life. I wouldn't
                  change any experience — they've shaped the man I've become...
                </p>
                <Link to="/blog/this-is-30" className="text-blue-900 font-medium hover:text-blue-700 transition-colors flex items-center">
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
              Get the latest articles, insights, and resources on intentional
              living, product management, and personal growth delivered straight
              to your inbox.
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