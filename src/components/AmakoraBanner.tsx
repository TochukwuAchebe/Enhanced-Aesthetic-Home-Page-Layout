import React, { useState } from 'react';
import { ExternalLink, X, ArrowRight } from 'lucide-react';
export function AmakoraBanner() {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;
  return <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-2xl border-t-4 border-blue-400">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <p className="text-sm md:text-base font-medium">
                  Want to <span className="font-bold">build</span>,{' '}
                  <span className="font-bold">create</span>, and{' '}
                  <span className="font-bold">learn</span> with Tochii?
                </p>
                <a href="https://amakoragroup.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-blue-900 px-4 py-2 rounded-md font-semibold hover:bg-blue-50 transition-all duration-200 hover:scale-105 group w-fit">
                  <span>Join the movement</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
            <button onClick={() => setIsVisible(false)} className="p-2 hover:bg-blue-700 rounded-md transition-colors flex-shrink-0" aria-label="Close banner">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>;
}