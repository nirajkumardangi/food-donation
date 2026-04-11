import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-deep-space pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-primary-color/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Contact <span className="text-primary-color">Us</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you.
            Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl h-full flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-8 font-display text-white">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-color/10 flex items-center justify-center flex-shrink-0 text-primary-color">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Headquarters
                    </h4>
                    <p className="text-gray-400 text-sm">
                      94 Kanke Block - Ranchi, JH 834006
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-color/10 flex items-center justify-center flex-shrink-0 text-primary-color">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-gray-400 text-sm">(+91) 8462 32 8978</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-color/10 flex items-center justify-center flex-shrink-0 text-primary-color">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-gray-400 text-sm">contact@foodaid.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-color/10 flex items-center justify-center flex-shrink-0 text-primary-color">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Operating Hours
                    </h4>
                    <p className="text-gray-400 text-sm">
                      9:00 AM - 6:00 PM (Mon-Fri)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form className="p-8 md:p-10 rounded-3xl bg-dark-gray/60 border border-white/10 backdrop-blur-xl shadow-2xl">
              <h2 className="text-3xl font-bold mb-8 font-display text-white">
                Send a Message
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-dark-gray/50 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-primary-color focus:ring-1 focus:ring-primary-color transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-dark-gray/50 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-primary-color focus:ring-1 focus:ring-primary-color transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="relative mb-8">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full bg-dark-gray/50 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-primary-color focus:ring-1 focus:ring-primary-color transition-colors resize-none"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                onClick={(e) => e.preventDefault()}
                className="w-full bg-gradient-to-r from-primary-color to-secondary-color hover:opacity-90 text-white font-bold py-4 px-6 rounded-xl shadow-[0_0_15px_rgba(247,79,34,0.3)] transition-transform transform hover:scale-[1.02] active:scale-95"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
