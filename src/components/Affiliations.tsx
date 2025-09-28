import React from 'react';
export function Affiliations() {
  return <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="text-center">
            <img src="/pasted-image.png" alt="Stanford Graduate School of Business" className="h-32 mx-auto mb-3" />
            <p className="text-gray-700 font-medium">
              Currently studying at Stanford GSB
            </p>
          </div>
          <div className="text-center">
            <img src="/pt-logo.png" alt="The King's Trust" className="h-32 mx-auto mb-3" />
            <p className="text-gray-700 font-medium">
              Influencing the next generation through The King's Trust
            </p>
          </div>
          <div className="text-center">
            <img src="/9ADCAE90-D24D-4B3B-865C-00A5E58BEB35.png" alt="The Nwamaka Achebe Trust" className="h-32 mx-auto mb-3" />
            <p className="text-gray-700 font-medium">
              Founder, The Nwa-Amaka Achebe Trust
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Currently shaping the future of digital ecosystems while studying at
            Stanford Graduate School of Business, and mentoring the next
            generation through The King's Trust and Founder, The Nwa-Amaka
            Achebe Trust.
          </p>
        </div>
      </div>
    </section>;
}