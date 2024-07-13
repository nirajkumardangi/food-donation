import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { useFirebase } from "../utility/Storage";
import queryClient from "../utility/Storage";
import Notification from "../Ui/Notification";
import ErrorPage from "../Ui/Error";
import { Button } from "@material-tailwind/react";
import ButtonLoader from "../Ui/ButtonLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";

const DonationForm = () => {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [locationError, setLocationError] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [number, setNumber] = useState("");

  const firebase = useFirebase();
  const [name, setName] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "quantity":
        setQuantity(value);
        break;

      case "number":
        setNumber(value);
        break;
      case "name":
        setName(value);
        break;
      default:
        break;
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

  const params = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryFn: () => firebase.getDocsFromId(params.mealsId),
  });

  const {
    mutate,
    isPending: MutatePending,
    isError: MutateIsError,
    error: is_error,
  } = useMutation({
    mutationFn:
      data && quantity < data.quantity
        ? firebase.updateDocById
        : firebase.deleteDocBYId,
    onSuccess: () => {
      queryClient.invalidateQueries(["Meals"]);
      alert("food are requested");
      navigate("/");
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault(event.target);

    if (data) {
      if (quantity > data.quantity) {
        alert(
          "quantity is greater than available quantity please decrease the quantity"
        );
      }

      if (quantity == data.quantity) {
        mutate(params.mealsId);
      }

      if (quantity < data.quantity) {
        const amount = data.quantity - quantity;
        mutate({ quantity: amount, id: params.mealsId });
      }
    }
  };

  return (
    <div className="md:pt-24 px-4 pb-10 sm:px-6 lg:px-8 pt-20">
      <Form
        id="food-listing-form"
        onSubmit={handleSubmit}
        method="post"
        className="max-w-lg mx-auto p-6 bg-gray-900 shadow-md rounded-lg text-black "
      >
        <h2 className="text-2xl font-light-bold mb-4 text-primary-color">
          NGO detail form
        </h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-100 mb-2">
            NGO Name:
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
        <div className="w-full mb-5">
          <label className="block text-gray-100 mb-2">NGO location:</label>
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
            value={number}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mt-6">
          {isPending || MutatePending ? (
            <ButtonLoader content="loading" />
          ) : (
            <Button
              type="submit"
              className="w-full bg-primary-color hover:bg-secondary-color text-white font-bold py-2 px-4 rounded"
              disabled={isPending}
            >
              Request
            </Button>
          )}
        </div>

        <div className="mt-6">
          {isError ||
            (MutateIsError && (
              <ErrorPage
                title={error || is_error.title}
                message={error.message || "error occurred"}
              />
            ))}
        </div>
      </Form>
    </div>
  );
};

export default DonationForm;
