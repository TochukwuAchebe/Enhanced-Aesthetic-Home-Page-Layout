import React from 'react';
import { Code, Server, Layers, Database, Network, LineChart } from 'lucide-react';
export function Skills() {
  const skills = [{
    icon: <Code className="h-8 w-8 text-blue-900" />,
    title: 'API Design',
    description: 'Creating intuitive, developer-friendly APIs'
  }, {
    icon: <Server className="h-8 w-8 text-blue-900" />,
    title: 'Platform Strategy',
    description: 'Building scalable platform ecosystems'
  }, {
    icon: <Layers className="h-8 w-8 text-blue-900" />,
    title: 'Governance',
    description: 'Implementing effective API governance models'
  }, {
    icon: <Database className="h-8 w-8 text-blue-900" />,
    title: 'Digital Transformation',
    description: 'Leading API-first digital initiatives'
  }, {
    icon: <Network className="h-8 w-8 text-blue-900" />,
    title: 'System Integration',
    description: 'Connecting complex enterprise systems'
  }, {
    icon: <LineChart className="h-8 w-8 text-blue-900" />,
    title: 'Product Leadership',
    description: 'Guiding teams to deliver exceptional products'
  }];
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
          EXPERTISE & CAPABILITIES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-700">{skill.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
}