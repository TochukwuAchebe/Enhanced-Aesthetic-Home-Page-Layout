import React, { memo, Component } from 'react';
import { Calendar, Clock, Tag, ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export function ThisIs30() {
  return <main className="flex-grow bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            This is 30, Tobechukwu
          </h1>
          <p className="text-xl max-w-3xl mx-auto italic">
            "Tobechukwu (means continue to Praise the Lord)"
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
                  <span className="text-sm">October 28, 2023</span>
                </div>
                <div className="flex items-center mr-6 mb-2">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">5 min read</span>
                </div>
                <div className="flex items-center mb-2">
                  <Tag className="h-4 w-4 mr-1" />
                  <span className="text-sm">Faith & Purpose</span>
                </div>
              </div>
              <div className="w-full h-64 md:h-96 mb-8 overflow-hidden rounded-lg">
                <img src="/_M2A3646.jpg" alt="Tochii smiling at his 30th birthday celebration" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="prose max-w-none text-gray-800">
              <p className="text-lg mb-6">
                Thank you, God, for this journey called life. I wouldn't change
                any experience — they've shaped the man I've become.
              </p>
              <p className="text-lg mb-8">
                Here are ten lessons I've learned over the last 29 years:
              </p>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  1. Diligence
                </h2>
                <p className="mb-4">
                  In everything you do, take pride, give it 100%, and strive for
                  excellence. Be faithful in the little things, because that's
                  the foundation for being entrusted with more.
                </p>
                <blockquote className="border-l-4 border-blue-900 pl-4 py-2 italic text-gray-700 mb-4">
                  "Whoever can be trusted with very little can also be trusted
                  with much, and whoever is dishonest with very little will also
                  be dishonest with much." — Luke‬ ‭16‬:‭10‬ ‭NIV‬‬
                </blockquote>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  2. Growth Mindset
                </h2>
                <p className="mb-4">
                  Believe in your process. Growth is a journey, and everything
                  compounds over time. Build your roadmap but remain flexible
                  and focused, refusing to be pressured by external influences.
                  Confidence comes from knowing you're no longer where you used
                  to be, and tomorrow, with effort, you'll be even better. I
                  recommend books such as A Love Affair with Failure & HBR's
                  Mental Toughness.
                </p>
                <blockquote className="border-l-4 border-blue-900 pl-4 py-2 italic text-gray-700 mb-4">
                  "Arise, shine, for your light has come, and the glory of the
                  Lord rises upon you. Nations will come to your light, and
                  kings to the brightness of your dawn." ‭‭Isaiah‬ ‭60‬:‭1‬, ‭3‬
                  ‭NIV‬‬
                </blockquote>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  3. Love & Loss
                </h2>
                <p className="mb-4">
                  Love is one of life's greatest emotions, but it comes hand in
                  hand with loss. I've been fortunate to experience love in its
                  many forms — romantic, platonic, and familial. With love,
                  there's vulnerability, but also immense joy. People often
                  believe they can enjoy the greatest rewards life offers, like
                  love, without making sacrifices such as trust or the risk of
                  being vulnerable to disappointment.
                </p>
                <p className="mb-4">
                  Love is a two-edged sword with its other end being loss. Loss
                  can come in many forms (Death of a loved one or an unforeseen
                  breakup) however it's important to deal with loss gracefully.
                  Love has been a profound teacher; this will be a chapter in my
                  book someday. I will recommend two books— HBR's Emotional
                  Intelligence & Dating Intelligently by Laju Iren.
                </p>
                <blockquote className="border-l-4 border-blue-900 pl-4 py-2 italic text-gray-700 mb-4">
                  "So don't allow your hearts to grow dull or lose your
                  enthusiasm, but follow the example of those who fully received
                  what God has promised because of their strong faith and
                  patient endurance." Hebrews‬ ‭6‬:‭12‬ ‭TPT‬‬
                </blockquote>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  4. Embrace Challenges
                </h2>
                <p className="mb-4">
                  People are both your greatest assets and, at times, your
                  biggest challenges. Building and maintaining relationships
                  requires patience and understanding. It's essential to
                  acknowledge someone's pain, empathize, and apologize when
                  needed, without minimizing their feelings. Avoid holding
                  grudges—none of us are perfect. When wronged, reflect on the
                  positive moments and let those memories guide your healing.
                </p>
                <p className="mb-4">
                  Two thoughts — winning an argument with someone important to
                  you is shortsighted and the need to be right is Ego-driven.
                  Holding onto unforgiveness fosters resentment and blinds you
                  to the good, focusing instead on what went wrong. I recommend
                  the series Enemies of the Heart, & Signs of Incompatibility by
                  "Mel Robbins". These two have offered me valuable insights
                  over the past month. Challenges in relationships, though
                  difficult, often lead to unexpected growth.
                </p>
                <blockquote className="border-l-4 border-blue-900 pl-4 py-2 italic text-gray-700 mb-4">
                  "Bear with each other and forgive one another if any of you
                  has a grievance against someone. Forgive as the Lord forgave
                  you. And over all these virtues put on love, which binds them
                  all together in perfect unity." Colossians‬ 3‬:‭13-‭14‬ ‭NIV‬‬
                </blockquote>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  5. Cherish Genuine Connections
                </h2>
                <p className="mb-4">
                  Some connections are rare and precious. Over the years, I've
                  watched friends grow into the dreams they once shared. It's
                  been a joy to journey alongside them. Never underestimate the
                  potential of those around you. Grow together, support one
                  another, and never let status or titles cloud your judgment.
                  Leave people better than you met them, a good name is better
                  than gold. As you grow older let this be etched in your heart
                  as relationships become more meaningful.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-4">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Your Personal Network
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Take time to critique, restructure, and refine your personal
                    network as you grow. Surround yourself with people who
                    inspire and challenge you to be better.
                  </p>
                  <img src="/6771DA55-D2EA-4A2D-8423-156455FB4C8C.png" alt="Your Personal Network Mind Map" className="w-full h-auto rounded-lg shadow-sm" />
                </div>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  6. Faith, Belief, and God
                </h2>
                <p className="mb-4">
                  My faith is my anchor, my guide, and my strength. Without God,
                  I am nothing. I pray about everything, and He never fails to
                  respond. Believe in the life you desire — it will manifest
                  with time. Trust in God, the creator of every good thing, and
                  in yourself as His creation.
                </p>
                <blockquote className="border-l-4 border-blue-900 pl-4 py-2 italic text-gray-700 mb-4">
                  "Whether you turn to the right or to the left, your ears will
                  hear a voice behind you, saying, "This is the way; walk in
                  it."" Isaiah‬ ‭30‬:‭21‬ ‭NIV‬‬
                </blockquote>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  7. Block Out the Noise, Dream Audaciously
                </h2>
                <p className="mb-4">
                  Dare to dream, and don't let fear or doubt silence you,
                  whatever you cannot conceive in your heart, it's impossible to
                  actualize. Block out the noise of naysayers and take
                  calculated steps toward your goals. The worst that can happen
                  is someone says no — and no has never killed anyone. Remember,
                  people often advise from their experiences, but only you know
                  the God-sized vision within you. Be brazen, fuel your vision,
                  read books, pray but most importantly don't disappoint
                  yourself. Be Great !!!
                </p>
                <blockquote className="border-l-4 border-blue-900 pl-4 py-2 italic text-gray-700 mb-4">
                  "I will give him the key to the house of David — the highest
                  position in the royal court. When he opens doors, no one will
                  be able to close them; when he closes doors, no one will be
                  able to open them. He will bring honor to his family name, for
                  I will drive him firmly in place like a nail in the wall."
                  ‭‭Isaiah‬ ‭22‬:‭22‭-‭23‬ ‭NLT‬‬
                </blockquote>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  8. Family & Friendships
                </h2>
                <p className="mb-4">
                  Family dynamics can be complex. As an only child who grew up
                  with cousins, I've seen how roles shift over time. Count it
                  all joy. If we knew tomorrow, we'd make fewer mistakes today.
                  Keep good relationships, forgive quickly, and heal often. Love
                  your people deeply.
                </p>
                <blockquote className="border-l-4 border-blue-900 pl-4 py-2 italic text-gray-700 mb-4">
                  "How wonderful, how beautiful, when brothers and sisters get
                  along! It's like costly anointing oil flowing down head and
                  beard, Flowing down Aaron's beard, flowing down the collar of
                  his priestly robes. It's like the dew on Mount Hermon flowing
                  down the slopes of Zion. Yes, that's where God commands the
                  blessing, ordains eternal life." ‭‭Psalms‬ ‭133‬:‭1‬-‭3‬
                  ‭MSG‬‬
                </blockquote>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  9. Confidence
                </h2>
                <p className="mb-4">
                  Nothing great comes from fear. Approach life with confidence
                  and conviction. Be bold, even if it means being a little
                  delusional, and always show up as your greatest self. If you
                  need to start over, do so as often as possible. Never compare
                  your life or experiences with another, believe in yourself,
                  pride is a deep illusion, as you become, stay humble. If
                  anyone believes they are better than you, let them think what
                  they want. Every new beginning is a chance to shape your
                  future. Remember, the future starts now. Don't take life too
                  seriously—share laughter with your best mates. Hold onto your
                  enthusiasm for life, and learn to embrace both the wins and
                  the losses with grace.
                </p>
                <blockquote className="border-l-4 border-blue-900 pl-4 py-2 italic text-gray-700 mb-4">
                  "Remember: The duller the ax the harder the work; Use your
                  head: The more brains, the less muscle." ‭‭Ecclesiastes‬
                  ‭10‬:‭10‬ ‭MSG‬‬
                </blockquote>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  10. The God Factor
                </h2>
                <p className="mb-4">
                  In everything, put God first. My life isn't perfect, but in
                  Christ, it is complete. This is the confidence I carry into
                  each day: that God is with me. Therefore, I believe that the
                  best of God is never in the past but always in the future.
                </p>
                <blockquote className="border-l-4 border-blue-900 pl-4 py-2 italic text-gray-700 mb-4">
                  "In you, Lord my God, I put my trust." Psalms‬ ‭25‬:‭1‬ ‭NIV‬‬
                </blockquote>
              </div>
              {/* New Birthday Celebrations Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Celebrating The New Chapter
                </h2>
                <p className="mb-6">
                  As I step into this new decade, I'm grateful for the friends
                  and loved ones who gathered to celebrate this milestone with
                  me. There's something powerful about marking life's
                  transitions with those who have been part of your journey.
                  These moments of joy and connection remind me of how blessed I
                  am to have such incredible people in my life.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <img src="/_M2A3629.jpg" alt="Tochii's 30th birthday celebration with friends toasting with champagne" className="w-full h-auto rounded-lg shadow-md" />
                    <p className="text-sm text-gray-600 italic mt-2">
                      Surrounded by friends raising a toast to new beginnings
                      and the journey ahead.
                    </p>
                  </div>
                  <div>
                    <img src="/_M2A3646.jpg" alt="Tochii smiling at his 30th birthday celebration" className="w-full h-auto rounded-lg shadow-md" />
                    <p className="text-sm text-gray-600 italic mt-2">
                      Embracing this new chapter with joy and gratitude.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <img src="/IMG_5756.jpg" alt="Veuve Clicquot themed birthday sign for Tochii's 30th" className="w-full h-auto rounded-lg shadow-md" />
                    <p className="text-sm text-gray-600 italic mt-2">
                      A creative nod to new destinations and journeys at 30.
                    </p>
                  </div>
                  <div>
                    <img src="/_M2A3223.jpg" alt="Tochii laughing with friends during birthday dinner" className="w-full h-auto rounded-lg shadow-md" />
                    <p className="text-sm text-gray-600 italic mt-2">
                      Sharing laughter and meaningful conversations.
                    </p>
                  </div>
                  <div>
                    <img src="/_M2A3218.jpg" alt="Tochii and friend enjoying the 30th birthday celebration" className="w-full h-auto rounded-lg shadow-md" />
                    <p className="text-sm text-gray-600 italic mt-2">
                      Genuine connections make life's milestones truly special.
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-blue-900 italic">
                    "As I reflect on these celebrations, I'm reminded that life
                    isn't just about the lessons we learn or the goals we
                    achieve—it's also about the moments we share and the people
                    we share them with. Here's to the next decade of growth,
                    purpose, and meaningful connections."
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg mb-8">
                <p className="text-lg text-blue-900 mb-4">
                  To my friends and family, thank you for your incredible
                  support and encouragement. You are truly God's blessings to
                  me.
                </p>
                <p className="text-xl font-bold text-blue-900">
                  Here's to 30 — filled with faith, love, and dreams yet to be
                  realized.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-8 mt-12">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Share this article
                </h3>
                <div className="flex space-x-4">
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent('This is 30, Tobechukwu')}`} target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">
                    Share on LinkedIn
                  </a>
                  <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent('This is 30, Tobechukwu')}`} target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">
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
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/Yellow_Modern_Mathematics_Lecture_Youtube_Thumbnail_%282%29.png" alt="API Versioning" className="w-full h-40 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Tag className="h-4 w-4 text-blue-900 mr-1" />
                  <span className="text-sm text-blue-900 font-medium">
                    API Design
                  </span>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  API Versioning: Best Practices for Sustainable Growth
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Learn how to implement a versioning strategy that balances
                  innovation with stability...
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
              Get the latest articles, insights, and resources on faith,
              technology, leadership and personal growth delivered straight to
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