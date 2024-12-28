

const Contact = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-6 w-full max-w-4xl p-4">
        <h1 className="text-5xl font-bold text-[#7c8fce]">Contact Us</h1>

   
        <form className="bg-white shadow-lg rounded-xl w-full max-w-2xl p-8">
          <div className="mb-6">
            <label className="block text-gray-700 font-bold text-lg mb-3" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-6 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c8fce] focus:border-[#7c8fce] text-lg"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-bold text-lg mb-3" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-6 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c8fce] focus:border-[#7c8fce] text-lg"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-bold text-lg mb-3" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message"
              className="w-full px-6 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c8fce] focus:border-[#7c8fce] text-lg"
          
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2f4f8b] text-white py-3 px-6 text-lg font-bold rounded-lg hover:bg-[#7c8fce] transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
