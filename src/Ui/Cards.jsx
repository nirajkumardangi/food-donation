import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useFirebase } from "../utility/Storage";
import Loader from "./Loader";

const FoodItemCard = ({
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
}) => {
  const firebase = useFirebase();

  const { data: imageUrl, isPending, isError, error } = useQuery({
    queryKey: ["meals", imageURL],
    queryFn: () => firebase.getImageURL(imageURL),
  });

  // Function to open Google Maps link for given latitude and longitude
  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-md mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden mt-4">
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={isPending ? <Loader /> : imageURL}
      />
      <div className="p-4">
        <h1 className="text-xl font-semibold text-primary-color">{foodName}</h1>
        <p className="mt-2 text-secondary-color">{description}</p>
        <p className="mt-2 text-secondary-color">
          <strong>Quantity :</strong> {quantity}
        </p>
        <p className="mt-2 text-secondary-color">
          <strong>Locate Food :</strong>{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={openGoogleMaps}
          >
            {latitude}, {longitude}
          </span>
        </p>
        <p className="mt-2 text-secondary-color">
          <strong>Expiration Date :</strong> {expirationDate}
        </p>
        <p className="mt-2 text-secondary-color">
          <strong>Name :</strong> {displayName}
          <br />
          <strong>Email :</strong> {userEmail}
        </p>
        <img
          className="mt-2 w-10 h-10 rounded-full"
          src={photoURL}
          alt={displayName}
        />
      </div>
    </div>
  );
};

export default FoodItemCard;
