const ServicesPage = () => {
  return (
    <div className="page md:pt-24 px-4 sm:px-6 lg:px-8 pt-24">
      <div className="section event mb-8 rounded-lg bg-gray-900 p-6 shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-primary-color">
          Our Services
        </h2>
        <ul className="text-gray-100">
          <li className="mb-4">
            <strong>Food Donations:</strong> Facilitate the donation of surplus
            food from individuals and businesses.
          </li>
          <li className="mb-4">
            <strong>Food Distribution:</strong> Distribute donated food to food
            banks, shelters, and community organizations.
          </li>
          <li className="mb-4">
            <strong>Volunteer Opportunities:</strong> Provide opportunities for
            individuals to volunteer in food collection and distribution
            efforts.
          </li>
          <li className="mb-4">
            <strong>Community Events:</strong> Organize events to raise
            awareness about food insecurity and encourage community engagement.
          </li>
          <li>
            <strong>Education and Outreach:</strong> Educate the community about
            the impact of food waste and hunger.
          </li>
        </ul>
      </div>

      <div className="section event mb-8 rounded-lg bg-gray-900 p-6 shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-primary-color">
          How It Works
        </h2>
        <p className="text-gray-100">
          Food Aid connects donors with local food banks and shelters to ensure
          that surplus food reaches those in need. We coordinate pickups,
          deliveries, and volunteer efforts to streamline the donation process
          and maximize impact.
        </p>
      </div>

      <div className="section event mb-8 rounded-lg bg-gray-900 p-6 shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-primary-color">
          Why Choose Us
        </h2>
        <p className="text-gray-100">
          With years of experience in food donation and distribution, Food Aid
          is committed to making a meaningful difference in the fight against
          hunger. Our dedicated team and network of volunteers work tirelessly
          to ensure that nutritious meals reach families and individuals facing
          food insecurity.
        </p>
      </div>
    </div>
  );
};

export default ServicesPage;
