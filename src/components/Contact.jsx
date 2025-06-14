import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.div
      className="max-w-[1200px] mx-auto sm:py-16 px-5"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold leading-tight primary-color">Contact Me</h2>
      </div>

      <div className="max-w-[800px] mx-auto">
        <div className="bg-[#161616] rounded-xl shadow-lg">
          <div className="p-10">
            <form action="https://getform.io/f/azyyvjrb" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="bg-[#161616] w-full px-4 py-4 text-gray-300 border border-gray-700 placeholder-gray-500 rounded-md focus:outline-none focus:border-pink-600 transition-all duration-200"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="bg-[#161616] w-full px-4 py-4 text-gray-300 border border-gray-700 placeholder-gray-500 rounded-md focus:outline-none focus:border-pink-600 transition-all duration-200"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="sm:col-span-2 bg-[#161616] w-full px-4 py-4 text-gray-300 border border-gray-700 placeholder-gray-500 rounded-md focus:outline-none focus:border-pink-600 transition-all duration-200"
                />
                <button
                  type="submit"
                  className="w-full p-4 text-xl font-semibold text-white transition-all duration-200 rounded-md sm:col-span-2 bg-primary-color hover:bg-pink-700"
                >
                  Send
                </button>
              </div>
            </form>
            <div className="flex justify-center gap-6 mt-8 text-2xl text-center text-gray-400">
  <a
    href="https://github.com/busayo-oni"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform transform hover:text-pink-600 hover:scale-110"
  >
    <FaGithub />
  </a>
  <a
    href="https://www.linkedin.com/in/busayo-oni-b72472345/"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform transform hover:text-pink-600 hover:scale-110"
  >
    <FaLinkedin />
  </a>
  <a
    href="mailto:busayaooni@gmail.com"
    className="transition-transform transform hover:text-pink-600 hover:scale-110"
  >
    <FaEnvelope />
  </a>
  <a
    href="https://x.com/DeOracleEdge"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform transform hover:text-pink-600 hover:scale-110"
  >
    <FaTwitter />
  </a>
</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
