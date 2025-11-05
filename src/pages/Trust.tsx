import React, { useState } from 'react';
import { Heart, BookOpen, GraduationCap, Award, Users, Mail, Linkedin, Calendar, MapPin, ExternalLink, ChevronRight, CheckCircle, FileText, Clock, ChevronDown, Upload, Quote } from 'lucide-react';
export function Trust() {
  const [courseDropdownOpen, setCourseDropdownOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const courseOptions = ['Product Management', 'Financial Analysis', 'Data Analysis', 'Software Engineering', 'Management Consulting', 'Investment Banking', 'Product Design'];
  const toggleCourseDropdown = () => {
    setCourseDropdownOpen(!courseDropdownOpen);
  };
  const selectCourse = course => {
    setSelectedCourse(course);
    setCourseDropdownOpen(false);
  };
  return <main className="flex-grow bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            THE NWA AMAKA SCHOLARSHIP FUND
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Empowering individuals to acquire digital skills and create positive
            impact in their communities
          </p>
          <div className="flex justify-center">
            <a href="#apply" className="bg-white text-blue-900 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors mx-2">
              Apply Now
            </a>
            <a href="#eligibility" className="bg-transparent border border-white text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors mx-2">
              Learn More
            </a>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">ABOUT US</h2>
            <p className="text-lg text-gray-700 mb-8">
              The Nwa Amaka Scholarship Fund aims to empower individuals from
              all levels to take their lives into their own hands. Our funding
              supports those who desire to acquire or improve their digital
              skills. As our vision is to shine the light on African talent, the
              fund is open to those of Nigerian descent at home or abroad -
              please see the eligibility criteria for further details.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              The Nwa Amaka Scholarship Fund will award scholarships to up to 10
              applicants every half year. This funding is towards specific
              schools, that offer places based on the chosen course, each
              scholar will be paired with a career mentor. Our mission is to
              create a positive ripple effect by empowering individuals
              committed to lifting others as they rise in their communities.
            </p>
            <div className="flex justify-center">
              <img src="/image.png" alt="The Nwamaka Achebe Trust Logo" className="h-64 w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>
      {/* My Why Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
              MY WHY
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <img src="/Facetune_15-02-2025-13-25-23.jpg" alt="Tochii Achebe" className="w-full h-auto rounded-lg shadow-sm" />
                  <div className="mt-4 text-center">
                    <h3 className="font-bold text-blue-900">Tochukwu Achebe</h3>
                    <p className="text-gray-600">Founder</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-700 mb-4">
                    After graduating from university with a degree in Computer
                    Science, I joined my family business. Although it was a
                    valuable experience, I quickly felt stagnant and realized I
                    needed to acquire new skills to thrive in the evolving job
                    market.
                  </p>
                  <p className="text-gray-700 mb-4">
                    At that time, my church, The Elevation Church Lekki, hosted
                    a career fair that opened doors for me to meet industry
                    experts in the tech field. Though I had a background in
                    computer science, I soon realized I wasn't fully equipped
                    for the market. Fortunately, the church also offered free
                    courses in Project Management and early career skill
                    acquisition.
                  </p>
                  <p className="text-gray-700 mb-4">
                    These courses were pivotal for me. Armed with new knowledge,
                    I applied for a job, where I boldly asked not for a salary,
                    but for the opportunity to learn and grow. That job marked
                    the turning point in my career, and the rest, as they say,
                    is history.
                  </p>
                  <p className="text-gray-700 font-medium">
                    For me, this fund symbolizes two things: paying it forward
                    and honoring my mother. Through it, I hope to help others
                    find their own path to growth and success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Eligibility Section */}
      <section id="eligibility" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            ELIGIBILITY CRITERIA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <div className="bg-blue-900 text-white h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                NIGERIAN DESCENT
              </h3>
              <p className="text-gray-700">
                Applicants must be of Nigerian descent, whether living in
                Nigeria or abroad.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <div className="bg-blue-900 text-white h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                COMMUNITY IMPACT
              </h3>
              <p className="text-gray-700">
                A solid drive to make a positive impact on their communities.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <div className="bg-blue-900 text-white h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                DIGITAL SKILLS
              </h3>
              <p className="text-gray-700">
                Demonstrate a strong desire to acquire and improve digital
                skills.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-blue-900 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">OUR VISION</h3>
              <p className="text-xl mb-0">
                To shine the light on African Talent.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
            SCHOLAR TESTIMONIALS
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md relative">
                <Quote className="h-10 w-10 text-blue-200 absolute -top-4 -left-4" />
                <div className="flex flex-col items-center mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    <img src="/IMG_8840.jpg" alt="Jedida" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">JEDIDA</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  In February 2024, I received a scholarship from the Nwa Amaka
                  Trust for a product management course. This opportunity
                  provided me with practical skills that have significantly
                  shaped my career. The insights I gained through the course
                  directly contributed to me securing my current role as a
                  Product manager at Basik technologies.
                </p>
                <p className="text-gray-700 font-medium">
                  I am incredibly grateful to the foundation for this support,
                  as it has empowered me to advance in my professional journey
                  with confidence and expertise.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md relative">
                <Quote className="h-10 w-10 text-blue-200 absolute -top-4 -left-4" />
                <div className="flex flex-col items-center mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    <img src="/IMG_56DF32128CF8-1.jpg" alt="Chibuzo" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">CHIBUZO</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Firstly, I would like to thank the Nwa Amaka Achebe Trust for
                  offering me a scholarship in API product management. The
                  knowledge acquired has been instrumental in not just improving
                  my API knowledge, but made me an API subject matter expert in
                  Product design during the development of our HRTech product,
                  VolutHR as well as revamp of other products.
                </p>
                <p className="text-gray-700 font-medium">
                  I am eternally grateful for the opportunity and I hope to pass
                  on the knowledge and impact others in the near future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cohort Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            COHORT INFORMATION
          </h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 mb-8 text-center">
              This Scholarship happens twice a year
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="border-l-4 border-gray-300 pl-6 py-4">
                <div className="flex items-center mb-2">
                  <Calendar className="h-6 w-6 text-gray-400 mr-3" />
                  <h3 className="text-xl font-bold text-gray-400">
                    Cohort Two
                  </h3>
                </div>
                <p className="text-gray-500 mb-2">Jan-Feb 2025</p>
                <span className="inline-block bg-gray-200 text-gray-600 text-sm px-3 py-1 rounded-full">
                  Closed
                </span>
              </div>
              <div className="border-l-4 border-blue-900 pl-6 py-4">
                <div className="flex items-center mb-2">
                  <Calendar className="h-6 w-6 text-blue-900 mr-3" />
                  <h3 className="text-xl font-bold text-blue-900">
                    Cohort Three
                  </h3>
                </div>
                <p className="text-gray-700 mb-2">Jul-August 2025</p>
                <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                  General
                </span>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg font-medium text-blue-900">
                Cohort Two is now complete, and we are excited to launch Cohort
                Three from July to August 2025.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Application Process */}
      <section id="apply" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            APPLICATION PROCESS
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-xl font-bold text-blue-900 mb-6">
                Required Documents
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FileText className="h-6 w-6 text-blue-900 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">
                      Official transcripts from your academic institutions
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FileText className="h-6 w-6 text-blue-900 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">
                      A letter of recommendation
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FileText className="h-6 w-6 text-blue-900 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">
                      Essay (under 350 words) addressing the following
                      questions:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-700">
                      <li>
                        Describe your current job role and any other relevant
                        activities or experiences.
                      </li>
                      <li>
                        What did you study, and how does it relate to your
                        career or goals?
                      </li>
                      <li>
                        If your current career is unrelated to your studies,
                        please explain what led you into this field.
                      </li>
                      <li>
                        How do you contribute to your local community or society
                        at large?
                      </li>
                      <li>
                        Based on market trends, why are you interested in taking
                        the course you have chosen?
                      </li>
                      <li>
                        What do you hope to achieve with the skills you will
                        acquire?
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-md mb-12">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                  APPLICATION FORM
                </h3>
                <form action="https://formspree.io/f/contact@tochukwuachebe.com" method="POST" className="space-y-6">
                  <div>
                    <label className="block text-gray-800 font-medium mb-1">
                      Name{' '}
                      <span className="text-sm text-gray-500">(required)</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 text-sm mb-1">
                          First Name
                        </label>
                        <input type="text" name="firstName" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent" />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-1">
                          Last Name
                        </label>
                        <input type="text" name="lastName" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-800 font-medium mb-1">
                      Email{' '}
                      <span className="text-sm text-gray-500">(required)</span>
                    </label>
                    <input type="email" name="email" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-gray-800 font-medium mb-1">
                      Phone{' '}
                      <span className="text-sm text-gray-500">(required)</span>
                    </label>
                    <input type="tel" name="phone" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-gray-800 font-medium mb-1">
                      What type of course will you like to be supported with{' '}
                      <span className="text-sm text-gray-500">(required)</span>
                    </label>
                    <p className="text-sm text-gray-600 mb-2">
                      These courses can be short or medium term
                    </p>
                    <div className="relative">
                      <div className="w-full border border-gray-300 rounded-md px-4 py-2 flex justify-between items-center cursor-pointer bg-white" onClick={toggleCourseDropdown}>
                        <span className={selectedCourse ? 'text-gray-800' : 'text-gray-400'}>
                          {selectedCourse || 'Select an option'}
                        </span>
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      </div>
                      {courseDropdownOpen && <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                          {courseOptions.map((course, index) => <div key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => selectCourse(course)}>
                              {course}
                            </div>)}
                        </div>}
                      <input type="hidden" name="courseType" value={selectedCourse} required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-800 font-medium mb-1">
                      Essay{' '}
                      <span className="text-sm text-gray-500">(required)</span>
                    </label>
                    <p className="text-sm text-gray-600 mb-2">
                      No more than 250 words (Disqualification criteria)
                    </p>
                    <textarea name="essay" required rows="6" maxLength="2500" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"></textarea>
                  </div>
                  <div>
                    <label className="block text-gray-800 font-medium mb-1">
                      Supporting Documents
                    </label>
                    <div className="border border-dashed border-gray-300 rounded-md p-6 text-center">
                      <input type="file" name="supportingDocuments" id="file-upload" className="hidden" />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <div className="flex flex-col items-center justify-center">
                          <Upload className="h-10 w-10 text-gray-400 mb-2" />
                          <p className="text-blue-900 font-medium">
                            Add a File
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            (Transcripts, recommendation letter, etc.)
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="pt-4">
                    <button type="submit" className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors font-medium">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="bg-blue-900 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">READY TO APPLY?</h3>
              <p className="text-lg mb-6">
                Applications for Cohort Three will open in July 2025. Join us in
                our mission to empower the next generation of digital talent.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#apply" className="bg-white text-blue-900 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors font-bold">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            IMPACT SO FAR
          </h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-blue-900 mb-2">20+</div>
                <p className="text-lg text-gray-700">Scholars Supported</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-blue-900 mb-2">2</div>
                <p className="text-lg text-gray-700">Successful Cohorts</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-900 text-center mb-6">
              CONTACT US
            </h3>
            <p className="text-gray-700 text-center mb-8">
              Have questions about the Nwa Amaka Scholarship Fund? We'd love to
              hear from you.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <a href="mailto:contact@tochukwuachebe.com" className="flex items-center bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors">
                <Mail className="h-5 w-5 mr-2" />
                <span>Email Us</span>
              </a>
              <a href="https://www.linkedin.com/in/tochiii/" className="flex items-center border border-blue-900 text-blue-900 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 mr-2" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>;
}