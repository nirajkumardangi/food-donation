import { Toaster } from "react-hot-toast";
import { FirebaseProvider } from "./context/FirebaseContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import AuthForm from "./pages/AuthForm";
import Services from "./pages/Services";
import Developers from "./pages/Developers";
import UserProfile from "./pages/UserProfile";
import DonationsPage from "./pages/Donation";
import NGODetailPage from "./pages/NGODetailPage";
import NotFound from "./pages/NotFound";

import HomeRoot from "./components/layout/NavbarLayout";
import Dashboard from "./components/features/dashboard/Dashboard";
import queryClient from "./context/FirebaseContext";
import DonationForm from "./components/features/donation/DonationForm";
import ProtectedRoute from "./components/ProtectedRoute";
import DonatedMealsList from "./components/features/donation/DonatedMealsList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoot />,
    children: [
      { index: true, element: <Home /> },
      { path: "auth", element: <AuthForm /> },
      { path: "aboutUs", element: <AboutUs /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "developers", element: <Developers /> },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      { path: "user/:id", element: <UserProfile /> },
      {
        path: "donation",
        element: (
          <ProtectedRoute>
            <DonationsPage />
          </ProtectedRoute>
        ),
        children: [
          { path: "form", element: <DonationForm /> },
          { path: "meals", element: <DonatedMealsList /> },
          { path: "request/:mealsId", element: <NGODetailPage /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FirebaseProvider>
        <Toaster position="top-right" reverseOrder={false} />
        <RouterProvider router={router} />
      </FirebaseProvider>
    </QueryClientProvider>
  );
}
