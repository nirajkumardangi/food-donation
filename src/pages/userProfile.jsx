import avatar from "../../src/assets/userAvtar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import UserProfileCard from "./UserProfileCard";
import { useFirebase } from "../utility/Storage";

const UserProfile = () => {
  const Firebase = useFirebase();
  const user = Firebase?.user;

  if (!user) {
    return (
      <div className="md:pt-24 px-4 pb-10 sm:px-6 lg:px-8 pt-24 bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary-color">
          User not logged in
        </h1>
      </div>
    );
  }

  return (
    <div className="md:pt-24 px-4 pb-10 sm:px-6 lg:px-8 pt-24 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary-color">
        User Profile
      </h1>
      <div className="max-w-2xl mx-auto bg-gray-900 rounded-xl shadow-md overflow-hidden">
        <div className="relative flex justify-center mt-10">
          <img
            className="h-32 w-32 rounded-full border-2 border-gray-200"
            src={user.photoURL || avatar}
            alt="User Avatar"
          />
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-100">Welcome Back!</p>
          <h1 className="text-2xl font-semibold text-primary-color">
            {user.displayName}
          </h1>
          <div className="flex flex-col gap-5 items-center justify-center mt-4 bg-gray-800 text-gray-100 py-2">
            <div className="flex items-center justify-center gap-2 text-center px-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-gray-300 text-xl"
              />
              <p className="font-semibold text-gray-300">
                {user.email}
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 text-center px-4">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-gray-300 text-xl"
              />
              <p className="font-semibold text-gray-300">
                {user.phoneNumber || 'N/A'}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-bold mt-6 text-center text-primary-color">History</h2>
        <UserProfileCard />
      </div>
    </div>
  );
};

export default UserProfile;
