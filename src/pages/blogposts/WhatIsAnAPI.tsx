import React, { Component } from 'react';
import { Calendar, Clock, Tag, ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export function WhatIsAnAPI() {
  return <main className="flex-grow bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            So what is an API and how can this 10x your business revenue?
          </h1>
          <p className="text-xl max-w-3xl mx-auto italic">
            "Understanding the technology behind successful business
            partnerships"
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
                  <span className="text-sm">March 15, 2021</span>
                </div>
                <div className="flex items-center mr-6 mb-2">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">7 min read</span>
                </div>
                <div className="flex items-center mb-2">
                  <Tag className="h-4 w-4 mr-1" />
                  <span className="text-sm">API Design & Technology</span>
                </div>
              </div>
              <div className="w-full h-64 md:h-96 mb-8 overflow-hidden rounded-lg">
                <img src="/Yellow_Modern_Mathematics_Lecture_Youtube_Thumbnail_%282%29.png" alt="API connections visualized as a network" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="prose max-w-none text-gray-800">
              <p className="text-lg mb-6">
                We hear a lot about partnerships in our ecosystem, one Fintech
                is partnering with the other to provide a new solution and have
                you ever asked how? Or maybe why?
              </p>
              <p className="text-lg mb-8">
                In this article, we will discuss "how" partnerships between two
                totally different companies come to be beyond documents being
                signed, handshakes and pictures posted.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  What is an API?
                </h2>
                <p className="mb-4">
                  The full meaning of an API is Application Programmable
                  Interface, these are a set of clearly defined methods of
                  communication between various software components. Most tech
                  companies build APIs for internal use and for external
                  consumers.
                </p>
                <p className="mb-0">
                  A typical example is your Uber application where you have
                  Google Maps for navigation. Uber and Google are two different
                  companies, however Uber is leveraging Google Maps APIs to
                  service their customers.
                </p>
              </div>
              <div className="mb-12">
                <div className="flex flex-col md:flex-row gap-8 mb-6">
                  <div className="md:w-1/2">
                    <img src="/Yellow_Modern_Mathematics_Lecture_Youtube_Thumbnail_%281%29.png" alt="API integration concept showing connected services" className="rounded-lg shadow-md w-full h-auto" />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      Types of APIs
                    </h3>
                    <p className="mb-4">
                      There are various types of APIs which every company who
                      leverages technology releases. For this article, we will
                      be focusing on APIs for external customers.
                    </p>
                    <p className="mb-0">
                      There are governances, securities and authentications
                      around these APIs as businesses do not want to expose
                      their services to bad actors or targeted malicious agents.
                    </p>
                  </div>
                </div>
                <p className="mb-4">
                  APIs power a front-end (user interface) however they don't
                  necessarily need an interface. There are various platforms for
                  testing and documenting APIs, simple examples include Swagger
                  UI and Postman which can be used to display documentation and
                  test APIs.
                </p>
                <p className="mb-4">For public APIs, they must be:</p>
                <ol className="list-decimal pl-6 mb-6">
                  <li className="mb-2">Well documented</li>
                  <li className="mb-2">Secure</li>
                  <li className="mb-2">Functional</li>
                </ol>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Documentation
                </h2>
                <p className="mb-4">
                  All of these will be useless if there is no proper
                  documentation on how a service or an API works. This
                  documentation includes:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">Quick start guide</li>
                  <li className="mb-2">Authentication information</li>
                  <li className="mb-2">API request types</li>
                  <li className="mb-2">
                    Sample code for popular programming languages
                  </li>
                  <li className="mb-2">Tutorials</li>
                  <li className="mb-2">SDK examples (if available)</li>
                </ul>
                <p className="mb-4">
                  Documentation may be static and interactive. The latter allows
                  for trying out APIs and see return results and usually
                  consists of two columns: human and machine. The human column
                  contains API descriptions, and the machine one has a console
                  to make calls and contains info that clients and servers will
                  be interested in when testing the API.
                </p>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Mode of Authentications
                </h2>
                <p className="mb-4">
                  Publicly available APIs usually have some form of
                  Authentication or Authorization. In most cases, Authenticated
                  requests are differentiated from regular requests via special
                  HTTP header(s) or cookies. These headers or cookies are mostly
                  identifiers that are tied to a particular customer.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="mb-4">
                    <strong>For example:</strong> A company "A" wants to use the
                    API of another company "B". Company B then goes ahead to
                    create an identifier for company A. The possible ways
                    company A can choose to implement this "identifier" varies
                    as different technologies exist for solving such problems
                    like HMAC, JWT, UUID each with its own different way of
                    implementation.
                  </p>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">HTTPS</h3>
                <p className="mb-4">
                  It's the transport protocol (how data is transferred over the
                  internet) with an extra layer of security (SSL). This layer
                  makes data transferred encrypted in a way that only the client
                  and server can understand.
                </p>
                <h3 className="text-xl font-bold text-blue-900 mb-3">URL</h3>
                <p className="mb-4">
                  Stands for a Uniform Resource Locator. It refers to a unique
                  address that is used to locate resources over the internet.
                  Resources could be images, https etc. In this context URL is
                  the address for the API server and would mostly be called
                  "endpoint".
                </p>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  API Request Types
                </h2>
                <p className="mb-4">
                  We use HTTP verbs to perform CRUD operations e.g create, read,
                  update and delete.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      GET Request
                    </h3>
                    <p className="text-gray-700">
                      An HTTP method that's principally used for fetching data.
                      Data can be added to GET request parameters.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      POST Request
                    </h3>
                    <p className="text-gray-700">
                      An HTTP method that's principally used for sending data to
                      the server. For POST requests a "request body" is
                      required.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      PUT or PATCH Request
                    </h3>
                    <p className="text-gray-700">
                      HTTP methods used for updating data on the server. For PUT
                      requests a "request body" is required. N.B:- PUT request
                      completely replaces the resource.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      DELETE Request
                    </h3>
                    <p className="text-gray-700">
                      An HTTP method that's principally used for deleting data
                      on the server.
                    </p>
                  </div>
                </div>
                <p className="mb-4">
                  For every request, there is a response and in API calls there
                  are various types of response formats. We will be looking at
                  the JSON (JavaScript Object Notation) response structure which
                  is supported by REST APIs. REST is the most popular however
                  there are others like SOAP.
                </p>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  REST vs SOAP
                </h2>
                <p className="mb-4">
                  REST is considered a simpler alternative to SOAP, which many
                  developers find difficult to use because it requires writing a
                  lot of code to complete every task and following the XML
                  structure for every message sent. REST follows another logic
                  since it makes data available as resources. Each resource is
                  represented by a unique URL, and one can request this resource
                  by providing its URL.
                </p>
                <p className="mb-4">
                  Web APIs that comply with REST architectural constraints are
                  called RESTful APIs. These APIs use HTTP requests (AKA methods
                  or verbs) to work with resources: GET, PUT, HEAD, POST, PATCH,
                  CONNECT, TRACE, OPTIONS and DELETE.
                </p>
                <p className="mb-4">
                  RESTful systems support messaging in different formats, such
                  as plain text, HTML, YAML, XML, and JSON, while SOAP only
                  allows XML. The ability to support multiple formats for
                  storing and exchanging data is one of the reasons REST is a
                  prevailing choice for building public APIs these days.
                </p>
                <p className="mb-4">
                  JavaScript Object Notation (JSON) is a lightweight and
                  easy-to-parse text format for data exchange. Each JSON file
                  contains collections of name or value pairs and ordered lists
                  of values. Since these are universal data structures, the
                  format can be used with any programming language.
                </p>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Example of API Request and Response
                </h2>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
                  <p className="mb-2"> // GET Request Example</p>
                  <p className="mb-0">GET https://api.example.com/users/123</p>
                </div>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
                  <p className="mb-2"> // JSON Response Example</p>
                  <p className="mb-1">{'{'}</p>
                  <p className="mb-1"> "id": 123,</p>
                  <p className="mb-1"> "name": "John Doe",</p>
                  <p className="mb-1"> "email": "john@example.com",</p>
                  <p className="mb-1"> "status": "active"</p>
                  <p className="mb-0">{'}'}</p>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Base URL
                </h3>
                <p className="mb-4">
                  This refers to the URL from which other endpoints on an API
                  can be derived from. E.g
                </p>
                <p className="mb-4">
                  Considering the URL "https://findme.com/10001", the base URL
                  is "https://findme.com" as other endpoints like
                  "https://findme.com/user/profile", "https://findme.com/all"
                  can be derived from it. For the endpoints described,
                  "/user/profile" and "/all" are said to be paths.
                </p>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  HTTP Status Codes
                </h3>
                <p className="mb-4">
                  These are standard numbers that are generally used to know the
                  nature of the response returned from the server. E.g A
                  response returned from an API with status "400" means that the
                  data sent to the server was bad i.e "Bad Request", "200" means
                  request sent was ok i.e "OK".
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <p className="font-bold text-green-800">200 OK</p>
                    <p className="text-sm text-green-700">Request successful</p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                    <p className="font-bold text-red-800">400 Bad Request</p>
                    <p className="text-sm text-red-700">
                      Invalid request format
                    </p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                    <p className="font-bold text-red-800">401 Unauthorized</p>
                    <p className="text-sm text-red-700">
                      Authentication required
                    </p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                    <p className="font-bold text-red-800">403 Forbidden</p>
                    <p className="text-sm text-red-700">
                      No permission to resource
                    </p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                    <p className="font-bold text-red-800">404 Not Found</p>
                    <p className="text-sm text-red-700">
                      Resource doesn't exist
                    </p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                    <p className="font-bold text-red-800">500 Server Error</p>
                    <p className="text-sm text-red-700">Server-side failure</p>
                  </div>
                </div>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  How APIs Can 10x Your Business Revenue
                </h2>
                <p className="mb-4">
                  For businesses who aim to grow, or to 10x your revenue, the
                  most notable path from this article is collaboration. Some
                  services would take months or years to build, however there
                  are companies who have these today. The onus is on business
                  owners, developers, product managers to think outside the box
                  around various services and confirm that their business
                  licenses are in order to resell those services (if yes, go
                  ahead to request APIs from said company).
                </p>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Benefits of API Integration
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-900 mr-2 font-bold">•</span>
                      <div>
                        <p className="font-medium">Faster Time to Market</p>
                        <p className="text-gray-700">
                          Leverage existing services instead of building from
                          scratch
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-900 mr-2 font-bold">•</span>
                      <div>
                        <p className="font-medium">New Revenue Streams</p>
                        <p className="text-gray-700">
                          Monetize your own APIs or create value-added services
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-900 mr-2 font-bold">•</span>
                      <div>
                        <p className="font-medium">
                          Enhanced Customer Experience
                        </p>
                        <p className="text-gray-700">
                          Provide integrated services that solve more customer
                          problems
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-900 mr-2 font-bold">•</span>
                      <div>
                        <p className="font-medium">Strategic Partnerships</p>
                        <p className="text-gray-700">
                          Create mutually beneficial relationships with
                          complementary businesses
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Conclusion
                </h2>
                <p className="text-lg text-blue-900 mb-4">
                  For every partnership within the Fintech space or between two
                  software companies, there are various API calls behind the
                  scenes delivering the user experience the end-user consumes
                  and also comes to love. A perfect example is watching YouTube
                  videos on your Twitter timeline, paying your cable TV bills on
                  bank applications, or even accessing this Medium post from
                  various platforms.
                </p>
                <p className="text-lg text-blue-900 mb-0">
                  To improve our way of life, we need to build software that
                  makes living easier and collaborate when or where there are
                  opportunities to foster business growth.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-8 mt-12">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Share this article
                </h3>
                <div className="flex space-x-4">
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent('So what is an API and how can this 10x your business revenue?')}`} target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">
                    Share on LinkedIn
                  </a>
                  <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent('So what is an API and how can this 10x your business revenue?')}`} target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">
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
              platform strategy, and business growth delivered straight to your
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