import React from 'react';
export function Newsletter() {
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-blue-900 rounded-lg shadow-md p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to My Newsletter
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Get the latest articles, insights, and resources on technology,
            leadership, and personal growth delivered straight to your inbox.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none" />
            <button className="bg-white text-blue-900 font-bold px-6 py-3 rounded-md hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>;
}