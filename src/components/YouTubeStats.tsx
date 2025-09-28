import React from 'react';
import { Youtube, Eye, Clock } from 'lucide-react';
export function YouTubeStats() {
  return <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-6">
            <Youtube className="h-8 w-8 text-red-600 mr-3" />
            <div>
              <h3 className="text-xl font-bold text-blue-900">Tochii</h3>
              <p className="text-gray-600">@Tochiistudio • 3.9k subscribers</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-1">Views</p>
              <div className="flex items-center">
                <Eye className="h-5 w-5 text-blue-900 mr-2" />
                <span className="text-2xl font-bold text-blue-900">34.4K</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-1">Watch time (hours)</p>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-900 mr-2" />
                <span className="text-2xl font-bold text-blue-900">450</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}