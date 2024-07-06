import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoot from "./Ui/HomeRoot";
import AuthForm from "./pages/AuthForm";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import Donation from "./pages/Donation";
import { QueryClientProvider } from "@tanstack/react-query";
// import { QueryClient } from "@tanstack/react-query";
import queryClient from "./utility/Storage";
import { FirebaseProvider } from "./utility/Storage";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "auth", element: <AuthForm /> },
      { path: "/aboutUs", element: <AboutUs /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
      { path: "/events", element: <Events /> },
      { path: "/blogs", element: <Blog /> },
      { path: "/donations", element: <Donation /> },
    ],
  },
]);

//  const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FirebaseProvider>
        <RouterProvider router={router} />;
      </FirebaseProvider>
    </QueryClientProvider>
  );
}
