import Cards from "../../ui/Cards";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../../../context/FirebaseContext";
import Loader from "../../ui/Loader";
import ErrorPage from "../../ui/Error";

export default function CardDefault() {
  const navigate = useNavigate();
  let content = "please wait ";

  const firebase = useFirebase();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["meals"],
    queryFn: firebase.getAllDonatedMeals,
  });

  if (isPending) {
    content = <Loader />;
  }
  if (isError) {
    content = <ErrorPage title={error.title} message={error.message} />;
  }

  if (data) {
    if (data.docs.length === 0) {
      return (
        <div className="container mx-auto px-4 py-32 flex flex-col items-center justify-center text-center">
          <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/10 shadow-2xl relative">
            <span className="text-5xl">🍲</span>
            <div className="absolute -inset-2 bg-primary-color/20 blur-2xl rounded-full"></div>
          </div>
          <h2 className="text-3xl font-display font-bold text-white mb-4">No Active Listings</h2>
          <p className="text-gray-400 max-w-lg mb-10 text-lg leading-relaxed">
            There are currently no active meals available for donation in your area. 
            Be the first to make a difference and list your extra food to help those in need!
          </p>
          <button 
            onClick={() => navigate("/donation/form")}
            className="px-10 py-4 bg-gradient-to-r from-primary-color to-secondary-color text-white font-extrabold rounded-2xl transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(247,79,34,0.3)]"
          >
            Start Donating Now
          </button>
        </div>
      );
    }

    content = (
      <div className="container mx-auto p-4 mt-14">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.docs.map((meal, index) => (
            <li key={index} className="flex justify-center">
              <Cards id={meal.id} {...meal.data()} meals={meal} />
            </li>
          ))}
        </ul>
      </div>
    );

    return <>{content}</>;
  }
}
