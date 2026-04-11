<div align="center">

  <h1>Feed Aid - Food Donation Platform</h1>
  <p>Connecting donors with food banks and shelters to reduce food waste and help those in need.</p>
  
  <p>
    <a href="https://feedaid.netlify.app"><strong>View Live Demo »</strong></a>
  </p>

  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white" alt="Firebase" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  </p>
</div>

---

## 📖 Overview

**Feed Aid** is a modern, responsive web application designed to facilitate the donation and distribution of food to those in need. Built with React and Vite, it efficiently connects food donors (individuals, restaurants, supermarkets) with local food banks, shelters, and charitable organizations. Our goal is to streamline the donation process, minimize food waste, and ensure meals quickly reach those who need them most.

## ✨ Features

- **🔐 Secure Authentication**: Fast and reliable user registration and login powered by Firebase.
- **📦 Seamless Donation Listings**: Donors can easily share details about available food, including type, quantity, and expiration date.
- **📋 Request Management**: Food banks and shelters can browse available donations and request items directly.
- **⚡ Real-Time Updates**: Leveraging Firebase and TanStack React Query for instant, optimistic UI updates and data synchronization.
- **📍 Map Integration**: Visualize donation locations to find the nearest drop-off or pick-up points.
- **🗓 Scheduling System**: Coordinate pick-up or drop-off times directly within the platform.
- **✨ Premium UI/UX**: Built with Tailwind CSS and enhanced with smooth animations via Framer Motion for a premium, mobile-first experience.
- **🔔 Toast Notifications**: Context-aware success and error handling alerts using React Hot Toast.

## 🚀 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, Material Tailwind, Headless UI
- **Icons**: Heroicons, FontAwesome
- **Animations**: Framer Motion
- **State Management & Data Fetching**: TanStack React Query
- **Routing**: React Router DOM v6
- **Backend / Database / Auth**: Firebase (Authentication, Firestore / Realtime Database)

## 📂 Project Structure

```bash
food-donation/
├── public/                 # Static assets (images, icons)
├── src/
│   ├── components/         # Reusable UI components (Auth, Maps, Layout elements)
│   ├── pages/              # Route-based page components
│   ├── services/           # API and Firebase integration logic
│   ├── App.jsx             # Main application component and routing
│   ├── index.css           # Global Tailwind CSS directives
│   └── main.jsx            # Application entry point
├── .env.local              # Environment variables (not tracked in Git)
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite builder configuration
└── package.json            # Project dependencies and npm scripts
```

## 🛠 Installation & Setup

### Prerequisites

Ensure you have the following installed on your local machine:

- **Node.js** (LTS version recommended, v18.x+)
- **npm** or **yarn**

### Quick Start

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nirajkumardangi/food-donation.git
   cd food-donation
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory and add your Firebase configuration variables. (Refer to your Firebase Console for details):

   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Start the development server:**
   Because the project uses Vite, simply run:

   ```bash
   npm run dev
   ```

5. **Open the application:**
   Vite will provide a local URL (typically `http://localhost:5173`). Click the link or open it in your browser to view the application locally.

## 📝 Usage Guide

1. **Create an Account:** Register as a new user, selecting your role as a donor or a food bank/organization.
2. **Add a Donation:** Donors can quickly add items through the streamlined submission form.
3. **Browse & Request:** Organizations can search available items in their local area and submit a request.
4. **Coordinate & Track:** Utilize the personalized user dashboard to manage requests, review statuses, and schedule pickups smoothly.

## 🤝 Contributing

Contributions are heavily welcomed and encouraged to help Feed Aid better serve communities!

1. **Fork the Project**
2. **Create your Feature Branch**: `git checkout -b feature/AmazingFeature`
3. **Commit your Changes**: `git commit -m 'Add some AmazingFeature'`
4. **Push to the Branch**: `git push origin feature/AmazingFeature`
5. **Open a Pull Request**

Please ensure your code aligns with standard linting rules (`npm run lint`) and includes concise documentation where necessary.

## 📜 License

This project is distributed under the MIT License. See the `LICENSE` file for more details.

## 📫 Contact

For technical questions, support, or collaboration opportunities, please reach out to the principal developers:

- **Niraj Kumar Dangi**: niraj8825224435@gmail.com
- **Raushan Kumar**: raushankumarsaw15@gmail.com
