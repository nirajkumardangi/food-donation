import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { useFirebase } from "../../../context/FirebaseContext";
import ErrorPage from "../../ui/Error";
import Cards from "../../ui/Cards";
import MealsSkeleton from "../../ui/MealsSkeleton";

const DonationHistory = () => {
  const params = useParams();
  const navigate = useNavigate();
  const firebase = useFirebase();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["user_history_meals", firebase?.user?.uid],
    queryFn: () => firebase.getMealsByUserId(),
    enabled: !!firebase?.user,
  });

  let content = "";

  if (isLoading) {
    content = (
      <div className="container mx-auto mt-2">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <li key={i} className="flex justify-center flex-grow">
              <MealsSkeleton />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  if (isError) {
    content = <ErrorPage title={error?.title || "Error"} message={error?.message || "Failed to load history"} />;
  }

  if (data) {
    if (data.empty || data.docs.length === 0) {
      content = (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
          <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10 shadow-xl">
            <span className="text-4xl">🎁</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">No Donations Yet</h3>
          <p className="text-gray-400 max-w-md mb-8">
            Your heart is ready to give, but you haven't made your first donation. 
            Start sharing your love by listing extra food today.
          </p>
          <button 
             onClick={() => navigate("/donation/form")}
             className="px-8 py-3 bg-gradient-to-r from-primary-color to-secondary-color text-white font-bold rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(247,79,34,0.3)]"
          >
            Make Your First Donation
          </button>
        </div>
      );
    } else {
      content = (
        <div className="container mx-auto mt-2">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.docs.map((meal, index) => (
              <li key={index} className="flex items-center justify-center">
                <Cards id={meal.id} {...meal.data()} />
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

  return <div className="min-h-[400px] flex flex-col">{content}</div>;
};

export default DonationHistory;
