const EventsPage = () => {
  return (
    <div className="page">
      <div className="section">
        <h2>Upcoming Events</h2>
        <div className="event">
          <h3>Food Drive</h3>
          <p>
            Join us for our annual Food Drive! Donate non-perishable items to
            support families in need.
          </p>
          <p>
            <strong>Date:</strong> October 15, 2024
          </p>
          <p>
            <strong>Location:</strong> City Park, Main Street
          </p>
          <a href="#" className="btn learn-more">
            Learn More
          </a>
        </div>

        <div className="event">
          <h3>Community Kitchen</h3>
          <p>
            Volunteer at our Community Kitchen event. Help prepare meals for
            homeless shelters.
          </p>
          <p>
            <strong>Date:</strong> November 5, 2024
          </p>
          <p>
            <strong>Location:</strong> Food Aid Center, Downtown
          </p>
          <a href="#" className="btn learn-more">
            Learn More
          </a>
        </div>
      </div>

      <div className="section">
        <h2>Past Events</h2>
        <div className="event">
          <h3>Summer Food Fest</h3>
          <p>
            Thank you for joining us at our Summer Food Fest! Together, we
            raised awareness about hunger in our community.
          </p>
          <p>
            <strong>Date:</strong> August 20, 2024
          </p>
          <p>
            <strong>Location:</strong> Riverside Park
          </p>
        </div>

        <div className="event">
          <h3>Holiday Meal Drive</h3>
          <p>
            Our Holiday Meal Drive was a success! We distributed meals to
            families during the holiday season.
          </p>
          <p>
            <strong>Date:</strong> December 10, 2023
          </p>
          <p>
            <strong>Location:</strong> Various locations
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
