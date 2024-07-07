import { Link, Outlet } from "react-router-dom";

const DonationsPage = () => {
  return ( 
    <div className="page">


      <div className="section event">
        <h2>Donate Food</h2>
        <p>
          Your food donations can make a significant impact in the lives of
          individuals and families facing food insecurity. Whether you're
          donating surplus produce from your garden or non-perishable items from
          your pantry, every donation counts.
        </p>
        <Link to="/DonateForm" className="btn donate-food">
          Donate Food
        </Link>
      </div>

      <div className="section event">
        <h2>Donate Money</h2>
        <p>
          Monetary donations help us cover operational costs, transport food to
          distribution centers, and expand our outreach efforts. Your financial
          support ensures that we can continue our mission to fight hunger.
        </p>
        <Link to="/DonateForm" className="btn donate-food">
          Donate Money
        </Link>
      </div>

      <div className="section event">
        <h2>Volunteer Your Time</h2>
        <p>
          Volunteers are essential to our operations. Whether you can help
          collect donations, assist in food distribution, or participate in
          community events, your time and skills are invaluable to our cause.
        </p>
        <a href="#" className="btn volunteer">
          Volunteer Now
        </a>
      </div>
    </div>
  );
};

export default DonationsPage;
