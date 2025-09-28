import React, { Component } from 'react';
import { Calendar, Clock, Tag, ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export function PowerOfDreams() {
  return <main className="flex-grow bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The Power of Dreams
          </h1>
          <p className="text-xl max-w-3xl mx-auto italic">
            "Your dreams are valid, and with faith, determination, and the right
            support, they can become reality."
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
                  <span className="text-sm">April 6, 2023</span>
                </div>
                <div className="flex items-center mr-6 mb-2">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">8 min read</span>
                </div>
                <div className="flex items-center mb-2">
                  <Tag className="h-4 w-4 mr-1" />
                  <span className="text-sm">Faith & Purpose</span>
                </div>
              </div>
              <div className="w-full h-64 md:h-96 mb-8 overflow-hidden rounded-lg">
                <img src="/New_years_23.webp" alt="London cityscape representing dreams and new beginnings" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="prose max-w-none text-gray-800">
              <p className="text-lg mb-6">
                One year ago, I took a leap of faith and moved to London. As I
                reflect on this journey, I'm filled with gratitude and awe at
                how dreams can manifest when we combine faith, determination,
                and the right support systems. This post is for every dreamer
                out there – whether you're contemplating a major life change,
                pursuing a career goal, or building something meaningful from
                scratch.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  The Beginning: When Dreams Feel Impossible
                </h2>
                <p className="mb-0">
                  Every significant journey begins with a dream that often seems
                  impossible at first glance. For me, moving to London as a
                  Global Talent and stepping into a leadership role at a UK tech
                  company felt like an audacious goal. The challenges were
                  numerous: visa requirements, cultural transitions,
                  professional uncertainties, and the emotional weight of
                  leaving behind the familiar.
                </p>
              </div>
              <div className="mb-12">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Faith as the Foundation
                </h3>
                <p className="mb-6">
                  When I first considered this move, I had more questions than
                  answers. The path wasn't clear, the timing seemed challenging,
                  and the obstacles appeared insurmountable. But underneath all
                  that uncertainty was a bedrock of faith – not just spiritual
                  faith, but faith in my abilities, faith in the journey, and
                  faith that doors would open at the right time.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="London bridge and cityscape" className="rounded-lg shadow-md w-full h-auto" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-900 mb-3">
                      The Power of Divine Timing
                    </h4>
                    <p className="mb-4">
                      What I've learned is that some dreams aren't meant to be
                      rushed. The timing of my move to London wasn't arbitrary –
                      it came after years of preparation, building expertise,
                      and waiting for the right opportunity. When it finally
                      happened, doors opened in ways I couldn't have engineered
                      myself.
                    </p>
                    <p className="text-gray-700 italic">
                      "Faith is taking the first step even when you don't see
                      the whole staircase." — Martin Luther King Jr.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Determination Through Challenges
                </h3>
                <p className="mb-6">
                  Dreams worth pursuing will inevitably face resistance. During
                  my transition to London, I encountered bureaucratic hurdles,
                  moments of self-doubt, and the practical challenges of
                  establishing a new life in a different country. Determination
                  isn't about avoiding these obstacles – it's about developing
                  the resilience to navigate through them.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-bold text-blue-900 mb-3">
                    Practical Lessons in Persistence
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-blue-900 font-bold mr-2">•</span>
                      <div>
                        <p className="font-medium">
                          Break down the impossible into the possible
                        </p>
                        <p className="text-gray-700">
                          Instead of focusing on the entire mountain, focus on
                          the next step. For me, this meant breaking down the
                          visa process, job transition, and relocation into
                          manageable tasks.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-900 font-bold mr-2">•</span>
                      <div>
                        <p className="font-medium">
                          Embrace the setbacks as learning opportunities
                        </p>
                        <p className="text-gray-700">
                          Each challenge I faced taught me something valuable
                          about myself, the process, or the goal I was pursuing.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-900 font-bold mr-2">•</span>
                      <div>
                        <p className="font-medium">
                          Maintain flexibility without compromising the vision
                        </p>
                        <p className="text-gray-700">
                          Sometimes the path to your dream looks different than
                          you imagined. Being adaptable while staying committed
                          to the core vision is key.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-12">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  The Power of Community and Support
                </h3>
                <p className="mb-6">
                  No significant dream is achieved in isolation. Looking back at
                  my journey to London, I'm profoundly aware of the network of
                  support that made it possible – mentors who provided guidance,
                  family who offered encouragement, colleagues who believed in
                  my abilities, and even strangers who extended kindness at
                  critical moments.
                </p>
                <div className="bg-blue-900 text-white p-6 rounded-lg mb-6">
                  <p className="mb-4">
                    When I arrived in London, I knew very few people. Building a
                    community from scratch taught me the importance of both
                    giving and receiving support. I found that as I invested in
                    others – sharing knowledge, offering encouragement,
                    connecting people – the support I needed also materialized
                    in unexpected ways.
                  </p>
                  <p className="italic mb-0">
                    "Your network is your net worth, but more importantly, it's
                    your emotional and spiritual safety net when pursuing big
                    dreams."
                  </p>
                </div>
                <p className="mb-6">
                  This principle applies universally – whether you're starting a
                  business, changing careers, or pursuing any significant goal.
                  Identify the people who energize your dreams, seek out
                  communities aligned with your vision, and don't hesitate to
                  ask for help when needed.
                </p>
              </div>
              <div className="mb-12">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Celebrating Milestones Along the Way
                </h3>
                <p className="mb-6">
                  One year into my London journey, I've learned the importance
                  of celebrating progress, not just the final destination.
                  Dreams unfold in stages, and acknowledging each milestone
                  sustains the momentum needed for the long haul.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">
                      Professional Growth
                    </h4>
                    <p className="text-gray-700">
                      From navigating a new role to contributing to platform
                      strategies that impact thousands of users
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">
                      Personal Development
                    </h4>
                    <p className="text-gray-700">
                      Adapting to a new culture while maintaining my core
                      identity and values
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">
                      Community Building
                    </h4>
                    <p className="text-gray-700">
                      Creating meaningful connections and extending my impact
                      through teaching and mentorship
                    </p>
                  </div>
                </div>
                <p className="mb-6">
                  Each of these areas represents not an endpoint but a
                  continuing journey. Dreams aren't static destinations – they
                  evolve as we grow, opening new possibilities we couldn't have
                  imagined at the outset.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  A Message to Fellow Dreamers
                </h2>
                <p className="text-lg mb-4">
                  As I reflect on this one-year milestone, I want to share this
                  encouragement with anyone pursuing a significant dream:
                </p>
                <ul className="space-y-4 text-blue-900">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <p>
                      Your dreams are valid, regardless of how impossible they
                      may seem right now.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <p>
                      The path may not be clear, but taking faithful steps
                      forward will eventually reveal the way.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <p>
                      Surround yourself with people who nurture your vision
                      rather than diminish it.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <p>
                      Celebrate progress along the way – the journey itself
                      contains many of the rewards.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <p>
                      When your dreams come true, use your experience to help
                      others achieve theirs.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="mb-12">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Looking Forward: The Next Chapter
                </h3>
                <p className="mb-6">
                  As I look to the future, I'm excited about the next phase of
                  this journey. Dreams have a beautiful way of expanding once we
                  achieve them – opening doors to new possibilities and greater
                  impact. For me, this includes deepening my work in platform
                  leadership, expanding educational initiatives through Learn
                  with Tochii, and finding new ways to serve the tech community
                  both in the UK and globally.
                </p>
                <p className="mb-6">
                  Whatever your dream may be – whether it's starting a business,
                  relocating to a new country, advancing in your career, or
                  creating something innovative – know that it's possible. The
                  journey may be challenging, but with faith, determination, and
                  the right support, dreams can and do become reality.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-8 mt-12">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Share this article
                </h3>
                <div className="flex space-x-4">
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent('The Power of Dreams')}`} target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">
                    Share on LinkedIn
                  </a>
                  <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent('The Power of Dreams')}`} target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">
                    Share on Twitter
                  </a>
                  <button onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }} className="border border-blue-900 text-blue-900 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors">
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
              <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" alt="Intentional Living" className="w-full h-40 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Tag className="h-4 w-4 text-blue-900 mr-1" />
                  <span className="text-sm text-blue-900 font-medium">
                    Personal Growth & Purpose
                  </span>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  Intentional Living, Endless Possibilities
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Living intentionally is about more than just setting goals, it
                  is about engineering new beginnings...
                </p>
                <Link to="/blog/intentional-living" className="text-blue-900 font-medium hover:text-blue-700 transition-colors flex items-center">
                  Read More
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Creating for the Future" className="w-full h-40 object-cover" />
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
              Get the latest articles, insights, and resources on faith,
              purpose, and pursuing your dreams delivered straight to your
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