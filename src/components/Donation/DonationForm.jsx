import { useEffect, useState } from "react";
import { Form, redirect, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useFirebase } from "../../utility/Storage";
import queryClient from "../../utility/Storage";
import Notification from "../../Ui/Notification";
import ErrorPage from "../../Ui/Error";
import { Button } from "@material-tailwind/react";
import ButtonLoader from "../../Ui/ButtonLoader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const DonationForm = () => {
  const [foodName, setFoodName] = useState("");
  const [quantity, setQuantity] = useState(null);
  const [expirationDate, setExpirationDate] = useState("");
  const [number, setNumber] = useState("");
  const [delivery, setDelivery] = useState("pickup");
  const [diet, setDiet] = useState([]);
  const [image, setImage] = useState("");
  const [name, setName] = useState(null);
  const navigate = useNavigate();

  const firebase = useFirebase();

  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [locationError, setLocationError] = useState("");

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    switch (name) {
      case "food-name":
        setFoodName(value);
        break;
      case "quantity":
        setQuantity(value);
        break;
      case "expiration-date":
        setExpirationDate(value);
        break;
      case "number":
        setNumber(value);
        break;
      case "name":
        setName(value);
        break;
      case "delivery":
        setDelivery(value);
        break;
      default:
        break;
    }

    if (type === "checkbox") {
      if (checked) {
        setDiet([...diet, value]);
      } else {
        setDiet(diet.filter((item) => item !== value));
      }
    }
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => {
          setLocationError(err.message);
        }
      );
    } else {
      setLocationError("Geolocation is not supported by this browser.");
    }
  };
  const { longitude, latitude } = location;

  const formData = {
    foodName,
    quantity,
    expirationDate,
    longitude,
    latitude,
    name,
    number,
    delivery,
    diet,
    image,
  };

  const { mutate, isError, error, isPending } = useMutation({
    mutationFn: firebase.handleNewMealsListing,
    onSuccess: () => {
      <Notification title="meals donated successfully" />;
      queryClient.invalidateQueries(["meals"]);
      navigate("/donation/meals");
    },
  });

  const handleSubmit = async (event) => {
    console.log("form submitted");
    event.preventDefault();
    mutate(formData);
  };

  if (isError) {
    console.log(error.title, error.message);
  }

  return (
    <div className="md:pt-24 px-4 pb-10 sm:px-6 lg:px-8 pt-20">
      <Form
        id="food-listing-form"
        onSubmit={handleSubmit}
        method="post"
        className="max-w-lg mx-auto p-6 bg-gray-900 shadow-md rounded-lg text-black "
      >
        <h2 className="text-2xl font-light-bold mb-4 text-primary-color">
          Create Food Listing
        </h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-100 mb-2">
            Donar Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md "
          />
        </div>
        <div className="mb-4">
          <label htmlFor="food-name" className="block text-gray-100 mb-2">
            Food Item Name:
          </label>
          <input
            type="text"
            id="food-name"
            name="food-name"
            value={foodName}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-100 mb-2">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="expiration-date" className="block text-gray-100 mb-2">
            Expiration Date:
          </label>
          <input
            type="date"
            id="expiration-date"
            name="expiration-date"
            value={expirationDate}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image-upload" className="block text-gray-100 mb-2">
            Upload Image:
          </label>
          <input
            type="file"
            id="image-upload"
            name="image-upload"
            onChange={(e) => setImage(e.target.files[0])}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-300"
          />
        </div>
        <div className="w-full mb-5">
          <label className="block text-gray-100 mb-2">Fetch Location:</label>
          <div className="flex flex-col md:flex-row gap-3 items-center border border-gray-300 rounded-md p-2">
            <input
              type="text"
              id="latitude"
              name="latitude"
              placeholder="Latitude"
              value={location.latitude}
              readOnly
              required
              className="flex-grow px-3 py-2 border-0 outline-none rounded-md text-gray-700 mb-2 md:mb-0"
              onClick={getUserLocation}
            />
            <input
              type="text"
              id="longitude"
              name="longitude"
              placeholder="Longitude"
              value={location.longitude}
              readOnly
              required
              className="flex-grow px-3 py-2 border-0 outline-none rounded-md text-gray-700 mb-2 md:mb-0"
              onClick={getUserLocation}
            />
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-primary-color cursor-pointer center mb-1 md:mr-2"
              onClick={getUserLocation}
            />
          </div>
          {locationError && (
            <p className="text-red-500 mt-2">{locationError}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="number" className="block text-gray-100 mb-2">
            Mobile Number:
          </label>
          <input
            type="number"
            id="number"
            name="number"
            pattern="[789][0-9]{9}"
            value={number}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-100 mb-2">Delivery Option:</label>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="pickup"
              name="delivery"
              value="pickup"
              checked={delivery === "pickup"}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label htmlFor="pickup" className="text-gray-100">
              Pickup Only
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="delivery"
              name="delivery"
              value="delivery"
              checked={delivery === "delivery"}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label htmlFor="delivery" className="text-gray-100">
              Self Delivery
            </label>
          </div>
        </div>
        <div className="mt-6">
          {isPending ? (
            <ButtonLoader content="submitting" />
          ) : (
            <Button
              type="submit"
              className="w-full bg-primary-color hover:bg-secondary-color text-white font-bold py-2 px-4 rounded"
              disabled={isPending}
            >
              Submit
            </Button>
          )}
        </div>
        <div className="mt-6">
          {isError && (
            <ErrorPage
              title={error.title}
              message={error.message || "Failed to register, please try again."}
            />
          )}
        </div>
      </Form>
    </div>
  );
};

export default DonationForm;
