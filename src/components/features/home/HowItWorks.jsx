import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faTruckFast,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

const steps = [
  {
    icon: faBoxOpen,
    title: "Pack Surplus Food",
    description:
      "Instead of throwing away extra high-quality food, securely pack it for pickup or drop-off.",
  },
  {
    icon: faTruckFast,
    title: "We Collect & Organize",
    description:
      "Our diverse network of volunteers will swiftly pick up the food from your location.",
  },
  {
    icon: faUtensils,
    title: "Provide Warm Meals",
    description:
      "We distribute the food instantly to charities, shelters, and those who need it most.",
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-deep-space py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-primary-color/5 via-deep-space to-deep-space pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-secondary-color">
            Process
          </h2>
          <p className="mt-2 text-3xl font-display font-bold tracking-tight text-white sm:text-4xl">
            How It Works
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            It takes just 3 simple steps to make a significant impact on
            someone's life today.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-sm relative group hover:bg-white/[0.08] transition-all"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-color to-secondary-color shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <FontAwesomeIcon
                    icon={step.icon}
                    className="text-3xl text-white"
                  />
                </div>
                <dt className="text-xl font-bold font-display leading-7 text-white">
                  {step.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-400">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
