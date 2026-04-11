import avatar from "../assets/userAvtar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import DonationHistory from "../components/features/user/DonationHistory";
import { useFirebase } from "../context/FirebaseContext";
import { motion } from "framer-motion";

const UserProfile = () => {
  const Firebase = useFirebase();
  const user = Firebase?.user;

  if (!user) {
    return (
      <div className="min-h-screen bg-deep-space pt-32 px-4 flex items-center justify-center">
        <h1 className="text-4xl font-display font-bold text-center text-primary-color">
          User not logged in
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep-space pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-color/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center text-white">
            User <span className="text-primary-color">Profile</span>
          </h1>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden mb-12">
            <div className="p-8 sm:p-12 flex flex-col md:flex-row items-center gap-10">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-color to-secondary-color rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <img
                  className="h-40 w-40 rounded-full border-4 border-deep-space object-cover relative z-10"
                  src={user.photoURL || avatar}
                  alt="User Avatar"
                />
              </div>

              <div className="text-center md:text-left space-y-4">
                <p className="text-secondary-color font-medium tracking-wider uppercase text-sm">Welcome Back!</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
                  {user.displayName || "Anonymous User"}
                </h2>
                
                <div className="flex flex-col gap-3 mt-6">
                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary-color border border-white/10">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-tighter">Email</p>
                      <p className="font-medium">{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary-color border border-white/10">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-tighter">Phone</p>
                      <p className="font-medium">{user.phoneNumber || "N/A"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <h2 className="text-3xl font-display font-bold mb-8 text-white flex items-center gap-4">
              Donation <span className="text-primary-color">History</span>
              <div className="h-[1px] flex-grow bg-white/10"></div>
            </h2>
            <DonationHistory />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UserProfile;
