import React from 'react';
import { Calendar, Clock, Tag, ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export function AcceptingPayments() {
  return <main className="flex-grow bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Accepting Payments as an African Business
          </h1>
          <p className="text-xl max-w-3xl mx-auto italic">
            "A guide to understanding payment methods for businesses in Africa"
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
                  <span className="text-sm">June 15, 2022</span>
                </div>
                <div className="flex items-center mr-6 mb-2">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">8 min read</span>
                </div>
                <div className="flex items-center mb-2">
                  <Tag className="h-4 w-4 mr-1" />
                  <span className="text-sm">Fintech & Payments</span>
                </div>
              </div>
              <div className="w-full h-64 md:h-96 mb-8 overflow-hidden rounded-lg">
                <img src="/African_businesses.webp" alt="African businesses accepting digital payments" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="prose max-w-none text-gray-800">
              <p className="text-lg mb-6">
                Over the years, Africa has evolved in terms of payments and how
                businesses accept payments in exchange for the value they create
                for their customers.
              </p>
              <p className="text-lg mb-8">
                In this article, I will try to break down a few payment
                instruments and how they work. The goal is to aid businesses to
                make informed decisions as to how they operate in terms of
                receiving money for the value they create.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Payment Methods Overview
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2 font-bold">•</span>
                    <div>
                      <p className="font-medium">USSD</p>
                      <p className="text-gray-700">
                        Unstructured Supplementary Service Data, the cheapest
                        and most accessible means of making electronic payments
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2 font-bold">•</span>
                    <div>
                      <p className="font-medium">Cards</p>
                      <p className="text-gray-700">
                        Examples include Verve, Mastercard, Visa - the most
                        widely adopted payment method globally
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2 font-bold">•</span>
                    <div>
                      <p className="font-medium">POS</p>
                      <p className="text-gray-700">
                        Works with cards for physical locations and now serves
                        as a 'Bank' for the unbanked
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2 font-bold">•</span>
                    <div>
                      <p className="font-medium">Instant Transfers</p>
                      <p className="text-gray-700">
                        Using Nigeria as a case study, networks built by NIBSS &
                        Interswitch enable fast and seamless P2P transfers
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  USSD - Unstructured Supplementary Service Data
                </h2>
                <div className="flex flex-col md:flex-row gap-8 mb-6">
                  <div className="md:w-1/3">
                    <img src="/USSD_.webp" alt="USSD menu on a mobile phone showing Quickteller services" className="rounded-lg shadow-md w-full h-auto" />
                  </div>
                  <div className="md:w-2/3">
                    <p className="mb-4">
                      Businesses today can accept payments seamlessly leveraging
                      USSD payment channels. The good thing is SMEs/MSMEs do not
                      need to own or build the technology that powers this
                      service. However, businesses can subscribe to these
                      services provided by trusted financial service partners
                      E.g Interswitch *723#, Qrios, etc.
                    </p>
                    <p className="mb-4">
                      For a typical business, all they need do to accept USSD
                      payments is either one of two things: set up with a
                      preferred service partner on how they want to collect
                      payments or ask the provider to build the capacity for
                      their business to accept payments leveraging their
                      technology.
                    </p>
                  </div>
                </div>
                <p className="mb-4">
                  What do you need to have to set up? Well, you need to have a
                  website where the service calls (Please read my article on
                  APIs to understand the different types of API calls) for each
                  transaction to be completed.
                </p>
                <p className="mb-4">
                  However, if you do not have one, then your chosen provider
                  could build you a USSD string with your requirements, these
                  may include:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>The type of payments you will like to collect</li>
                  <li>Your settlement bank, where your profit goes to</li>
                </ul>
                <p className="mb-4">
                  An example of this string would be *723*12# or *723*42#, it
                  could be any number convention depending on what options are
                  available. The first part 723 speaks to the service you are
                  leveraging for your payment (in this instance I used
                  Interswitch's 723 services, which could also be called
                  Quickteller 723 service) and the second is yours, mostly
                  called a subcode.
                </p>
                <p className="mb-4">
                  A typical example is *723# i.e Quickteller (*723#) is for
                  making various types of payments leveraging the Quickteller
                  service. However, a menu like the one shown in the image can
                  be configured for any business that will like to collect
                  payments via USSD.
                </p>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Cards - Mastercard, Visa, and Verve
                </h2>
                <p className="mb-4">
                  Simple examples of card providers are Mastercard, Visa, or the
                  Nigerian brand Verve owned by Interswitch Group.
                </p>
                <p className="mb-4">
                  As Africans, we should take great pride in the feat Verve has
                  achieved, gaining the largest chunk of the market share in
                  Nigeria over Visa and Mastercard.
                </p>
                <p className="mb-4">
                  Cards are often used to complete web/online transactions,
                  however how does this work?
                </p>
                <p className="mb-4">
                  For every card transaction, there is an acquirer, issuer,
                  merchant, bank, aggregator - sometimes an acquirer and
                  aggregator could be the same entity.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Key Players in Card Transactions
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-900 mr-2 font-bold">•</span>
                      <div>
                        <p className="font-medium">Acquirer</p>
                        <p className="text-gray-700">
                          The entity that accepts the transaction from the user
                          (e.g., Paystack, a POS terminal, or an ATM)
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-900 mr-2 font-bold">•</span>
                      <div>
                        <p className="font-medium">Merchant</p>
                        <p className="text-gray-700">
                          The owner of the transaction or the entity collecting
                          the payment
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-900 mr-2 font-bold">•</span>
                      <div>
                        <p className="font-medium">Issuer</p>
                        <p className="text-gray-700">
                          The card provider (Visa, Verve, Mastercard, etc.)
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-900 mr-2 font-bold">•</span>
                      <div>
                        <p className="font-medium">Aggregator</p>
                        <p className="text-gray-700">
                          Where transactions are passed to be completed (e.g.,
                          Interswitch in Nigeria)
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-900 mr-2 font-bold">•</span>
                      <div>
                        <p className="font-medium">Bank</p>
                        <p className="text-gray-700">
                          The entity that issues cards to its customers
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <p className="mb-4">
                  This means as a user, your transaction on Paystack or
                  Quickteller business (payment processor) goes to an aggregator
                  like Interswitch to be completed and then comes back to your
                  dashboard as a successful transaction. This may seem like a
                  lot, however I assure you it all happens within those few
                  seconds your browser loads or reloads after you must have
                  entered card details and pin.
                </p>
                <p className="mb-4">
                  What this means is for every transaction done, every one of
                  these entities gets paid an agreed amount.
                </p>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  POS - Point of Sale Devices
                </h2>
                <p className="mb-4">
                  POS is primarily a device used at physical locations by
                  businesses to accept payments. However, there are more use
                  cases now like Agency banking but for the sake of the topic
                  above, let's stick to how it is used as a method for accepting
                  payments.
                </p>
                <p className="mb-4">
                  Reckon, I mentioned an Acquirer could be the aggregator as
                  well, yes. For example, Interswitch is an African unicorn with
                  various businesses positioned in different levels of the value
                  chain of a card transaction or any electronic transaction
                  hence could be the owner of a POS device, could own the card
                  (Verve), also aggregate the transaction as the Interswitch
                  payment gateway.
                </p>
                <p className="mb-4">
                  Interswitch has a merchant acquiring business called
                  Quickteller business, this aids business owners to create
                  websites or storefronts, collect payments, manage
                  transactions, etc. for Free.
                </p>
              </div>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Instant Transfers - Powered by NIBSS and Interswitch
                </h2>
                <p className="mb-4">
                  For every transfer done from a bank account to another, there
                  is a middle man who facilitates this. The service or middleman
                  is called "Transfer Service" primarily started by NIBSS. Along
                  the way, Interswitch also came into this space, enabling
                  instant transfers across all banks.
                </p>
                <p className="mb-4">
                  All settlements are typically done (T+1), which means your
                  bank will receive settlement a day later. Essentially, all
                  banks typically have accounts or positions with each other
                  where money moves whenever a customer transaction triggers it,
                  which is why you receive instant credit. The settlement
                  happens later behind the scenes, and this speaks to how far we
                  have gone in terms of our payment infrastructure in Nigeria.
                </p>
                <p className="mb-4">
                  This type of payment is widely adopted by various small
                  businesses as it has less cost to the business. Customers tend
                  to always want to use this method as well as it is also
                  convenient for them. However, businesses must beware of bad
                  actors and begin to adopt tools that mitigate these risks,
                  like payment links. You can create these for free on
                  Quickteller business, Prospa, Flutterwave, or Paystack.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Conclusion
                </h2>
                <p className="text-lg text-blue-900 mb-4">
                  Every business has its model, and its business plan captures a
                  target market. Find a method of collecting payments that is
                  simple & easy. As a merchant, it is also important to select
                  what payment method is affordable and has low risk to your
                  business efficiency, also mitigate the risk of doing business
                  with bad actors.
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
              <img src="/IMG_2306.png" alt="Designing Internal Developer Platforms" className="w-full h-40 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Tag className="h-4 w-4 text-blue-900 mr-1" />
                  <span className="text-sm text-blue-900 font-medium">
                    Platform Strategy
                  </span>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  Designing Internal Developer Platforms
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Key considerations and implementation strategies for building
                  platforms...
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
              Get the latest articles, insights, and resources on fintech,
              payments, and business strategy delivered straight to your inbox.
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