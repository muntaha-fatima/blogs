
'use client';

import Link from 'next/link';

const blogdata = [
  {
    id: '1',
    date:'1991',
    title: 'Html',
    summary: 'HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are fundamental technologies for web development. HTML is used to structure the content of web pages, while CSS is used to style and layout that content. CSS ensures that the content looks visually appealing and is responsive across different screen sizes and devices.',
    image:"/image/Basic-HTML-Codes-for-Websites.webp",
  },
  {
    id: '2',
    date:'1996',
    title: 'Css',
    summary: 'CSS is used to style and layout that content. CSS ensures that the content looks visually appealing and is responsive across different screen sizes and devices.',
    image:"/image/images css.png",
  },
  {
    id: '3',
    title: 'Static Generation',
    summary: 'TypeScript is a superset of JavaScript that adds static typing, helping developers catch errors early in the development process. It offers features like type inference, type annotations, and interfaces to make code more robust and maintainable. TypeScript integrates seamlessly with popular frameworks like React, Angular, and Vue.js.',
    image: "/image/benefits_of_typescript_without_typescript_blog_index.webp",
    date:'1996',
  },
  {
    id: '4',
    title: 'Next.js',
    summary:' Next.js is a React-based framework that simplifies web application development. It offers features like Server-Side Rendering (SSR) and Static Site Generation (SSG), which improve performance and SEO. Next.js also supports dynamic routing, optimized performance, and easy deployment, making it an ideal choice for building modern web applications.',
    image: "/image/1696065152678 (1).png",
  },
  {
    id: '5',
    title: 'Next.js',
    summary: 'Python is a versatile, high-level programming language known for its simplicity and readability. It is widely used in web development (using frameworks like Django and Flask), data science, artificial intelligence (AI), and automation. Python&apos;s rich ecosystem of libraries and frameworks makes it a top choice for developers across various domains..',
    image: "/image/beginners-python-programming.2e16d0ba.fill-2400x858-c100.jpg",
  },
  {
    id: '6',
    title:'Next.js Basics',
    summary: 'Python plays a central role in the development of AI and Machine Learning (ML) applications. With libraries like TensorFlow, PyTorch, and Scikit-Learn, developers can build intelligent systems capable of tasks like prediction, classification, and natural language processing. Python&apos;s simplicity and flexibility make it ideal for AI development, and its vast community support ensures continuous growth in the field.'
    ,
    image: "/image/ai_symbol.jpg",
  },
];

const BlogList = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
      <h1 className="text-3xl sm:text-4xl lg:text-2xl font-bold text-[#7c8fce]">
              AI in the Future Exploring how languages from HTML to Python are shaping the AI landscape.
            </h1>
    
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogdata.map((blog) => (
          <div
            key={blog.id}
            style={{
              marginBottom: '20px',
              padding: '15px',
              border: '1px solid #ddd',
              borderRadius: '10px',
              backgroundColor: '#fff',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
            }}
            className="hover:transform hover:scale-105"
          >
   
            <div className="flex justify-center items-center mb-4">
              <img src={blog.image} alt={blog.title} className="w-full h-48  text-3xl font-bold text-[#324c70] object-cover rounded-lg" />
            </div>
            
        
            <h2 style={{ color: '#FF5722', fontSize: '1.25rem', marginBottom: '10px' }}>{blog.title}</h2>
            <p style={{ fontSize: '1rem', color: '#555' }}>{blog.summary}</p>
            

            <Link
              href={`/blog/${blog.id}`}
              style={{
                color: '#0070f3',
                textDecoration: 'none',
                fontWeight: 'bold',
                marginTop: '10px',
                display: 'inline-block',
              }}
            >
              Read More
            </Link>
          </div>



        ))}
      </main>

      
    </div>
  );
};

export default BlogList;
