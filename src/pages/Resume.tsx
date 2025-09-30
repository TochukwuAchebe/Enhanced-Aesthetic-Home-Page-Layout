import React from 'react';
import { Briefcase, GraduationCap, Award, Code, Server, Download, ExternalLink, Clock, MapPin, Building, Phone, Mail, Linkedin, Globe, Layers, ShieldCheck, Users, BookOpen, BarChart, Cpu, FileText } from 'lucide-react';
export function Resume() {
  return <main className="flex-grow bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">RESUME</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Technical Product Manager & Systems Architect (APIs & Integrations)
            | Stanford GSB | UK Global Talent Award Recipient
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              <span>London, UK</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              <span>achebetochukwu@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              <span>+44 7943641562</span>
            </div>
          </div>
          <div className="mt-8">
            <a href="https://drive.google.com/file/d/1LI9AUHy4AN75lJ4_2rtUmLL20lQkbLdu/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors">
              <Download className="h-5 w-5 mr-2" />
              Download PDF
            </a>
          </div>
        </div>
      </section>
      {/* Professional Summary */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              PROFESSIONAL SUMMARY
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                Senior Technical Product Manager with expertise in Fintech, AI,
                Regtech, and Payments. Awarded the UK Global Talent Award in
                Digital Technology for expertise in API lifecycle management,
                system design, and scalable digital platforms. Proven ability to
                drive P&L growth, API adoption, and business scale through Open
                Banking, middleware integrations, and developer ecosystems.
                Passionate about leveraging technology to enable business
                innovation and transformation.
              </p>
            </div>
          </div>
          {/* Core Skills Section */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Code className="h-6 w-6 text-blue-900 mr-3" />
              <h2 className="text-2xl font-bold text-blue-900">CORE SKILLS</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-blue-900 mb-4">
                  TECHNICAL
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">
                        API Design & Security (JWT, OAuth)
                      </span>
                      <span className="text-gray-600">Expert</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-900 h-2 rounded-full" style={{
                      width: '95%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">
                        IAM, Middleware (iPaaS)
                      </span>
                      <span className="text-gray-600">Expert</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-900 h-2 rounded-full" style={{
                      width: '90%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">
                        Payments, SDKs
                      </span>
                      <span className="text-gray-600">Advanced</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-900 h-2 rounded-full" style={{
                      width: '85%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">
                        API Lifecycle Management
                      </span>
                      <span className="text-gray-600">Expert</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-900 h-2 rounded-full" style={{
                      width: '95%'
                    }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-900 mb-4">
                  SOFTWARE & MANAGEMENT
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">
                        Jira, Postman, Swagger, Confluence
                      </span>
                      <span className="text-gray-600">Expert</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-900 h-2 rounded-full" style={{
                      width: '90%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">
                        Agile (Scrum, SAFe)
                      </span>
                      <span className="text-gray-600">Advanced</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-900 h-2 rounded-full" style={{
                      width: '85%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">
                        P&L Management, Product Strategy
                      </span>
                      <span className="text-gray-600">Expert</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-900 h-2 rounded-full" style={{
                      width: '90%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">
                        Developer Experience & API Monetization
                      </span>
                      <span className="text-gray-600">Expert</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-900 h-2 rounded-full" style={{
                      width: '95%'
                    }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Experience Section */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Briefcase className="h-6 w-6 text-blue-900 mr-3" />
              <h2 className="text-2xl font-bold text-blue-900">
                PROFESSIONAL EXPERIENCE
              </h2>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-900 pl-6 py-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-blue-900">
                    HEAD OF AI, PLATFORMS AND APIS
                  </h3>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>May 2025 - Present</span>
                  </div>
                </div>
                <div className="flex items-center mb-4 text-gray-700">
                  <Building className="h-4 w-4 mr-1" />
                  <span className="font-medium">AI in Nigeria (AI SaaS)</span>
                  <span className="mx-2">•</span>
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>London, UK / Lagos, Nigeria</span>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Lead cross-functional teams developing AI-powered platforms
                    and APIs for enterprise clients in finance, education, and
                    healthcare sectors
                  </li>
                  <li>
                    Architected and launched a comprehensive API ecosystem
                    enabling third-party integration with AI models, increasing
                    platform adoption by 40%
                  </li>
                  <li>
                    Drive the development of SmartHR, an AI-powered recruitment
                    solution, implementing secure API gateways for data exchange
                    between client systems and AI models
                  </li>
                  <li>
                    Spearhead the rollout of a STEM + AI curriculum for Stanbic
                    IBTC Foundation, deployed across 8 underserved states using
                    offline-first, multilingual delivery
                  </li>
                  <li>
                    Established API governance standards and documentation
                    frameworks, reducing integration time by 60% and improving
                    developer experience
                  </li>
                  <li>
                    Implemented robust platform security protocols including
                    OAuth 2.0 and API key management to ensure data protection
                    across all AI services
                  </li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-900 pl-6 py-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-blue-900">
                    HEAD OF PLATFORMS
                  </h3>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>April 2023 - May 2025</span>
                  </div>
                </div>
                <div className="flex items-center mb-4 text-gray-700">
                  <Building className="h-4 w-4 mr-1" />
                  <span className="font-medium">
                    RedCloud (RCT-NASDAQ) - OpenCommerce
                  </span>
                  <span className="mx-2">•</span>
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>London, UK</span>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Led platform design and integration, designing and
                    implementing unique APIs leveraging IPAAS for ERP, WMS, and
                    DBMS
                  </li>
                  <li>
                    Led API ecosystem expansion, enabling AI-driven ERP order
                    management
                  </li>
                  <li>
                    Designed a full KYC system, incorporating AML/PEP compliance
                    & ID verification
                  </li>
                  <li>
                    Orchestrated ERP and WMS integrations to optimize supply
                    chain automation, spearheading new service provider
                    partnerships that expanded the product ecosystem and grew
                    TTV from $100K to $250K in 8 months
                  </li>
                  <li>
                    Engineered a cutting-edge rewards system, equipping the
                    sales team to launch high-impact campaigns that boost Redpay
                    payment adoption
                  </li>
                  <li>
                    Led the implementation of app tagging in Segment (Twillio
                    CDP), optimizing customer insights and personalization
                  </li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-900 pl-6 py-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-blue-900">
                    PRODUCT MANAGER, INTEGRATIONS
                  </h3>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>June 2022 - March 2023</span>
                  </div>
                </div>
                <div className="flex items-center mb-4 text-gray-700">
                  <Building className="h-4 w-4 mr-1" />
                  <span className="font-medium">RedCloud - OpenCommerce</span>
                  <span className="mx-2">•</span>
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>London, UK</span>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Worked on redesigning the entire framework in which core
                    systems were built, including Payments, digital service
                    architecture, and the underlying orchestration layer of the
                    marketplace
                  </li>
                  <li>
                    Engineered the RedCloud Unique Identifier (RCUI) to enhance
                    SKU mapping and streamline product discovery across
                    marketplaces
                  </li>
                  <li>
                    Implemented a robust API Governance Framework, ensuring
                    compliance with security and standardization best practices
                  </li>
                  <li>
                    Launched a bill payment platform, integrating third-party
                    providers across 3 countries
                  </li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-900 pl-6 py-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-blue-900">
                    PRODUCT LEAD, API MARKETPLACE & DEVELOPER EXPERIENCE
                  </h3>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>May 2021 - May 2022</span>
                  </div>
                </div>
                <div className="flex items-center mb-4 text-gray-700">
                  <Building className="h-4 w-4 mr-1" />
                  <span className="font-medium">
                    Interswitch Group - FinTech & Payments
                  </span>
                  <span className="mx-2">•</span>
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Lagos, Nigeria</span>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Built a strategy to resell Interswitch's internal APIs to
                    third parties, leveraging Developers as a competitive edge
                    and using a developer community to grow API adoption
                  </li>
                  <li>
                    Created a self-service API Marketplace, driving developer
                    adoption & API monetization
                  </li>
                  <li>
                    Defined API governance standards, streamlining third-party
                    integrations
                  </li>
                  <li>
                    Published technical API documentation, accelerating
                    integration processes
                  </li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-900 pl-6 py-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-blue-900">
                    PRODUCT OWNER, PARTNERSHIPS
                  </h3>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>November 2020 - April 2021</span>
                  </div>
                </div>
                <div className="flex items-center mb-4 text-gray-700">
                  <Building className="h-4 w-4 mr-1" />
                  <span className="font-medium">
                    Interswitch Group - FinTech & Payments
                  </span>
                  <span className="mx-2">•</span>
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Lagos, Nigeria</span>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Building on the already existing partnerships with tier-one
                    Banks, delivered a 15% growth by leveraging partnerships
                    with other FinTechs
                  </li>
                  <li>
                    Led Quickteller 4.0 rollout across ATMs, expanding the
                    biller network
                  </li>
                  <li>
                    Managed 8,000+ partners, driving 15% revenue growth through
                    fintech collaborations
                  </li>
                  <li>
                    Implemented new USSD banking services, increasing financial
                    accessibility
                  </li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-900 pl-6 py-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-blue-900">
                    PREVIOUS ROLES SUMMARY
                  </h3>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>2018 - 2020</span>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    <span className="font-semibold">
                      Regtech & Compliance (2019 – 2020):
                    </span>{' '}
                    Built QoreID, a compliance-focused regtech solution for KYC
                    & AML verification
                  </li>
                  <li>
                    <span className="font-semibold">
                      Acquisition Success (2018 – 2019):
                    </span>{' '}
                    Led the BaxiBox product redesign, contributing to its sale
                    as the second-largest acquisition in Africa to date
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Education Section */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <GraduationCap className="h-6 w-6 text-blue-900 mr-3" />
              <h2 className="text-2xl font-bold text-blue-900">EDUCATION</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-blue-900">
                    STANFORD UNIVERSITY GRADUATE SCHOOL OF BUSINESS
                  </h3>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Sep 2026 (Expected)</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-2">
                  LEAD Executive Education – Corporate Innovation & Leadership
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-blue-900">
                    REDEEMERS' UNIVERSITY
                  </h3>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>July 2016</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-2">
                  Bachelor of Science, Computer Science
                </p>
              </div>
            </div>
          </div>
          {/* Certifications & Awards */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 text-blue-900 mr-3" />
              <h2 className="text-2xl font-bold text-blue-900">
                CERTIFICATIONS & AWARDS
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-blue-900 mb-4">
                  CERTIFICATIONS
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        BrainStation - Product Leadership
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        Tyk - API Platform Engineering
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        O'Reilly - Fundamentals of Software Architecture
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        API Academy - API Product Manager
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        BeAgile - SAFe Product Manager/Product Owner
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-blue-900 mb-4">
                  AWARDS & RECOGNITION
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                      <span className="text-white text-xs">★</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        UK Global Talent Award in Digital Technology
                      </p>
                      <p className="text-gray-600 text-sm">
                        For expertise in API lifecycle management and scalable
                        digital platforms
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Publications & Speaking */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <ExternalLink className="h-6 w-6 text-blue-900 mr-3" />
              <h2 className="text-2xl font-bold text-blue-900">
                PUBLICATIONS & THOUGHT LEADERSHIP
              </h2>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-900 pl-6 py-2">
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  TEACHING & PUBLICATIONS
                </h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                  <li>
                    <p className="font-medium">
                      "API as a Product: Building an Enabling Developer
                      Experience"
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">"API Integration 101"</p>
                  </li>
                  <li>
                    <p className="font-medium">"African Payments & Fintech"</p>
                  </li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-900 pl-6 py-2">
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  LEADERSHIP & MENTORING
                </h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                  <li>
                    <p className="font-medium">
                      Founder, The Nwamaka Achebe Trust
                    </p>
                    <p className="text-sm">
                      Provide scholarships and career mentorship to 20+ UK and
                      Nigerian youth
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">
                      Education Mentor, The King's Trust
                    </p>
                    <p className="text-sm">
                      Guided students in academic planning and career readiness
                      across tech and business fields
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Contact Section */}
          <div className="bg-blue-900 text-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4">GET IN TOUCH</h2>
            <p className="text-lg mb-6">
              Interested in discussing platform strategy, API governance, or
              potential speaking opportunities? I'd love to connect.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:achebetochukwu@gmail.com" className="bg-white text-blue-900 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors">
                Email Me
              </a>
              <a href="https://www.linkedin.com/in/tochiii/" className="bg-transparent border border-white text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>;
}