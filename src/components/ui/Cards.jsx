import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useFirebase } from "../../context/FirebaseContext";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faClock,
  faUser,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Cards = ({
  id,
  quantity,
  userId,
  userEmail,
  description,
  displayName,
  expirationDate,
  foodName,
  imageURL,
  longitude,
  latitude,
  number,
  photoURL,
  meals,
}) => {
  const firebase = useFirebase();

  const { data: imageUrl, isPending } = useQuery({
    queryKey: ["meals", imageURL],
    queryFn: () => firebase.getImageURL(imageURL),
  });

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-full mx-auto backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-2xl overflow-hidden mt-4 mb-4 flex flex-col"
    >
      <div className="relative h-64 w-full">
        {isPending ? (
          <div className="absolute inset-0 flex items-center justify-center bg-dark-gray/50 animate-pulse">
            <Loader />
          </div>
        ) : (
          <img
            className="w-full h-full object-cover"
            src={imageUrl}
            alt={foodName || "Donated Food"}
          />
        )}
        <div className="absolute top-4 right-4 bg-primary-color/90 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          {quantity} Servings
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-color to-secondary-color mb-4">
          {foodName}
        </h1>

        <div className="space-y-3 flex-grow text-gray-300 text-sm">
          <p className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faClock}
              className="text-secondary-color w-4"
            />
            <span>
              <strong className="text-gray-400">Expires:</strong>{" "}
              {expirationDate}
            </span>
          </p>

          <button
            onClick={openGoogleMaps}
            className="flex items-center gap-3 text-left hover:text-primary-color transition-colors group w-full"
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-secondary-color w-4 group-hover:animate-bounce"
            />
            <span>
              <strong className="text-gray-400">Location:</strong> View on Maps
            </span>
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {photoURL ? (
                <img
                  className="w-12 h-12 rounded-full border-2 border-primary-color/50 object-cover"
                  src={photoURL}
                  alt={displayName}
                />
              ) : (
                <div className="w-12 h-12 rounded-full border-2 border-primary-color/50 bg-gray-800 flex items-center justify-center">
                  <FontAwesomeIcon icon={faUser} className="text-gray-400" />
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-white">
                  {displayName}
                </p>
                <p className="text-xs text-gray-400">{number}</p>
              </div>
            </div>

            <Link
              to={`/donation/request/${id}`}
              className="px-5 py-2.5 bg-gradient-to-r from-primary-color to-secondary-color hover:opacity-90 text-white font-bold rounded-xl shadow-lg transition-transform transform hover:scale-105 active:scale-95 text-sm"
            >
              Request
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;
