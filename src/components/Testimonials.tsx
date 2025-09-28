import React from 'react';
import { Quote } from 'lucide-react';
export function Testimonials() {
  const testimonials = [{
    quote: 'Tochii is an exceedingly talented Pan African technology professional whose steady execution, capacity to innovate and astuteness, has contributed enormously to the industry and the lives of those he has worked with.',
    author: 'Esigie Aguele',
    position: 'CEO, VerifyMe'
  }, {
    quote: 'His unique perspective on product strategy provided the framework we needed to modernize our systems and drive business growth.',
    author: 'Vincent Ogbunude',
    position: 'CEO, Verve International'
  }, {
    quote: 'His talent for building technology solutions and teaching will contribute immensely to any organization, bringing fresh perspectives and diverse expertise.',
    author: 'Tobi Otokiti',
    position: 'Founder, Product Dive'
  }, {
    quote: 'In an organization of over 900 employees, Tochii stood out for his exceptional leadership and ability to build strong relationships across all levels of the organization.',
    author: 'Nnanna Enyi',
    position: 'Principal PM, Amazon'
  }, {
    quote: 'Tochii has a good understanding of new technologies, product architecture, microservices, developing seamless user experiences, and vast knowledge of APIs which were invaluable during our time of working together.',
    author: 'Olufemi Olanipekun',
    position: 'Founder & CEO, VeendHQ'
  }, {
    quote: 'Tochii is a thoughtful, technically grounded, and impact-oriented leader whose blend of technical fluency, strategic thinking, and heart for impact make him exceptional. He consistently leads through influence, mentors teams, and multiplies value for others around him.',
    author: 'Ehia Erhaboh',
    position: 'Founder, AI-IN-Nigeria & UK'
  }];
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
          WHAT PEOPLE SAY
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-gray-50 p-8 rounded-lg border border-gray-100 relative h-full flex flex-col">
              <Quote className="h-10 w-10 text-blue-200 absolute -top-4 -left-4" />
              <p className="text-gray-700 mb-6 italic flex-grow">
                "{testimonial.quote}"
              </p>
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