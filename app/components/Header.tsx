'use client'

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
   
        <div className="flex items-center text-2xl font-bold gap-4">
          <span className="bg-gradient-to-r from-[#22b9ff] to-[#58a8c7] text-transparent bg-clip-text">
            [The
          </span>
          <span className="bg-gradient-to-r from-[#85b5cd] to-[#9396c4] text-transparent bg-clip-text">
            BLOGS
          </span>
          <span className="bg-gradient-to-r from-[#22bdff] to-[#5a8eca] text-transparent bg-clip-text">
            ARCHITECT]
          </span>
        </div>

      
        <div
          className={`md:flex space-x-8 text-black dark:text-white text-lg font-medium ${
            isOpen ? 'block' : 'hidden'
          } md:block`}
        >
          <ul className="flex flex-col md:flex-row md:items-center space-x-4 md:space-y-0">
            <li className="hover:text-blue-500 dark:hover:text-blue-400">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-blue-500 dark:hover:text-blue-400">
              <a href="/About">About</a>
            </li>
            <li className="hover:text-blue-500 dark:hover:text-blue-400">
              <a href="/blog">Blog</a>
            </li>
            <li className="hover:text-blue-500 dark:hover:text-blue-400">
              <a href="/Contact">Contact</a>
            </li>
          </ul>
        </div>

     
        <button
          className="md:hidden text-2xl text-black dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>


        <button
          onClick={toggleDarkMode}
          className="ml-4 text-xl text-black dark:text-white"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? '🌙' : '🌞'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
