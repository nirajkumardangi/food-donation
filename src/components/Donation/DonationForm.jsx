import { useState } from "react";
import { Form } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useFirebase } from "../../utility/Storage";

const FoodListingForm = () => {
  const [foodName, setFoodName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [expirationDate, setExpirationDate] = useState("");
  const [location, setLocation] = useState("");
  const [number, setNumber] = useState("");
  const [delivery, setDelivery] = useState("pickup"); // Default delivery option
  const [diet, setDiet] = useState([]); // Array to store selected diets
  const [image, setImage] = useState("");
  const [name, setName] = useState(null);

  const firebase = useFirebase();

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
      case "location":
        setLocation(value);
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
        setDiet([...diet, value]); // Add selected diet to array
      } else {
        setDiet(diet.filter((item) => item !== value)); // Remove deselected diet
      }
    }
  };

  const FormData = {
    foodName,
    quantity,
    expirationDate,
    location,
    name,
    number,
    delivery,
    diet,
    image,
  };

  const { mutate } = useMutation({
    mutationFn: firebase.handleNewMealsListing,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    mutate(FormData);
    console.log("Form submitted:", FormData);
  };

  return (
    <Form
      id="food-listing-form"
      className="event"
      onSubmit={handleSubmit}
      method="post"
    >
      <h2>Create Food Listing</h2>
      <div className="form-group">
        <div className="form-group">
          <label htmlFor="quantity">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
            required
          />
        </div>
        <label htmlFor="food-name">Food Item Name:</label>
        <input
          type="text"
          id="food-name"
          name="food-name"
          value={foodName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={quantity}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="expiration-date">Expiration Date:</label>
        <input
          type="date"
          id="expiration-date"
          name="expiration-date"
          value={expirationDate}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="Image-upload">Upload Image:</label>
        <input
          type="file"
          id="image-upload"
          name="image-upload"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={location}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact-info">Mobile Number</label>
        <input
          type="number"
          id="number"
          name="number"
          value={number}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Delivery Option:</label>
        <div className="delivery-options">
          <p>
            <label htmlFor="pickup">Pickup Only</label>
            <input
              type="radio"
              id="pickup"
              name="delivery"
              value="pickup"
              checked={delivery === "pickup"}
              onChange={handleInputChange}
            />
          </p>

          <p>
            <label htmlFor="delivery">Self delivery</label>
            <input
              type="radio"
              id="delivery"
              name="delivery"
              value="delivery"
              checked={delivery === "delivery"}
              onChange={handleInputChange}
            />
          </p>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="btn"
          style={{ width: "100%", margin: "0rem" }}
        >
          submit
        </button>
      </div>
    </Form>
  );
};

export default FoodListingForm;
