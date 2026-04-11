import { motion } from "framer-motion";

const stats = [
  { id: 1, name: "Meals Shared", value: "2.4M+" },
  { id: 2, name: "Active Volunteers", value: "12,000" },
  { id: 3, name: "Partner Charities", value: "450" },
  { id: 4, name: "Cities Reached", value: "18" },
];

export default function ImpactStats() {
  return (
    <div className="bg-deep-space py-24 sm:py-32 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl lg:max-w-none"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl">
              Our Global Impact
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-400">
              Together, we have been scaling efforts to eliminate hunger across
              communities.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col bg-white/5 p-8 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="order-first text-5xl font-display font-semibold tracking-tight text-primary-color bg-clip-text text-transparent bg-gradient-to-r from-primary-color to-secondary-color">
                  {stat.value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}
