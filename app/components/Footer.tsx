
import Link from "next/link";
import React from "react";

// import { AiFillTwitterCircle } from "react-icons/ai";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { IoLogoGithub } from "react-icons/io";
export default function Footer() {
  return (
    <footer className="relative mt-40 bg-white text-black px-6 sm:px-10 md:px-20 lg:px-44 py-10">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-16">
        <div>
        <div className="flex items-center  text-2xl font-bold -ml-16 gap-1">
            <span className="bg-gradient-to-r from-[#22b9ff] to-[#58a8c7] text-transparent bg-clip-text"> [The  </span>
            <span className="bg-gradient-to-r from-[#85b5cd] to-[#9396c4] text-transparent bg-clip-text">BLOGS  </span>
            <span className="bg-gradient-to-r from-[#22bdff] to-[#5a8eca] text-transparent bg-clip-text">ARCHITECT]</span>
          </div>
  
          <div className="flex gap-3 mt-6">
            <Link href="#" target="_blank">
            {/* <AiFillTwitterCircle /> */}
            </Link>
            <Link href="#" target="_blank">
             
              {/* <FaFacebook /> */}
            </Link>
            <Link href="#" target="_blank">
              
              {/* <FaInstagramSquare /> */}
            </Link>
            <Link href="#" target="_blank">
             
              {/* <IoLogoGithub /> */}
            </Link>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-lg font-bold">Company</h4>
          <ul className="mt-4 text-gray-600 space-y-2">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h4 className="text-lg font-bold">Help</h4>
          <ul className="mt-4 text-gray-600 space-y-2">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* FAQ Links */}
        <div>
          <h4 className="text-lg font-bold">FAQ</h4>
          <ul className="mt-4 text-gray-600 space-y-2">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Order</li>
            <li>Payment</li>
            <li>Status</li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h4 className="text-lg font-bold">Resources</h4>
          <ul className="mt-4 text-gray-600 space-y-2">
            <li>Free Books</li>
            <li>Development Tutorials</li>
            <li>How-to Blogs</li>
            <li>YouTube Playlist</li>
          </ul>
         
        </div>
      </div>

     
      <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center  text-pink-500 hover:text-pink-500 transition-colors duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-8 w-8"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.756 0 8.333.015 7.052.072c-1.414.064-2.68.355-3.72 1.396C2.292 2.475 2 3.742 1.938 5.156.81 7.74.81 16.26 1.938 18.844c.062 1.414.354 2.68 1.394 3.72 1.04 1.04 2.306 1.332 3.72 1.394 1.584.128 9.104.128 10.688 0 1.414-.062 2.68-.354 3.72-1.394 1.04-1.04 1.332-2.306 1.394-3.72.128-1.584.128-9.104 0-10.688-.062-1.414-.354-2.68-1.394-3.72C20.032.43 18.766.138 17.352.072 16.071.015 15.644 0 12 0zm0 5.838c-3.403 0-6.162 2.76-6.162 6.162 0 3.403 2.76 6.162 6.162 6.162 3.403 0 6.162-2.76 6.162-6.162 0-3.403-2.76-6.162-6.162-6.162zm0 10.324c-2.295 0-4.162-1.867-4.162-4.162s1.867-4.162 4.162-4.162 4.162 1.867 4.162 4.162-1.867 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
      </svg>
    </a>
    <a
      href="https://github.com"
      target="_blank"
      rel="noopener noreferrer"
      className=" flex justify-center text-black hover:text-black transition-colors duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-8 w-8"
      >
        <path d="M12 0C5.371 0 0 5.371 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577 0-.285-.011-1.04-.017-2.041-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.809 1.304 3.494.997.108-.774.419-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.469-2.381 1.236-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.455 11.455 0 013.006-.404c1.02.005 2.046.138 3.005.404 2.292-1.552 3.299-1.23 3.299-1.23.653 1.653.242 2.873.118 3.176.769.841 1.235 1.912 1.235 3.222 0 4.608-2.804 5.623-5.476 5.921.431.372.815 1.103.815 2.222 0 1.606-.015 2.899-.015 3.293 0 .319.192.694.801.577C20.565 21.796 24 17.302 24 12c0-6.629-5.371-12-12-12z" />
      </svg>
    </a>
    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className=" flex justify-center text-blue-500 hover:text-blue-700 transition-colors duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-8 w-8"
      >
        <path d="M22.23 0H1.77C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.729V1.729C24 .774 23.208 0 22.23 0zM7.07 20.452H3.64V9.036h3.43v11.416zm-1.715-13.08c-1.1 0-1.988-.897-1.988-2.003 0-1.105.888-2.003 1.988-2.003s1.988.898 1.988 2.003c0 1.106-.888 2.003-1.988 2.003zM20.452 20.452h-3.43v-5.603c0-1.336-.026-3.057-1.863-3.057-1.864 0-2.15 1.454-2.15 2.954v5.706h-3.43V9.036h3.293v1.558h.048c.459-.87 1.582-1.787 3.255-1.787 3.48 0 4.12 2.289 4.12 5.263v6.382z" />
      </svg>
    </a>
    
      <div className="mt-10 border-t border-gray-300"></div>

     
      <div className="mt-6 text-sm text-gray-500">
         <div className="flex space-x-2 my-9">
        
       
      </div>
        &copy; 2024 Seerat Fatima. All rights reserved.
        
      </div>
      <div className="flex justify-end -mt-5 ">
        
   
      
      </div>
    </footer>
  );
}





