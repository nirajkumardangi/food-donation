import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoot from "./Ui/HomeRoot";
import AuthForm from "./pages/AuthForm";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Developers from "./pages/Developers";
import { QueryClientProvider } from "@tanstack/react-query";
import { FirebaseProvider } from "./utility/Storage";
import queryClient from "./utility/Storage";
import DonatedMealsList from "./components/Donation/DonatedMealsList";
import DonationForm from "./components/Donation/DonationForm";
import DonationsPage from "./pages/Donation";
import Dashboard from './components/Dashboard/Dashboard'
import UserProfile from "./pages/userProfile";
import NGODetailPage from "./pages/NGODetailPage";
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
      { path: 'dashboard', element: <Dashboard /> },
      { path: "user/:id", element: <UserProfile /> },
     
    
      
      {
        path: "donation",
        element: <DonationsPage />,
        children: [
          { path: "form", element: <DonationForm /> },
          { path: "meals", element: <DonatedMealsList /> },
          {path:'request/:mealsId' , element:<NGODetailPage/>},
          
          

        ],
      },
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
