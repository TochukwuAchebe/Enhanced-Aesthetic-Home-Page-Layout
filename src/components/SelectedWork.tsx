import React from 'react';
export function SelectedWork() {
  const projects = [{
    title: 'API MANAGEMENT PLATFORM',
    description: 'Built an enterprise solution for managing API lifecycle and governance at scale.',
    image: 'https://via.placeholder.com/600x400/f3f4f6/1e3a8a?text=API+Management'
  }, {
    title: 'CLOUD SERVICES INTEGRATION',
    description: 'Led integration strategy for microservices adoption across multiple cloud vendors.',
    image: 'https://via.placeholder.com/600x400/f3f4f6/1e3a8a?text=Cloud+Integration'
  }, {
    title: 'E-COMMERCE API STRATEGY',
    description: 'Designed scalable API ecosystem for payments and commerce APIs across multiple platforms.',
    image: 'https://via.placeholder.com/600x400/f3f4f6/1e3a8a?text=E-commerce+API'
  }];
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
          SELECTED WORK
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={index} className="group cursor-pointer">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700">{project.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
}