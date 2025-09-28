import React from 'react';
import { Calendar, Clock, Tag, ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export function StopTheKilling() {
  return <main className="flex-grow bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Stop the Killing, Reform the Police
          </h1>
          <p className="text-xl max-w-3xl mx-auto italic">
            "We refuse to inherit a broken system without challenging it"
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
                  <span className="text-sm">October 20, 2020</span>
                </div>
                <div className="flex items-center mr-6 mb-2">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">4 min read</span>
                </div>
                <div className="flex items-center mb-2">
                  <Tag className="h-4 w-4 mr-1" />
                  <span className="text-sm">Social Justice</span>
                </div>
              </div>
              <div className="w-full h-64 md:h-96 mb-8 overflow-hidden rounded-lg">
                <img src="https://images.unsplash.com/photo-1605857840732-188f2f08cb31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Nigerian protest for social justice with people raising hands" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="prose max-w-none text-gray-800">
              <p className="text-lg mb-6">
                As a Nigerian living in Nigeria, the last few days have been a
                whirlwind of emotions. I know I speak for many young people when
                I say: we are exhausted. We have been angry. We have grieved. We
                have lost lives. And perhaps most painful of all, we have faced
                manipulation from those who should protect us, those trying to
                turn us against one another while ignoring our cries for
                justice.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <p className="mb-0">
                  These are elected officials and law enforcement officers whose
                  duty is to serve and safeguard us. Yet, for far too long, we
                  have experienced the opposite. Instead of protection, we have
                  faced profiling, harassment, false accusations of kidnapping,
                  robbery, and even murder. We have seen peaceful citizens
                  gunned down by the very force meant to defend them.
                </p>
              </div>
              <p className="mb-6">
                But my generation has decided that enough is enough. We refuse
                to inherit a broken system without challenging it. We may not
                have a perfect system in place, some might say we have no system
                at all but that is exactly why we are fighting. We are demanding
                reform from the ground up.
              </p>
              <div className="bg-blue-900 text-white p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  Today, our immediate call is clear:
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <p className="m-0">
                      End the profiling, torture, and killing of young
                      Nigerians.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <p className="m-0">
                      End the culture of fear and abuse that has stained our
                      police force.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <p className="m-0">
                      End SARS. End SWAT. End police brutality. End bad
                      governance in Nigeria.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      A Movement Beyond Youth
                    </h3>
                    <p className="mb-4">
                      This is not just a youth movement. This is not about
                      political affiliation, tribe, or class. As long as you are
                      Nigerian, this is your fight. Our demands, the 5 for 5
                      mandate, are not suggestions; they are the minimum steps
                      needed for justice and accountability. And we will not
                      leave the streets until they are met with concrete,
                      actionable change.
                    </p>
                  </div>
                  <div>
                    <img src="https://images.unsplash.com/photo-1591189824978-43a9e0fc8a00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" alt="African youth advocating for social justice" className="rounded-lg shadow-md w-full h-auto" />
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  The 5 for 5 Demands
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <ol className="list-decimal pl-6 space-y-3">
                    <li className="text-gray-800">
                      <span className="font-medium">
                        Immediate release of all arrested protesters
                      </span>
                    </li>
                    <li className="text-gray-800">
                      <span className="font-medium">
                        Justice for all deceased victims of police brutality and
                        appropriate compensation for their families
                      </span>
                    </li>
                    <li className="text-gray-800">
                      <span className="font-medium">
                        Setting up an independent body to oversee the
                        investigation and prosecution of all reports of police
                        misconduct
                      </span>
                    </li>
                    <li className="text-gray-800">
                      <span className="font-medium">
                        Psychological evaluation and retraining of all disbanded
                        SARS officers before they can be redeployed
                      </span>
                    </li>
                    <li className="text-gray-800">
                      <span className="font-medium">
                        Increase in police salary to compensate for protecting
                        lives and property of citizens
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="mb-8">
                <p className="mb-6">
                  But beyond the chants and placards, we must also protect one
                  another. In this struggle, solidarity means more than showing
                  up, it means looking out for the people beside you, recording
                  events, documenting faces, and closing every gap the forces we
                  face might exploit.
                </p>
                <p className="mb-6">
                  The reforms we seek will come, but only if we double down on
                  our unity and resilience. Our collective voice is far stronger
                  than any single voice. This is the time to brush aside old
                  stereotypes and the divisions we inherited from the past.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <img src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" alt="Nigerian flag representing unity and national identity" className="rounded-lg shadow-md w-full h-auto" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <blockquote className="border-l-4 border-blue-900 pl-4 py-2 italic text-gray-700">
                      <p className="mb-0">
                        "Because more unites us than divides us. Because the
                        mistakes of yesterday must not define tomorrow. Because
                        we owe it to each other, and to the generations yet to
                        come."
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg mb-8 text-center">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Standing Together for Change
                </h3>
                <p className="text-lg text-blue-900 mb-6">
                  The path to reform is not easy, but it is necessary. As we
                  continue to make our voices heard, let us remember that our
                  strength lies in our unity, our determination, and our
                  unwavering belief in a better Nigeria.
                </p>
                <p className="text-xl font-bold text-blue-900">
                  God bless Nigeria 🇳🇬
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
              Get the latest articles, insights, and resources on social
              justice, governance, and personal growth delivered straight to
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