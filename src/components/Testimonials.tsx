import React from 'react';
import { Quote } from 'lucide-react';
export function Testimonials() {
  const testimonials = [{
    quote: "Tochukwu's strategic approach to API governance transformed how our organization thinks about platform development.",
    author: 'Jane Smith',
    position: 'CTO, Enterprise Solutions'
  }, {
    quote: 'Working with Tochukwu helped us scale our platform team and establish clear governance practices that accelerated our growth.',
    author: 'Michael Johnson',
    position: 'VP of Engineering, TechCorp'
  }, {
    quote: 'His unique perspective on API-first digital transformation provided the framework we needed to modernize our systems.',
    author: 'Sarah Williams',
    position: 'Director of Product, InnovateHub'
  }];
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
          WHAT PEOPLE SAY
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-gray-50 p-8 rounded-lg border border-gray-100 relative">
              <Quote className="h-10 w-10 text-blue-200 absolute -top-4 -left-4" />
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <h4 className="font-bold text-blue-900">
                  {testimonial.author}
                </h4>
                <p className="text-gray-600 text-sm">{testimonial.position}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}