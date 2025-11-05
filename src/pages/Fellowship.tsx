import React from 'react';
import { Calendar, Gift, GraduationCap, BookOpen, Mail, CheckCircle, Users, Code, Cpu, Shield, Layers, Sparkles, FileText, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Fellowship() {
  return <main className="flex-grow bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Learn with Tochii Fellowship
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mb-8">
              Become the Technical & AI Product Manager Companies Fight to Hire
            </p>
            <p className="text-xl max-w-4xl mx-auto mb-8">
              A 12-week live fellowship for product managers who want to think
              like engineers, lead AI products, and build systems that scale.
              Taught by <span className="font-bold">Tochukwu Achebe</span> – API
              & Platform Product Leader.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#apply" className="bg-white text-blue-900 px-8 py-4 rounded-md hover:bg-blue-50 transition-colors font-bold text-lg">
                Apply Now
              </a>
              <a href="#learn-more" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md hover:bg-blue-800 transition-colors font-bold text-lg">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Why This Fellowship Exists */}
      <section id="learn-more" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
              Why This Fellowship Exists
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 mb-6">
                Most PMs understand users. Few understand systems. This
                programme bridges that gap — combining{' '}
                <span className="font-bold text-blue-900">API management</span>,{' '}
                <span className="font-bold text-blue-900">system design</span>,{' '}
                <span className="font-bold text-blue-900">AI</span>, and{' '}
                <span className="font-bold text-blue-900">
                  identity management
                </span>{' '}
                to help you lead confidently in technical environments.
              </p>
              <div className="flex items-center text-blue-900 text-xl font-bold">
                <span className="mr-3">⚙️</span>
                <span>Learn. Build. Lead.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Who This Fellowship Is For */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">
              Who This Fellowship Is For
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              This fellowship is built for any professional in technology who
              wants to level up their skill set and think like a Technical
              Product Leader — fluent in AI, APIs, and system design.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-900">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4">
                    🔧
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                      Product Managers
                    </h3>
                    <p className="text-gray-700">
                      Ready to go beyond storytelling to technical strategy
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-orange-50 p-8 rounded-lg border-l-4 border-orange-900">
                <div className="flex items-start mb-4">
                  <div className="bg-orange-900 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4">
                    ⚙️
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-orange-900 mb-3">
                      Engineers & Data Scientists
                    </h3>
                    <p className="text-gray-700">
                      Transitioning into product leadership roles
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 p-8 rounded-lg border-l-4 border-purple-900">
                <div className="flex items-start mb-4">
                  <div className="bg-purple-900 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4">
                    📈
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-900 mb-3">
                      Growth, Ops, or Strategy Professionals
                    </h3>
                    <p className="text-gray-700">
                      Aiming to lead AI-driven teams
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-pink-50 p-8 rounded-lg border-l-4 border-pink-900">
                <div className="flex items-start mb-4">
                  <div className="bg-pink-900 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4">
                    💡
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-pink-900 mb-3">
                      Founders & Entrepreneurs
                    </h3>
                    <p className="text-gray-700">
                      Building scalable, API-first, or AI-powered products
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-900 md:col-span-2">
                <div className="flex items-start mb-4">
                  <div className="bg-green-900 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-900 mb-3">
                      Career Switchers
                    </h3>
                    <p className="text-gray-700">
                      Seeking to strengthen technical and business fluency
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-blue-900">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                You'll Gain the Ability To:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-900 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Speak confidently with engineers and architects
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-900 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Understand how products work under the hood
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-900 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Build, integrate, and launch AI and API-based systems
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-900 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Position yourself for senior and platform-level roles
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-center mt-8 text-lg font-medium">
                If you work in tech, this fellowship gives you the technical
                confidence to lead in the age of AI.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* What You'll Gain */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">
              What You'll Gain
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              By the end of this fellowship, you'll have transformed your
              technical capabilities and career trajectory.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-900">
                <div className="flex items-start">
                  <div className="bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      Speak the Language
                    </h3>
                    <p className="text-gray-700">
                      Communicate fluently with engineers and architects about
                      complex systems
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-900">
                <div className="flex items-start">
                  <div className="bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      Design APIs
                    </h3>
                    <p className="text-gray-700">
                      Design and govern APIs and integrations with confidence
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-900">
                <div className="flex items-start">
                  <div className="bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      Master Identity
                    </h3>
                    <p className="text-gray-700">
                      Understand Identity, Access & Security flows inside and
                      out
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-900">
                <div className="flex items-start">
                  <div className="bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      Build Systems
                    </h3>
                    <p className="text-gray-700">
                      Design reliable, scalable systems that handle real-world
                      complexity
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-900">
                <div className="flex items-start">
                  <div className="bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mr-4">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      Launch AI Products
                    </h3>
                    <p className="text-gray-700">
                      Build and launch AI-driven product features users love
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-900">
                <div className="flex items-start">
                  <div className="bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mr-4">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      Portfolio Ready
                    </h3>
                    <p className="text-gray-700">
                      Graduate with a portfolio-ready capstone and lifetime
                      mentorship
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="flex items-start">
                  <Calendar className="h-12 w-12 text-blue-900 mr-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                      12-Week Live Cohort
                    </h3>
                    <p className="text-gray-700 text-lg">
                      2-hour weekly sessions plus asynchronous labs to reinforce
                      learning and build practical skills
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="flex items-start">
                  <Gift className="h-12 w-12 text-blue-900 mr-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                      First Class Free
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Experience the teaching style and community before
                      committing to your learning journey
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="flex items-start">
                  <GraduationCap className="h-12 w-12 text-blue-900 mr-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                      Choose Your Track
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-bold text-blue-900 text-lg mb-1">
                          Core (6 Classes)
                        </p>
                        <p className="text-gray-700">
                          Build your technical fluency
                        </p>
                      </div>
                      <div>
                        <p className="font-bold text-blue-900 text-lg mb-1">
                          Pro (12 Classes)
                        </p>
                        <p className="text-gray-700">
                          Full architecture + AI mastery + lifetime mentorship
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="flex items-start">
                  <BookOpen className="h-12 w-12 text-blue-900 mr-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                      Full Access
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Recordings, templates, community, and direct mentorship
                      throughout your journey
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Curriculum Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">
              Curriculum Overview
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              A comprehensive learning path designed to build technical fluency
              and platform leadership skills
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-900">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">
                  Core Track (6 Classes)
                </h3>
                <p className="text-gray-700 mb-6">
                  Build foundational technical fluency in APIs, system design,
                  and AI product management
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="bg-blue-900 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                      01
                    </span>
                    <div>
                      <p className="font-bold text-blue-900">
                        Foundations of Technical PM
                      </p>
                      <p className="text-gray-600 text-sm">
                        Understanding the technical PM role and core
                        competencies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-900 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                      02
                    </span>
                    <div>
                      <p className="font-bold text-blue-900">
                        System Design Thinking
                      </p>
                      <p className="text-gray-600 text-sm">
                        Architectural patterns and scalability fundamentals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-900 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                      03
                    </span>
                    <div>
                      <p className="font-bold text-blue-900">
                        API Management Basics
                      </p>
                      <p className="text-gray-600 text-sm">
                        REST, GraphQL, versioning, and developer experience
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-900 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                      04
                    </span>
                    <div>
                      <p className="font-bold text-blue-900">
                        Identity & Access Management
                      </p>
                      <p className="text-gray-600 text-sm">
                        OAuth2, OIDC, SSO, JWT, and Zero Trust fundamentals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-900 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                      05
                    </span>
                    <div>
                      <p className="font-bold text-blue-900">
                        AI Product Foundations
                      </p>
                      <p className="text-gray-600 text-sm">
                        LLM integration, prompt engineering, and AI product
                        strategy
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-900 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                      06
                    </span>
                    <div>
                      <p className="font-bold text-blue-900">
                        Capstone Scoping & Technical PRDs
                      </p>
                      <p className="text-gray-600 text-sm">
                        Planning and documenting your capstone project
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-orange-50 p-8 rounded-lg border-2 border-orange-900">
                <h3 className="text-2xl font-bold text-orange-900 mb-6">
                  Pro Track (adds 6 Advanced Classes)
                </h3>
                <p className="text-gray-700 mb-6">
                  Master advanced platform architecture, AI systems, and
                  enterprise-scale governance
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="bg-orange-900 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                      01
                    </span>
                    <div>
                      <p className="font-bold text-orange-900">
                        Advanced API & Platform Governance
                      </p>
                      <p className="text-gray-600 text-sm">
                        Rate limiting, deprecation strategies, and API
                        monetization
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-orange-900 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                      02
                    </span>
                    <div>
                      <p className="font-bold text-orange-900">
                        System Design Patterns
                      </p>
                      <p className="text-gray-600 text-sm">
                        Microservices, event-driven architecture, and
                        observability
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-orange-900 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                      03
                    </span>
                    <div>
                      <p className="font-bold text-orange-900">
                        Security & Compliance
                      </p>
                      <p className="text-gray-600 text-sm">
                        GDPR, SOC2, penetration testing, and threat modeling
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-orange-900 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                      04
                    </span>
                    <div>
                      <p className="font-bold text-orange-900">
                        Building and Scaling AI Products
                      </p>
                      <p className="text-gray-600 text-sm">
                        Data pipelines, model evaluation, and production
                        deployment
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-orange-900 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                      05
                    </span>
                    <div>
                      <p className="font-bold text-orange-900">
                        Reliability & Change Management
                      </p>
                      <p className="text-gray-600 text-sm">
                        SLOs, incident management, and rollout strategies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-orange-900 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                      06
                    </span>
                    <div>
                      <p className="font-bold text-orange-900">
                        Capstone Showcase + Lifetime Mentorship
                      </p>
                      <p className="text-gray-600 text-sm">
                        Present your work and gain ongoing mentorship access
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Technical Pillars */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">
              The Core Technical Pillars
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              Master the essential domains that define modern technical product
              management
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-900">
                <div className="flex items-start mb-4">
                  <Code className="h-8 w-8 text-blue-900 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                      API Management
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Designing, versioning, and governing APIs that developers
                      love to use
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-blue-900 mr-2">•</span>
                        <span>REST, GraphQL, and gRPC fundamentals</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-900 mr-2">•</span>
                        <span>API versioning and deprecation strategies</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-900 mr-2">•</span>
                        <span>Developer experience and documentation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-900 mr-2">•</span>
                        <span>Rate limiting and monetization</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-900">
                <div className="flex items-start mb-4">
                  <Shield className="h-8 w-8 text-orange-900 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-orange-900 mb-3">
                      Identity & Access Management
                    </h3>
                    <p className="text-gray-700 mb-4">
                      OAuth2, OIDC, SSO, JWT, Zero Trust — master security
                      fundamentals
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-orange-900 mr-2">•</span>
                        <span>Authentication vs Authorization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-900 mr-2">•</span>
                        <span>OAuth2 flows and OIDC protocols</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-900 mr-2">•</span>
                        <span>JWT, sessions, and token management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-900 mr-2">•</span>
                        <span>Zero Trust architecture principles</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-900">
                <div className="flex items-start mb-4">
                  <Layers className="h-8 w-8 text-blue-900 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                      System Design Patterns
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Microservices, event-driven architecture, observability,
                      and resilience
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-blue-900 mr-2">•</span>
                        <span>Monoliths vs Microservices trade-offs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-900 mr-2">•</span>
                        <span>Event-driven and message queue patterns</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-900 mr-2">•</span>
                        <span>Caching, CDNs, and performance optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-900 mr-2">•</span>
                        <span>Observability, logging, and monitoring</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-purple-900">
                <div className="flex items-start mb-4">
                  <Cpu className="h-8 w-8 text-purple-900 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-purple-900 mb-3">
                      AI Product Management
                    </h3>
                    <p className="text-gray-700 mb-4">
                      LLM integrations, data pipelines, model evaluation, and
                      deployment
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-purple-900 mr-2">•</span>
                        <span>LLM integration and prompt engineering</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-900 mr-2">•</span>
                        <span>Data pipelines and model training</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-900 mr-2">•</span>
                        <span>Model evaluation and A/B testing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-900 mr-2">•</span>
                        <span>AI ethics and responsible deployment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Capstone Experience */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">
              Capstone Experience
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              Design and present a real-world technical product that
              demonstrates your mastery. Choose the path that aligns with your
              career goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-900">
                <div className="bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  API Platform Capstone
                </h3>
                <p className="text-gray-700 mb-4">
                  Design a comprehensive API platform with governance, developer
                  experience, and integration patterns
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-900 mr-2 flex-shrink-0 mt-0.5" />
                    <span>API gateway architecture</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-900 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Developer portal and documentation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-900 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Versioning and deprecation strategy</span>
                  </li>
                </ul>
              </div>
              <div className="bg-orange-50 p-8 rounded-lg border-2 border-orange-900">
                <div className="bg-orange-900 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-2xl font-bold text-orange-900 mb-4">
                  Identity & Access Product
                </h3>
                <p className="text-gray-700 mb-4">
                  Build an authentication and authorization system with modern
                  security standards
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-900 mr-2 flex-shrink-0 mt-0.5" />
                    <span>OAuth2/OIDC implementation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-900 mr-2 flex-shrink-0 mt-0.5" />
                    <span>SSO and multi-factor authentication</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-900 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Role-based access control (RBAC)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-purple-50 p-8 rounded-lg border-2 border-purple-900">
                <div className="bg-purple-900 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-2xl font-bold text-purple-900 mb-4">
                  AI Product Prototype
                </h3>
                <p className="text-gray-700 mb-4">
                  Create an AI-powered feature with data pipelines, model
                  integration, and user experience
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-900 mr-2 flex-shrink-0 mt-0.5" />
                    <span>LLM integration and prompt design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-900 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Data pipeline architecture</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-900 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Model evaluation framework</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-blue-900 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">
                All Capstone Projects Include:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg mb-1">
                      Architecture Diagram
                    </p>
                    <p className="text-blue-100">
                      Visual system design showing components and data flows
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg mb-1">PRD + Runbook</p>
                    <p className="text-blue-100">
                      Product requirements and operational documentation
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg mb-1">
                      Launch/Integration Plan
                    </p>
                    <p className="text-blue-100">
                      Go-to-market strategy and technical rollout approach
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg mb-1">Final Presentation</p>
                    <p className="text-blue-100">
                      Showcase your work to the cohort and receive feedback
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Fellowship Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">
              Fellowship Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-900 relative">
                <Quote className="h-10 w-10 text-blue-200 absolute -top-4 -left-4" />
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    Michael M., Senior PM
                  </h3>
                  <p className="text-gray-700 italic">
                    "This programme turned me from a feature PM into a systems
                    thinker. I now lead technical discussions with confidence."
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-900 relative">
                <Quote className="h-10 w-10 text-blue-200 absolute -top-4 -left-4" />
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    Kofo O., Platform PM
                  </h3>
                  <p className="text-gray-700 italic">
                    "Tochii simplified APIs, IAM, and AI into real-world tools I
                    use daily. Best investment in my career."
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-blue-900 text-white p-8 rounded-lg text-center mb-8">
              <p className="text-2xl font-bold mb-2">
                🎯 Cohorts graduate with confidence, clarity, and community.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center border-2 border-blue-900">
                <div className="text-5xl font-bold text-blue-900 mb-3">12</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Week Programme
                </h3>
                <p className="text-gray-700">
                  Comprehensive technical training
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center border-2 border-blue-900">
                <div className="text-5xl font-bold text-blue-900 mb-3">
                  100%
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Capstone Completion
                </h3>
                <p className="text-gray-700">Portfolio-ready projects</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center border-2 border-blue-900">
                <div className="text-5xl mb-3">∞</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Lifetime Access
                </h3>
                <p className="text-gray-700">Ongoing mentorship & support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Lifetime Mentorship */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">
              Lifetime Mentorship
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              This isn't a one-time course. Graduates receive lifetime direct
              mentorship from Tochii, continued access to new materials, and
              membership in the alumni community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">
                  What You Get
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Users className="h-6 w-6 text-blue-900 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-blue-900 mb-1">
                        Direct Access to Tochii
                      </p>
                      <p className="text-gray-700">
                        Get personalized career advice, technical guidance, and
                        strategic mentorship whenever you need it
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-6 w-6 text-blue-900 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-blue-900 mb-1">
                        Alumni Community
                      </p>
                      <p className="text-gray-700">
                        Join a network of technical product leaders for ongoing
                        support, collaboration, and opportunities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Sparkles className="h-6 w-6 text-blue-900 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-blue-900 mb-1">
                        First Access to New Content
                      </p>
                      <p className="text-gray-700">
                        Be the first to access new curriculum updates,
                        masterclasses, and exclusive content
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <GraduationCap className="h-6 w-6 text-blue-900 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-blue-900 mb-1">
                        Alumni Events & Masterclasses
                      </p>
                      <p className="text-gray-700">
                        Participate in exclusive alumni-only events, workshops,
                        and advanced masterclasses
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-lg shadow-md flex flex-col justify-center">
                <div className="mb-6">
                  <Quote className="h-12 w-12 text-blue-300 mb-4" />
                  <p className="text-2xl font-bold italic mb-4">
                    "Learn, grow, and evolve together — for as long as you need
                    guidance."
                  </p>
                  <p className="text-blue-100">
                    Your investment in this fellowship extends far beyond the
                    cohort. You're joining a lifelong learning community with
                    continuous support and growth opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing & Access */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">
              Pricing & Access
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              Investment options designed to fit your learning goals and career
              stage
            </p>
            <div className="bg-white border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden mb-12">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-blue-900 text-white">
                      <th className="px-6 py-4 text-left font-bold">Track</th>
                      <th className="px-6 py-4 text-left font-bold">
                        Duration
                      </th>
                      <th className="px-6 py-4 text-left font-bold">
                        Description
                      </th>
                      <th className="px-6 py-4 text-left font-bold">USD</th>
                      <th className="px-6 py-4 text-left font-bold">NGN</th>
                      <th className="px-6 py-4 text-left font-bold">GBP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 font-medium">Deposit</td>
                      <td className="px-6 py-4">—</td>
                      <td className="px-6 py-4 text-gray-600">
                        Reserve your seat (credited to tuition)
                      </td>
                      <td className="px-6 py-4 font-bold">$200</td>
                      <td className="px-6 py-4 font-bold">₦300,000</td>
                      <td className="px-6 py-4 font-bold">£150</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-blue-50">
                      <td className="px-6 py-4 font-bold text-blue-900">
                        Core Track
                      </td>
                      <td className="px-6 py-4">6 Weeks</td>
                      <td className="px-6 py-4 text-gray-600">
                        Technical Fluency: APIs, IAM, AI, System Design
                      </td>
                      <td className="px-6 py-4 font-bold text-blue-900">
                        $1,200
                      </td>
                      <td className="px-6 py-4 font-bold text-blue-900">
                        ₦1,800,000
                      </td>
                      <td className="px-6 py-4 font-bold text-blue-900">
                        £950
                      </td>
                    </tr>
                    <tr className="bg-orange-50">
                      <td className="px-6 py-4 font-bold text-orange-900">
                        Pro Track
                      </td>
                      <td className="px-6 py-4">12 Weeks</td>
                      <td className="px-6 py-4 text-gray-600">
                        Advanced Architecture, AI, Reliability + Lifetime
                        Mentorship
                      </td>
                      <td className="px-6 py-4 font-bold text-orange-900">
                        $2,000
                      </td>
                      <td className="px-6 py-4 font-bold text-orange-900">
                        ₦3,200,000
                      </td>
                      <td className="px-6 py-4 font-bold text-orange-900">
                        £1,600
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-900">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Installment Options Available
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p className="flex items-start">
                    <span className="font-bold mr-2">🇺🇸 USD:</span>
                    <span>$600 × 2 (Core) | $1,000 × 2 (Pro)</span>
                  </p>
                  <p className="flex items-start">
                    <span className="font-bold mr-2">🇳🇬 NGN:</span>
                    <span>₦900,000 × 2 (Core) | ₦1,600,000 × 2 (Pro)</span>
                  </p>
                  <p className="flex items-start">
                    <span className="font-bold mr-2">🇬🇧 GBP:</span>
                    <span>£475 × 2 (Core) | £800 × 2 (Pro)</span>
                  </p>
                </div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-900">
                <h3 className="text-xl font-bold text-purple-900 mb-4">
                  💎 Early Bird Bonus
                </h3>
                <p className="text-gray-700">
                  Enroll within 72 hours of the free intro class to receive the{' '}
                  <span className="font-bold italic">
                    Technical PM Interview Framework Pack
                  </span>{' '}
                  (worth $200 / ₦300,000 / £150)
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Payment Channels
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-bold text-blue-900 mb-2">
                    Global (USD / GBP)
                  </p>
                  <p className="text-gray-700">Stripe, Wise, PayPal</p>
                </div>
                <div>
                  <p className="font-bold text-blue-900 mb-2">Nigeria (NGN)</p>
                  <p className="text-gray-700">
                    Paystack, Flutterwave, or Bank Transfer
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-700">
                  <span className="font-bold">Support:</span>{' '}
                  <a href="mailto:Billing@tochukwuachebe.com" className="text-blue-900 hover:text-blue-700 underline">
                    Billing@tochukwuachebe.com
                  </a>
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                Corporate Partnerships & Sponsorships
              </h3>
              <p className="text-lg mb-6">
                We welcome companies, startups, and tech organizations looking
                to upskill their teams in APIs, AI Product Management, System
                Design, and Platform Thinking.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
                  <span>Group enrollment discounts (3+ fellows)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
                  <span>
                    Private cohort or tailored sessions for internal teams
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
                  <span>
                    Certificates and performance reports for sponsored learners
                  </span>
                </div>
              </div>
              <p className="text-lg">
                To discuss partnership or sponsorship opportunities, email{' '}
                <a href="mailto:contact@tochukwuachebe.com" className="underline font-bold hover:text-blue-200">
                  contact@tochukwuachebe.com
                </a>{' '}
                with the subject "Corporate Partnership – Learn with Tochii
                Fellowship."
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* How to Apply */}
      <section id="apply" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">
              How to Apply
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              Your journey to becoming a technical product leader starts here.
              Follow these simple steps to join the next cohort.
            </p>
            <div className="space-y-8 mb-12">
              <div className="bg-blue-50 p-8 rounded-lg shadow-md border-l-4 border-blue-900">
                <div className="flex items-start">
                  <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 mr-6">
                    <FileText className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                      Take the Diagnostic
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Complete the 10-minute Technical PM Diagnostic to assess
                      your current skills and identify growth areas
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-orange-50 p-8 rounded-lg shadow-md border-l-4 border-orange-900">
                <div className="flex items-start">
                  <div className="bg-orange-900 text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 mr-6">
                    <Users className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-orange-900 mb-3">
                      Attend Free Intro Class
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Join the complimentary introduction session to experience
                      the teaching style and meet the community
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 p-8 rounded-lg shadow-md border-l-4 border-purple-900">
                <div className="flex items-start">
                  <div className="bg-purple-900 text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 mr-6">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-900 mb-3">
                      Choose Track & Start Building
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Select Core or Pro track, reserve your seat, and begin
                      your transformation into a technical PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Application Form */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                  FELLOWSHIP APPLICATION FORM
                </h3>
                <form action="https://formspree.io/f/mnnokbeq" method="POST" className="space-y-6">
                  <input type="hidden" name="_subject" value="New Fellowship Application" />
                  <input type="hidden" name="_replyto" value="contact@tochukwuachebe.com" />
                  <input type="hidden" name="_to" value="contact@tochukwuachebe.com" />
                  <div>
                    <label className="block text-gray-800 font-medium mb-1">
                      Name{' '}
                      <span className="text-sm text-gray-500">(required)</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 text-sm mb-1">
                          First Name
                        </label>
                        <input type="text" name="firstName" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent" />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-1">
                          Last Name
                        </label>
                        <input type="text" name="lastName" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-800 font-medium mb-1">
                      Email{' '}
                      <span className="text-sm text-gray-500">(required)</span>
                    </label>
                    <input type="email" name="email" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-gray-800 font-medium mb-1">
                      Phone{' '}
                      <span className="text-sm text-gray-500">(required)</span>
                    </label>
                    <input type="tel" name="phone" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-gray-800 font-medium mb-1">
                      Country/Region{' '}
                      <span className="text-sm text-gray-500">(required)</span>
                    </label>
                    <input type="text" name="country" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-gray-800 font-medium mb-1">
                      LinkedIn Profile{' '}
                      <span className="text-sm text-gray-500">(optional)</span>
                    </label>
                    <input type="url" name="linkedin" placeholder="https://linkedin.com/in/yourprofile" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-gray-800 font-medium mb-1">
                      Track Selection{' '}
                      <span className="text-sm text-gray-500">(required)</span>
                    </label>
                    <select name="track" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent">
                      <option value="">Select a track</option>
                      <option value="core">Core Track (6 Weeks)</option>
                      <option value="pro">Pro Track (12 Weeks)</option>
                      <option value="undecided">
                        Undecided - Need more information
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-800 font-medium mb-1">
                      Current Role/Title{' '}
                      <span className="text-sm text-gray-500">(required)</span>
                    </label>
                    <input type="text" name="currentRole" required placeholder="e.g., Product Manager, Software Engineer, etc." className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-gray-800 font-medium mb-1">
                      Years of Experience{' '}
                      <span className="text-sm text-gray-500">(required)</span>
                    </label>
                    <select name="experience" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent">
                      <option value="">Select experience level</option>
                      <option value="0-2">0-2 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-800 font-medium mb-1">
                      Why do you want to join this fellowship?{' '}
                      <span className="text-sm text-gray-500">(required)</span>
                    </label>
                    <p className="text-sm text-gray-600 mb-2">
                      Tell us about your goals and what you hope to achieve (250
                      words max)
                    </p>
                    <textarea name="motivation" required rows="6" maxLength="2500" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"></textarea>
                  </div>
                  <div>
                    <label className="block text-gray-800 font-medium mb-1">
                      What is your current technical proficiency level?{' '}
                      <span className="text-sm text-gray-500">(required)</span>
                    </label>
                    <select name="technicalLevel" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent">
                      <option value="">Select proficiency level</option>
                      <option value="beginner">
                        Beginner - Limited technical knowledge
                      </option>
                      <option value="intermediate">
                        Intermediate - Some technical understanding
                      </option>
                      <option value="advanced">
                        Advanced - Strong technical background
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-800 font-medium mb-1">
                      How did you hear about this fellowship?{' '}
                      <span className="text-sm text-gray-500">(optional)</span>
                    </label>
                    <input type="text" name="referralSource" placeholder="e.g., LinkedIn, YouTube, Friend referral, etc." className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-gray-800 font-medium mb-1">
                      Additional Comments or Questions{' '}
                      <span className="text-sm text-gray-500">(optional)</span>
                    </label>
                    <textarea name="additionalComments" rows="4" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"></textarea>
                  </div>
                  <div className="pt-4">
                    <button type="submit" className="w-full bg-blue-900 text-white px-8 py-4 rounded-md hover:bg-blue-800 transition-colors font-bold text-lg">
                      Submit Application
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    By submitting this form, you agree to be contacted regarding
                    your application.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Let's Build Technical Leaders Who Build the Future
              </h2>
              <p className="text-2xl mb-8 max-w-3xl mx-auto">
                From APIs to AI — this is where product managers become
                architects of impact.
              </p>
              <div className="bg-white bg-opacity-10 p-8 rounded-lg mb-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Tochukwu Achebe</h3>
                <p className="text-xl mb-4">API & Platform Product Leader</p>
                <div className="space-y-3">
                  <a href="mailto:contact@tochukwuachebe.com" className="flex items-center justify-center text-lg hover:text-blue-200 transition-colors">
                    <Mail className="h-5 w-5 mr-2" />
                    contact@tochukwuachebe.com
                  </a>
                  <p className="text-lg">🌐 tochukwuachebe.com</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="mailto:contact@tochukwuachebe.com?subject=Fellowship Application" className="bg-white text-blue-900 px-8 py-4 rounded-md hover:bg-blue-50 transition-colors font-bold text-lg inline-flex items-center justify-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Apply Now
                </a>
                <Link to="/about" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md hover:bg-blue-800 transition-colors font-bold text-lg">
                  Learn More About Tochii
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>;
}