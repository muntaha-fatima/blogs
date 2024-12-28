
'use client';

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newMode;
    });
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-1">
   
        <div className="flex items-center text-2xl font-bold font-sans  gap-4">
          <span className="bg-gradient-to-r from-[#2b6580] to-[#58a8c7] text-transparent bg-clip-text">
            The
          </span>
          <span className="bg-gradient-to-r from-[#76a7a3] to-[#9396c4] text-transparent bg-clip-text">
            BLOGS
          </span>
          <span className="bg-gradient-to-r from-[#4c8d99] to-[#5a8eca] text-transparent bg-clip-text">
            ARCHITECT
          </span>
        </div>

     
        <button
          className="md:hidden text-2xl text-black dark:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

 
        <div
          className={`absolute md:static top-16 left-0 w-full bg-white dark:bg-gray-900 md:bg-transparent z-50 shadow-lg md:shadow-none transition-all duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden'
          } md:block`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:justify-center space-y-4 md:space-y-0 md:space-x-8 px-6 md:px-0 py-4 md:py-0 ml-28">
            <li className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <a href="/About">About</a>
            </li>
            <li className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <a href="/blog">Blog</a>
            </li>
            <li className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <a href="/Contact">Contact</a>
            </li>
          </ul>
        </div>

  
        <button
          onClick={toggleDarkMode}
          className="ml-0 text-xl text-black dark:text-white focus:outline-none"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? '🌙' : '🌞'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
