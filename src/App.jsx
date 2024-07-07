import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoot from "./Ui/HomeRoot";
import AuthForm from "./pages/AuthForm";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Donation from "./pages/Donation";
import { QueryClientProvider } from "@tanstack/react-query";
import { FirebaseProvider } from "./utility/Storage";
import queryClient from "./utility/Storage";
import FoodListingForm from "./components/Donation/DonationForm";

import "./App.css";
import DonationForm from "./components/Donation/DonationForm";

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
      {
        path: "donations",
        element: <Donation />,
      },
      { path: "DonateForm", element: <FoodListingForm /> },
      { path: "donate-now", element: <DonationForm /> },
    ],
  },
]);

//  const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FirebaseProvider>
        <RouterProvider router={router} />
      </FirebaseProvider>
    </QueryClientProvider>
  );
}
