import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Linkedin } from 'lucide-react';
export function Header() {
  return <header className="w-full border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <NavLink to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-900">TA</span>
            <span className="text-2xl font-bold text-blue-900 mx-1">|</span>
            <span className="text-xl font-semibold text-blue-900">
              Tochii Achebe
            </span>
          </NavLink>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <NavLink to="/" className={({
              isActive
            }) => isActive ? 'text-blue-900 font-semibold' : 'text-gray-700 hover:text-blue-900 transition-colors'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({
              isActive
            }) => isActive ? 'text-blue-900 font-semibold' : 'text-gray-700 hover:text-blue-900 transition-colors'}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={({
              isActive
            }) => isActive ? 'text-blue-900 font-semibold' : 'text-gray-700 hover:text-blue-900 transition-colors'}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/creator" className={({
              isActive
            }) => isActive ? 'text-blue-900 font-semibold' : 'text-gray-700 hover:text-blue-900 transition-colors'}>
                Learn with Tochii
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume" className={({
              isActive
            }) => isActive ? 'text-blue-900 font-semibold' : 'text-gray-700 hover:text-blue-900 transition-colors'}>
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink to="/trust" className={({
              isActive
            }) => isActive ? 'text-blue-900 font-semibold' : 'text-gray-700 hover:text-blue-900 transition-colors'}>
                The Nwamaka Achebe Trust
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-6">
          <a href="mailto:achebetochukwu@gmail.com" className="flex items-center text-gray-700 hover:text-blue-900 transition-colors">
            <Mail className="h-5 w-5 mr-1" />
            <span>Email</span>
          </a>
          <a href="https://www.linkedin.com/in/tochiii/" className="flex items-center text-gray-700 hover:text-blue-900 transition-colors">
            <Linkedin className="h-5 w-5 mr-1" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </header>;
}