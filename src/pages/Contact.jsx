import React from "react";

const ContactPage = () => {
  return (
    <div className="md:pt-24 px-4 sm:px-6 lg:px-8 pt-24">
      <div className="contact event mb-8 p-6 border rounded-lg bg-gray-900 text-white shadow-md hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-3xl font-bold mb-4 text-primary-color">
          Contact Information
        </h2>
        <p>
          Have questions or want to get involved? Contact us through the details
          below or fill out the form.
        </p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Address:</strong> 94 Kanke Block - Ranchi, JH 834006
          </li>
          <li>
            <strong>Phone:</strong> (+91) 8462 32 8978
          </li>
          <li>
            <strong>Email:</strong> contact@foodaid.org
          </li>
          <li>
            <strong>Hours:</strong> 9:00 AM - 6:00 PM
          </li>
        </ul>
      </div>

      <div className="contact-form event mb-8 bg-gray-900 text-white p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-3xl font-bold mb-4 text-primary-color">
          Get In Touch
        </h2>
        <form>
          <div className="form-group mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full rounded-md border-white shadow-sm focus:border-primary-color focus:ring-primary-color sm:text-sm py-2"
              required
            />
          </div>
          <div className="form-group mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-color focus:ring-primary-color sm:text-sm py-2"
              required
            />
          </div>
          <div className="form-group mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="mt-1 block w-full rounded-md border-gray-500 shadow-sm focus:border-primary-color focus:ring-primary-color sm:text-sm"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn send-message bg-primary-color text-white py-2 px-4 rounded-md hover:bg-secondary-color transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
