import React, { useState } from "react";
import styles from "./Donation.module.css";
// import { createDonation } from "../../services/api";

const DonationForm = () => {
  const [donation, setDonation] = useState({
    donarName: "",
    foodItemsName: "",
    phoneNumber: "",
    location: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(donation);
    // const success = await createDonation({ foodType, quantity, location });
    // if (success) {
    //   // Show success message
    // } else {
    //   // Show error message
    // }
  };

  function donationFormHandler(event) {
    const { name, value } = event.target;
    setDonation((prevDonation) => ({
      ...prevDonation,
      [name]: value,
    }));
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="donarName"
        value={donation.donarName}
        onChange={donationFormHandler}
        placeholder="Donar Name"
        required
        className={styles.input}
      />
      <input
        type="text"
        name="foodItemsName"
        value={donation.foodItemsName}
        onChange={donationFormHandler}
        placeholder="Food Items Name"
        required
        className={styles.input}
      />
      <input
        type="number"
        name="phoneNumber"
        value={donation.phoneNumber}
        onChange={donationFormHandler}
        placeholder="Phone Number"
        required
        className={styles.input}
      />
      <input
        type="text"
        name="location"
        value={donation.location}
        onChange={donationFormHandler}
        placeholder="Location"
        required
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Submit Donation
      </button>
    </form>
  );
};

export default DonationForm;
