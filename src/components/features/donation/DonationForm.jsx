import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useFirebase } from "../../../context/FirebaseContext";
import queryClient from "../../../context/FirebaseContext";
import ButtonLoader from "../../ui/ButtonLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faUtensils, faBoxOpen, faCalendarAlt, faImage, faUser, faPhone, faTruck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const DonationForm = () => {
  const [foodName, setFoodName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [number, setNumber] = useState("");
  const [delivery, setDelivery] = useState("pickup");
  const [diet, setDiet] = useState([]);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const firebase = useFirebase();

  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [locationLoading, setLocationLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    switch (name) {
      case "food-name": setFoodName(value); break;
      case "quantity": setQuantity(value); break;
      case "expiration-date": setExpirationDate(value); break;
      case "number": setNumber(value); break;
      case "name": setName(value); break;
      case "delivery": setDelivery(value); break;
      default: break;
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
    setLocationLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setLocationLoading(false);
          toast.success("Location fetched successfully!");
        },
        (err) => {
          setLocationLoading(false);
          toast.error(err.message || "Unable to fetch location");
        }
      );
    } else {
      setLocationLoading(false);
      toast.error("Geolocation is not supported by your browser.");
    }
  };

  const { longitude, latitude } = location;

  const { mutate, isPending } = useMutation({
    mutationFn: firebase.handleNewMealsListing,
    onSuccess: () => {
      toast.success("Meals donated successfully!");
      queryClient.invalidateQueries(["meals"]);
      navigate("/donation/meals");
    },
    onError: (err) => {
      toast.error(err.message || "Failed to submit donation.");
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!latitude || !longitude){
      toast.error("Please provide a location.");
      return;
    }
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
    mutate(formData);
  };

  return (
    <div className="md:pt-24 px-4 pb-10 sm:px-6 lg:px-8 pt-20 min-h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-2xl mx-auto backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl rounded-2xl overflow-hidden"
      >
        <div className="bg-gradient-to-r from-primary-color/20 to-secondary-color/20 p-8 border-b border-white/10 text-center">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-color to-secondary-color">
            Create Food Listing
          </h2>
          <p className="text-gray-300 mt-2">Help those in need by providing quality food.</p>
        </div>

        <Form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Donor Name</label>
              <div className="relative">
                <FontAwesomeIcon icon={faUser} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text" id="name" name="name" value={name} onChange={handleInputChange} required
                  className="w-full pl-11 pr-4 py-3 bg-dark-gray/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-color text-white"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="number" className="block text-sm font-medium text-gray-300 mb-2">Mobile Number</label>
              <div className="relative">
                <FontAwesomeIcon icon={faPhone} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="tel" id="number" name="number" pattern="[0-9]{10}" value={number} onChange={handleInputChange} required
                  className="w-full pl-11 pr-4 py-3 bg-dark-gray/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-color text-white"
                  placeholder="10-digit number"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <label htmlFor="food-name" className="block text-sm font-medium text-gray-300 mb-2">Food Item Name</label>
            <div className="relative">
              <FontAwesomeIcon icon={faUtensils} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text" id="food-name" name="food-name" value={foodName} onChange={handleInputChange} required
                className="w-full pl-11 pr-4 py-3 bg-dark-gray/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-color text-white"
                placeholder="E.g., 5 Boxes of Pasta"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-300 mb-2">Quantity (Serves)</label>
              <div className="relative">
                <FontAwesomeIcon icon={faBoxOpen} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="number" id="quantity" name="quantity" min="1" value={quantity} onChange={handleInputChange} required
                  className="w-full pl-11 pr-4 py-3 bg-dark-gray/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-color text-white"
                  placeholder="Amount"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-300 mb-2">Expiration Date</label>
              <div className="relative">
                <FontAwesomeIcon icon={faCalendarAlt} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="date" id="expiration-date" name="expiration-date" value={expirationDate} onChange={handleInputChange} required
                  className="w-full pl-11 pr-4 py-3 bg-dark-gray/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-color text-white"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-300 mb-2">Upload Image</label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-600 border-dashed rounded-xl cursor-pointer bg-dark-gray/30 hover:bg-dark-gray/60 transition duration-300">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FontAwesomeIcon icon={faImage} className="w-8 h-8 mb-3 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500">{image ? image.name : "PNG, JPG or GIF (MAX. 800x400px)"}</p>
                </div>
                <input id="image-upload" type="file" className="hidden" onChange={(e) => setImage(e.target.files[0])} required />
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-300">Pickup Location</label>
            <div className="flex gap-4">
              <button
                type="button" onClick={getUserLocation} disabled={locationLoading}
                className="w-1/3 flex items-center justify-center gap-2 bg-dark-gray/60 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-xl border border-white/10 transition-colors"
              >
                <FontAwesomeIcon icon={faLocationDot} className={locationLoading ? "animate-bounce text-secondary-color" : "text-primary-color"} />
                {locationLoading ? "Locating..." : "Auto Fetch"}
              </button>
              <div className="w-2/3 flex gap-2">
                <input type="text" placeholder="Lat" value={location.latitude} readOnly className="w-1/2 px-3 py-3 bg-dark-gray/30 border border-white/10 rounded-xl text-gray-300 cursor-not-allowed" />
                <input type="text" placeholder="Lng" value={location.longitude} readOnly className="w-1/2 px-3 py-3 bg-dark-gray/30 border border-white/10 rounded-xl text-gray-300 cursor-not-allowed" />
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <label className="block text-sm font-medium text-gray-300">Delivery Option</label>
            <div className="flex bg-dark-gray/50 rounded-xl p-1 border border-white/10 w-full max-w-sm">
              <label className={`flex-1 cursor-pointer rounded-lg py-2 text-center text-sm font-medium transition-all ${delivery === 'pickup' ? 'bg-primary-color text-white shadow' : 'text-gray-400 hover:text-white'}`}>
                <input type="radio" name="delivery" value="pickup" checked={delivery === "pickup"} onChange={handleInputChange} className="hidden" />
                Pickup Only
              </label>
              <label className={`flex-1 cursor-pointer rounded-lg py-2 text-center text-sm font-medium transition-all ${delivery === 'delivery' ? 'bg-primary-color text-white shadow' : 'text-gray-400 hover:text-white'}`}>
                <input type="radio" name="delivery" value="delivery" checked={delivery === "delivery"} onChange={handleInputChange} className="hidden" />
                Self Delivery
              </label>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <button
              type="submit" disabled={isPending}
              className="w-full bg-gradient-to-r from-primary-color to-secondary-color hover:opacity-90 text-white font-bold py-4 px-4 rounded-xl shadow-[0_0_15px_rgba(247,79,34,0.3)] transition-transform transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
            >
              {isPending ? <ButtonLoader content="Submitting Listing..." /> : "List Food"}
            </button>
          </div>
        </Form>
      </motion.div>
    </div>
  );
};

export default DonationForm;
