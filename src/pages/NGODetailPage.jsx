import { useState } from "react";
import { Form, useNavigate, useParams } from "react-router-dom";
import { useFirebase } from "../context/FirebaseContext";
import queryClient from "../context/FirebaseContext";
import { useMutation, useQuery } from "@tanstack/react-query";
import ButtonLoader from "../components/ui/ButtonLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBuilding,
  faPhone,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const NGODetailPage = () => {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [quantity, setQuantity] = useState(0);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [locationLoading, setLocationLoading] = useState(false);
  const firebase = useFirebase();
  const navigate = useNavigate();
  const params = useParams();

  const { data, isPending: isFetching } = useQuery({
    queryKey: ["meals", params.mealsId],
    queryFn: () => firebase.getDocsFromId(params.mealsId),
  });

  const { mutate: updateMeal, isPending: MutatePending } = useMutation({
    mutationFn: (payload) => {
      if (payload.action === "delete") {
        return firebase.deleteDocBYId(payload.id);
      } else {
        return firebase.updateDocById({
          id: payload.id,
          quantity: payload.quantity,
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["meals"]);
      toast.success("Food request submitted successfully!");
      navigate("/");
    },
    onError: () => {
      toast.error("Failed to request food. Please try again.");
    },
  });

  const getUserLocation = () => {
    setLocationLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setLocationLoading(false);
          toast.success("Location fetched!");
        },
        (err) => {
          setLocationLoading(false);
          toast.error(err.message || "Unable to fetch location");
        },
      );
    } else {
      setLocationLoading(false);
      toast.error("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!data) return;

    const reqQty = parseInt(quantity, 10);
    const availableQty = parseInt(data.quantity, 10);

    if (reqQty > availableQty) {
      toast.error(`Only ${availableQty} servings are available.`);
      return;
    }

    if (reqQty === availableQty) {
      updateMeal({ action: "delete", id: params.mealsId });
    } else {
      const remainingAmount = availableQty - reqQty;
      updateMeal({
        action: "update",
        id: params.mealsId,
        quantity: remainingAmount,
      });
    }
  };

  if (isFetching) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <ButtonLoader content="Loading Meal Details..." />
      </div>
    );
  }

  return (
    <div className="md:pt-24 px-4 pb-10 sm:px-6 lg:px-8 pt-20 min-h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-xl mx-auto backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl rounded-2xl overflow-hidden"
      >
        <div className="bg-gradient-to-r from-primary-color/20 to-secondary-color/20 p-6 border-b border-white/10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-color to-secondary-color">
            Request Donation
          </h2>
          <p className="text-gray-300 mt-2 text-sm">
            Fill in your NGO details to claim this donation.
          </p>
        </div>

        <Form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="relative">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              NGO Name
            </label>
            <div className="relative">
              <FontAwesomeIcon
                icon={faBuilding}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full pl-11 pr-4 py-3 bg-dark-gray/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-color focus:border-transparent text-white placeholder-gray-500 transition-all"
                placeholder="Hope Foundation"
              />
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-300 mb-2 flex justify-between"
            >
              <span>Quantity Required</span>
              <span className="text-secondary-color text-xs bg-secondary-color/10 px-2 py-1 rounded-full">
                Available: {data?.quantity}
              </span>
            </label>
            <div className="relative">
              <FontAwesomeIcon
                icon={faUtensils}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max={data?.quantity}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
                className="w-full pl-11 pr-4 py-3 bg-dark-gray/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-color focus:border-transparent text-white placeholder-gray-500 transition-all"
                placeholder="Number of servings"
              />
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-300">
              NGO Delivery Location
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={getUserLocation}
                disabled={locationLoading}
                className="w-1/3 flex items-center justify-center gap-2 bg-dark-gray/60 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-xl border border-white/10 transition-colors"
              >
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className={
                    locationLoading
                      ? "animate-bounce text-secondary-color"
                      : "text-primary-color"
                  }
                />
                {locationLoading ? "Locating..." : "Auto Fetch"}
              </button>
              <div className="w-2/3 flex gap-2">
                <input
                  type="text"
                  placeholder="Lat"
                  value={location.latitude}
                  readOnly
                  className="w-1/2 px-3 py-3 bg-dark-gray/30 border border-white/10 rounded-xl text-gray-300 cursor-not-allowed"
                />
                <input
                  type="text"
                  placeholder="Lng"
                  value={location.longitude}
                  readOnly
                  className="w-1/2 px-3 py-3 bg-dark-gray/30 border border-white/10 rounded-xl text-gray-300 cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="number"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Contact Number
            </label>
            <div className="relative">
              <FontAwesomeIcon
                icon={faPhone}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="tel"
                id="number"
                name="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
                className="w-full pl-11 pr-4 py-3 bg-dark-gray/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-color focus:border-transparent text-white placeholder-gray-500 transition-all"
                placeholder="Phone number"
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={MutatePending}
              className="w-full bg-gradient-to-r from-primary-color to-secondary-color hover:opacity-90 text-white font-bold py-4 px-4 rounded-xl shadow-[0_0_15px_rgba(247,79,34,0.3)] transition-transform transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
            >
              {MutatePending ? (
                <ButtonLoader content="Processing Request..." />
              ) : (
                "Confirm Request"
              )}
            </button>
          </div>
        </Form>
      </motion.div>
    </div>
  );
};

export default NGODetailPage;
