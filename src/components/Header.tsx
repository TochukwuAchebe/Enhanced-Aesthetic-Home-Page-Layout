import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Linkedin, Menu, X } from 'lucide-react';
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  return <>
      <header className="w-full border-b border-gray-200 bg-white relative z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center" onClick={closeMobileMenu}>
              <span className="text-2xl font-bold text-blue-900">TA</span>
              <span className="text-2xl font-bold text-blue-900 mx-1">|</span>
              <span className="text-xl font-semibold text-blue-900">
                Tochii Achebe
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
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
                <NavLink to="/fellowship" className={({
                isActive
              }) => isActive ? 'text-blue-900 font-semibold' : 'text-gray-700 hover:text-blue-900 transition-colors'}>
                  Fellowship
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

          {/* Desktop Contact Links */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="mailto:contact@tochukwuachebe.com" className="flex items-center text-gray-700 hover:text-blue-900 transition-colors">
              <Mail className="h-5 w-5 mr-1" />
              <span>Email</span>
            </a>
            <a href="https://www.linkedin.com/in/tochiii/" className="flex items-center text-gray-700 hover:text-blue-900 transition-colors">
              <Linkedin className="h-5 w-5 mr-1" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="lg:hidden p-2 text-blue-900 hover:bg-gray-100 rounded-md transition-colors" aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{
      top: '73px'
    }}>
        <nav className="h-full overflow-y-auto">
          <ul className="flex flex-col py-8">
            <li className="border-b border-gray-100">
              <NavLink to="/" onClick={closeMobileMenu} className={({
              isActive
            }) => `block px-6 py-4 text-lg ${isActive ? 'text-blue-900 font-semibold bg-blue-50' : 'text-gray-700'}`}>
                Home
              </NavLink>
            </li>
            <li className="border-b border-gray-100">
              <NavLink to="/about" onClick={closeMobileMenu} className={({
              isActive
            }) => `block px-6 py-4 text-lg ${isActive ? 'text-blue-900 font-semibold bg-blue-50' : 'text-gray-700'}`}>
                About
              </NavLink>
            </li>
            <li className="border-b border-gray-100">
              <NavLink to="/blog" onClick={closeMobileMenu} className={({
              isActive
            }) => `block px-6 py-4 text-lg ${isActive ? 'text-blue-900 font-semibold bg-blue-50' : 'text-gray-700'}`}>
                Blog
              </NavLink>
            </li>
            <li className="border-b border-gray-100">
              <NavLink to="/creator" onClick={closeMobileMenu} className={({
              isActive
            }) => `block px-6 py-4 text-lg ${isActive ? 'text-blue-900 font-semibold bg-blue-50' : 'text-gray-700'}`}>
                Learn with Tochii
              </NavLink>
            </li>
            <li className="border-b border-gray-100">
              <NavLink to="/fellowship" onClick={closeMobileMenu} className={({
              isActive
            }) => `block px-6 py-4 text-lg ${isActive ? 'text-blue-900 font-semibold bg-blue-50' : 'text-gray-700'}`}>
                Fellowship
              </NavLink>
            </li>
            <li className="border-b border-gray-100">
              <NavLink to="/resume" onClick={closeMobileMenu} className={({
              isActive
            }) => `block px-6 py-4 text-lg ${isActive ? 'text-blue-900 font-semibold bg-blue-50' : 'text-gray-700'}`}>
                Resume
              </NavLink>
            </li>
            <li className="border-b border-gray-100">
              <NavLink to="/trust" onClick={closeMobileMenu} className={({
              isActive
            }) => `block px-6 py-4 text-lg ${isActive ? 'text-blue-900 font-semibold bg-blue-50' : 'text-gray-700'}`}>
                The Nwamaka Achebe Trust
              </NavLink>
            </li>
          </ul>

          {/* Mobile Contact Section */}
          <div className="px-6 py-8 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Contact
            </h3>
            <div className="space-y-4">
              <a href="mailto:contact@tochukwuachebe.com" className="flex items-center text-gray-700 hover:text-blue-900 transition-colors">
                <Mail className="h-5 w-5 mr-3" />
                <span>Email</span>
              </a>
              <a href="https://www.linkedin.com/in/tochiii/" className="flex items-center text-gray-700 hover:text-blue-900 transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 mr-3" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Overlay backdrop when menu is open */}
      {mobileMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={closeMobileMenu} style={{
      top: '73px'
    }} />}
    </>;
}