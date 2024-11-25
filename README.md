# Food Donation

## Overview

The Food Donation Platform is a web application that facilitates the donation and distribution of food to those in need. It connects donors with food banks and shelters, allowing them to list, request, and manage food donations efficiently.

## Live Link

https://feedaid.netlify.app

## Features

1. **User Authentication**: Secure login and registration for users.
2. **Donation Listings**: Donors can list available food donations with details such as type, quantity, location, and expiration date.
3. **Request Management**: Food banks and shelters can browse available donations and make requests.
4. **Real-Time Notifications**: Users receive real-time updates about the status of donations and requests.
5. **Map Integration**: Displays donation locations and facilitates easier pickups using Google Maps API.
6. **Scheduling System**: Allows donors and recipients to schedule pickup times for donations.
7. **Rating and Feedback System**: Recipients can rate donations and provide feedback.
8. **User Profiles and Dashboards**: Provides user-specific profiles and dashboards for managing donations, requests, and account settings.

## Tech Stack

- **Frontend**: React, JavaScript, HTML, CSS
- **Backend**: Firebase (for authentication, real-time database, and hosting)
- **API**: Google Maps API (for map integration)

## Project Structure

```
my-food-donation-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Authentication/
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── Donation/
│   │   │   ├── DonationList.js
│   │   │   ├── DonationForm.js
│   │   │   └── DonationItem.js
│   │   ├── Request/
│   │   │   ├── RequestList.js
│   │   │   └── RequestForm.js
│   │   ├── Notification/
│   │   │   └── Notification.js
│   │   ├── Map/
│   │   │   └── Map.js
│   │   ├── Schedule/
│   │   │   └── Schedule.js
│   │   ├── Rating/
│   │   │   └── Rating.js
│   │   ├── User/
│   │   │   ├── UserProfile.js
│   │   │   └── UserDashboard.js
│   │   └── Footer.js
│   ├── services/
│   │   ├── api.js
│   │   └── auth.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   ├── index.css
│   └── ...
├── .gitignore
├── package.json
└── README.md
```

## Installation and Setup

### Prerequisites

- Node.js (LTS version recommended)
- npm (Node package manager)

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/nirajkumardangi/food-donation.git
   cd food-donation
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

4. **Open the application**:
   Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Usage

1. **User Registration**: New users can register by providing necessary details.
2. **Login**: Registered users can log in using their credentials.
3. **Add Donation**: Donors can list available food donations through a form.
4. **Browse Donations**: Food banks and shelters can browse listed donations.
5. **Request Donations**: Food banks and shelters can request specific donations.
6. **Manage Profile**: Users can view and update their profiles.
7. **Schedule Pickups**: Users can schedule pickup times for donations.

## Contribution

Contributions are welcome! Please fork the repository and submit pull requests.

### Steps to Contribute

1. **Fork the repository**
2. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes**:
   ```bash
   git commit -m 'Add some feature'
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a pull request**

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For questions or support, please reach out to niraj8825224435@gmail.com & raushankumarsaw15@gmail.com.
