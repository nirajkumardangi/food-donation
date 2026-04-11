import { motion } from "framer-motion";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-deep-space pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Detail */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-color/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Our <span className="text-primary-color">Services</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Food Aid provides a streamlined platform to bridge the gap between
            food surplus and food insecurity. See how we operate to make a
            difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-6"
          >
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl">
              <h2 className="text-2xl font-bold mb-4 font-display text-white flex items-center gap-3">
                <span className="w-8 h-8 rounded bg-primary-color/20 text-primary-color flex items-center justify-center text-sm">
                  1
                </span>
                How It Works
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Food Aid connects donors with local food banks and shelters to
                ensure that surplus food reaches those in need. We coordinate
                pickups, deliveries, and volunteer efforts to streamline the
                donation process and maximize impact.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl">
              <h2 className="text-2xl font-bold mb-4 font-display text-white flex items-center gap-3">
                <span className="w-8 h-8 rounded bg-primary-color/20 text-primary-color flex items-center justify-center text-sm">
                  2
                </span>
                Why Choose Us
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                With years of experience in food donation and distribution, Food
                Aid is committed to making a meaningful difference in the fight
                against hunger. Our dedicated team and network of volunteers
                work tirelessly to ensure that nutritious meals reach families
                facing food insecurity.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-color/20 rounded-bl-full blur-2xl"></div>
            <h2 className="text-3xl font-bold mb-8 font-display text-transparent bg-clip-text bg-gradient-to-r from-primary-color to-secondary-color border-b border-white/10 pb-4">
              Core Services
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-color mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(247,79,34,1)]"></div>
                <div>
                  <strong className="text-white block mb-1">
                    Food Donations
                  </strong>
                  <span className="text-gray-400 text-sm">
                    Facilitate the donation of surplus food from individuals and
                    businesses.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-color mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(247,79,34,1)]"></div>
                <div>
                  <strong className="text-white block mb-1">
                    Food Distribution
                  </strong>
                  <span className="text-gray-400 text-sm">
                    Distribute donated food safely to food banks, shelters, and
                    organizations.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-color mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(247,79,34,1)]"></div>
                <div>
                  <strong className="text-white block mb-1">
                    Volunteer Opportunities
                  </strong>
                  <span className="text-gray-400 text-sm">
                    Provide ways for individuals to volunteer in collection and
                    distribution.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-color mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(247,79,34,1)]"></div>
                <div>
                  <strong className="text-white block mb-1">
                    Education and Outreach
                  </strong>
                  <span className="text-gray-400 text-sm">
                    Educate the community about the true impact of food waste
                    and hunger.
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
