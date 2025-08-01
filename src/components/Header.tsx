import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
export function Header() {
  return <header className="w-full border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-900">Tochukwu Achebe</h1>
        <div className="flex items-center space-x-6">
          <a href="mailto:contact@example.com" className="flex items-center text-gray-700 hover:text-blue-900 transition-colors">
            <Mail className="h-5 w-5 mr-1" />
            <span>Email</span>
          </a>
          <a href="https://linkedin.com/in/example" className="flex items-center text-gray-700 hover:text-blue-900 transition-colors">
            <Linkedin className="h-5 w-5 mr-1" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
      <nav className="container mx-auto px-4 py-3">
        <ul className="flex space-x-8 justify-center">
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors">
              Resume
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors">
              The Nwamaka Achebe Trust
            </a>
          </li>
        </ul>
      </nav>
    </header>;
}