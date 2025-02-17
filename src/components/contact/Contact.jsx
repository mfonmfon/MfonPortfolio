import { useState } from "react";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen  bg-[#0F172A] px-4 sm:px-6 lg:px-8 py-10">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-white">Contact Me</h1>
        <p className="text-lg text-gray-300 mt-4">
          {`Let's connect! Feel free to reach out for collaborations or just a friendly hello.`}
        </p>
      </div>

      {/* Contact Container */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[120px]">
        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/10">
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="mt-1 block w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                className="mt-1 block w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-white">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                className="mt-1 block w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your message..."
                className="mt-1 block w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
          <div className="space-y-4">
            {/* Email */}
            <div
              className="flex items-center space-x-4 cursor-pointer"
              onClick={openModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <p className="text-gray-300">your.email@example.com</p>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <p className="text-gray-300">+123 456 7890</p>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/yourprofile"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                >
                  GitHub
                </a>
                <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-sm w-full shadow-lg border border-white/10">
            <h2 className="text-xl font-bold text-white mb-4">Email Address</h2>
            <p className="text-gray-300">mfonm579@gmail.com</p>
            <button
              onClick={closeModal}
              className="mt-4 w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;