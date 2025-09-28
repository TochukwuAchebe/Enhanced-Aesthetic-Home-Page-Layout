import React from 'react';
import { Calendar, Clock, Tag, ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export function APIIntegration101() {
  return <main className="flex-grow bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            API Integration 101
          </h1>
          <p className="text-xl max-w-3xl mx-auto italic">
            "Bridging the knowledge gap in API integration concepts and best
            practices"
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
                  <span className="text-sm">July 15, 2023</span>
                </div>
                <div className="flex items-center mr-6 mb-2">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">10 min read</span>
                </div>
                <div className="flex items-center mb-2">
                  <Tag className="h-4 w-4 mr-1" />
                  <span className="text-sm">API Design & Technology</span>
                </div>
              </div>
              <div className="w-full h-64 md:h-96 mb-8 overflow-hidden rounded-lg">
                <img src="/1_oSgsUj3-2hV-KgADMtrWbA2x.webp" alt="Multi-tenant API Gateway system diagram showing how internal and external systems connect" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="prose max-w-none text-gray-800">
              <p className="text-lg mb-6">
                Over the past month, in my current role as Head of Platforms and
                Integrations, I have had the opportunity to interview over 50
                candidates for API Integration roles. Through these interviews,
                I've noticed a knowledge gap in certain areas which include
                system design patterns, API user management, integration
                concepts, and API specifications.
              </p>
              <p className="text-lg mb-8">
                While it's not possible to cover all topics pertaining to APIs
                and integration in a single article, I'd like to focus on a few
                key concepts that could pique the interest of individuals who
                are eager to learn and grow in this field.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Multi-Tenant API Architecture
                </h2>
                <p className="mb-4">
                  The diagram above illustrates a multi-tenant system which
                  enables third parties as well as internal systems to use the
                  same services. This architecture is increasingly common in
                  modern API platforms, allowing organizations to serve multiple
                  client types through a unified gateway while maintaining
                  proper separation and security.
                </p>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  OSI Model – The Foundation of All Computer Communication
                </h2>
                <p className="mb-4">
                  The OSI (Open Systems Interconnection) model can be best
                  described as the universal language for computer networking
                  and it is a theoretical way of describing how different layers
                  of a network communicate with each other. There are seven (7)
                  layers in the OSI model which have their specific functions
                  and protocols however within this article, we will focus on
                  two layers i.e the application & network layer.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      Application Layer
                    </h3>
                    <p className="text-gray-700">
                      This is the layer closest to the end user. It provides
                      network services directly to applications, such as web
                      browsers and email clients. API security mechanisms like
                      OAuth and API keys operate at this layer.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      Network Layer
                    </h3>
                    <p className="text-gray-700">
                      This layer handles the routing of data packets between
                      different networks. Security considerations at this layer
                      include IP whitelisting and firewall configurations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Understanding API Documentation
                </h2>
                <p className="mb-4">
                  APIs (Application Programmable Interface) are a set of clearly
                  defined methods of communication between two pieces of
                  software. The most important step of software integration is
                  understanding the API user guide, which is often embedded
                  within the API documentation.
                </p>
                <p className="mb-4">
                  The API documentation usually defines the following:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">API Specification</li>
                  <li className="mb-2">Schemas (Data format)</li>
                  <li className="mb-2">
                    Security & Connection layer (application layer (API key,
                    OAuth), network layer (IP address & port))
                  </li>
                </ul>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  API Specification
                </h2>
                <p className="mb-4">
                  The API specification describes the functionality and expected
                  behavior of an API. It standardizes the data exchange between
                  web services, examples of these specifications include
                  GraphQL, REST, SOAP etc. Let's use REST APIs as a case study
                  for expatiating on API.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    REST APIs
                  </h3>
                  <p className="mb-4">
                    REST stands for Representational State Transfer. In this
                    specification, clients and servers exchange data using HTTP.
                  </p>
                  <h4 className="text-lg font-bold text-blue-900 mb-2">HTTP</h4>
                  <p className="mb-4">
                    The hypertext transfer protocol is the foundation of the
                    World Wide Web, and it is used to load webpages using
                    hypertext links. The HTTP is an application layer protocol
                    designed to transfer information between networked devices
                    and runs on top of other layers of the network protocol
                    stack.
                  </p>
                  <p className="mb-4">
                    A simple flow over HTTP occurs by a client (user) making a
                    request to a server which then responds with a message.
                  </p>
                  <p className="mb-4">
                    HTTP protocol requests are made up of a URL, method, headers
                    and body.
                  </p>
                  <div className="bg-white p-4 rounded-lg mb-4 border border-gray-200">
                    <h5 className="font-bold text-blue-900 mb-2">
                      HTTP Methods/Verbs
                    </h5>
                    <p className="mb-2">
                      Methods can sometimes be referred to as verbs which
                      describes the action to be taken by that HTTP request.
                      These include:
                    </p>
                    <ul className="list-disc pl-6">
                      <li>POST - Create</li>
                      <li>GET - Read</li>
                      <li>PUT/PATCH - Update</li>
                      <li>DELETE - Delete</li>
                    </ul>
                    <p className="mt-2 text-sm text-gray-600">
                      These are also known as CRUD operations: create, read,
                      update, delete.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg mb-4 border border-gray-200">
                    <h5 className="font-bold text-blue-900 mb-2">Headers</h5>
                    <p>
                      Headers represent additional information being requested
                      (meta-information) along to the server. E.g Content-type=
                      application/json, authentication token.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-bold text-blue-900 mb-2">Body</h5>
                    <p>
                      A Body contains the data a client sends to the server as a
                      request, in order to retrieve information in the form of a
                      response.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Schemas
                </h2>
                <p className="mb-4">
                  This is how the data in your request and response is defined.
                  Examples include JSON, XML, with the most common one being
                  JSON — JavaScript Object Notation.
                </p>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
                  <p className="mb-2"> // Example JSON Schema</p>
                  <p className="mb-1">{'{'}</p>
                  <p className="mb-1"> "type": "object",</p>
                  <p className="mb-1"> "properties": {'{'}</p>
                  <p className="mb-1">
                    {' '}
                    "id": {'{'} "type": "integer" {'}'},
                  </p>
                  <p className="mb-1">
                    {' '}
                    "name": {'{'} "type": "string" {'}'},
                  </p>
                  <p className="mb-1">
                    {' '}
                    "email": {'{'} "type": "string", "format": "email" {'}'}
                  </p>
                  <p className="mb-1"> {'}'},</p>
                  <p className="mb-1"> "required": ["id", "name", "email"]</p>
                  <p className="mb-0">{'}'}</p>
                </div>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Security – API User Management
                </h2>
                <p className="mb-4">
                  This is an important element of API management: managing the
                  users of API resources, in terms of what and how much access
                  each user has to the server.
                </p>
                <p className="mb-4">
                  Two most common types are: API Keys and OAuth (client ID &
                  secret key).
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      OAuth
                    </h3>
                    <p className="text-gray-700 mb-3">
                      OAuth is an open protocol for authorization that allows
                      users to share their private resources to a third party.
                      There are two versions: OAuth 1.0 (deprecated) and OAuth
                      2.0 (active) with 2.1 in draft.
                    </p>
                    <p className="text-gray-700">
                      OAuth provides a client with a username and password (aka
                      client ID & secret key) to access server resources in a
                      process called authentication and authorization. OAuth is
                      provisioned with different environments namely sandbox and
                      production.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      API Keys
                    </h3>
                    <p className="text-gray-700 mb-3">
                      An API key is simply a string of alphanumeric code used to
                      identify & authorize an application user. It is often
                      passed in the request header and can be extracted or
                      intercepted by bad actors.
                    </p>
                    <p className="text-gray-700">
                      To protect your users against this loophole, it is
                      advisable to adopt a second layer called IP whitelisting
                      on the network layer of this connection.
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    IP Whitelisting
                  </h3>
                  <p className="mb-4">
                    Creating an IP whitelist for your API key ensures the key is
                    only valid when the API is being accessed from a registered
                    and pre-approved IP address.
                  </p>
                  <p className="mb-0">
                    IP connection whitelisting occurs at two layers of the OSI
                    model i.e the network and application layer. On the network
                    layer, it is important to whitelist the client side IP and
                    port addresses on the server side. Whilst on the application
                    layer, the API user will store & send each request with the
                    API key in the header.
                  </p>
                </div>
                <p className="mb-4">
                  As an Integration PM, you are expected to understand all of
                  the above and then analyze each endpoint, their
                  functionalities, and how it will all fit your business
                  requirements. Once the alignment between business requirement
                  and API feature is completed, then an Integration document
                  should be created and must include certain key elements which
                  are defined under the concepts of integration.
                </p>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Concepts in API Integration
                </h2>
                <p className="mb-4">Key concepts in API integration include:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">
                    User Flow i.e UML, Unified Modeling Language
                  </li>
                  <li className="mb-2">Frontend development</li>
                  <li className="mb-2">Backend development</li>
                  <li className="mb-2">Reconciliation and settlement</li>
                  <li className="mb-2">Commission configuration</li>
                </ul>
                <p className="mb-4">
                  To break these concepts down, let's define a use case.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Use Case: Online Order Management System with Payment
                    Integration
                  </h3>
                  <p className="mb-4">
                    An example could be an online order management system that
                    requires payment acceptance. In this use case, there is a
                    requirement for the integration of a payment service
                    provider. The requirement here is clear and the order
                    management system needs a flow whereby its users can
                    complete a purchase online and receive value.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-blue-900 mb-2">
                        User Flow
                      </h4>
                      <p>
                        Conceptually this can be defined using UML's, to
                        visualize the flow between the user, actions taken, the
                        request and the response involved. I often use
                        flowcharts to communicate user flows to my development
                        team.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-blue-900 mb-2">
                        Frontend Development
                      </h4>
                      <p>
                        In this use case, the first step is to conceptually
                        define how this payment system will flow into your order
                        management user experience. The next step will be to
                        build the UI which essentially defines the scope of the
                        integration. The UX designer must have built a low or
                        high level flow to incorporate both pieces of software
                        to enable a user seamlessly complete a purchase. A front
                        end engineer will bring the design to life by hardcoding
                        and applying each step to its backend endpoints.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-blue-900 mb-2">
                        Backend Development
                      </h4>
                      <p>
                        There is a bit of system design pattern consideration
                        here. Assumption, where the order management system
                        leverages a micro service architecture, the decision to
                        be made will be to develop a payment micro service with
                        a server-less DB. This Server less DB will store all
                        attributes of the payment service provider and connect
                        the order check out directly to the third party service
                        provider (Payment service). This backend integration
                        process is not a one size fits all but is highly
                        adaptable. There are many ways to go about the backend
                        integration depending on the system architecture,
                        dependencies, patterns and other such factors.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-blue-900 mb-2">
                        Reconciliation & Settlement
                      </h4>
                      <p>
                        This essentially describes the checks and balances
                        between two systems. In our use case, payment occurs on
                        the order management system however it is processed by
                        the payment service provider. There are going to be
                        successful, unsuccessful and pending transactions
                        between these two systems and this process has to be
                        defined clearly to enable both parties to understand how
                        to handle these cases efficiently. An example of
                        settlement processes include T + 1 which means
                        settlement happens after a day on all accounts.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-blue-900 mb-2">
                        Commission Configuration
                      </h4>
                      <p>
                        This is not a consideration for all integrations however
                        for our use case it is popular. Automating this process
                        also ties back into the reconciliation and settlement
                        process. Developing the commissions flow into the
                        reconciliation process is key and very important in the
                        case of charge backs, refunds etc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Integrated Platform as a Service (IPaaS)
                </h2>
                <p className="mb-4">
                  A few companies have innovated around integrations for some
                  use cases (ERP Integration, data loading and flow building)
                  thereby birthing the concept of an Integrated platform as a
                  service (IPaaS). The IPaaS enables low code integrations
                  between two pieces of software i.e backend services or server
                  side applications.
                </p>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Key Elements of the IPaaS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className="text-lg font-bold text-blue-900 mb-2">
                      Connectors
                    </h4>
                    <p className="text-gray-700">
                      These are pre-built application instances whereby users
                      can enter a username and password (client ID and secret
                      key) and complete an integration.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className="text-lg font-bold text-blue-900 mb-2">
                      Fields and Mapping
                    </h4>
                    <p className="text-gray-700">
                      This enables each endpoint to be mapped one to one i.e
                      orders will be mapped to inventory between two systems.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className="text-lg font-bold text-blue-900 mb-2">
                      Universal Connectors
                    </h4>
                    <p className="text-gray-700">
                      These are HTTP, RestAPI, GraphQL, webhooks etc.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className="text-lg font-bold text-blue-900 mb-2">
                      API Gateways
                    </h4>
                    <p className="text-gray-700">
                      It acts as an entry point for all client requests to your
                      systems APIs. But also protects your resources against
                      compromise.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg md:col-span-2">
                    <h4 className="text-lg font-bold text-blue-900 mb-2">
                      White Labeling
                    </h4>
                    <p className="text-gray-700">
                      The IPaaS serves as an integration layer which can be used
                      to expose an instance of your software in a multi-tenant
                      type of system.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Conclusion
                </h2>
                <p className="text-lg text-blue-900 mb-4">
                  Technology and innovation are like two peas in a pod. It's
                  best to always keep your ears peeled and constantly rethink
                  the art of software development.
                </p>
                <p className="text-lg text-blue-900 mb-0">
                  Technology development is 60% art and 40% engineering. The art
                  is in imagining and defining how the solution will work, the
                  engineering is in bringing that solution to life.
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
              <img src="/African_businesses.webp" alt="Accepting Payments as an African Business" className="w-full h-40 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Tag className="h-4 w-4 text-blue-900 mr-1" />
                  <span className="text-sm text-blue-900 font-medium">
                    Fintech & Payments
                  </span>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  Accepting Payments as an African Business
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  A comprehensive guide to understanding payment methods in
                  Africa...
                </p>
                <Link to="/blog/accepting-payments" className="text-blue-900 font-medium hover:text-blue-700 transition-colors flex items-center">
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
              integration, and platform strategy delivered straight to your
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