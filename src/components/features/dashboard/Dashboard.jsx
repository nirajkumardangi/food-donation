import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDonate,
  faHandsHelping,
  faHistory,
  faInfoCircle,
  faPhone,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from "../../../context/FirebaseContext";
import { useMutation } from "@tanstack/react-query";
import ButtonLoader from "../../ui/Notification";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Dashboard = () => {
  const Firebase = useFirebase();
  const navigate = useNavigate();
  const user = Firebase?.user;

  const { mutate, isPending } = useMutation({
    mutationFn: Firebase.signOutFunction,
    onSuccess: () => {
      toast.success("Logged out successfully");
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.message || "Failed to log out");
    },
  });

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } },
  };

  if (!user) {
    return (
      <div className="bg-deep-space min-h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
          <h1 className="text-3xl text-white font-bold mb-6">
            Session Expired
          </h1>
          <button
            className="w-full bg-gradient-to-r from-primary-color to-secondary-color hover:opacity-90 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-transform transform hover:scale-[1.02] active:scale-95"
            onClick={() => navigate("/auth?mode=login")}
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const menuItems = [
    {
      title: "Donate Food",
      icon: faDonate,
      link: "/donation/form",
      color: "from-green-500 to-emerald-700",
    },
    {
      title: "Receive Food",
      icon: faHandsHelping,
      link: "/donation/meals",
      color: "from-blue-500 to-indigo-700",
    },
    {
      title: "My History",
      icon: faHistory,
      link: `/user/${user.uid}`,
      color: "from-purple-500 to-fuchsia-700",
    },
    {
      title: "Developers",
      icon: faInfoCircle,
      link: "/developers",
      color: "from-teal-500 to-cyan-700",
    },
    {
      title: "Contact Us",
      icon: faPhone,
      link: "/contact",
      color: "from-rose-500 to-pink-700",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center md:pt-32 px-4 pb-10 sm:px-6 lg:px-8 pt-28">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-5xl mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-2">
          {getGreeting()},{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-color to-secondary-color">
            {user.displayName || "Hero"}
          </span>
        </h1>
        <p className="text-gray-400 text-lg">
          What would you like to do today?
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl"
      >
        {menuItems.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Link
              to={item.link}
              className="group relative flex flex-col items-center justify-center p-8 h-48 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(247,79,34,0.15)] hover:bg-white/10"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-white text-2xl"
                  />
                </div>
                <h2 className="text-white text-lg font-semibold tracking-wide">
                  {item.title}
                </h2>
              </div>
            </Link>
          </motion.div>
        ))}

        <motion.div variants={itemVariants}>
          <button
            onClick={() => mutate()}
            disabled={isPending}
            className="group w-full relative flex flex-col items-center justify-center p-8 h-48 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(220,38,38,0.15)] hover:border-red-500/30"
          >
            <div
              className={`absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
            ></div>

            <div className="relative z-10 flex flex-col items-center">
              <div
                className={`w-16 h-16 rounded-full bg-dark-gray border border-gray-600 flex items-center justify-center mb-4 shadow-lg group-hover:bg-red-500 group-hover:border-red-500 transition-colors duration-300`}
              >
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  className="text-gray-400 group-hover:text-white text-2xl transition-colors"
                />
              </div>
              <h2 className="text-gray-300 group-hover:text-red-400 text-lg font-semibold tracking-wide transition-colors">
                {isPending ? "Logging out..." : "Log Out"}
              </h2>
            </div>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
