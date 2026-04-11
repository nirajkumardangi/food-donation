import { motion } from "framer-motion";

function AboutUs() {
  return (
    <div className="min-h-screen bg-deep-space pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Details */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-primary-color/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            About <span className="text-primary-color">Feed Aid</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We are dedicated to fighting hunger and food insecurity by
            connecting donors with those in need. We believe that everyone
            deserves access to nutritious food.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl hover:bg-white/10 transition-colors duration-300"
          >
            <h2 className="text-2xl font-bold mb-4 font-display text-white border-b border-primary-color/30 pb-4">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm">
              Our mission is to reduce food waste and alleviate hunger by
              facilitating the donation and distribution of surplus food to food
              banks, shelters, and individuals in need. We strive to create a
              sustainable solution to hunger through community engagement and
              partnership.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-primary-color/10 to-transparent border border-primary-color/20 backdrop-blur-md shadow-[0_0_30px_rgba(247,79,34,0.1)] hover:bg-primary-color/20 transition-colors duration-300"
          >
            <h2 className="text-2xl font-bold mb-4 font-display text-white border-b border-primary-color/30 pb-4">
              Get Involved
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm">
              You can make a difference! Whether you’re interested in donating
              food, volunteering your time, or partnering with us, your support
              is invaluable in our mission to end hunger locally and globally.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl hover:bg-white/10 transition-colors duration-300 w-full"
        >
          <h2 className="text-2xl font-bold mb-6 font-display text-white text-center">
            Our Goals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-primary-color">▹</span> Provide nutritious
                meals to families in need.
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-primary-color">▹</span> Reduce food waste
                by redistributing surplus food.
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-primary-color">▹</span> Educate the
                community about food insecurity.
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-primary-color">▹</span> Expand our network
                of donors and NGO partners.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUs;
