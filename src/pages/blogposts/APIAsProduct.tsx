import React, { Component } from 'react';
import { Calendar, Clock, Tag, ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export function APIAsProduct() {
  return <main className="flex-grow bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            API as a Product: Building an Enabling Developer Experience &
            Measuring Success
          </h1>
          <p className="text-xl max-w-3xl mx-auto italic">
            "Creating intentional developer experiences for internal and
            external platforms"
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
                  <span className="text-sm">May 22, 2024</span>
                </div>
                <div className="flex items-center mr-6 mb-2">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">9 min read</span>
                </div>
                <div className="flex items-center mb-2">
                  <Tag className="h-4 w-4 mr-1" />
                  <span className="text-sm">API & Platform Strategy</span>
                </div>
              </div>
              <div className="w-full h-64 md:h-96 mb-8 overflow-hidden rounded-lg">
                <img src="/dx.webp" alt="Developer Experience diagram showing the intersection of Developer, Business, and Community components" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="prose max-w-none text-gray-800">
              <p className="text-lg mb-6">
                The fundamental of every API Strategy is the developer's
                experience (DX) of an API product. Whether it be an internal
                developer platform (IDP) or an external developer platform
                (EDP), the DX is as important as the API functionality. It is,
                therefore, imperative to build developer experiences with
                intentionality. All types of users must be accounted for, and
                their use cases MUST be covered to ensure users can maximize the
                value of the API platform.
              </p>
              <p className="text-lg mb-8">These users include:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Developers
                  </h3>
                  <p className="mb-0">
                    The core users who manage the technical aspects of
                    feasibility, testing, design, and integration.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    The Business
                  </h3>
                  <p className="mb-0">
                    The key decision-makers who are responsible for the
                    commercial aspect of the service offered.
                  </p>
                </div>
              </div>
              <p className="text-lg mb-8">
                There are three elements in building the API as a product, and
                the right developer experience is key to enabling a self-service
                platform for your users. This article will discuss all three and
                break them down individually.
              </p>
              <ol className="list-decimal pl-6 mb-8 space-y-2">
                <li className="text-lg font-medium">The Developer Console</li>
                <li className="text-lg font-medium">The Developer Community</li>
                <li className="text-lg font-medium">
                  The Business Management account
                </li>
              </ol>
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  The Developer Console
                </h2>
                <p className="mb-6">
                  The console is an environment where developers can play with
                  the tools needed to integrate with the API features. It
                  comprises a developer console landing page, API documentation,
                  sandbox environment, API security, and API gateway. These
                  elements impact the developer experience and how its users
                  make decisions.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    Key Components of the Developer Console
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-blue-900 mb-2">
                        Developer Console Landing Page
                      </h4>
                      <p>
                        This page should describe the value proposition of your
                        APIs, along with use cases.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-blue-900 mb-2">
                        API Documentation
                      </h4>
                      <p className="mb-4">
                        This includes the landing page, user guides, and API
                        references.
                      </p>
                      <ul className="list-disc pl-6 space-y-4">
                        <li>
                          <span className="font-medium">The Landing page</span>{' '}
                          should clearly define the types of APIs available, and
                          their features should be identified by their value
                          proposition. The golden rule here is to use standard
                          nomenclatures rather than internal language. For
                          example, use "Send Money" instead of "Transfer account
                          to account or wallet to wallet".
                        </li>
                        <li>
                          <span className="font-medium">User Guides</span> must
                          educate the users on your APIs by including sections
                          such as getting started, definitions of API
                          specification, security, how to go about the process
                          as a developer or a business, how to go live, and Know
                          Your Customer/ Business (KYC/B) requirements for all
                          API products.
                        </li>
                        <li>
                          <span className="font-medium">API references</span>{' '}
                          should include a clear and concise pattern for testing
                          the APIs, and the different response types. It should
                          be a simple test environment with a responsive User
                          Interface (UI) to test each API and endpoint for their
                          different behaviors.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-blue-900 mb-2">
                        Sandbox Environment
                      </h4>
                      <p>
                        All API testing should be done on the sandbox server,
                        which is the test environment for your APIs.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-blue-900 mb-2">
                        API Security
                      </h4>
                      <p>
                        To secure an API, you must authenticate a user and
                        authorize each feature. This feature acts as an identity
                        and access management tool, much like the bouncer at a
                        club who determines your level of access, whether
                        regular or VIP. Users must be able to access and manage
                        their access and refresh tokens on the developer
                        console, and request go-live permissions for the APIs.{' '}
                        <span className="italic">
                          Rule of thumb: Avoid basic authentication as it is not
                          robust enough to secure your products.
                        </span>
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-blue-900 mb-2">
                        API Gateway
                      </h4>
                      <p>
                        This is mainly used for load balancing, identity and
                        access management, access control, monitoring & logging,
                        etc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  The Developer Community
                </h2>
                <p className="mb-6">
                  The psychology around developing a community is as important
                  as your API.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    Three Levels of Community Strategy
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-blue-900 mb-2">
                        Business Level
                      </h4>
                      <p>
                        This focuses on the community and creates value for the
                        business.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-blue-900 mb-2">
                        Community Level
                      </h4>
                      <p>
                        This focuses on how to create value for the community
                        members.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-blue-900 mb-2">
                        Tactical Level
                      </h4>
                      <p>
                        This is the strategic point where you drive business
                        value using the community as a competitive advantage. It
                        is almost effortless to build products but much more
                        challenging to replicate in a community.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mb-6">
                  Every business starts with a community of users, such as
                  friends and family, who give product feedback before they
                  eventually find their product market fit. Duolingo is an
                  example.
                </p>
                <p className="mb-6">
                  To enable the tactical level, the developer community is an
                  integral component. This community must be built with
                  intentionality and strategic goals. In my experience, I have
                  built developer communities using the SPACES model from David
                  Spinks in his book, The Business of Belonging.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    The SPACES Model
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-blue-900 mb-2">Support</h4>
                      <p>
                        Improve support and help customers (developers) solve
                        problems for each other. The community can also serve as
                        a knowledge base or provide expert resources for users,
                        such as the Asana community forum.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-blue-900 mb-2">
                        Product Ideation, Innovation & Feedback
                      </h4>
                      <p>
                        Accelerate innovation by empowering the developers to
                        build their use cases and sell value through the
                        marketplace. Companies can leverage the collective
                        insight of their community to get ideas for innovative
                        features, identify the most critical changes that will
                        improve their products, and save money and time on
                        surveys — for example, the Lyft Driver Advisory Council.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-blue-900 mb-2">
                        Acquisition and Advocacy (Growth)
                      </h4>
                      <p>
                        The community operates as a network of ambassadors who
                        drive awareness and growth for the business. For
                        example, hosting online and offline engagements that
                        speak to your APIs value proposition will improve the
                        API adoption — for example, Lululemon Global
                        Ambassadors.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-blue-900 mb-2">
                        Content and Contribution
                      </h4>
                      <p>
                        The goal is to motivate the contribution of content,
                        products, and services. Distributed content models are
                        changing the way businesses function. From
                        user-generated content to open-source platforms,
                        distributed models allow value to be created by the
                        community, with the company just providing the platform-
                        for example, Google developer groups.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-blue-900 mb-2">
                        Engagement
                      </h4>
                      <p>
                        This should be internal and external, bringing together
                        a group of people around a common interest, in this
                        case, the product, giving them a sense of identity and
                        belonging and increasing customer retention with
                        podcasts, video series, leaderboards, badges,
                        newsletters, etc. The Nike-run club(External), LinkedIn
                        (Internal) are examples.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-blue-900 mb-2">
                        Customer Success and Advancement
                      </h4>
                      <p>
                        Make customers more successful at using software by
                        upskilling how they use the product and empowering the
                        customer to become mentors and instructors for the
                        product. Example: Notion Community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  The Business Management Tool
                </h2>
                <p className="mb-6">
                  This tool should enable the user to complete the KYC/KYB
                  process and request to go live. It should also include
                  features such as a wallet and analytics that enable the
                  merchant to manage their API account.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      Request Go-Live
                    </h3>
                    <p className="text-gray-700">
                      The user should be able to upload of KYC/KYB documents and
                      complete the validation/verification process. Once this
                      process is completed, the user should be able to request
                      to go live.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      Wallet
                    </h3>
                    <p className="text-gray-700">
                      This enables the business model to implement its testing
                      pricing model. More often than not, the pay-as-you-use
                      pricing model is the most effective for APIs, bar unique
                      cases like that of partnerships with telcos whereby there
                      is a bulk load purchase into a master wallet per a
                      stipulated period of time.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      Analytics
                    </h3>
                    <p className="text-gray-700">
                      This is derived from the usage of your APIs and can be
                      monetized as a feature for the API customer to give
                      information such as who is using their services, location,
                      time of use, etc. This data can then be leveraged to serve
                      their users better.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      User Management
                    </h3>
                    <p className="text-gray-700">
                      The business tool should enable multi-tenancy so that each
                      user can access the product and multiple users can create
                      one account with different levels of roles and
                      permissions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  Measuring Success
                </h2>
                <p className="mb-6">
                  There are various ways to measure the success of the developer
                  experience, and they can be grouped into seven categories:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-900 mb-3">
                      Adoption
                    </h3>
                    <p>
                      To measure adoption, you must track developer engagement
                      in the community, number of API users, active users, and
                      API requests over a period of time (at your discretion).
                    </p>
                  </div>
                  <div className="bg-blue-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-900 mb-3">
                      Performance Metrics
                    </h3>
                    <p>
                      Track the response time of the requests made, latency,
                      error rate, uptime, and downtime.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-900 mb-3">
                      Documentation & Support
                    </h3>
                    <p>
                      Track problem resolution time, the number of support
                      tickets created, and the feedback and views of your API
                      documentation.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-900 mb-3">
                      Scalability
                    </h3>
                    <p>
                      Ensure that the request volume, auto-scaling triggers, and
                      resource utilization are tracked.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-900 mb-3">
                      Customer Satisfaction
                    </h3>
                    <p>
                      Churn rate, customer feedback, renewal rates, net promoter
                      score.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-900 mb-3">
                      Rate Limiting
                    </h3>
                    <p>Breaches, requests per account, and per second.</p>
                  </div>
                  <div className="bg-blue-50 p-5 rounded-lg md:col-span-3">
                    <h3 className="text-lg font-bold text-blue-900 mb-3">
                      Financial
                    </h3>
                    <p>
                      Return on investment, cost per transaction, revenue,
                      revenue churn.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Conclusion
                </h2>
                <p className="text-lg text-blue-900 mb-4">
                  Finally, all of these will not be feasible if there are no
                  policies or processes put in place that make it easy to do the
                  right things and challenging to do the wrong things. This is
                  known as API governance, and it enables consistency, security
                  & compliance, and efficiency while providing a standardized
                  framework for managing the API platforms, whether internal or
                  external.
                </p>
                <p className="text-lg text-blue-900 mb-0">
                  I look forward to sharing more about API governance, but until
                  then, check out{' '}
                  <Link to="/blog/api-integration-101" className="text-blue-900 underline hover:text-blue-700">
                    API Integration 101
                  </Link>{' '}
                  &{' '}
                  <Link to="/blog/what-is-an-api" className="text-blue-900 underline hover:text-blue-700">
                    leveraging APIs to 10x business revenue
                  </Link>
                  .
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
              <img src="/1_oSgsUj3-2hV-KgADMtrWbA2x.webp" alt="API Integration 101" className="w-full h-40 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Tag className="h-4 w-4 text-blue-900 mr-1" />
                  <span className="text-sm text-blue-900 font-medium">
                    API Design & Technology
                  </span>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  API Integration 101
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Bridging the knowledge gap in API integration concepts and
                  best practices...
                </p>
                <Link to="/blog/api-integration-101" className="text-blue-900 font-medium hover:text-blue-700 transition-colors flex items-center">
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
              <img src="/Yellow_Modern_Mathematics_Lecture_Youtube_Thumbnail_%281%29.png" alt="Building a Developer-First API Strategy" className="w-full h-40 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Tag className="h-4 w-4 text-blue-900 mr-1" />
                  <span className="text-sm text-blue-900 font-medium">
                    Platform Strategy
                  </span>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  Building a Developer-First API Strategy
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Discover the key elements that make APIs irresistible to
                  developers...
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
              Get the latest articles, insights, and resources on API design,
              platform strategy, and developer experience delivered straight to
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