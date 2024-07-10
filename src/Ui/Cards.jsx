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
  location,
  number,
  photoURL,
}) => {
  const firebase = useFirebase();

  const { data: imageUrl, isPending, isError, error } = useQuery({
    queryKey: ["meals", imageURL],
    queryFn: () => firebase.getImageURL(imageURL),
  });

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
          <strong>Quantity:</strong> {quantity}
        </p>
        <p className="mt-2 text-secondary-color">
          <strong>Location:</strong> {location}
        </p>
        <p className="mt-2 text-secondary-color">
          <strong>Expiration Date:</strong> {expirationDate}
        </p>
        <p className="mt-2 text-secondary-color">
          <strong>Contact:</strong> {displayName}, {userEmail}, {number}
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
