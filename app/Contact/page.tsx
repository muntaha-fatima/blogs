const Contact = () => {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center gap-6">
        <h1 className="text-3xl -mt-80 font-bold text-[#7c8fce]">Contact Us</h1>
        
        {/* Form */}
        <form className="bg-white shadow-md rounded-lg w-full max-w-md p-6 ">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:text-[#7c8fce]"
            />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:text-[#7c8fce]"
            />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:text-[#7c8fce]"
            ></textarea>
          </div>
  
          <button
            type="submit"
            className="w-full bg-[#2f4f8b] text-white py-2 px-4 rounded-lg hover:bg-[#7c8fce] transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  