import React from 'react';
import { Calendar, Clock, Tag, ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export function SeedToolSteward() {
  return <main className="flex-grow bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The Seed, the Tool, and the Steward
          </h1>
          <p className="text-xl max-w-3xl mx-auto italic">
            "Why I'm Launching The 80/20 Podcast to Spotlight Stories of
            Advantage and Accountability"
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
                  <span className="text-sm">July 15, 2025</span>
                </div>
                <div className="flex items-center mr-6 mb-2">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">6 min read</span>
                </div>
                <div className="flex items-center mb-2">
                  <Tag className="h-4 w-4 mr-1" />
                  <span className="text-sm">Platform Strategy & Purpose</span>
                </div>
              </div>
              <div className="w-full h-64 md:h-96 mb-8 overflow-hidden rounded-lg">
                <img src="/nepo_baby.webp" alt="People who hone their advantage - Steward their seeds, grow" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="prose max-w-none text-gray-800">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  Hone your Advantage
                </h2>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  The Twitter Conversation That Sparked It
                </h3>
                <p className="text-lg mb-6">
                  There's been a wave of commentary lately about "nepo babies" —
                  who gets ahead, who doesn't, and whether the playing field is
                  truly fair.
                </p>
                <p className="text-lg mb-6">
                  It's exposed something many of us already knew:
                </p>
                <p className="text-lg font-medium mb-4 text-blue-900">
                  Success isn't always about hustle.
                </p>
                <p className="text-lg font-medium mb-6 text-blue-900">
                  Sometimes, it's about access.
                </p>
                <p className="text-lg mb-6">
                  But instead of staying stuck in the debate, I want to ask a
                  deeper question:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <p className="text-xl font-bold text-blue-900 mb-0">
                    What if the issue isn't having an advantage but what you do
                    with it?
                  </p>
                </div>
                <p className="text-lg mb-6">
                  That's the question behind my new project:
                </p>
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🎙️</span>
                  <p className="text-xl font-bold text-blue-900">
                    The 80/20 Podcast — Honing Your Competitive Advantage.
                  </p>
                </div>
              </div>
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🎯</span>
                  The Vision
                </h3>
                <p className="text-lg mb-6">
                  The podcast is inspired by the Pareto Principle, the idea that
                  80% of outcomes often come from 20% of effort, access, or
                  insight.
                </p>
                <p className="text-lg mb-6">
                  In real life, that 20% could look like:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li className="text-lg">
                    Growing up around the right conversations
                  </li>
                  <li className="text-lg">
                    Landing one internship that changed your trajectory
                  </li>
                  <li className="text-lg">A gift for storytelling</li>
                  <li className="text-lg">
                    Or the fire that comes from having nothing to lose
                  </li>
                </ul>
                <p className="text-lg mb-6">
                  The podcast isn't about glorifying privilege or romanticizing
                  struggle.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="text-xl font-medium text-blue-900 mb-0">
                    It's about people who recognized their edge and stewarded it
                    with purpose.
                  </p>
                </div>
              </div>
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">💬</span>
                  The Conversations
                </h3>
                <p className="text-lg mb-6">
                  Each episode features real people: builders, underdogs,
                  creatives, professionals — not just "success stories," but
                  stewardship stories.
                </p>
                <p className="text-lg mb-4">We'll ask:</p>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <ul className="space-y-4">
                    <li className="text-lg text-blue-900">
                      <span className="font-bold">
                        What's your story of advantage?
                      </span>
                    </li>
                    <li className="text-lg text-blue-900">
                      <span className="font-bold">
                        How did you hone it instead of hiding it?
                      </span>
                    </li>
                    <li className="text-lg text-blue-900">
                      <span className="font-bold">
                        And how are you using it now, not just for your own
                        rise, but for others too?
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  The Seed, the Tool, and the Steward
                </h2>
                <p className="text-lg mb-6">
                  One story that grounds me is the Parable of the Talents.
                </p>
                <p className="text-lg mb-6">
                  Each person in that story was given something not equally, but
                  intentionally.
                </p>
                <p className="text-lg mb-6">
                  Two multiplied what they were given. One buried it in fear.
                </p>
                <blockquote className="border-l-4 border-blue-900 pl-4 py-2 italic text-gray-700 mb-6">
                  "Well done, good and faithful servant. You have been faithful
                  with little…" — Matthew 25:21
                </blockquote>
                <p className="text-lg mb-6">
                  That's the heartbeat behind Learn With Tochii — and now, this
                  podcast.
                </p>
                <p className="text-lg mb-6">
                  Because whether you start with five talents or one, the call
                  is the same:
                </p>
                <div className="bg-blue-900 text-white p-6 rounded-lg mb-6">
                  <p className="text-xl font-bold mb-0 text-center">
                    Steward what you've been given.
                  </p>
                </div>
                <p className="text-lg mb-6">Sometimes the seed is small.</p>
                <p className="text-lg mb-6">
                  But with the right tool — a mentor, a mindset, a moment of
                  clarity — it grows.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Why I'm Doing This
                </h3>
                <p className="text-lg mb-6">
                  When I launched Learn With Tochii, it was about giving others
                  the kind of insight, language, and exposure that changed my
                  own life. It's about helping another person cross the road,
                  essentially building a bridge.
                </p>
                <p className="text-lg mb-6">
                  This podcast is an extension of that mission — To help people
                  recognize the seed in their hand, pick up their tool, and grow
                  with purpose.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  You're Invited
                </h3>
                <p className="text-lg mb-6">
                  If you're someone who has leaned into your background, story,
                  faith, gift, or even your network, and used it for good, I'd
                  love to hear from you.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="text-lg mb-4">Let's sit down.</p>
                  <p className="text-lg mb-4">
                    Let's talk about the seed you saw.
                  </p>
                  <p className="text-lg mb-4">The tools you found.</p>
                  <p className="text-lg mb-0">
                    And how you're now showing up as a steward for others to
                    grow, too.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">
                    Follow the series on YouTube — @TochiiStudio
                  </h4>
                  <div className="flex items-start mb-4">
                    <div className="flex-grow">
                      <h5 className="font-bold text-blue-900 mb-2">Tochii</h5>
                      <p className="text-gray-700">
                        Welcome to Tochii Studio - where we Inspire, Educate,
                        and Empower. This channel is dedicated to sharing
                        powerful insights on technology, leadership, and
                        personal growth.
                      </p>
                    </div>
                    <a href="https://www.youtube.com/@TochiiStudio" className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors ml-4 flex-shrink-0">
                      Visit
                    </a>
                  </div>
                </div>
                <p className="text-lg font-medium text-blue-900">
                  If you'd like to be a guest or nominate someone, reach out.
                  We're building this together.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-8 mt-12">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Share this article
                </h3>
                <div className="flex flex-wrap gap-4">
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
              <img src="/New_years_23.webp" alt="The Power of Dreams" className="w-full h-40 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Tag className="h-4 w-4 text-blue-900 mr-1" />
                  <span className="text-sm text-blue-900 font-medium">
                    Faith & Purpose
                  </span>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  The Power of Dreams
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  One year after moving to London, I reflect on my journey and
                  share encouragement for every dreamer...
                </p>
                <Link to="/blog/power-of-dreams" className="text-blue-900 font-medium hover:text-blue-700 transition-colors flex items-center">
                  Read More
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/_M2A3646.jpg" alt="This is 30" className="w-full h-40 object-cover" />
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
              Get the latest articles, podcast episodes, and resources on honing
              your advantage and stewarding your gifts delivered straight to
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