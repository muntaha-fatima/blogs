
'use client';
const blogdata = [

  {
    id: '1',
    date:'1991',
    image:"/image/Basic-HTML-Codes-for-Websites.webp",
    title: '1 blog html',
    heading: 'Mastering Dynamic Routing in Next.js',
    subheading: 'How Dynamic Routing Simplifies Your App Development',
    content: `
     HTML (HyperText Markup Language)
Start Date: 1991
Developer: Tim Berners-Lee
Overview:
HTML (HyperText Markup Language) is the standard markup language used to create web pages and web applications. It was created by Tim Berners-Lee in 1991 and has since become the foundation of the web. HTML is used to structure content on the web, allowing the browser to render and display text, images, videos, and other multimedia content. It provides the basic framework for webpages by using tags to define elements such as paragraphs, headings, links, images, tables, and forms.

HTML is not a programming language but a markup language, which means it is used to describe the structure of a webpage. HTML documents are typically saved with the .html file extension.

Key Features:
Simple Syntax: HTML uses a simple, easy-to-understand tag-based syntax, making it beginner-friendly and essential for creating websites.
Hyperlinks: HTML allows the creation of hyperlinks to navigate between different pages and resources on the web.
Multimedia Support: HTML supports the embedding of multimedia elements like images, audio, and video.
Form Handling: HTML allows developers to create forms for user input, such as search bars, login forms, and contact forms.
Semantic Elements: HTML5 introduced semantic tags like <header>, <footer>, <article>, <section>, which help in organizing the content more meaningfully and improving accessibility and SEO.
Cross-browser Compatibility: HTML works across all modern web browsers, making it the foundation for building responsive and compatible websites.
HTML Structure:
An HTML document is structured using a series of nested elements, or tags. Each tag has an opening and closing element, with content placed in between. Some common tags include:

<html>: Root element that wraps the entire document.
<head>: Contains meta-information about the document (e.g., title, character set, styles).
<body>: Contains the visible content of the web page.
<h1>, <h2>, <h3>, ...: Heading tags used to structure the content hierarchically.
<p>: Paragraph tag used for text.
<a>: Anchor tag used for hyperlinks.
<img>: Image tag used to display images.
<ul>, <ol>, <li>: Tags for creating unordered and ordered lists.
<form>: Tag used for creating forms.
HTML5:
HTML5 is the latest version of HTML, introduced in 2014, and brought several new features, including:

New Semantic Elements: Elements like <header>, <footer>, <nav>, <article>, and <section> help structure content and improve web accessibility.
Multimedia Tags: The <audio> and <video> tags allow embedding of audio and video directly in the browser without the need for external plugins.
Canvas: The <canvas> element allows drawing graphics, animations, and other dynamic content directly in the browser using JavaScript.
Local Storage: HTML5 allows web applications to store data locally on the user's device, enabling offline functionality.
Geolocation API: HTML5 allows websites to access the geographic location of the user.
    `,
  },
  {
    id: "2",
    date: "1996",
    image: "/image/images css.png",
    title: "CSS",
    heading: "Exploring Static Generation in Next.js",
    subheading: "Why Static Generation is the Best Choice for Your Site",
    content: `
      What is CSS?
  
      CSS (Cascading Style Sheets) ek language hai jo web pages ki appearance ko define karti hai. Yeh HTML content ko style dene ka tareeqa hai, jaise ki fonts, colors, layout, aur responsiveness. CSS ka use karke, aap apne website ko visually appealing aur user-friendly bana sakte hain. 
  
      CSS ki Importance
      CSS ke bina, web pages sirf raw content ke taur pe display hote hain jo user ke liye boring aur hard to navigate ho sakte hain. CSS ka use website ko beautiful banane ke liye hota hai. Yeh ensure karta hai ke website ka design har device aur screen size pe acha dikhe.
  
      Basic CSS Syntax
      CSS mein aap selectors aur properties ka use karte hain. Jaise:
      
      Yeh example "h1" element ko blue color aur font size ko 2em set karta hai.
  
      *CSS Layouts
      CSS ka ek important feature layouts hai. Aap Flexbox ya Grid ka use kar ke complex layouts create kar sakte hain, jo responsive bhi ho sakte hain. Yeh layouts ensure karte hain ke aapka website har screen size pe achha dikhe.
  
      Responsive Design with CSS
      CSS media queries ka use karke aap apne website ko mobile-friendly bana sakte hain. Media queries help karte hain jab screen size change hota hai, taake aapka design adjust ho jaye:
      
    
      Is example mein, jab screen size 768px ya usse chhota ho, tab background color change hoga.
  
      Why CSS Matters for Performance
      CSS ka sahi tareeqa se use karna website ki performance ko boost kar sakta hai. Efficient CSS ensures fast page loads, improves SEO, aur user experience ko bhi enhance karta hai.
  
      In Conclusion
      CSS ek essential tool hai jo aapko web development mein website ki look aur feel ko customize karne mein madad karta hai. Yeh web pages ko visually stunning banaata hai aur user experience ko smooth aur intuitive banata hai.
  
      Next.js aur CSS
      Next.js mein aap easily CSS ko use kar sakte hain taake apne components ko style karein. Aap global CSS, CSS Modules, ya styled-components ka use kar sakte hain. Yeh aapko flexible aur maintainable styling solutions provide karte hain.
      
    `
  },
  
  {
    id: '3',
    date:'October 1, 2012',
    image: "/image/benefits_of_typescript_without_typescript_blog_index.webp",
    title: 'Mastering TypeScript for Web Development',
    heading: 'Exploring TypeScript and Its Advantages',
    subheading: 'Why TypeScript is the Future of JavaScript Development',
    content: `TypeScript is a superset of JavaScript that offers static typing and other powerful features to enhance the development process. It allows developers to catch errors early, making it easier to build scalable and maintainable applications. TypeScript integrates well with modern frameworks like React, Angular, and Vue.js, making it an essential tool for web development.
  
    What is TypeScript? 
    TypeScript is an open-source language developed by Microsoft that builds on JavaScript by adding optional static typing. It compiles down to standard JavaScript, which can then be run on any browser or JavaScript runtime. This allows developers to write cleaner, more reliable code while maintaining full compatibility with existing JavaScript codebases.
  
    Improved Development Workflow 
    TypeScript provides features like type inference, type annotations, and interfaces, which help catch errors at compile time. This reduces the chances of runtime errors, improving overall code quality. The enhanced tooling support, such as auto-completion and error detection in IDEs like Visual Studio Code, makes development faster and more efficient.
  
    How TypeScript Works:  
    TypeScript files are saved with the .ts extension. These files are then transpiled into regular JavaScript by the TypeScript compiler tsc. For instance, TypeScript enables you to define types for variables and function parameters, making it clear what data types are expected.
  
    Best Use Cases for TypeScript:  
    TypeScript is ideal for large-scale applications where type safety and maintainability are critical. It&apos;s widely used in enterprise-level applications, web applications with complex logic, and projects that involve collaboration among multiple developers. If your JavaScript project is growing in size, adopting TypeScript can help you prevent future issues and improve code organization.
  
    TypeScript vs JavaScript:  
    While TypeScript and JavaScript are closely related, they have distinct differences:
  
    - Static Typing: TypeScript offers static typing, meaning types are checked at compile time. JavaScript is dynamically typed, with types only determined at runtime.
    - Compile-Time Checking: TypeScript&apos;s compiler checks for errors before your code runs, while JavaScript checks types during runtime.
    - Enhanced Tooling: TypeScript's toolchain provides better support for code completion, navigation, and refactoring compared to JavaScript.
  
    Pre-Compilation for Better Error Handling:  
    One of the most powerful aspects of TypeScript is its ability to catch errors early during development. With TypeScript, you can define strict types for your variables and functions, ensuring that any potential issues are caught at compile time, reducing the likelihood of bugs in production.
  
    In conclusion, TypeScript is an indispensable tool for developers who want to build high-quality, scalable, and maintainable web applications. Its static typing and improved tooling make it a must-have for large-scale projects, while its compatibility with JavaScript allows you to adopt it incrementally without rewriting existing code.
    `
  },
  {
    id: '4',
    date:'2016 ',
    image:"/image/1696065152678 (1).png",
    title: 'Next.js ',
    heading: 'Getting Started with Next.js',
    subheading: 'What is Next.js and Why Should You Care?',
    content: `
      Next.js is an open-source web development framework built on top of React. It helps developers build fast, scalable, and SEO-friendly web applications. Next.js is designed to make development easier by providing many built-in features that you would normally have to set up yourself in a React app.

      Server-Side Rendering (SSR)
      Next.js allows you to pre-render pages on the server, providing better performance and SEO optimization. With SSR, each page is rendered on the server and sent to the client fully formed, allowing search engines to index your content easily.

      Static Site Generation (SSG)
      With Next.js, you can also pre-render pages at build time using Static Site Generation. This is ideal for pages that don't change frequently, like blogs and documentation sites. These pages are pre-built and served from a CDN, ensuring extremely fast load times.

      Dynamic Routing
      Next.js makes it easy to create dynamic routes by using its file system-based routing. You can create pages with dynamic parameters such as blog post IDs or user names, making it perfect for applications like blogs, e-commerce sites, and user profile pages.

      Optimized Performance
      Next.js includes many built-in performance optimizations, like image optimization and code splitting, which help your app load faster and deliver a better user experience.

      By mastering Next.js, you'll be able to build highly performant and user-friendly web applications with ease. The framework&apos;s flexibility and powerful features make it an ideal choice for both small projects and large-scale applications.
    `,
  },

  {
    id: '5',
    date:'1991',
    image: "/image/beginners-python-programming.2e16d0ba.fill-2400x858-c100.jpg",
    title: 'Mastering Python for Web Development',
    heading: 'Exploring Python and Its Advantages',
    subheading: 'Why Python is the Future of Web Development',
    content:`
    Python is a versatile, high-level programming language known for its simplicity and readability. It has become one of the most popular languages for web development, data analysis, artificial intelligence, and automation. Python allows developers to write clean, easy-to-understand code that is powerful and flexible enough for a variety of applications.

    What is Python?
    Python is an interpreted, object-oriented, high-level programming language. It was created by Guido van Rossum and first released in 1991. Python emphasizes code readability and simplicity, using indentation to define code blocks rather than braces or keywords.

    Key Features of Python:
     Simple Syntax: Python uses an easy-to-read syntax that makes it beginner-friendly.
     Interpreted Language: Python code is executed line by line, making it easier to debug.
     Object-Oriented: Python supports object-oriented programming (OOP), allowing developers to model real-world problems.
    - Large Standard Library: Python comes with a vast standard library, providing modules and packages for web development, data manipulation, and more.
     Cross-Platform Compatibility: Python can run on various platforms, including Windows, macOS, and Linux, without modification.

    How Python Works
    Python code is typically written in .py files. It is interpreted and executed by the Python runtime. Python supports dynamic typing, meaning you don&apos;t need to declare the type of a variable before using it.

    Best Use Cases for Python:
    Python is widely used in the following areas:
    - Web Development: Python is a popular choice for backend development with frameworks like Django and Flask.
    - Data Science: Python, along with libraries like NumPy, Pandas, and Matplotlib, is extensively used for data analysis and visualization.
    - Artificial Intelligence: Python is one of the top languages for AI, with libraries such as TensorFlow, Keras, and PyTorch.
    - Automation: Pythons simplicity and powerful libraries make it ideal for writing scripts to automate repetitive tasks.

    Python vs Other Languages:
    Python offers several advantages over other languages like Java, C++, and JavaScript:
    - **Ease of Use:** Python is known for its simple and readable syntax, which reduces the learning curve for new developers.
    - **Productivity:** With its rich set of libraries and frameworks, Python allows developers to focus on solving the problem rather than reinventing the wheel.
    - **Community Support:** Python has a large and active community, making it easier to find resources, tutorials, and solutions to problems.

    Conclusion:
    Python is a powerful and beginner-friendly language that is used across many domains, from web development to machine learning. Its simplicity, versatility, and vast ecosystem make it an excellent choice for both beginners and experienced developers.
  `
},

{
  id: '6',
  date:'1956',
  image: "/image/ai_symbol.jpg",
  title: 'Mastering Python for AI Development',
  heading: 'Python: The Backbone of Artificial Intelligence',
  subheading: 'Why Python Leads in AI and Machine Learning',
  content: `
  Python is the preferred language for artificial intelligence and machine learning due to its simplicity, versatility, and an extensive range of libraries. Its ecosystem has empowered developers to create cutting-edge AI solutions.

   What is Python?
  Python is an interpreted, high-level programming language with a design philosophy that emphasizes code readability. Created by Guido van Rossum in 1991, Python supports rapid application development with its simple syntax and dynamic typing.

  Key Features of Python for AI:
   Simplicity and Flexibility: Python's readable syntax and dynamic nature make it perfect for experimentation.
   Rich Libraries:Libraries like NumPy, Pandas, and TensorFlow provide robust tools for AI and ML development.
  - Community Support: Python's active community ensures you always have access to resources and solutions.
  - Integration Capabilities:Python seamlessly integrates with other languages and tools, enhancing its AI utility.

  AI-Specific Libraries:
  Python's library ecosystem caters to various AI tasks:
  - TensorFlow: An open-source framework by Google for building AI models.
  - PyTorch: A flexible framework for deep learning applications.
  - Scikit-Learn:A library for machine learning algorithms and data preprocessing.
  - NLTK & SpaCy: Libraries for natural language processing (NLP).

  Python in Action:
  Below is a simple Python code snippet using TensorFlow for AI:

  python
  import tensorflow as tf
  import numpy as np

  Define a simple model
  model = tf.keras.Sequential([
      tf.keras.layers.Dense(units=1, input_shape=[1])
  ])

   Compile the model
  model.compile(optimizer='sgd', loss='mean_squared_error')

  Provide data
  xs = np.array([-1.0, 0.0, 1.0, 2.0, 3.0, 4.0], dtype=float)
  ys = np.array([-3.0, -1.0, 1.0, 3.0, 5.0, 7.0], dtype=float)

   Train the model
  model.fit(xs, ys, epochs=500)

  Make a prediction
  print(model.predict([10.0]))
  \`\`\`

  Why Python is Dominating AI:
  - **Ease of Learning: Beginners find Python&apos;s simplicity ideal for entering the AI field.
  - **Wide Applications:Python powers AI solutions in healthcare, finance, robotics, and more.
  - **Industry Standard: Companies like Google, Facebook, and OpenAI rely on Python for their AI projects.

  Conclusion:
  Python&apos;s ecosystem, simplicity, and versatility make it the leading choice for AI and machine learning. Its ability to handle complex computations while maintaining readable and concise code is unmatched, ensuring its place as a cornerstone of the AI revolution.
  `
}

  
];




