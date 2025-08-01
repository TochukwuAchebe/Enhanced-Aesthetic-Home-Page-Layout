import React from 'react';
export function Affiliations() {
  return <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">AFFILIATED WITH</p>
            <img src="/ECFFC130-8F88-4B72-BBC7-8A6199DF4464.png" alt="Stanford Graduate School of Business" className="h-16 mx-auto" />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">LEADER</p>
            <img src="/57BF87F1-3D59-41BF-9ECB-467F7D592DE1.png" alt="The King's Trust" className="h-16 mx-auto" />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">FOUNDER</p>
            <img src="/57BF87F1-3D59-41BF-9ECB-467F7D592DE1.png" alt="The Nwamaka Achebe Trust" className="h-16 mx-auto" />
          </div>
        </div>
      </div>
    </section>;
}