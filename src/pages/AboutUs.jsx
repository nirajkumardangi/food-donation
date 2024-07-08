function AboutUs() {
  return (
    <div className="page px-4 py-8 sm:px-6 lg:px-8">
      <div className="section event mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          About Food Aid
        </h2>
        <p className="underline text-base text-gray-700">
          Food Aid is dedicated to fighting hunger and food insecurity by
          connecting donors with those in need. We believe that everyone
          deserves access to nutritious food, and through our platform, we aim
          to make a positive impact in our communities.
        </p>
      </div>

      <div className="section event mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Mission</h2>
        <p className="text-base text-gray-700">
          Our mission is to reduce food waste and alleviate hunger by
          facilitating the donation and distribution of surplus food to food
          banks, shelters, and individuals in need. We strive to create a
          sustainable solution to hunger through community engagement and
          partnership.
        </p>
      </div>

      <div className="section event mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Goals</h2>
        <ul className="list-disc list-inside text-base text-gray-700">
          <li>Provide nutritious meals to families and individuals in need.</li>
          <li>Reduce food waste by redistributing surplus food.</li>
          <li>Educate the community about food insecurity issues.</li>
          <li>Expand our network of donors and partners.</li>
        </ul>
      </div>

      <div className="section event mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Get Involved
        </h2>
        <p className="text-base text-gray-700">
          You can make a difference! Whether you’re interested in donating food,
          volunteering your time, or partnering with us, your support is
          invaluable in our mission to end hunger.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
