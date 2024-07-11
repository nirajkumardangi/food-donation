import React from "react";
import avatar from "../../src/assets/userAvtar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const UserProfile = () => {
  return (
    <div className="md:pt-24 px-4 pb-10 sm:px-6 lg:px-8 pt-24 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary-color">
        User Profile
      </h1>
      <div className="max-w-2xl mx-auto bg-gray-900 rounded-xl shadow-md overflow-hidden">
        <div className="relative flex justify-center mt-10">
          <img
            className="h-32 w-32 rounded-full border-2 border-gray-200"
            src={avatar}
            alt="User Avatar"
          />
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-100">Welcome Back!</p>
          <h1 className="text-2xl font-semibold text-primary-color">Niraj!</h1>
          <div className="flex flex-col gap-5 items-center justify-center mt-4 bg-gray-800 text-gray-100 py-2">
            <div className="flex items-center justify-center gap-2 text-center px-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-gray-300 text-xl"
              />
              <p className="font-semibold text-gray-300">example@email.com</p>
            </div>
            <div className="flex items-center justify-center gap-2 text-center px-4">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-gray-300 text-xl"
              />
              <p className="font-semibold text-gray-300">123-456-7890</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-400">Number of Donations</p>
            <p className="text-2xl font-bold text-indigo-600">56</p>
          </div>
          <div className="mt-6 text-center">
            <button className="bg-primary-color text-white font-bold py-2 px-4 rounded-full hover:bg-pink-600 transition-colors duration-300 mb-10">
              Donation History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
