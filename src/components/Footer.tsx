import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Tochii Achebe
          </h2>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="mailto:contact@tochukwuachebe.com" className="flex items-center text-gray-700 hover:text-blue-900 transition-colors">
              <Mail className="h-5 w-5 mr-1" />
              <span>Email</span>
            </a>
            <a href="https://www.linkedin.com/in/tochiii/" className="flex items-center text-gray-700 hover:text-blue-900 transition-colors">
              <Linkedin className="h-5 w-5 mr-1" />
              <span>LinkedIn</span>
            </a>
          </div>
          <p className="text-gray-600">Contact Me</p>
        </div>
        <div className="text-center text-gray-500 text-sm border-t border-gray-200 pt-6">
          <p>© 2023 Tochii Achebe. All rights reserved.</p>
        </div>
      </div>
    </footer>;
}