

'use client';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="font-sans ">
      <header className="text-center py-10 px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-2xl font-bold  dark:text-white">
          The Future of AI and the Programming Languages Powering It
        </h1>

        <div className="relative mx-auto mt-8 w-full sm:w-[700px] h-[300px]">
          <Image
            src="/image/depositphotos_706100080-stock-illustration-colorful-neon-light-purple-blue.jpg"
            alt="AI technology"
            layout="fill" 
            objectFit="cover"
            className="rounded-lg" 
          />
          <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-1xl sm:text-3xl font-semibold text-center">
            <h1 className="text-base sm:text-base lg:text-base lg:mb-4">
              AI in the Future: Exploring how languages from HTML to Python are shaping the AI landscape.
            </h1>
            <Link href="blog">
              <button className="bg-white text-base sm:text-lg px-7 py-3 rounded-full font-bold text-black">
                Explore Blogs
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
  
        <div className="bg-[#1d1375] text-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#fffbfb] mb-4">
            The Evolution of Programming Languages in AI
          </h2>
          <p className="text-sm sm:text-base lg:text-lg">
            Programming languages like HTML, CSS, and JavaScript have evolved to support the growing needs of AI. Today, languages like Python, R, and TypeScript are at the forefront of AI development.
          </p>
        </div>

        <div className="bg-[#1d1375] text-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#fffbfb] mb-4">
            HTML, CSS, and TypeScript: The Foundations of AI Web Development
          </h2>
          <p className="text-sm sm:text-base lg:text-lg">
            While HTML and CSS are essential for structuring web pages, TypeScript enhances JavaScript by adding static typing, making it ideal for building robust AI-driven web applications.
          </p>
        </div>

        
        <div className="bg-[#1d1375] text-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#fffbfb] mb-4">
            Next.js: Powering AI-driven Web Apps
          </h2>
          <p className="text-sm sm:text-base lg:text-lg">
            Next.js offers a modern framework that enables server-side rendering and static site generation, perfect for AI-driven web applications that require seamless integration with APIs.
          </p>
        </div>


        <div className="bg-[#1d1375] text-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#fffbfb] mb-4">
            Python: The Backbone of AI Programming
          </h2>
          <p className="text-sm sm:text-base lg:text-lg">
            Python is the most widely used language in AI development, thanks to its rich ecosystem of libraries like TensorFlow and PyTorch that simplify the creation of AI models.
          </p>
        </div>

 
        <div className="bg-[#1d1375] text-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#fffbfb] mb-4">
            Global Trends in Programming Languages for AI
          </h2>
          <p className="text-sm sm:text-base lg:text-lg">
            Languages like Python and Rust are gaining popularity for their efficiency in handling complex computations, making them essential in the development of AI applications.
          </p>
        </div>


        <div className="bg-[#1d1375] text-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#fffbfb] mb-4">
            AI Programming Languages: Beyond the Basics
          </h2>
          <p className="text-sm sm:text-base lg:text-lg">
            The future of AI programming lies in languages like Rust and Julia, which provide high performance and scalability for complex AI tasks.
          </p>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