import { useState } from 'react';

const BlogDetails = ({ params }: { params: { id: string } }) => {
  const blog = blogdata.find((item) => item.id === params.id);


  const paragraphs = blog ? blog.content.split("\n").map((para, index) => {
    const isSubheading = /^###|##|==/.test(para); 
    
    if (isSubheading) {
      return (
        <p key={index} className="mb-6 font-semibold text-2xl text-[#a0bacf]">
          <span style={{ display: 'none' }}>{para}</span> 
          {para.replace(/^###|##|==/, '')} 
        </p>
      );
    }

    return (
      <p key={index} className="mb-6 text-lg text-gray-800 leading-relaxed">
        {para}
      </p>
    );
  }) : [];


  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && comment) {
    
      setComments([...comments, { name, comment }]);
      setName(''); 
      setComment(''); 
    }
  };

  return (
    <div className="p-8 bg-gradient-to-r from-gray-50 via-white to-gray-100">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#7c8fce] ">BLOGS</h1>
      </header>

      {blog ? (
        <main className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="text-center mb-8">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover rounded-t-xl transition-all transform hover:scale-105"
            />
          </div>

          <div className="p-6">
            <h2 className="text-3xl font-bold text-[#324c70] mb-2">{blog.title}</h2>
            <h3 className="text-xl text-gray-600 italic mb-6">{blog.subheading}</h3>
            <p className="text-sm text-gray-500 mb-6">Published on {blog.date}</p> 
            {paragraphs}

           
            <section className="mt-16">
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">Leave a Comment:</h3>
              <form onSubmit={handleCommentSubmit} className="bg-white p-6 rounded-lg shadow-xl">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-lg font-medium text-gray-700">Your Name:</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-2 p-3 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5722] transition-all"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="comment" className="block text-lg font-medium text-gray-700">Your Comment:</label>
                  <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                    className="mt-2 p-3 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5722] transition-all h-40 resize-none"
                  />
                </div>
                <button type="submit" className="w-full bg-[#4a658b] text-white py-3 rounded-lg font-semibold transition-all hover:bg-[#FF3D00]">
                  Submit
                </button>
              </form>

            
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Comments:</h4>
                {comments.length === 0 ? (
                  <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                ) : (
                  <ul className="space-y-6">
                    {comments.map((comment, index) => (
                      <li key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
                        <div className="flex items-center space-x-4">
                          <div className="bg-[#6f99d1] text-white rounded-full p-2">
                            <span className="font-semibold">{comment.name[0]}</span>
                          </div>
                          <div>
                            <p className="text-lg text-gray-800 font-medium">{comment.name}</p>
                            <p className="text-gray-600">{comment.comment}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          </div>
        </main>
      ) : (
        <main className="text-center mt-20">
          <h1 className="text-3xl font-bold text-gray-900">No Blog Found</h1>
        </main>
      )}
    </div>
  );
};

export default BlogDetails;
