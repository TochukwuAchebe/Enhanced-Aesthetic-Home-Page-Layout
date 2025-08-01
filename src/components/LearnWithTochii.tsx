import React from 'react';
export function LearnWithTochii() {
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            LEARN WITH TOCHII
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            My mission is to empower the next generation of creators, product
            builders, and ecosystem leaders— across Africa and the world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="bg-[#002147] text-[#f5e7c8] p-8 rounded-lg">
            <h3 className="text-4xl font-bold mb-6">INSPIRE</h3>
            <p className="text-xl leading-relaxed">
              Find clarity, cultivate conviction, and live fearlessly.
            </p>
          </div>
          <div className="bg-[#002147] text-[#f5e7c8] p-8 rounded-lg">
            <h3 className="text-4xl font-bold mb-6 text-[#f0b429]">EDUCATE</h3>
            <p className="text-xl leading-relaxed">
              Learn technology and systems for the future of work.
            </p>
            <div className="mt-4 text-lg">
              <p>TECHNOLOGY</p>
              <p>ARTIFICIAL INTELLIGENCE</p>
              <p>PRODUCT MANAGEMENT</p>
              <p>APIs</p>
              <p>SYSTEM DESIGN</p>
            </div>
          </div>
          <div className="bg-[#002147] text-[#f5e7c8] p-8 rounded-lg">
            <h3 className="text-4xl font-bold mb-6">EMPOWER</h3>
            <p className="text-xl leading-relaxed">
              Gain access to opportunities to level up and succeed.
            </p>
          </div>
        </div>
        {/* Summary Box */}
        <div className="max-w-4xl mx-auto bg-[#002147] text-[#f5e7c8] p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-3xl font-bold mb-4">
                INSPIRE · EDUCATE · EMPOWER
              </h3>
              <p className="text-xl">
                Through content, community, and platforms, I'm dedicated to
                helping the next generation of leaders find their path and make
                an impact.
              </p>
            </div>
            <div className="flex-shrink-0">
              <img src="/Image.png" alt="Learn with Tochii logo" className="h-24 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>;
}