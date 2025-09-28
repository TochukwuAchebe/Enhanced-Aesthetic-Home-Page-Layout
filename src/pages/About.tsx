import React from 'react';
import { BookOpen, Briefcase, GraduationCap, Award, Mail, Linkedin, Code, Server, Layers, MessageSquare } from 'lucide-react';
export function About() {
  return <main className="flex-grow">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                TOCHUKWU ACHEBE
              </h1>
              <p className="text-xl text-blue-900 font-semibold mb-6">
                Product Leader | Platform Strategist | Teacher | Creator
              </p>
              <div className="prose max-w-none text-gray-700">
                <p className="text-lg mb-6">
                  I'm Tochukwu Achebe — Head of Platforms and strategic product
                  leader focused on enabling teams to scale through smarter
                  systems, APIs, and governance. I blend technical fluency with
                  a passion for teaching, coaching, and platform architecture.
                  My mission is to help product and engineering teams lead with
                  clarity, build with conviction, and scale with resilience.
                </p>
                <p className="text-lg mb-6">
                  Over the years, I've led platform initiatives across fintech,
                  payments, and emerging tech, and built ecosystems that power
                  developer experience, AI governance, and commercial growth.
                </p>
              </div>
              <div className="flex space-x-4 mt-8">
                <a href="mailto:achebetochukwu@gmail.com" className="flex items-center bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>Email Me</span>
                </a>
                <a href="https://www.linkedin.com/in/tochiii/" className="flex items-center border border-blue-900 text-blue-900 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors">
                  <Linkedin className="h-5 w-5 mr-2" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-lg max-w-md">
                <img src="/DD1F9920-FDE3-472E-B45D-F33CE32B5344.jpg" alt="Tochii Achebe presenting at devfest" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What I Do Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            WHAT I DO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <Server className="h-6 w-6 text-blue-900 mr-3 mt-1" />
                <h3 className="text-xl font-bold text-blue-900">
                  Platform Leadership
                </h3>
              </div>
              <p className="text-gray-700">
                I help scale internal developer platforms and shared services
                that drive team productivity and governance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <Code className="h-6 w-6 text-blue-900 mr-3 mt-1" />
                <h3 className="text-xl font-bold text-blue-900">
                  API Product Management
                </h3>
              </div>
              <p className="text-gray-700">
                I've built and scaled API marketplaces, developer onboarding
                flows, and ecosystem strategies across multiple verticals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <GraduationCap className="h-6 w-6 text-blue-900 mr-3 mt-1" />
                <h3 className="text-xl font-bold text-blue-900">
                  Teaching & Mentorship
                </h3>
              </div>
              <p className="text-gray-700">
                Through my learning initiative, Learn with Tochii, I mentor
                aspiring product leaders and teach system design, platform
                thinking, and API governance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <MessageSquare className="h-6 w-6 text-blue-900 mr-3 mt-1" />
                <h3 className="text-xl font-bold text-blue-900">
                  Content & Community
                </h3>
              </div>
              <p className="text-gray-700">
                I publish thought pieces, frameworks, and tutorials across
                YouTube, Medium, and LinkedIn, inspiring others to grow with
                clarity and courage.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Experience Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            EXPERIENCE HIGHLIGHTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                HEAD OF PLATFORMS
              </h3>
              <p className="text-gray-700">
                Scaled internal developer platform strategy across engineering
                teams, improving velocity, security, and observability.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                API MARKETPLACE LEAD
              </h3>
              <p className="text-gray-700">
                Launched and scaled API ecosystem enabling 3rd party integration
                and platform monetization in fintech.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                FELLOWSHIP MENTOR & EDUCATOR
              </h3>
              <p className="text-gray-700">
                Designed learning pathways for early career product managers and
                engineers through Learn with Tochii.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-blue-900 mr-2" />
                  <h3 className="text-xl font-bold text-blue-900">Education</h3>
                </div>
                <ul className="space-y-4">
                  <li className="border-l-2 border-blue-900 pl-4 py-1">
                    <p className="font-semibold">
                      Stanford Graduate School of Business
                    </p>
                    <p className="text-gray-600">
                      Leadership, Innovation & Strategic Management
                    </p>
                  </li>
                  <li className="border-l-2 border-blue-900 pl-4 py-1">
                    <p className="font-semibold">Previous Education</p>
                    <p className="text-gray-600">
                      Bachelor's in Computer Science
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <Briefcase className="h-6 w-6 text-blue-900 mr-2" />
                  <h3 className="text-xl font-bold text-blue-900">
                    Experience
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="border-l-2 border-blue-900 pl-4 py-1">
                    <p className="font-semibold">
                      Platform & API Product Leader
                    </p>
                    <p className="text-gray-600">
                      Leading digital transformation initiatives
                    </p>
                  </li>
                  <li className="border-l-2 border-blue-900 pl-4 py-1">
                    <p className="font-semibold">Technology Consultant</p>
                    <p className="text-gray-600">
                      Advising on API strategy and implementation
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-blue-900 mr-2" />
                  <h3 className="text-xl font-bold text-blue-900">
                    Community Impact
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="border-l-2 border-blue-900 pl-4 py-1">
                    <p className="font-semibold">
                      Founder, The Nwa-Amaka Achebe Trust
                    </p>
                    <p className="text-gray-600">
                      Empowering the next generation
                    </p>
                  </li>
                  <li className="border-l-2 border-blue-900 pl-4 py-1">
                    <p className="font-semibold">YouTube Educator</p>
                    <p className="text-gray-600">
                      3.9k subscribers, 34.4K views
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Learn with Tochii Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            TEACHING & LEARN WITH TOCHII
          </h2>
          <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
            <div className="md:w-2/5">
              <img src="/IMG_2307.png" alt="Tochii's YouTube Studio showing API educational content" className="rounded-lg shadow-md w-full h-auto object-cover" />
            </div>
            <div className="md:w-3/5">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                YOUTUBE EDUCATION
              </h3>
              <p className="text-gray-700 mb-6">
                Through my YouTube channel, I create in-depth technical content
                on APIs, product development, and system design. My videos like
                "API as a Product" and "Stop Breaking Your APIs" have helped
                thousands of developers and product managers understand complex
                concepts with clarity and practical examples.
              </p>
            </div>
          </div>
          {/* New Speaking Engagements Gallery */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
              SPEAKING ENGAGEMENTS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="/0079_ColorinTechDojo2_AT_Catherine_20082024_Original.jpg" alt="Tochii facilitating a Tech workshop" className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold text-blue-900">Tech Facilitation</h4>
                  <p className="text-gray-600 text-sm">
                    Leading workshops on API design and implementation
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="/IMG_4292.jpg" alt="Tochii presenting at ProductDive conference" className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold text-blue-900">
                    Conference Presentations
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Sharing insights at industry-leading tech conferences
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="/IMG_4293.jpg" alt="Tochii engaging with audience at a workshop" className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold text-blue-900">
                    Interactive Sessions
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Creating engaging learning experiences for participants
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Content Pillars Section */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
              CONTENT STRATEGY & FOCUS
            </h3>
            {/* Core Themes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-5 rounded-lg">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  INSPIRE
                </h4>
                <p className="text-gray-700">
                  Share real stories, breakthroughs, and wisdom to motivate your
                  audience
                </p>
              </div>
              <div className="bg-blue-50 p-5 rounded-lg">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  EDUCATE
                </h4>
                <p className="text-gray-700">
                  Teach practical skills in API/Product Management, AI, and
                  career growth
                </p>
              </div>
              <div className="bg-blue-50 p-5 rounded-lg">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  EMPOWER
                </h4>
                <p className="text-gray-700">
                  Help others take bold steps in life, faith, and purpose
                </p>
              </div>
            </div>
            {/* Popular Content & Content Focus - Integrated */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-blue-100 p-5 rounded-lg shadow-sm">
                <h4 className="text-lg font-bold text-blue-900 mb-3 flex items-center">
                  <span className="inline-block w-3 h-3 bg-blue-900 rounded-full mr-2"></span>
                  Popular Content
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2 font-bold">•</span>
                    <div>
                      <p className="font-medium">API as a Product</p>
                      <p className="text-sm text-gray-600">8.5K views</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2 font-bold">•</span>
                    <div>
                      <p className="font-medium">Stop Breaking Your APIs</p>
                      <p className="text-sm text-gray-600">3.5K views</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2 font-bold">•</span>
                    <div>
                      <p className="font-medium">
                        Interviewing Tips & Techniques
                      </p>
                      <p className="text-sm text-gray-600">Trending</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="md:col-span-2 bg-gradient-to-r from-blue-50 to-white p-5 rounded-lg border border-blue-100 shadow-sm">
                <h4 className="text-lg font-bold text-blue-900 mb-3 flex items-center">
                  <span className="inline-block w-3 h-3 bg-blue-900 rounded-full mr-2"></span>
                  Content Focus Areas
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <span className="text-blue-900 mr-2 font-bold">•</span>
                    <div>
                      <p className="font-medium">API Design & Strategy</p>
                      <p className="text-sm text-gray-600">
                        Versioning, governance, developer experience
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-900 mr-2 font-bold">•</span>
                    <div>
                      <p className="font-medium">Career Development</p>
                      <p className="text-sm text-gray-600">
                        Growth strategies, interviewing, storytelling
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-900 mr-2 font-bold">•</span>
                    <div>
                      <p className="font-medium">Technical Leadership</p>
                      <p className="text-sm text-gray-600">
                        Platform strategy, ecosystem building
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-900 mr-2 font-bold">•</span>
                    <div>
                      <p className="font-medium">Faith & Purpose</p>
                      <p className="text-sm text-gray-600">
                        Biblical wisdom for leadership and resilience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Content Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border-l-4 border-blue-900 pl-4 py-2">
                <h4 className="text-lg font-bold text-blue-900 mb-2">
                  Career Growth & Competitive Advantage
                </h4>
                <p className="text-gray-700 mb-2">
                  How to tell your story, make bold moves, and leverage your
                  unique edge
                </p>
                <p className="text-gray-600 text-sm">
                  Lessons from interviews, strategy, and real-world experience
                </p>
              </div>
              <div className="border-l-4 border-blue-900 pl-4 py-2">
                <h4 className="text-lg font-bold text-blue-900 mb-2">
                  Product Leadership & API Strategy
                </h4>
                <p className="text-gray-700 mb-2">
                  API versioning, governance, monetization, and developer
                  experience
                </p>
                <p className="text-gray-600 text-sm">
                  Platforms, integrations, and ecosystems for tech professionals
                </p>
              </div>
              <div className="border-l-4 border-blue-900 pl-4 py-2">
                <h4 className="text-lg font-bold text-blue-900 mb-2">
                  Faith & Purpose
                </h4>
                <p className="text-gray-700 mb-2">
                  Biblical wisdom for leadership, identity, vision, and
                  resilience
                </p>
                <p className="text-gray-600 text-sm">
                  Merging faith with business, tech, and personal development
                </p>
              </div>
              <div className="border-l-4 border-blue-900 pl-4 py-2">
                <h4 className="text-lg font-bold text-blue-900 mb-2">
                  Education & Mentorship
                </h4>
                <p className="text-gray-700 mb-2">
                  Teaching, coaching, and building programs for STEM, AI, and
                  test prep
                </p>
                <p className="text-gray-600 text-sm">
                  Empowering the next generation in Nigeria, the UK, and the
                  diaspora
                </p>
              </div>
              <div className="border-l-4 border-blue-900 pl-4 py-2 md:col-span-2">
                <h4 className="text-lg font-bold text-blue-900 mb-2">
                  Content Creation & Personal Branding
                </h4>
                <p className="text-gray-700 mb-2">
                  Podcasting, YouTube, and Shorts content to grow visibility and
                  impact
                </p>
                <p className="text-gray-600 text-sm">
                  Strategic storytelling and thought leadership on social
                  platforms
                </p>
              </div>
            </div>
            {/* Target Audience */}
            <div className="bg-blue-900 text-white p-5 rounded-lg">
              <h4 className="text-lg font-bold mb-3">TARGET AUDIENCE</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Young professionals (ages 21–35)</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>
                    Product managers, tech builders, and content creators
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>
                    Students and early-career talents in Nigeria, UK, and global
                    diaspora
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>
                    People seeking purpose, mentorship, and faith-driven growth
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div>
              <img src="/IMG_4292.jpg" alt="Tochii presenting on APIs in modern software development at ProductDive conference" className="rounded-lg shadow-md w-full h-auto object-cover mb-6" />
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                CONFERENCE SPEAKING
              </h3>
              <p className="text-gray-700">
                I regularly share my expertise at industry events like
                ProductDive's Product Leadership Conference, where I speak on
                topics such as "The Role of APIs in Modern Software
                Development." These speaking engagements allow me to connect
                with the tech community and share practical insights from my
                experience leading platform initiatives.
              </p>
            </div>
            <div>
              <img src="/IMG_4293.jpg" alt="Tochii speaking and engaging with audience at ProductDive event" className="rounded-lg shadow-md w-full h-auto object-cover mb-6" />
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                INTERACTIVE WORKSHOPS
              </h3>
              <p className="text-gray-700">
                Beyond presentations, I facilitate interactive workshops and Q&A
                sessions that dive deep into technical concepts and leadership
                principles. My teaching approach emphasizes practical
                application, helping participants translate complex API and
                platform concepts into actionable strategies they can implement
                in their organizations.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <img src="/IMG_2306.png" alt="Tochii's TikTok profile with educational content" className="rounded-lg shadow-sm w-full h-auto object-cover" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  MULTI-PLATFORM LEARNING
                </h3>
                <p className="text-gray-700">
                  Learn with Tochii extends beyond YouTube to platforms like
                  TikTok, where I share bite-sized wisdom on career growth,
                  confidence building, and personal development. My content
                  follows the "Inspire, Educate, Empower" philosophy, providing
                  actionable insights for both technical and soft skills
                  development across multiple platforms.
                </p>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-900 font-medium">
                    "My mission is to empower the next generation of creators,
                    product builders, and ecosystem leaders across Africa and
                    the world through accessible, engaging educational content."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">
            My Philosophy
          </h2>
          <div className="max-w-4xl mx-auto bg-[#002147] text-[#f5e7c8] p-8 rounded-lg">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="h-10 w-10 mr-4" />
              <h3 className="text-2xl font-bold">INSPIRE, EDUCATE, EMPOWER</h3>
            </div>
            <p className="text-xl leading-relaxed mb-6">
              I believe in the power of knowledge sharing, community building,
              and creating platforms that enable others to succeed. My work is
              guided by the principle that technology should serve humanity and
              create opportunities for all.
            </p>
            <p className="text-xl leading-relaxed">
              As a perpetual student of both technology and life, I embrace
              continuous growth and intellectual curiosity. I'm dedicated to
              refining my craft, expanding my perspectives, and challenging my
              assumptions, because the most valuable skill in our rapidly
              evolving world is the ability to learn, unlearn, and relearn.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
            WANT TO CONNECT?
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            If you're building something big, want to learn more about product
            leadership, or looking for mentorship — I'd love to hear from you.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <a href="mailto:achebetochukwu@gmail.com" className="inline-flex items-center bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors">
              <Mail className="h-5 w-5 mr-2" />
              Email me at achebetochukwu@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>;
}